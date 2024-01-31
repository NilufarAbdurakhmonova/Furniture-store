
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    login.classList.remove('active');
    cart.classList.remove('active')
    menu.classList.toggle('move')
}
window.onscroll = () => {
    navbar.classList.remove('active')
}


//cart togglle
let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    login.classList.remove('active');
    
}

//login toggle
let login = document.querySelector('#login');

document.querySelector('#user-icon').onclick = () =>{
    login.classList.toggle('active');
    cart.classList.remove('active');
    navbar.classList.remove('active')
}

let header = document.querySelector('.header');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('shadow', window.scrollY > 0)
})