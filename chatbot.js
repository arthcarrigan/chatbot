
!function (w, d, s) {
  var div = d.createElement('div');
  div.id = 'aichatbot';
  d.body.appendChild(div);
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }
  w.chatbotConfig = args;
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s);
  j.defer = true;
  j.type = 'module';
  j.src = 'https://aichatbot.sendbird.com/index.js';
  f.parentNode.insertBefore(j, f);
}(window, document, 'script', '65A04B71-880D-4431-BFA0-E7E483874691', 'onboarding_bot', {
  apiHost: 'https://api-cf-eu-1.sendbird.com'
});
