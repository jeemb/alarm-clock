var Weather = require('./../js/weather.js').weatherModule;
var apiKey = "d1e17823e6ec66b348d41edb1983017d";

$(document).ready(function() {
  $('#weather-humidity').submit(function(event) {
    event.preventDefault();
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
    .then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    })

    .fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });

  });

  $('#weather-temperature').submit(function(event) {
    event.preventDefault();
    var city = $('#temperature').val();
    newWeather = new Weather(city);
    $('#temperature').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
    .then(function(response) {
      $('.showTemperature').text("The temperature in " + city + " is " + response.main.temp + " K");
      kelvin = response.main.temp;
      var print_celsius = newWeather.kelvintoC(kelvin);
      $('.showCelsius').text("The temperature in " + city + " is " + print_celsius + " °C");
      console.log(print_celsius);
    })

    .fail(function(error) {
      $('.showTemperature').text(error.responseJSON.message);
    });

  });
});
