var express = require("express");
var db = require("../db/connect");
var connect = db.Connect();

module.exports = {
    async signup(username, email, password, status, callback) {
        var con = await connect;
        var query =
        "INSERT INTO `users`(`username`,`email`,`password`,`email_status`) VALUES ('" +
        username +
        "','" +
        email +
        "','" +
        password +
        "','" +
        status +
        "')";
        con.query(query, callback);
    },

    async verify(username, email, token, callback) {
        var con = await connect;
        var query =
        "insert into `verify` (`username`,`email`,`token`) values ('" +
        username +
        "','" +
        email +
        "','" +
        token +
        "')";
        con.query(query, callback);
    },

    async getuserid(email, callback) {
        var query = "select *from verify where email = '" + email + "' ";
        con.query(query, callback);
    } 
}

