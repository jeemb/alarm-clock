function Alarm(hour, minute){
  this.hour = hour;
  this.minute = minute;
}

Alarm.prototype.checkTime = function() {
  var currentHour = parseInt(moment().format('H'));
  var currentMinute = parseInt(moment().format('mm'));

  if ((hour === currentHour) && (minute === currentMinute)) {
    $('#alarm').show();
    $('.alarm-set').hide();
  } else {
    $('#alarm').hide();
  }
};
setInterval(checkTime, 1000);

exports.alarmModule = Alarm;
