

var express = require('express')
const Cafe = require('../db/cafe')
const router = express.Router()
const util = require('../util')

router.use('/', (req, res, next) => {
    /*if (!req.user) {
        res.status(401).send('Not authenticated')
        return
    }*/
    next()
})

router.route('/').get((req, res) => {
    // Exclude images since they take too long to load from mongolab.
    Cafe.find({}, '-src').then((cafes) => {
        return res.json(cafes)
    }).catch(console.error)
}).post(async (req, res) => {
    let { fields, files } = await util.parseForm(req)

    let cafe = new Cafe({
        name: fields.name,
        address: req.address,
        hours: fields.hours,
        powerRating: fields.powerRating,
        wifiRating: fields.wifiRating,
        foodRating: fields.foodRating,
        wifiName: fields.wifiName,
        wifiPassword: fields.wifiPassword,
        wifiSpeed: fields.wifiSpeed,
    })
    cafe.save()
    res.status(201).send(cafe)
})

module.exports = router