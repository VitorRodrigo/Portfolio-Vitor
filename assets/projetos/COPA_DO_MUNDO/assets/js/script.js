$('.grupos').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
   
  });


var baixar = document.querySelector('.seta');
var subida = document.querySelector('#seta-img1');
var descer = document.querySelector('#seta-img');

baixar.addEventListener("click",function(){
  var container =document.querySelector('.terceiro-dia');

  if(container.style.display ==="none"){
    container.style.display ="block";
   subida.style.display="block";
   descer.style.display="none";
  
  }else{
    container.style.display ="none";
    subida.style.display="none";
    descer.style.display="block";
    
  }
})


