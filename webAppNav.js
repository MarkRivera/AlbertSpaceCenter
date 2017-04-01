$(document).ready(function(){

var ham_Bar = function hamBar(){
   $("#openBtn").click(function(){
   $(".sideNav").toggleClass("navOn");
   $("#main").css("margin-left", "250px");
   $("#main").css("opacity", "0.5");
  });
};

var close_Bar = function (){
    $(".closebtn").click(function(){
    $(".sideNav").toggleClass("navOn");
    $("#main").css("margin-left", "0px");
    $("#main").css("opacity", "1");
   });
};

var close_Effects = function(){
   $(".sideNav").removeClass("navOn");
    $("#main").css("margin-left", "0px");
    $("#main").css("opacity", "1");
};
   ham_Bar();
   close_Bar();

 //when the window resizes, close the nav if it's open.
   $(window).resize(function(){
      if ($(".sideNav").hasClass("navOn")){
        close_Effects();
      }
   });

   //Code for increasing opacity on focus.
    
    $("input").focus (function(){
        $("form").css("opacity", "1.0");
    });
});
