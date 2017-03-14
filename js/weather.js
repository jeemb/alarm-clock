function Weather(city) {
  this.city = city;
}

Weather.prototype.kelvintoC = function(city, callback) {
var apiKey = "d1e17823e6ec66b348d41edb1983017d";

  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
  .then(function(response) {
    $('.showTemperature').text("The temperature in " + city + " is " + response.main.temp + " K");
    kelvin = response.main.temp;
    var celsius = parseInt(kelvin) - 273;
    callback(city, celsius);
  })

  .fail(function(error) {
    $('.showTemperature').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;
