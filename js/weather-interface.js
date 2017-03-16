var Weather = require('./../js/weather.js').weatherModule;

function display(city, celsius) {
  $('.showCelsius').text("The temperature in " + city + " is " + celsius + " °C");
}

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
    newWeather.kelvintoC(city, display);
  });
});
