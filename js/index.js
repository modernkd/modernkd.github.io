

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $('.carousel').carousel({full_width: true});
  })

  $('.btn').click( function()
  {
    $('.carousel').carousel('next');
  });
