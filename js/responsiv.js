$(function (){
   $('body > header .nav_bar .nav_bar_item').mouseover(function (){
      $('body > header .nav_bar .nav_bar_item > div > .mega_menu:visible').hide();
      $('body > header .nav_bar .nav_bar_item > div > .sub_menu:visible').hide();
      
      
      $(this).find('> div > .mega_menu').show();
      $(this).find('> div > .sub_menu').show();        
   });
   $('body > header .nav_bar .nav_bar_item .sub_menu .sub_menu_item').mouseover(function (){
       $('body > header .nav_bar .nav_bar_item .sub_menu .sub_menu_item > div > .sub_menu:visible').
                hide();
       $(this).find('> div > .sub_menu').show();
   });
   
    $('body > header .mobile_icons .nav_menu_icon').click(function (){
       $('#mobile_div_effect').show(); 
       $('body > header .nav_bar').fadeIn("slow");
   });
   
   $('body > header .nav_bar .mobile_header img').click(function (){
       $('#mobile_div_effect').hide(); 
       $('body > header .nav_bar').fadeOut("slow");
   });
});