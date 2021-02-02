var express = require('express');
var router = express.Router();
var db;
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://Bram:p3uZQkH5lLlyQueO@cluster0.1lin4.mongodb.net/test?retryWrites=true&w=majority";

/* Connect to MongoDB database */
MongoClient.connect(uri, {useUnifiedTopology: true}, (err, database) => {
    if (err) return console.log(err)
    db = database.db('typeDb')
})

/* GET ALL */
router.get('/', (req, res) => {
    db.collection('exercises').find().toArray((err, result) => {
        if (err) return
        res.json(result)
    })
})

/* GET BY ID */
router.post('/getById', (req, res) => {
    var query = { id: parseInt(req.body.id) }
    db.collection('exercises').find(query).toArray((err, result) => {
        if (err) return
        res.json(result)
    })
})

module.exports = router;