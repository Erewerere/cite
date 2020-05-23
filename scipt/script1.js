jQuery.noConflict();
jQuery(document).ready(function (e) {
   
    jQuery('#form').submit(function(e) {
        e.preventDefault();
 
em = jQuery("#email").val().trim();
t = jQuery("#text").val().trim();
if(!em ){
    jQuery('#err1').css({"display": "true", "color": "red"});
    jQuery("#err1").text("Введіть email");
    return false;
    }
 if(t.length <  10){
    jQuery('#err1').css({"display": "true", "color": "red"});
        jQuery("#err1").text("Введіть більше 10 символів!");
        return false;
        }
jQuery('#err1').css({"display": "true", "color": "green"});
jQuery("#err1").text("Ваше повідомлення відправлено!");
alert('За вашою адресою: ' + em + ' надійде відповідь на ваше повідомлення!' );
jQuery("#text").val("") ; 
});
jQuery('#form2').submit(function(e){
    e.preventDefault();
f = jQuery("#fio").val().trim();
console.log(jQuery("#fio").val());
a = jQuery("#adres").val().trim();
p = jQuery("#phone").val().trim();
if(!f){
    jQuery('#err2').css({"display": "true", "color": "red"});
    jQuery("#err2").text("Введіть ФІП");
    return false;
    }
if(!a){
    jQuery('#err2').css({"display": "true", "color": "red"});
        jQuery("#err2").text("Введіть адресу");
        return false;
        }
if(!p ){
    jQuery('#err2').css({"display": "true", "color": "red"});
            jQuery("#err2").text("Введіть номер телефону");
            return false;
            }
        
        jQuery('#err2').css({"display": "true", "color": "green"});
        jQuery("#err2").text("Ваше замовлення прийнято!");
        alert('Вітаю, '+ f + " ! Ви тепер наш підписник! \nНайближчим часом за вашою адресою надійде журнал!" );
        jQuery("#phone").val("") ;    
        jQuery("#adres").val("") ; 
        jQuery("#fio").val("") ; 
        
        
});
});