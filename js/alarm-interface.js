// var Alarm = require('./../js/alarm.js').alarmModule;

function update() {
  $('#clock').text(moment().format('H:mm:ss'));
}
setInterval(update, 1000);

$(document).ready(function() {
  $('#alarm-form').submit(function(event) {
    event.preventDefault();
    var hour = parseInt($('#hour').val());
    var minute = parseInt($('#minute').val());

    $('#alarm-set').text("Your alarm is set for " + hour + ":" + minute);

    function checkTime() {
      var currentHour = parseInt(moment().format('H'));
      console.log(currentHour);
      var currentMinute = parseInt(moment().format('mm'));
      console.log(currentMinute);

      if ((hour === currentHour) && (minute === currentMinute)) {
        $('#alarm').show();
        $('.alarm-set').hide();
      } else {
        $('#alarm').hide();
      }
    }
    setInterval(checkTime, 1000);

  });
});
