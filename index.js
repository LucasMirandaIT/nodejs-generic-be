const express = require("express");
const app = express();

const port = process.env.PORT || 3200;

function allowOrigin(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", process.env.CORSAllow || "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Pass to next layer of middleware
  next();
}
const usersRoutes = require("./api/users");

app.use(allowOrigin);
app.use(express.json());
app.use(express.static("./build"));

require('./schemas/User');

app.use("/api/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("My Express API on Vercel");
});

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
