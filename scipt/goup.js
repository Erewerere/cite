jQuery(document).ready(function(){
    jQuery('body').append('<a href="#" id="up" title="Вгору">Вгору</a>');
  });
  
  jQuery(function() {
   jQuery.fn.scrollToTop = function() {
    jQuery(this).hide().removeAttr("href");
    if (jQuery(window).scrollTop() >= "100") jQuery(this).fadeIn()
    var scrollDiv = jQuery(this);
    jQuery(window).scroll(function() {
     if (jQuery(window).scrollTop() <= "100") jQuery(scrollDiv).fadeOut()
     else jQuery(scrollDiv).fadeIn()
    });
    jQuery(this).click(function() {
     jQuery("html, body").animate({scrollTop: 0} )
    })
   }
  });
  
  jQuery(function() {
   jQuery("#up").scrollToTop();
  });