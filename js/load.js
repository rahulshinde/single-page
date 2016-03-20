$(document).ready( function() {

    //about

    $("#question").on("click", function() {
        $("#about-desc").fadeToggle('slow');
        $("#question").fadeToggle('fast');
        $("#question-close").fadeToggle('slow');
    });

    $("#question-close").on("click", function() {
        $("#about-desc").fadeToggle('slow');
        $("#question").fadeToggle('slow');
        $("#question-close").fadeToggle('fast');
    });

    $(window).scroll(function(){
      if($(window).scrollTop() > 100){
          $("#top").fadeToggle('slow');
    });

    $(window).scroll(function(){
      if($(window).scrollTop() < 100){
          $("#top").fadeToggle('slow');
      }
    });

});