const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { Client } = require("pg");
const app = express();
const PORT = process.env.PORT || 8080;

const connection = "postgres://ykwcpoaf:6xDkZhVpuLgvSLqxW-wJSfs_mkVQeyqt@surus.db.elephantsql.com/ykwcpoaf";
const client = new Client(connection);
client.connect();

app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

app.get("/plants", handleGetPlants);
app.get("/garden/:id", handleGetGarden);
app.post("/new-plant", handleNewPlant);
app.put("/update-plant-status", handlePlanted);
app.delete("/:id/", handleDeletePlants);

app.listen(PORT, () => console.log("listening on port " + PORT));

async function handlePlanted(req, res) {
  const plantID = req.body.plant_id;
  const quantity = req.body.quantity;
  const date = req.body.date;

  client.query(`UPDATE plants_in_garden SET quantity = $1, planted_at = $2 WHERE id = $3`, [quantity, date, plantID]);
  res.status(200).json({ response: "Planted!" });
}

async function handleGetPlants(req, res) {
  const queryParams = req.url.split("?")[1];
  const queryObj = new URLSearchParams(queryParams);

  let tempArr = [];
  let parameterNames = [
    "name",
    "plantClassification",
    "sowingSeason",
    "harvestingSeason",
    "timeFromSowToHarvest",
    "spacing",
  ];

  for (let i = 0; i < parameterNames.length; i++) {
    const parameterName = parameterNames[i];
    const parameterValue = queryObj.has(parameterName) ? queryObj.get(parameterName) : undefined;
    tempArr.push(parameterValue);
  }

  let [name, plantClassification, sowingSeason, harvestingSeason, timeFromSowToHarvest, spacing] = tempArr;

  const replacementFields = ["$1", "$2", "$3", "$4", "$5", "$6"];
  const replacementValues = [];

  let dbQuery = "SELECT * FROM plant_info";
  if (name) {
    dbQuery += ` WHERE (name LIKE '%' || ${replacementFields.shift()} || '%')`;
    replacementValues.push(name);
  }

  const results = (await client.query(dbQuery, replacementValues)).rows;

  res.json(results);
}

async function handleGetGarden(req, res) {
  const id = req.params.id;
  const query = `SELECT plants_in_garden.id, name, planted_at, harvested, estimated_harvest_date, quantity FROM plant_info JOIN plants_in_garden ON plant_info.id = plants_in_garden.plant_info_id JOIN gardens ON plants_in_garden.garden_id = gardens.id WHERE gardens.id = $1`;
  const garden = (await client.query(query, [id])).rows;
  res.json(garden);
}

async function handleDeletePlants(req, res) {
  const id = req.params.id;
  const query = `DELETE FROM plants_in_garden WHERE id = $1`;
  await client.query(query, [id]);
  res.status(200).json({ response: "Deleted successfully" });
}

async function handleNewPlant(req, res) {
  const garden_id = req.body.garden_id;
  const quantity = req.body.quantity;
  const plant_info_id = req.body.plant_info_id;

  try {
    client.query(
      `INSERT INTO plants_in_garden
  (plant_info_id, garden_id, quantity)
  VALUES ($1, $2, $3)`,
      [plant_info_id, garden_id, quantity]
    );
  } catch (e) {
    return res.status(500).json({ error: e });
  }

  res.status(200).json("Plant Added!");
}
