function toggleMenu() {
  const menu = document.getElementById('navMenu');
  const icon = document.getElementById('toggler-icon');
  menu.classList.toggle('open');
  icon.className = menu.classList.contains('open') ? 'fa fa-times' : 'fa fa-bars';
}

let scrollBtn = document.querySelector('.scroll-btn');
let btnDestinations =document.querySelector('.btn-Destinations');
let iDestinations = document.querySelector('.fa-arrow-right');

    
btnDestinations.onmouseover=()=>{
    iDestinations.style.marginLeft ='7px';
    }
    btnDestinations.onmouseleave=()=>{
    iDestinations.style.marginLeft ='0px';
    }
window.onscroll =()=>{
    if(scrollY == 500){
        scrollBtn.style.display = 'flex';
    }else{
        scrollBtn.style.display = 'none';
    }
}

