const handleAddGarden = require("./handler-functions/handleAddGarden");
const handleAddShopping = require("./handler-functions/handleAddShopping");
const handleBoughtChange = require("./handler-functions/handleBoughtChange");
const handleDeletePlants = require("./handler-functions/handleDeletePlants");
const handleDeleteShoppingListItem = require("./handler-functions/handleDeleteShoppingListItem");
const handleGetGarden = require("./handler-functions/handleGetGarden");
const handleGetGardensForUser = require("./handler-functions/handleGetGardensForUser");
const handleGetHarvestDates = require("./handler-functions/handleGetHarvestDates");
const handleGetIdAndGardensForUser = require("./handler-functions/handleGetIdAndGardensForUser");
const handleGetPlantByID = require("./handler-functions/handleGetPlantByID");
const handleGetShopping = require("./handler-functions/handleGetShopping");
const handleGetUser = require("./handler-functions/handleGetUser");
const handleHarvest = require("./handler-functions/handleHarvest");
const handleLogin = require("./handler-functions/handleLogin");
const handleLogout = require("./handler-functions/handleLogout");
const handleNewPlant = require("./handler-functions/handleNewPlant");
const handlePlanted = require("./handler-functions/handlePlanted");
const handleQuantityChange = require("./handler-functions/handleQuantityChange");
const handleRegisterUser = require("./handler-functions/handleRegisterUser");
const handleUpdateGarden = require("./handler-functions/handleUpdateGarden");
const handleValidateSession = require("./handler-functions/handleValidateSession");
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

// app.get("/plants", handleGetPlants);
// app.get("/plants/:id", handleGetPlantByID);
// app.get("/garden/:id", handleGetGarden);
// app.get("/shopping-list", handleGetShopping);
// app.get("/gardens/:id", handleGetGardensForUser);
// app.get("/harvest-dates/:user", handleGetHarvestDates);
// app.get("/get-user/:session", handleGetUser);
// app.get("/allGardens/:id", handleGetGardensForUser);
// app.post("/allGardens", handleGetIdAndGardensForUser);
// app.post("/validate-session", handleValidateSession);
// app.post("/sign-up", handleRegisterUser);
// app.post("/login", handleLogin);
app.post("/new-garden", handleAddGarden.handleAddGarden);
// app.post("/new-plant", handleNewPlant);
// app.post("/shopping-list", handleAddShopping);
// app.patch("/update-plant-status", handlePlanted);
// app.patch("/harvest", handleHarvest);
// app.patch("/update-quantity", handleQuantityChange);
// app.patch("/update-bought", handleBoughtChange);
// app.put("/garden/:id", handleUpdateGarden);
// app.delete("/logout", handleLogout);
// app.delete("/:id/", handleDeletePlants);
// app.delete("/shopping-list/:id", handleDeleteShoppingListItem);

app.listen(PORT, () => console.log("listening on port " + PORT));

// This comment is to restart the server after a bad request1
