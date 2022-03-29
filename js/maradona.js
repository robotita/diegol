// ANIMATION


      //window.onload = function(){ document.querySelector(".preloader").style.display = "none"; }


      var textWrapper = document.querySelector('#inmortal h1');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({loop: false})
        .add({
          targets: '#inmortal h1 .letter',
          opacity: [0,1],
          easing: "easeInOutQuad",
          duration: 800,
          delay: (el, i) => 40 * (i+1)
        }).add({ targets: '#inmortal h1 ', opacity: 1, duration: 5000, easing: "easeOutExpo", delay: 5000 });

      anime({
          targets: '#inmortal p ',
          opacity: 1,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000 });

      anime({
          targets: '#verespecial',
          opacity: 1,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1400 });

      anime({
        targets: '.animate',
        delay:300,
        scale: [0, 1],
        opacity: [0, 1],
        duration: function() { return anime.random(600,1000); },
        direction: 'normal',
        easing: 'easeInOutSine',
        loop: false
      });
    


      //Initialize Swiper
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        autoplay: { delay: 5000,},
        breakpoints: {
          640: { slidesPerView: 2 },
          769: { slidesPerView: 3 }
        },
      });

function verEspecial() { 
  document.querySelector("#inmortal").style.display = "none";
  document.querySelector("#elgoldelsiglo").style.display = "block";
}

var x = document.getElementById("barriletecosmico"); 

function playAudio() { 

  x.play();
  document.querySelector("#playgol").style.display = "none";
  //ocument.querySelector("#pausegol").style.display = "inline";
  document.querySelector("#mute").style.display = "inline";
  anime({ targets: '#mute',  opacity: 1, duration: 600, easing: "easeOutExpo" });


  // GOL  

  //document.querySelector("#diegol01 img").style.opacity = "1";
  document.querySelector("#diegol01gif").style.display = "inline";

  setTimeout(function(){
    document.querySelector("#diegol01gif").style.display = "none";
    document.querySelector("#diegol02gif").style.display = "inline";
  }, 2005);


  setTimeout(function(){
    document.querySelector("#diegol02gif").style.display = "none";
    document.querySelector("#diegol03gif").style.display = "inline";
  }, 3120);

  setTimeout(function(){
    document.querySelector("#diegol03gif").style.display = "none";
    document.querySelector("#diegol04gif").style.display = "inline";
  }, 4400);

  setTimeout(function(){
    document.querySelector("#diegol04gif").style.display = "none";
    document.querySelector("#diegol05gif").style.display = "inline";
  }, 6485);

  setTimeout(function(){
    document.querySelector("#diegol05gif").style.display = "none";
    document.querySelector("#diegol06gif").style.display = "inline";
  }, 7705);


  setTimeout(function(){
    document.querySelector("#diegol06gif").style.display = "none";
    document.querySelector("#diegol07gif").style.display = "inline";
  }, 9705);


  setTimeout(function(){
    document.querySelector("#diegol07gif").style.display = "none";
  }, 12085);



  // RELATO  
  document.querySelector("#oracion01").style.display = "inline";
  anime({ targets: '#oracion01',  opacity: 1, duration: 600, easing: "easeOutExpo" });

  setTimeout(function(){
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion02").style.display = "inline";
    anime({ targets: '#oracion02',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 2005);

  setTimeout(function(){
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion03").style.display = "inline";
    anime({ targets: '#oracion03',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 3120);

  setTimeout(function(){ //y deja al tercero y va a tocar para Burruchaga... 
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion04").style.display = "inline";
    anime({ targets: '#oracion04',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 6600);


  setTimeout(function(){
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion05").style.display = "inline";
    anime({ targets: '#oracion05',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 7900);


  setTimeout(function(){
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion06").style.display = "inline";
    anime({ targets: '#oracion06',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 9000);


  setTimeout(function(){ //Ta-ta-ta-ta-ta-ta-ta-ta...
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion07").style.display = "inline";
    anime({ targets: '#oracion07',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 11200);


  setTimeout(function(){ //Gooooool
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion08").style.display = "inline";
    anime({ targets: '#oracion08',  opacity: 1, duration: 600, easing: "easeOutExpo" });
    anime({ targets: '#elgoldelsiglo .animate',  opacity: 0, duration: 2000, easing: "easeOutExpo" });
    anime({ targets: '.diagrama',  opacity: 0, duration: 2000, easing: "easeOutExpo" });
  }, 12200); //12985


  //SLIDER
  setTimeout(function(){
    document.querySelector('#festejo').style.display = "inline-block";
    anime({ targets: '#festejo',  opacity: 1, duration: 2200, easing: "easeOutExpo" });
  }, 12200);

  setTimeout(function(){ // Gooooool
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion09").style.display = "inline";
    anime({ targets: '#oracion09',  easing: 'easeOutElastic', translateX: [0, 700],  direction: 'normal', loop: false, duration: 600,  opacity: 1, duration: 600, easing: "easeOutExpo" });  
  }, 14500);


  setTimeout(function(){ //¡Quiero llorar!
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion10").style.display = "inline";
    anime({ targets: '#oracion10',  opacity: 1, duration: 1000, easing: "easeOutExpo" });
  }, 18000);


  setTimeout(function(){ // ¡Dios Santo, viva el fútbol!
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion11").style.display = "inline";
    anime({ targets: '#oracion11',  opacity: 1, duration: 1000, easing: "easeOutExpo" });
  }, 21000);


  setTimeout(function(){ // ¡Golaaazooo
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion12").style.display = "inline";
    anime({ targets: '#oracion12',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 23000);



  setTimeout(function(){  //¡Diegoooool!
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion13").style.display = "inline";
    anime({ targets: '#oracion13',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 26000);

  setTimeout(function(){  //¡Maradona! 
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion14").style.display = "inline";
    anime({ targets: '#oracion14',  opacity: 1, duration: 600, easing: "easeOutExpo" });   
  }, 29000);

  setTimeout(function(){ //Es para llorar, perdónenme... 
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion15").style.display = "inline";
    anime({ targets: '#oracion15',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 31000);

  setTimeout(function(){ // Maradona, en una corrida memorable, en la jugada de todos los tiempos...
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion16").style.display = "inline";
    anime({ targets: '#oracion16',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 34500);


  setTimeout(function(){ //Barrilete cósmico
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion17").style.display = "inline";
    anime({ targets: '#oracion17',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 40000);

  setTimeout(function(){ // ¿De qué planeta viniste para dejar en el camino a tanto inglés,
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion18").style.display = "inline";
    anime({ targets: '#oracion18',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 43000);


  setTimeout(function(){ //¿para que el país sea un puño apretado gritando por Argentina? Argentina 2 -
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion19").style.display = "inline";
    anime({ targets: '#oracion19',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 49000);


 
  setTimeout(function(){ //Argentina 2 -  Inglaterra 0.
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion20").style.display = "inline";
    anime({ targets: '#oracion20',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 54000);


  setTimeout(function(){ //Diegol, Diegol, Diego Armando Maradona... 
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion21").style.display = "inline";
    anime({ targets: '#oracion21',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 58500);


  setTimeout(function(){ //Gracias Dios, 
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion22").style.display = "inline";
    anime({ targets: '#oracion22',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 61500);



  setTimeout(function(){ //por el fútbol,
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion23").style.display = "inline";
    anime({ targets: '#oracion23',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 64000);


  setTimeout(function(){  //
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion24").style.display = "inline";
    anime({ targets: '#oracion24',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 65000); 


  setTimeout(function(){ 
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion26").style.display = "inline";
    anime({ targets: '#oracion26',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 67000); 

  setTimeout(function(){  //por estas lágrimas,
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion27").style.display = "inline";
    anime({ targets: '#oracion27',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 68000);


  setTimeout(function(){ //por este 
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion28").style.display = "inline";
    anime({ targets: '#oracion28',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 69000); 


  setTimeout(function(){ // Argentina 2
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
    document.querySelector("#oracion29").style.display = "inline";
    anime({ targets: '#oracion29',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  }, 71100); 



  setTimeout(function(){ //Inglaterra 0.
    document.querySelectorAll('.oracion').forEach(function(el) {  el.style.display = 'none';})
  }, 73200); 


  //MOBILE
  if (window.matchMedia("(min-width: 500px)").matches) {
    //alert("Screen width is at least 500px");
  } else {
    anime({
      targets: '.diagrama, #diegol01, #diegol02, #diegol03, #diegol04, #diegol05, #diegol06, #diegol07, #diegol01gif, #diegol02gif, #diegol03gif, #diegol04gif, #diegol05gif, #diegol06gif, #diegol07gif',

      delay:300,
      easing: 'easeOutElastic',
      translateX: [0, 700],
      easing: 'easeOutElastic',
      direction: 'normal',
      easing: 'easeInOutSine',
      loop: false,
      duration: 13000,
      //delay:500
    });


  }
  //



}


function muteAudio() {  
  x.muted = true;  
  document.querySelector("#mute").style.display = "none";
  anime({ targets: '#mute',  opacity: 0, duration: 600, easing: "easeOutExpo" });
  document.querySelector("#desmute").style.display = "inline";
  anime({ targets: '#desmute',  opacity: 1, duration: 600, easing: "easeOutExpo" });
}

function disableMute() { 
  x.muted = false; 
  anime({ targets: '#desmute',  opacity: 0, duration: 600, easing: "easeOutExpo" });
  document.querySelector("#desmute").style.display = "none";
  anime({ targets: '#mute',  opacity: 1, duration: 600, easing: "easeOutExpo" });
  document.querySelector("#mute").style.display = "inline";
}