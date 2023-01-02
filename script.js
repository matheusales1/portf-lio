const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);




const item = document.querySelectorAll("[data-anime]");

const animeScroll = ()=>{
    const windowTop = window.pageYOffset + window.innerHeight * 0.40;
    item.forEach(element =>{
        if(windowTop > element.offsetTop){
            element.classList.add('animate');
        }else{
            element.classList.remove('animate');
        }
    });        
};
 window.addEventListener("scroll",()=>{
    animeScroll();
 })




 