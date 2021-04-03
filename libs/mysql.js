

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "test-db.ctoejjrzmkrq.us-east-2.rds.amazonaws.com",
  user: "root",
  password: "kunal1234"
});

con.connect(function(err,connection) {
  if (err) throw err;
  return connection
});