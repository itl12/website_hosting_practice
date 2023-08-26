$(document).ready(function(){



  // scroll to top 
function scrollToTopVisibility (){
  var h = $(document).scrollTop();
  if(h > 800){
    $(".scrollToTop").show();
  }else
  {
    $(".scrollToTop").hide();
  };
};

scrollToTopVisibility();

$(window).scroll(function(){
  scrollToTopVisibility();
});

$(".scrollToTop").click(function () {
  $("html").animate({"scrollTop": 0},1000);

  return false;
});

// ------------------------------------------


  // $(".main-menu > ul > li > ul").parent().click(function(){

  //   $(this).children(".slideUpAnimation").toggle();
  //   return false;
  // });


  var a = $(".main-menu ul li").children("ul");
  a.parent().children("a").append('<i class="fa-solid fa-angle-down"></i>');
  
  $(".fa-angle-down").css("margin-left","10px");
  
  $(".h-bars").click(function(){
    
    $(".main-menu").slideToggle(500);
  });
  
  
  
  
  var a = "imran";
  
  $("#hideButton").click(a,function() {
    $("#content").slideToggle();
    $("#hideButton").text(a)
  });
  
  
  
  
  // closing advertisement
  $(".close-advertisement").click(function(){
    
    
    $(".advertisement img").toggle();
    
  });



});