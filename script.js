$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 0){
      $('header').addClass('sticky');
    }else{
      $('header').removeClass('sticky');
    }

    if($(window).scrollTop() > 0){
      $('.scroll-top').show();
    }else{
      $('.scroll-top').hide();
    }

    // scroll spy 

    $('section').each(function(){

      let top = $(window).scrollTop();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');
      let height = $(this).height();

      if(top > offset && top < offset + height){
        $('.navbar a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});

/*
// Sélectionne tous les éléments skill-box
const skillBoxes = document.querySelectorAll('.skill-box');

skillBoxes.forEach(box => {
    const title = box.querySelector('h3');
    const technicalSkills = box.querySelector('.technical-skills');

    box.addEventListener('mouseenter', () => {
        title.style.opacity = '0'; // Masque le titre
        technicalSkills.style.opacity = '1'; // Affiche les sous-compétences
    });

    box.addEventListener('mouseleave', () => {
        title.style.opacity = '1'; // Réaffiche le titre
        technicalSkills.style.opacity = '0'; // Masque les sous-compétences
    });
});
*/

document.querySelectorAll('.skill-box').forEach(box => {
  box.addEventListener('mouseenter', () => {
      box.querySelector('.skill-title').style.opacity = 0;
      box.querySelector('.skill-content').style.opacity = 1;
  });

  box.addEventListener('mouseleave', () => {
      box.querySelector('.skill-title').style.opacity = 1;
      box.querySelector('.skill-content').style.opacity = 0;
  });
});



document.querySelectorAll('.education-box').forEach(box => {
  box.addEventListener('mouseenter', () => {
      box.querySelector('.university-logo').style.transform = 'scale(1.1)';
  });

  box.addEventListener('mouseleave', () => {
      box.querySelector('.university-logo').style.transform = 'scale(1)';
  });
});



document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le comportement par défaut
  alert('Your message has been sent successfully!');
  // Vous pouvez ajouter une logique pour envoyer les données à un serveur ici
});
