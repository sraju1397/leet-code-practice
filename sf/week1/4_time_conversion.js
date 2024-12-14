// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// time s = '12:30:40AM'
function formatTime(s) {
  var period = s.slice(-2);
  var time = s.slice(0, -2);
  var hours = time.split(':')[0];

  if (period === 'PM' && hours < 12) {
    hours += 12;
  } else if (period === 'AM' && hours === 12) {
    hours = 0;
  }
  return `${hours}${time.slice(2)}`;
}