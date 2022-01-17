const mongoose = require("mongoose");

mongoose.connect(
<<<<<<< HEAD
  process.env.MONGODB_URI || 'mongodb://localhost/crockett_printing_db',
=======
  process.env.MONGODB_URI || "mongodb://localhost/programming-messages",
>>>>>>> 98a31bcbe265c7eee1be0f676cdb42146c527cbb
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
