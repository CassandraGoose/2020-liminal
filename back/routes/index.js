var express = require('express');
var router = express.Router();
const query = require('../query.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('hey');
});

router.get('/city/denver', async (req, res, next) => {
  const places = await query.getAllGeoJSONPlaces('denver');
  return res.json(places);
})

module.exports = router;
