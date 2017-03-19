var timer_id;
var pomodoro_duration = "25:00";

$('#pause_timer, #stop_timer, #resume_timer, #takebreak_btn').hide();

$("#start_timer").click(function() {
  pomodoro_countdown();
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
  $("#timer .insider").text(pomodoro_duration);

  $("#stop_timer, #resume_timer").hide();
  $("#start_timer").show();
})

$("#resume_timer").click(function () {
  pomodoro_countdown();

  $("#stop_timer, #resume_timer").hide();
  $("#pause_timer").show();
})

get_curr_time = function() {
  var current_time = $("#timer .insider").text().trim().split(":");
  return parseInt(current_time[0]) * 60 + parseInt(current_time[1]);
}

countdown = function(callback) {
  if (timer_id === undefined) {
    var current_time = get_curr_time();

    timer_id = setInterval(function () {
      if (current_time > 0) {
        current_time -= 1;
        time_text = padleft(Math.floor(current_time / 60), 2) + ":" + padleft(Math.floor(current_time % 60), 2);
        $("#timer .insider").text(time_text);
      } else {
        timer_id = clearInterval(timer_id);
        callback();
      }
    }, 1000);
  }
}

pomodoro_countdown = function() {
    countdown(function() {
      $("#result .item:not(.item-done)").first().addClass("item-done");

      var sleep_min;
      if ($("#result .item-done").length % 4 == 0) {
        sleep_min = 15;
      } else {
        sleep_min = 5;
      }

      sleep_countdown(sleep_min);
      remote.app.dock.setBadge(String(sleep_min));
      notify('可以休息' + sleep_min + '分鐘啦');
    });
}

sleep_countdown = function(min) {
  $("#timer .insider").text(padleft(min, 2) + ':00');
  $("#takebreak_btn .sleep_min").text(min);

  $("#takebreak_btn").show();
  $("#pause_timer, #resume_timer, #stop_timer").hide();

  $("body").addClass("sleep");

  countdown(function() {
    $("#start_timer").show();
    $("#takebreak_btn").hide();
    $("body").removeClass("sleep");
    $("#timer .insider").text(pomodoro_duration);
  })
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