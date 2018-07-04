

const express = require('express');
let Promise = require('bluebird')
// const db = require('../models/sqlSchema');
// const db1 = require('../models/mongoSchema');
let googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_MAP_API_KEY,
    Promise: Promise
    });

let riders = ['rider1', 'rider2', 'rider3', 'rider4', 'rider5'];

/* GET home page. */
exports.initializeMap = function() {
    return new Promise((resolve, reject) => {

    googleMapsClient.geocode({
        address: '1600 Amphitheatre Parkway, Mountain View, CA'
    }).asPromise()
    .then((response) => {
        resolve(response.json.results);
        // console.log(response.json.results);
    })
    .catch(err => {
        reject(err)
        // console.log(err);
    });
        
})
};

// function initializMap() {
//     return new Promise((resolve, reject) => {

    
//     })
// }