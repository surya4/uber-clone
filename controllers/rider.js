

const express = require('express');
// const db = require('../models/sqlSchema');
// const db1 = require('../models/mongoSchema');

let riders = ['rider1', 'rider2', 'rider3', 'rider4', 'rider5'];

/* GET home page. */
exports.getIndex = function(req, res) {
  console.log("12")
    res.render('index', {
        'title': 'Uber Clone'
    });
};