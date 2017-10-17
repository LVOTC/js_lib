var navbar = document.getElementById('nav');

var sticky = navbar.offsetTop;

console.log(sticky);

function scrollHandler(){
  //  jei scroll ekrano daugiau uz 0, pridedam class sticky
  if(window.pageYOffset > sticky + 600){
    navbar.classList.add('sticky');
  } else{  // jeigu lygu = arba maziau, istrina class sticky
    navbar.classList.remove('sticky');
  }
}
