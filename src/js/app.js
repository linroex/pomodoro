var timer_id;

$('#pause_timer, #stop_timer, #resume_timer').hide();

$("#start_timer").click(function() {
  countdown();
  $("#start_timer").hide();
  $("#pause_timer").show();
});

$("#pause_timer").click(function() {
  if (typeof (timer_id) == "number") {
    timer_id = clearInterval(timer_id);
    $("#pause_timer").hide();
    $("#stop_timer, #resume_timer").show();
  }
})

$("#stop_timer").click(function() {
  $("#timer .insider").text("25:00");

  $("#stop_timer, #resume_timer").hide();
  $("#start_timer").show();
})

$("#resume_timer").click(function () {
  countdown();
  
  $("#stop_timer, #resume_timer").hide();
  $("#pause_timer").show();
})

countdown = function() {
  if (timer_id === undefined) {
    var current_time = $("#timer .insider").text().trim().split(":");
    current_time = parseInt(current_time[0]) * 60 + parseInt(current_time[1]);

    timer_id = setInterval(function () {
      if (current_time > 0) {
        current_time -= 1;
        var time_text = padleft(Math.floor(current_time / 60), 2) + ":" + padleft(Math.floor(current_time % 60), 2);
        $("#timer .insider").text(time_text);
      } else {
        timer_id = clearInterval(timer_id);
      }
    }, 1000);
  }
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