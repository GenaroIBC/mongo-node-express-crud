const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/learnmongo";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(console.log);
