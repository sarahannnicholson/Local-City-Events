const express = require('express')
const app = express()

module.exports = function(app){

    app.get('/googleMap', function(req, res){
        // req.query.cityName
        res.send('GET request to google map')
    })
}