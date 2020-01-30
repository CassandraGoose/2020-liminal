const places = require('./tempJSON.json');
module.exports = {
  getAllGeoJSONPlaces:(cityName) => {
    // query db to get all locations that are in that city

    return places;
  }
}
