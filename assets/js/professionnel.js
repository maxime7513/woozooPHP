// SLIDER SECTION PRESENTATION
$(".dot_nav div").click(function(){
  $(this).addClass('active');
  $(".dot_nav div").not(this).removeClass('active');
    if($(".dot_nav div:nth-of-type(2)").hasClass( "active" )){
        $("#presentation_professionnel > div:not(.presentation_commercant2").removeClass("active");
        $(".presentation_commercant2").addClass("active");
    }else if($(".dot_nav div:last-of-type").hasClass( "active" )){
      $("#presentation_professionnel > div:not(.presentation_commercant3").removeClass("active");
      $(".presentation_commercant3").addClass("active");
    }else{
        $("#presentation_professionnel > div:not(.presentation_commercant").removeClass("active");
        $(".presentation_commercant").addClass("active");
    }
});
// SLIDER SECTION PRESENTATION AUTOPLAY
// var i = 1;
// setInterval(function(){
//     i++;
//     $('.dot_nav div:nth-of-type('+ i +')').click();
//     if(i >= 3){
//       i = 0;
//     }
// },5000);

// HOVER BADGE NOS VALEURS
// for(let i=0; i < ('#valeurs > div').length; i++){
//   $("#valeurs > div:nth-of-type("+i+") .badge_valeurs").mouseover(function(){
//     $("#valeurs > div:nth-of-type("+i+")").css('transform','scale(1.25)');
//   });
//   $(".badge_valeurs").mouseout(function(){
//     $("#valeurs > div:nth-of-type("+i+")").css('transform','scale(1)');
//   });
// }

// TRANSITION SOLUTIONS
function transitionSecteurs(){
  $('.transition_secteurs').addClass('active');
  setTimeout(function(){
      $('.transition_secteurs').removeClass('active');
  }, 1000);
}



// CHANGEMENT AU SCROLL HEADER SOLUTIONS
// $(window).scroll(function(){
//   let heightPresentationProfessionnel = $("#presentation_professionnel").height();
//   let heightSolutions = $("#solutions").height();
//   let scroll = $(window).scrollTop();

//   if((scroll > heightPresentationProfessionnel + 10) && (scroll < heightPresentationProfessionnel + heightSolutions - 50)){
//     $('#header_solutions').addClass('fixed');
//     $('#header_solutions p').css('font-size','16px');
//     $('#solutions').css('padding-top','30px');
//     $('#header_solutions').css('transform','scaleY(1)');
//   }else if(scroll > heightPresentationProfessionnel + heightSolutions - 50){
//     $('#header_solutions').css('transform','scaleY(0)');
//   }else{
//     $('#header_solutions').removeClass('fixed');
//     $('#header_solutions p').css('font-size','18px');
//     $('#solutions').css('padding-top','0');
//   }
// });
///////////////////////////// SLIDER /////////////////////////////////
// SLIDER NOS ACTIVITES
// $('.slider').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });
// $('.slider').slick({
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1400,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   });
  
  // SLIDER NOS PARTENAIRES ET CLIENTS
  // $('.slider_partenaire').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // });
  $('.slider_client').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // SLIDER COMMENTAIRES CLIENTS
  $('#container-commentaire').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    // responsive: [
    //   {
    //     breakpoint: 1300,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     }
    //   }
    // ]
  });
  $('#container-commentaire_presentation').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // responsive: [
    //   {
    //     breakpoint: 1300,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     }
    //   }
    // ]
  });
/////////////////////// FIN SLIDER /////////////////////////////////

// HEADER SECTEURS DETAILS
$(window).scroll(function(){
  let scroll = $(window).scrollTop(),
      distance = $('#secteurs_details').offset().top,
      heightSolutions = $("#secteurs_details").height();

  if(scroll > (distance + heightSolutions - 200) && (!$("#secteurs_details").hasClass("cache"))){
    $('#header_secteurs_details').css('transform','scaleY(0)');
  }else{
    $('#header_secteurs_details').css('transform','scaleY(1)');
  }
});

// CHANGER CONTENUE QUAND ON CLIC SUR LES <p> SECTEURS
var secteursContenu = ["commerce", "luxe", "e-commerce", "restaurant", "inter-magasin"]; 
for(let i=0; i < secteursContenu.length; i++){
  $("."+ secteursContenu[i] +"_p").click(function(){
    if(!$("#secteurs_details").hasClass("cache")){ // SI #solutions N'A PAS LA CLASSE "cache"
      $('.transition_secteurs').css('z-index','5');
    }
    $('#header_secteurs_details').css('transform','scaleY(1)');
    ancre('#secteurs_details','65','100');// ANCRE POUR TOUTES LES CATEGORIES
    transitionSecteurs(); // BACKGROUND TRANSITION SOLUTIONS
    setTimeout(function(){
      $("#header_secteurs_details ."+ secteursContenu[i] +"_p").addClass("active"); // AJOUTER CLASS ACTIVE SUR LES <p> HEADER-SOLUTIONS
      $("#header_secteurs_details p").not("."+ secteursContenu[i] +"_p").removeClass("active");  // SUPPRIMER CLASS ACTIVE SUR LES <p> HEADER-SOLUTIONS
      $("#"+ secteursContenu[i]).addClass("active");
      $("#secteurs_details > div:not(#"+ secteursContenu[i] +")").removeClass("active");
    }, 300);
  });
}

// AFFICHER SECTEURS ACTIVITE DETAILS
$('#dropdown_nos-secteurs a, .card-secteurs_info a, .footer_solutions a').click(function(){
  if($("#secteurs_details").hasClass("cache")){ // SI #solutions A LA CLASSE "cache"
    $('.transition_secteurs').css('z-index','21');
  }
  transitionSecteurs(); // BACKGROUND TRANSITION SOLUTIONS
  setTimeout(function(){ // CHANGER CONTENUE ET HEADER(CSS) AU BOUT DE 600MS LE TEMPS QUE LE BACKGROUND TRANSITION CACHE LE CHANGEMENT
    $('#professionnel').addClass('cache');
    $('#secteurs_details').removeClass('cache');
    $("header").addClass("solutions");
    $("header nav a, header span").css('color','var(--blue-primary)');
    $('.header-dropdown > a:first-of-type').attr('href','professionnel.php');
  }, 600);
});

// CHANGER CONTENU ANCRE SECTEURS-DETAILS POUR REFERENCEMENT (GARDER NOS SOLUTIONS QUAND ON RAFFRAICHIE LA PAGE)
var ancreUrl = ["commerce", "luxe", "e-commerce", "restaurant"]; 
for(let i=0; i < ancreUrl.length; i++){
  if(window.location.href.indexOf("#"+ ancreUrl[i]) > -1) {
    // alert(ancreUrl[i]);
    $('#professionnel').addClass('cache');
    $('#secteurs_details').removeClass('cache');
    $("header").addClass("solutions");
    $("header nav a, header span").css('color','var(--blue-primary)');
    $('.header-dropdown > a:first-of-type').attr('href','professionnel.php');
    $("#secteurs_details ."+ ancreUrl[i] +"_p").addClass("active"); // AJOUTER CLASS ACTIVE SUR LES <p> HEADER-SECTEURS
    $("#header_secteurs_details p").not("."+ ancreUrl[i] +"_p").removeClass("active");  // SUPPRIMER CLASS ACTIVE SUR LES <p> HEADER-SECTEURS
    $("#"+ ancreUrl[i]).addClass("active");
    $("#secteurs_details > div:not(#"+ ancreUrl[i] +")").removeClass("active");
  }
}

// CHANGEMENT AU SCROLL HEADER OFFRES DETAILS
$(window).scroll(function(){
  let scroll = $(window).scrollTop(),
  distance = $('#offre_details').offset().top,
  heightOffre = $("#offre_details").height();

  if(scroll > (distance - 65) && (scroll < distance + heightOffre - 100)){
    $('#header_offre_details').addClass('fixed');
    $('#offre_details > div:not(#header_offre_details)').css('padding-top','90px');
    $('#header_offre_details').css('transform','scaleY(1)');
  }else if(scroll > distance + heightOffre - 100){
    $('#header_offre_details').css('transform','scaleY(0)');
  }else{
    $('#header_offre_details').removeClass('fixed');
    $('#offre_details > div:not(#header_offre_details)').css('padding-top','50px');
  }
});

// CHANGER CONTENUE QUAND ON CLIC SUR LES <p> OFFRES
var offresContenu = ["course-demande", "course-securite", "mise-disposition", "optimisation-tournee"]; 
for(let i=0; i < offresContenu.length; i++){
  $("."+ offresContenu[i] +"_p").click(function(){
    ancre('#offre_details','63','2000');// ANCRE POUR TOUTES LES CATEGORIES
    $("#header_offre_details ."+ offresContenu[i] +"_p").addClass("active"); // AJOUTER CLASS ACTIVE SUR LES <p> HEADER-OFFRES
    $("#header_offre_details p").not("."+ offresContenu[i] +"_p").removeClass("active");  // SUPPRIMER CLASS ACTIVE SUR LES <p> HEADER-OFFRES
    $("#"+ offresContenu[i]).addClass("active");
    $("#offre_details > div:not(#"+ offresContenu[i] +")").removeClass("active");
    if(i === 1 && animatedSecuriteDetail === false){ // SI course-securite_p cliquer et fonction pas encore effectuer
      annotationSecurite();
    }
  });
}

// SECTION DETAILS OFFRES //
// ANNOTATIONS DETAILS COURSE HAUTE SECURITE
$(window).scroll(function(){
  let scrollWindow = $(window).scrollTop(),
      topOffreDetails = $("#offre_details").offset().top;
  if(animatedSecuriteDetail === false && $('#course-securite').hasClass('active') && (scrollWindow > topOffreDetails -50)){
    annotationSecurite();
  };
});

// SLIDER IMAGE LIVRAISON SECURISEE
setInterval(function(){
  if($("#img_course-securite").attr("src") == "./assets/img/professionnel/offre/mockup_code.png"){
    $('#img_course-securite').attr('src', './assets/img/professionnel/offre/mockup_qrcode.png');
  }else{
    $('#img_course-securite').attr('src', './assets/img/professionnel/offre/mockup_code.png');
  }
},3000);