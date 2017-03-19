const remote = require('electron').remote;
const notifier = require('node-notifier');
const path = require('path');

function notify(msg) {
  notifier.notify({
    title: 'Pomodoro',
    message: msg,
    icon: path.join(__dirname, 'tomato.icns'),
    sound: true,
    wait: true
  });
}