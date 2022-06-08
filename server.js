const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const hasher = require("pbkdf2-password-hash");
const uuid = require("uuid");
const { Client } = require("pg");
const app = express();
const PORT = process.env.PORT || 8080;

const connection =
  "postgres://ykwcpoaf:6xDkZhVpuLgvSLqxW-wJSfs_mkVQeyqt@surus.db.elephantsql.com/ykwcpoaf";
const client = new Client(connection);
client.connect();

const corsSettings = {
  origin: [
    "http://localhost:3000",
    "https://garden-project-website.sigmalabs.co.uk",
  ],
  allowedHeaders: [
    "Access-Control-Allow-Origin",
    "Authorization",
    "Content-Type",
    "Accept",
    "Origin",
    "User-Agent",
  ],
};

app.use(cookieParser());
app.use(cors(corsSettings));
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/plants", handleGetPlants);
app.get("/plants/:id", handleGetPlantByID);
app.get("/garden/:id", handleGetGarden);
app.get("/shopping-list", handleGetShopping);
app.get("/allGardens/:id", handleGetGardensForUser);
app.post("/allGardens", handleGetIdAndGardensForUser);
app.post("/validate-session", handleValidateSession);
app.post("/sign-up", handleRegisteringUser);
app.post("/login", handleLogin);
app.post("/new-plant", handleNewPlant);
app.post("/shopping-list", handleAddShopping);
app.patch("/update-plant-status", handlePlanted);
app.patch("/harvest", handleHarvest);
app.patch("/update-quantity", handleQuantityChange);
app.patch("/update-bought", handleBoughtChange);
app.put("/garden/:id", handleUpdateGarden);
app.delete("/logout", handleLogout);
app.delete("/:id/", handleDeletePlants);
app.delete("/shopping-list/:id", handleDeleteShoppingListItem);
app.post("/new-garden", handleAddGarden);

app.listen(PORT, () => console.log("listening on port " + PORT));

async function handleAddGarden(req, res) {
  const { location, garden_name, sessionID } = req.body;
  const id = (
    await client.query(`SELECT user_id FROM sessions WHERE uuid = $1`, [
      sessionID,
    ])
  ).rows[0]["user_id"];
  console.log(id);
  await client.query(
    `INSERT INTO gardens (user_id, garden_name, location)
  VALUES ($1, $2, $3)`,
    [id, garden_name, location]
  );
  res.status(200).json({ response: "Added" });
}

async function handleGetIdAndGardensForUser(req, res) {
  const { sessionID } = req.body;

  const response = (
    await client.query(
      `SELECT * FROM gardens JOIN sessions ON sessions.user_id = gardens.user_id WHERE uuid = $1`,
      [sessionID]
    )
  ).rows;

  res.status(200).json(response);
}

async function handleValidateSession(req, res) {
  const { sessionID } = req.body;
  const session = (
    await client.query(`SELECT * FROM sessions WHERE uuid = $1`, [sessionID])
  ).rows;

  let isValid = Boolean(session.length);

  res.status(200).json({ response: isValid });
}

async function hashPassword(password) {
  //   const salt = "we_love_gardens";
  const hashedPassword = await hasher.hash(password); //can add salt later if we have time to/want to
  return hashedPassword;
}

async function handleRegisteringUser(req, res) {
  const { firstName, lastName, email, password, passwordConfirmation } =
    await req.body;

  if (firstName && lastName && email && password && passwordConfirmation) {
    if (password === passwordConfirmation) {
      const hashedPassword = await hashPassword(password);

      try {
        await client.query(
          `INSERT INTO users (first_name, last_name, email, hashed_password, created_at) VALUES ($1, $2, $3, $4, NOW())`,
          [firstName, lastName, email, hashedPassword]
        );

        await res.status(200).json({ response: "Account created!" });
      } catch (error) {
        await res
          .status(400)
          .json({ error: "An account already exists for this email!" });
      }
    } else {
      await res
        .status(400)
        .json({ error: "Passwords do not match, please try again" });
    }
  } else {
    await res.status(400).json({ error: "Please provide all data required!" });
  }
}

async function handlePlanted(req, res) {
  const { plantID, quantity, date } = req.body;

  const harvest_instructions = (
    await client.query(
      `SELECT harvest_instructions FROM plants_in_garden
  JOIN plant_info
  ON plants_in_garden.plant_info_id = plant_info.id
  WHERE plants_in_garden.id = $1`,
      [plantID]
    )
  ).rows[0].harvest_instructions;

  let avgWeeks;
  if (harvest_instructions.includes("weeks")) {
    weeksStr = harvest_instructions.split("weeks")[0];
    if (weeksStr.includes("-")) {
      const weeks = weeksStr
        .split("-")
        .map((str) => Number(str.replace(/[^0-9]/g, "")));
      const minWeek = weeks[0];
      const maxWeek = weeks[1];
      avgWeeks = (minWeek + maxWeek) / 2;
    } else avgWeeks = Number(harvest_instructions.replace(/[^0-9]/g, ""));
  }

  // add some validation for the date
  const planted_at = new Date(date);
  const estimated_harvest_date = new Date(date);
  estimated_harvest_date.setDate(
    estimated_harvest_date.getDate() + avgWeeks * 7
  );

  client.query(
    `UPDATE plants_in_garden SET quantity = $1, planted_at = $2, estimated_harvest_date = $3 WHERE id = $4`,
    [quantity, planted_at, estimated_harvest_date, plantID]
  );
  res.status(200).json({ response: "Planted!" });
}

async function handleBoughtChange(req, res) {
  const { bought, id } = req.body;

  client.query(`UPDATE shopping_list SET bought = $1 WHERE id = $2`, [
    bought,
    id,
  ]);
  res.status(200).json({ response: "Bought changed!" });
}

async function handleGetPlantByID(req, res) {
  const id = req.params.id;
  const query = `SELECT name FROM plant_info WHERE id = $1`;
  const nameOfPlant = (await client.query(query, [id])).rows;
  res.json(nameOfPlant);
}

async function handleQuantityChange(req, res) {
  const { quantity, id } = req.body;

  client.query(`UPDATE shopping_list SET quantity = $1 WHERE id = $2`, [
    quantity,
    id,
  ]);
  res.status(200).json({ response: "Quantity changed!" });
}

async function handleGetShopping(req, res) {
  const response = (
    await client.query(`SELECT * FROM shopping_list ORDER BY plant_info_id`)
  ).rows;

  res.status(200).json(response);
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = (
    await client.query(`SELECT * FROM users WHERE email = $1`, [email])
  ).rows[0];

  if (user) {
    const passwordIsValid = hasher.compare(password, user.hashed_password);
    if (await passwordIsValid) {
      const sessionID = uuid.v4();

      client.query(
        `INSERT INTO sessions (uuid, user_id, created_at)
    VALUES ($1, $2, NOW())`,
        [sessionID, user.id]
      );

      res.json({ session: sessionID });
    } else res.json({ response: "Username or password is incorrect." });
  } else res.json({ response: "Username or password is incorrect." });
}

async function handleGetGardensForUser(req, res) {
  const id = req.params.id;
  if (!id) return res.status(400).json({ error: "No id found" });
  const query = `SELECT id, location, garden_name FROM gardens WHERE user_id = $1;`;
  const gardens = (await client.query(query, [id])).rows;
  res.json(gardens);
}

async function handleAddShopping(req, res) {
  const { plantInfoID, gardenID, quantity } = req.body;

  client.query(
    `INSERT INTO shopping_list (plant_info_id, garden_id, quantity)
  VALUES ($1, $2, $3)`,
    [plantInfoID, gardenID, quantity]
  );
  res.status(200).json({ response: "Added" });
}

async function handleGetPlants(req, res) {
  const queryParams = req.url.split("?")[1];
  const queryObj = new URLSearchParams(queryParams);

  let tempArr = [];
  let parameterNames = ["name", "classification", "sowingSeason"];

  for (let i = 0; i < parameterNames.length; i++) {
    const parameterName = parameterNames[i];
    const parameterValue = queryObj.has(parameterName)
      ? queryObj.get(parameterName)
      : undefined;
    tempArr.push(parameterValue);
  }

  let [name, classification, sowingSeason] = tempArr;

  const replacementFields = ["$1", "$2", "$3"];
  const replacementValues = [];
  const totalPossibleFields = replacementFields.length;

  let dbQuery = "SELECT * FROM plant_info";
  if (name) {
    dbQuery += ` WHERE (name ILIKE '%' || ${replacementFields.shift()} || '%')`;
    replacementValues.push(name);
  }
  if (classification) {
    if (replacementFields.length < totalPossibleFields) dbQuery += ` AND`;
    else dbQuery += ` WHERE`;
    dbQuery += ` classification ILIKE '%' || ${replacementFields.shift()} || '%'`;
    replacementValues.push(classification);
  }
  if (sowingSeason) {
    if (replacementFields.length < totalPossibleFields) dbQuery += ` AND`;
    else dbQuery += ` WHERE`;
    dbQuery += ` (sowingTimes ILIKE '%' || ${replacementFields.shift()} || '%')`;
    replacementValues.push(sowingSeason);
  }

  dbQuery += ` ORDER BY name`;
  const results = (await client.query(dbQuery, replacementValues)).rows;

  // "timeFromSowToHarvest", "spacing"
  let filteredResults = [];

  if (queryObj.has("timeUntilHarvest")) {
    results.forEach((plant) => {
      let queriedTime = queryObj.get("timeUntilHarvest");

      const weeksQueriedAsMinimum = queriedTime.includes("g");
      if (weeksQueriedAsMinimum) queriedTime = queriedTime.replace("g", "");
      const DesiredWeeks = Number(queriedTime);

      let instructions = plant.harvest_instructions;

      if (instructions.includes("weeks"))
        instructions = instructions.split("weeks")[0];
      if (instructions.includes("-")) instructions = instructions.split("-")[0];
      let maxHarvestWeeks = Number(instructions.replace(/[^0-9]/g, ""));

      if (plant.harvest_instructions.includes("days")) maxHarvestWeeks /= 7;
      if (plant.harvest_instructions.includes("years")) maxHarvestWeeks *= 52;

      if (!weeksQueriedAsMinimum && maxHarvestWeeks < DesiredWeeks)
        filteredResults.push(plant);
      if (weeksQueriedAsMinimum && maxHarvestWeeks > DesiredWeeks)
        filteredResults.push(plant);
    });
  }

  if (queryObj.has("spacing")) {
    resultsToFilter = queryObj.has("timeUntilHarvest")
      ? filteredResults
      : results; // So that results are nor reintroduced
    resultsToFilter.forEach((plant) => {
      let queriedSpacing = queryObj.get("spacing");

      const spacingQueriedAsMinimum = queriedSpacing.includes("g");
      if (spacingQueriedAsMinimum)
        queriedSpacing = queriedSpacing.replace("g", "");
      const DesiredSpacing = Number(queriedSpacing);

      let instructions = plant.space_instructions;
      if (instructions.includes("-")) instructions = instructions.split("-")[0];

      let maxSpacing = instructions.replace(/[^0-9]/g, "");
      if (instructions.includes("Metre")) maxSpacing *= 39;

      if (!spacingQueriedAsMinimum && maxSpacing <= DesiredSpacing)
        filteredResults.push(plant);
      if (spacingQueriedAsMinimum && maxSpacing >= DesiredSpacing)
        filteredResults.push(plant);
    });
  }

  if (!queryObj.has("timeUntilHarvest") && !queryObj.has("spacing"))
    filteredResults = results;

  res.json(filteredResults);
}

async function handleGetGarden(req, res) {
  const id = req.params.id;
  const query = `SELECT plants_in_garden.id, plant_info_id, name, planted_at, harvested, estimated_harvest_date, quantity, location FROM plant_info JOIN plants_in_garden ON plant_info.id = plants_in_garden.plant_info_id JOIN gardens ON plants_in_garden.garden_id = gardens.id WHERE gardens.id = $1 ORDER BY plant_info.id`;
  const garden = (await client.query(query, [id])).rows;
  res.json(garden);
}

async function handleLogout(req, res) {
  const { sessionID } = req.body;
  if (!sessionID) res.status(400).json({ error: "No Session Data Found" });
  else {
    client.query(`DELETE FROM sessions WHERE uuid = $1`, [sessionID]);
    res.status(200).json({ response: "Session Deleted" });
  }
}

async function handleDeletePlants(req, res) {
  const id = req.params.id;
  const query = `DELETE FROM plants_in_garden WHERE id = $1`;
  await client.query(query, [id]);
  res.status(200).json({ response: "Deleted successfully" });
}

async function handleNewPlant(req, res) {
  const { plantInfoID, gardenID } = req.body;

  try {
    client.query(
      `INSERT INTO plants_in_garden
  (plant_info_id, garden_id)
  VALUES ($1, $2)`,
      [plantInfoID, gardenID]
    );
  } catch (e) {
    return res.status(500).json({ error: e });
  }

  res.status(200).json("Plant Added!");
}

async function handleHarvest(req, res) {
  const { plantID } = req.body;
  await client.query(
    `UPDATE plants_in_garden SET harvested = true WHERE id = $1`,
    [plantID]
  );

  res.status(200).json("Harvest registered!");
}

async function handleUpdateGarden(req, res) {
  const id = req.params.id;
  const { name, location } = req.body;
  try {
    client.query(
      `UPDATE gardens SET garden_name = $1, location = $2 WHERE id = $3`,
      [name, location, id]
    );
  } catch (e) {
    return res.status(500).json({ error: e });
  }
  res.status(200).json("Garden updated!");
}

async function handleDeleteShoppingListItem(req, res) {
  const id = req.params.id;
  const query = `DELETE FROM shopping_list WHERE id = $1`;
  await client.query(query, [id]);
  res.status(200).json({ response: "Deleted successfully" });
}

// This comment is to restart the server after a bad request1
