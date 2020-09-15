var express = require('express');
var router = express.Router();
var {students} = require("../common/data")
/* GET users listing. */
router.get('/', function(req, res) {
    console.log(req.url);
  res.json(students);
});

router.get('/:id', function(req, res) {
    if(students[req.params.id -1])
    {
        res.json(students[req.params.id -1]);
    }
    else
    {
        res.send(`<h1>Invalid Student ID</h1>`)
    }
});

module.exports = router;