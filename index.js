const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const usersRoute = require("./routes/userRoutes");

const app = express();
app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Welcome to Stealth Api's");
});
app.use("users", usersRoute);

const PORT = process.env.PORT || 5500;
const CONNECTION_URL = "mongodb://127.0.0.1:27017/test1"
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log("listening on port " + PORT);
    })
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
