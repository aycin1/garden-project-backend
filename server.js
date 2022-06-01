const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { Client } = require("pg");
const app = express();
const PORT = process.env.PORT || 8080;

const connection =
  "postgres://ykwcpoaf:6xDkZhVpuLgvSLqxW-wJSfs_mkVQeyqt@surus.db.elephantsql.com/ykwcpoaf";
const client = new Client(connection);
client.connect();

app.use(cookieParser());
app.use(cors());

app.get("/plants", handleGetPlants);
app.get("/garden/:id", handleGetGarden);
app.delete("/garden/:id/:plantId", handleDeletePlants);

app.listen(PORT, () => console.log("listening on port " + PORT));

async function handleGetPlants(req, res) {
  const queryParams = req.url.split("?")[1];
  const queryObj = new URLSearchParams(queryParams);

  let name,
    plantClassification,
    sowingSeason,
    harvestingSeason,
    timeFromSowToHarvest,
    spacing;
  if (queryObj.has("name")) name = queryObj.get("name");
  if (queryObj.has("plantClassification"))
    plantClassification = queryObj.get("plantClassification");
  if (queryObj.has("sowingSeason")) sowingSeason = queryObj.get("sowingSeason");
  if (queryObj.has("harvestingSeason"))
    harvestingSeason = queryObj.get("harvestingSeason");
  if (queryObj.has("timeFromSowToHarvest"))
    timeFromSowToHarvest = queryObj.get("timeFromSowToHarvest");
  if (queryObj.has("spacing")) spacing = queryObj.get("spacing");

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
  const query = `SELECT name, planted_at, harvested, estimated_harvest_date, quantity FROM plant_info JOIN plants_in_garden ON plant_info.id = plants_in_garden.plant_info_id JOIN gardens ON plants_in_garden.garden_id = gardens.id WHERE gardens.id = $1`;
  const garden = (await client.query(query, [id])).rows;
  res.json(garden);
}

async function handleDeletePlants(req, res) {
  const id = req.params.id;
  const plantId = req.params.plantId;
  const query = `DELETE FROM plants_in_garden WHERE garden_id = $1 AND id = $2`;
  await client.query(query, [id, plantId]);
  res.status(200).json({ response: "Deleted successfully" });
}
