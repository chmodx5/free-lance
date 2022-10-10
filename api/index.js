const express = require("express");
const bodyParser = require("body-parser");
const artistsRoutes = require("./routes/artistsRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const cors = require("cors");
const verifyjwt = require("./middleware/veriryjwt");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(verifyjwt);

app.use("/api/artists", artistsRoutes);
app.use("/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the Users API! " + req.user_id);
});
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
