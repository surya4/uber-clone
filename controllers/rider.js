

const express = require('express');
let Promise = require('bluebird')
// const db = require('../models/sqlSchema');
// const db1 = require('../models/mongoSchema');
let googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_MAP_API_KEY,
    Promise: Promise
    });

    console.log("12", process.env.GOOGLE_MAP_API_KEY)

let riders = ['rider1', 'rider2', 'rider3', 'rider4', 'rider5'];

/* GET home page. */
exports.getIndexMap = function() {
    return new Promise((resolve, reject) => {

    googleMapsClient.geocode({
        address: '1600 Amphitheatre Parkway, Mountain View, CA'
    }).asPromise()
    .then((response) => {
        console.log(response.json.results);
        resolve(response.json.results);
        // console.log(response.json.results);
    })
    .catch(err => {
        console.log(err);
        reject(err)
        // console.log(err);
    });
        
})
    // res.render('index', {
    //     'title': 'Uber Clone'
    // });
};