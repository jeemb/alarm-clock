var Alarm = require('./../js/alarm.js').alarmModule;
var apiKey = "d1e17823e6ec66b348d41edb1983017d";

function update() {
  $('#clock').text(moment().format('H:mm:ss'));
}
setInterval(update, 1000);

$(document).ready(function() {
  $('#alarm-form').submit(function(event) {
    event.preventDefault();
    var hour = parseInt($('#hour').val());
    var minute = parseInt($('#minute').val());
    // var currentHour = parseInt(moment().format('H'));
    // var currentMinute = parseInt(moment().format('mm'));

    newAlarm = new Alarm(hour, minute);
    console.log(newAlarm);
    $('#alarm-set').text("Your alarm is set for " + hour + ":" + minute);
    setInterval(function(){
      newAlarm.checkTime(hour, minute);
    }, 1000);

  });
});
