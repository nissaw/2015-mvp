var mysql = require('mysql');
var Sequelize = require("sequelize");
var sequelize = new Sequelize("goskidb", "root", "");

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


/// this is pre-Sequelize Code
// exports.connection = mysql.createConnection({
//   user: "root",
//   password: "",
//   database: "chat"
// });

// exports.connection.connect();

var Area = sequelize.define('Area', {
  name: Sequelize.STRING
});

var Report = sequelize.define('Report', {
  body: Sequelize.STRING
});

Area.hasMany(Report);
Report.belongsTo(Area);


Area.sync();
Report.sync();



exports.Area = Area;
exports.Report = Report;

