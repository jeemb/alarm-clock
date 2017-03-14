function Weather(city) {
  this.city = city;
}

Weather.prototype.kelvintoC = function(kelvin) {
  var celsius = parseInt(kelvin) - 273;
  return celsius;
};

exports.weatherModule = Weather;
