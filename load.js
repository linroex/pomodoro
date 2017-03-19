const remote = require('electron').remote;
const notifier = require('node-notifier');

function notify(msg) {
  notifier.notify({
    title: 'Pomodoro',
    message: msg,
    sound: true,
    wait: true
  });
}
