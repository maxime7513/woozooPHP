// HEADER MOBILE
if(window.matchMedia("(max-width: 700px)").matches){
    $('header img').attr('src','./assets/img/header/logo-woozoo_mobile.png');
    $("#menu-hamburger").removeClass("cache");
    $('header nav').css('margin-right','10px');
    $('header a, header img, .header-dropdown, header nav a:not(#dropdown_nos-secteurs a), header span').addClass('mobile');
    $(".header-dropdown a, .header-dropdown button").click(function(){
        $(".header-dropdown").removeClass("show");
        $("#menu-hamburger .fa-bars, #menu-hamburger .fa-times").toggleClass("cache");
    });
}
$("#menu-hamburger").click(function(){
    $(".header-dropdown").toggleClass("show");
    $("#menu-hamburger .fa-bars, #menu-hamburger .fa-times").toggleClass("cache");
    $("header").css("background","#fff");
    $(".header-dropdown").css('transition','.3s ease-in-out');
});

// OUVRIR ET FERMER DETAILS AVANTAGES PAGE COURSIER POUR TELEPHONE
if(window.matchMedia("(max-width: 700px)").matches){
  $('#avantages p:first-of-type').click(function(){
    $(this).next('p').toggle('show');
    $(this).children('i').css('animation','none');
    $(this).children('i').toggleClass('rotate');
  });
};
  
// MAP QUI RESTE CARRE
widthtMap = $("#map").width();
$("#map").css('height', widthtMap * 0.685);

// HAUTEUR ::before accueil-coursier
let heightDetailCoursier = $('.besoin_coursier').outerHeight() + 100;
let root = document.documentElement;
root.style.setProperty('--bottom-before', '-' + heightDetailCoursier + 'px');
