var timer_id = 0;

$("#start_timer").click(function() {
  countdown();
})

countdown = function() {
  var current_time = $("#timer .insider").text().trim().split(":");
  current_time = parseInt(current_time[0]) * 60 + parseInt(current_time[1]);

  timer_id = setInterval(function () {
    if(current_time > 0) {
      current_time -= 1;
      var time_text = padleft(Math.floor(current_time / 60), 2) + ":" + padleft(Math.floor(current_time % 60), 2);
      $("#timer .insider").text(time_text);
    }else{
      clearInterval(timer_id);
    }
  }, 1000);
}

padleft = function(str, size) {
  str = String(str);
  if(str.length < size) {
    for(var i = 0; i < size - str.length; i++) {
      str = "0" + str;
    }
    return str;
  }
  return str;
}