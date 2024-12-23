/*

[rewrite_local]
^https:\/\/subs\.xiongmaoboshi\.com\/account\/refresh url script-response-body xm.js
[mitm] 
hostname = subs.xiongmaoboshi.com

*******************************/
var body = $response.body;

    body = body.replace(/\"ownedContentIds":null/g,'\"ownedContentIds":["com.drpanda.chineseacademy.characterpinyinpoembundle"]');
  
$done({body});
