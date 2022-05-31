const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(cookieParser());
app.use(cors());

app.get("/plants", handleGetPlants);

app.listen(PORT, () => console.log("listening on port " + PORT));
