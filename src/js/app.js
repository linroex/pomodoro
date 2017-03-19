var timer_id = 0;

$("#start_timer").click(function() {
  timer_id = setInterval(function() {
    console.log("1");
  }, 1000);
})