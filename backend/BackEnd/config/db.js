const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "university",
});

const connectDB = async () => {
  connection.connect(err => {
    if (err) {
      return console.error("error: " + err.message);
    }

    console.log("Connected to the MySQL server.");
  });
};

module.exports = {connectDB, connection};
