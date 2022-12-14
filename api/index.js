const express = require("express");
const bodyParser = require("body-parser");
const artistsRoutes = require("./routes/artistsRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const clientRoutes = require("./routes/clientRoutes.js");
const skillsRoutes = require("./routes/skillsRoutes");
const tasksRoutes = require("./routes/tasksRoutes");
const cors = require("cors");
const verifyjwt = require("./middleware/veriryjwt");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);

app.use(verifyjwt);
app.use("/api/artists", artistsRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/tasks", tasksRoutes);
app.use("/api/freelancers", clientRoutes);

app.get("/", (req, res) => {
  // res.send("Welcome to the Users API! " + req.user_id);
  return res.status(200).json({ message: "Welcome to the Users API!" });
});
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
