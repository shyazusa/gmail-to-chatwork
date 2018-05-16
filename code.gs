function myFunction() {
  var api_key, body, message, room_id, threads, url;

  api_key = 'abcdefghijklmnopqrstuvwxyz012345';  // your api key
  room_id = '000000000';  // your room id

  url = 'https://api.chatwork.com/v2/rooms/' + room_id + '/messages';
  threads = GmailApp.search('is:unread');
  threads.map(function(t) {
    messages = t.getMessages();
    messages.forEach(function(message){
      if (message.isUnread()) {
       body = '[info][title]' + message.getSubject() + '[/title]' + message.getBody().replace(/<style.*?>[\s\S]*<\/style>/g, '').replace(/<br[^>]*>/g, '\n').replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').replace(/\s{2,}/g, '\n') + '[/info]';
       chatwork(body, url, api_key);
       message.markRead();
      }
    });
  });

  function chatwork(message, url, api_key) {
    var options, result;
    options = {
      'method': 'post',
      'headers': {'X-ChatWorkToken' : api_key},
      'payload': {'body' : message}
    };
    result = UrlFetchApp.fetch(url, options);
  }
}
