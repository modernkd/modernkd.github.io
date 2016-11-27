
$.getJSON('http://hipsterjesus.com/api/', function(data) {
  $(data.text).appendTo('#about');
});
$.getJSON('http://hipsterjesus.com/api/', function(data) {
  $(data.text).appendTo('#portfolio');
});

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  })