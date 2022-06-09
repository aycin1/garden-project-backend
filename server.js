const handleAddGarden = require("./handler-functions/handleAddGarden");
const handleAddShopping = require("./handler-functions/handleAddShopping");
const handleBoughtChange = require("./handler-functions/handleBoughtChange");
const handleDeletePlants = require("./handler-functions/handleDeletePlants");
const handleDeleteShoppingListItem = require("./handler-functions/handleDeleteShoppingListItem");
const handleGetGarden = require("./handler-functions/handleGetGarden");
const handleGetGardensForUser = require("./handler-functions/handleGetGardensForUser");
const handleGetHarvestDates = require("./handler-functions/handleGetHarvestDates");
const handleGetIdAndGardensForUser = require("./handler-functions/handleGetIdAndGardensForUser");
const handleGetPlants = require("./handler-functions/handleGetPlants");
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
const uuid = require("uuid");
const hasher = require("pbkdf2-password-hash");
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

app.get("/plants", (req, res) =>
  handleGetPlants.handleGetPlants(req, res, client)
);
app.get("/plants/:id", (req, res) =>
  handleGetPlantByID.handleGetPlantByID(req, res, client)
);
app.get("/garden/:id", (req, res) =>
  handleGetGarden.handleGetGarden(req, res, client)
);
app.get("/shopping-list", (req, res) =>
  handleGetShopping.handleGetShopping(req, res, client)
);
app.get("/gardens/:id", (req, res) =>
  handleGetGardensForUser.handleGetGardensForUser(req, res, client)
);
app.get("/harvest-dates/:user", (req, res) =>
  handleGetHarvestDates.handleGetHarvestDates(req, res, client)
);
app.get("/get-user/:session", (req, res) =>
  handleGetUser.handleGetUser(req, res, client)
);
app.get("/allGardens/:id", (req, res) =>
  handleGetGardensForUser.handleGetGardensForUser(req, res, client)
);
app.post("/allGardens", (req, res) =>
  handleGetIdAndGardensForUser.handleGetIdAndGardensForUser(req, res, client)
);
app.post("/validate-session", (req, res) =>
  handleValidateSession.handleValidateSession(req, res, client)
);
app.post("/sign-up", (req, res) =>
  handleRegisterUser.handleRegisterUser(req, res, client, hasher)
);
app.post("/login", (req, res) =>
  handleLogin.handleLogin(req, res, client, uuid, hasher)
);
app.post("/new-garden", (req, res) =>
  handleAddGarden.handleAddGarden(req, res, client)
);
app.post("/new-plant", (req, res) =>
  handleNewPlant.handleNewPlant(req, res, client)
);
app.post("/shopping-list", (req, res) =>
  handleAddShopping.handleAddShopping(req, res, client)
);
app.patch("/update-plant-status", (req, res) =>
  handlePlanted.handlePlanted(req, res, client)
);
app.patch("/harvest", (req, res) =>
  handleHarvest.handleHarvest(req, res, client)
);
app.patch("/update-quantity", (req, res) =>
  handleQuantityChange.handleQuantityChange(req, res, client)
);
app.patch("/update-bought", (req, res) =>
  handleBoughtChange.handleBoughtChange(req, res, client)
);
app.put("/garden/:id", (req, res) =>
  handleUpdateGarden.handleUpdateGarden(req, res, client)
);
app.delete("/logout", (req, res) =>
  handleLogout.handleLogout(req, res, client)
);
app.delete("/:id/", (req, res) =>
  handleDeletePlants.handleDeletePlants(req, res, client)
);
app.delete("/shopping-list/:id", (req, res) =>
  handleDeleteShoppingListItem.handleDeleteShoppingListItem(req, res, client)
);

app.listen(PORT, () => console.log("listening on port " + PORT));
