const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const multer = require("multer");
const teamroute = require("./Routes/teamsizeroute");
const businessroute = require("./Routes/businesstyperoute");
const app = express();
const PORT = 1338;
app.use(cors());
app.use(express.json());
app.use(teamroute);
app.use(businessroute);
app.listen(PORT, () => {
  console.log("Server started on 1338");
});
