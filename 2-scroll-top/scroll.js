var navbar = document.getElementById('nav');


console.log(sticky);

function toTop(){
  window.scrollTo(0,0);
  return false;
}


function scrollHandler(){

  if(window.pageYOffset > navbar.offsetTop + 600){
    document.getElementById('scrollTop').style.display = 'block';
  } else{  // jeigu lygu = arba maziau, istrina class sticky
    document.getElementById('scrollTop').style.display = 'none';
  }
}
