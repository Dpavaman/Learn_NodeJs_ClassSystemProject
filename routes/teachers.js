var express = require('express');
var router = express.Router();
var {teachers} = require("../common/data")

/* GET users listing. */
router.get('/', function(req, res) {
    console.log(req.url);
  res.json(teachers);
});

router.get('/:id', function(req, res) {
    if(teachers[req.params.id -1])
    {
        res.json(teachers[req.params.id -1]);
    }
    else
    {
        res.send(`<h1>Invalid Teacher ID</h1>`)
    }
});

module.exports = router;