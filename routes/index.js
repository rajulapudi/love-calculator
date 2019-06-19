var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
router.get('/', (req, res, next)=> {
  var fname = 'aneesh';
  var sname = 'jyotika';

  let url = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`

  unirest.get(url)
  .header("X-RapidAPI-Host", "love-calculator.p.rapidapi.com")
  .header("X-RapidAPI-Key", "fc3197bf9amshf3c1687e2574e83p12383cjsn3ccc4ea60776")
  .end(function (result) {
    res.send(result.body);
});
});

module.exports = router;
