const express = require("express");
const bodyParser = require("body-parser");
const artistsRoutes = require("./routes/artistsRoutes.js");
const cors = require("cors");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());

app.use("/api/artists", artistsRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
