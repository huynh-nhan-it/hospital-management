var connect = db.Connect();
var express = require("express");
var db = require("../db/connect");
var nodemailer = require("nodemailer");
var randomToken = require("random-token");
const { check, validationResult } = require("express-validator");

module.exports = {

    getSignup(req, res) {
        res.render("signup.ejs");
    },

    postSignup(req, res) {
        
    }
}