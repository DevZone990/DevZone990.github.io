let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
    // cartItem.classList.remove('active');
    // searchForm.classList.remove('active');
}

// let cartItem = document.querySelector('.cart-items-container');

// document.querySelector('#cart-btn').onclick = ()=>{
//     cartItem.classList.toggle('active');
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
// }
// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = ()=>{
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     cartItem.classList.remove('active');  
//}
Window.onscroll = ()=>{
    navbar.classList.remove('active');
    // cartItem.classList.remove('active');
    // searchForm.classList.remove('active');
}
// ---------------------------------- fin de menu burger---------------
// const $form = document.querySelector('#form');
// const $buttonMailto = document.querySelector('#trucazo');
// $form.addEventListener('submit',habdleSubmit);
// function habdleSubmit(event){
//      event.preventDefault();
//      const form = new FormData(this);
//      console.log(form.post('name'));
//      $buttonMailto.setAttribute('href',`mailto:me@gmail.com?subject=${form.post('name')}${form.post('email')}&body=${form.post('mensaje')}`)
//      $buttonMailto.onclick();
// }

// ---------------------------------- fin de formkarui---------------
let vistaProducto = document.querySelector('.vista-producto');
let vistaBox = vistaProducto.querySelectorAll('.vista');
let header = document.querySelector('.header');

document.querySelectorAll('.box-container .box').forEach(box =>{
    box.onclick = ()=>{
        vistaProducto.style.display ='flex';
        header.style.display='hidden';
        let name = box.getAttribute('data-name');
        vistaBox.forEach(vista => {
          let target = vista.getAttribute('data-target');
            if(name == target){
                vista.classList.add('active');
            }
        });
    };
});

vistaBox.forEach(close =>{
close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    vistaProducto.style.display = 'none';
}
});
// ---------------------------------- fin de vista prodectos---------------
const seccionesOcultas = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('mostrar', entry.isIntersecting);
    })
})
seccionesOcultas.forEach((seccion)=>observer.observe(seccion));
// ---------------------------------- fin de scroll---------------