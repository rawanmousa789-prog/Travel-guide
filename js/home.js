let hoverBox = document.querySelector( '.hover-box');
let hoverI =document.querySelector('.hover-i');
let scrollBtn = document.querySelector('.scroll-btn');
let btnDestinations =document.querySelector('.btn-Destinations');
let iDestinations = document.querySelector('.fa-arrow-right');


hoverBox.onmouseover =()=>{
    hoverI.style.boxShadow = `
        0 0 15px #ffc107e6, 
        0 0 30px #ffc10799,
        0 0 50px #ff98004d`;
    }
hoverBox.onmouseleave =()=>{
    hoverI.style.boxShadow = 'none';
    }
    
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

