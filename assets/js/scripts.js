function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML ='';
    textoArray.forEach((letra,i) => {
        setTimeout(() => elemento.innerHTML += letra, 65*i)
    });
}

const titulo =document.querySelector('p');
typeWriter(titulo);

function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open')
    }
}
