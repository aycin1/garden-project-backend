import handleAddGarden from "./handler-functions/handleAddGarden";
import handleAddShopping from "./handler-functions/handleAddShopping";
import handleBoughtChange from "./handler-functions/handleBoughtChange";
import handleDeletePlants from "./handler-functions/handleDeletePlants";
import handleDeleteShoppingListItem from "./handler-functions/handleDeleteShoppingListItem";
import handleGetGarden from "./handler-functions/handleGetGarden";
import handleGetGardensForUser from "./handler-functions/handleGetGardensForUser";
import handleGetHarvestDates from "./handler-functions/handleGetHarvestDates";
import handleGetIdAndGardensForUser from "./handler-functions/handleGetIdAndGardensForUser";
import handleGetPlantByID from "./handler-functions/handleGetPlantByID";
import handleGetShopping from "./handler-functions/handleGetShopping";
import handleGetUser from "./handler-functions/handleGetUser";
import handleHarvest from "./handler-functions/handleHarvest";
import handleLogin from "./handler-functions/handleLogin";
import handleLogout from "./handler-functions/handleLogout";
import handleNewPlant from "./handler-functions/handleNewPlant";
import handlePlanted from "./handler-functions/handlePlanted";
import handleQuantityChange from "./handler-functions/handleQuantityChange";
import handleRegisterUser from "./handler-functions/handleRegisterUser";
import handleUpdateGarden from "./handler-functions/handleUpdateGarden";
import handleValidateSession from "./handler-functions/handleValidateSession";
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

const corsSettings = {
  origin: ["http://localhost:3000", "https://garden-project-website.sigmalabs.co.uk"],
  allowedHeaders: ["Access-Control-Allow-Origin", "Authorization", "Content-Type", "Accept", "Origin", "User-Agent"],
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
app.get("/gardens/:id", handleGetGardensForUser);
app.get("/harvest-dates/:user", handleGetHarvestDates);
app.get("/get-user/:session", handleGetUser);
app.get("/allGardens/:id", handleGetGardensForUser);
app.post("/allGardens", handleGetIdAndGardensForUser);
app.post("/validate-session", handleValidateSession);
app.post("/sign-up", handleRegisterUser);
app.post("/login", handleLogin);
app.post("/new-garden", handleAddGarden);
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

app.listen(PORT, () => console.log("listening on port " + PORT));

// This comment is to restart the server after a bad request1
