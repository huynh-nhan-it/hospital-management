var mysql = require("mysql");
var express = require("express");

module.exports = {
  async Connect() {
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1234",
      database: "hmsystem",
    });

    con.connect(function (err) {
      if (err) {
        throw err;
      } else {
        console.log("you are connected");
      }
    });
    return con;
  },
};
