const barIcon =document.querySelector('#barIcon'),
      nav=document.querySelector('.nav'),
      categoriesIcon=document.querySelector('#categoriesIcon'),
      CategoriesDrop=document.querySelector('.Categories-drop'),
      body=document.querySelector('#body'),
      layout=document.querySelector('.layout'),
      login=document.querySelector('#login');

// box links in small screen
barIcon.addEventListener('click',()=>{
    nav.classList.add('leftNav');
    body.classList.add('active');
    layout.classList.add('active')
});
layout.addEventListener('click',()=>{
    layout.classList.remove('active');
    nav.classList.remove('leftNav');
    body.classList.remove('active');
})
body.addEventListener('click',()=>{
    body.classList.remove('actvie')
})
categoriesIcon.addEventListener('click',()=>{
    CategoriesDrop.classList.toggle('show__links')
})
login.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('.loginBox').classList.add('active');
    document.querySelector('.loginBox__content').classList.add('active')
});
document.querySelector('.loginBox__close').addEventListener('click',()=>{
    document.querySelector('.loginBox').classList.remove('active');
    document.querySelector('.loginBox__content').classList.remove('active')
})
// box links in small screen

// scrol top
const scrolTop = document.querySelector('.scroleTop');
window.addEventListener('scroll',()=>{
    if(scrollY > 100){
        scrolTop.style.display='flex'
    }else{
        scrolTop.style.display='none'
    }
})
scrolTop.addEventListener('click',()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
// scrol top


// make nav fixed
window.addEventListener('scroll',()=>{
    if(scrollY > 200){
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
})
// make nav fixed





// cart page
const quantityNumber = document.querySelectorAll(".quantity-number"),
  minus = document.querySelectorAll("#minus"),
  plus = document.querySelectorAll("#plus");

quantityNumber.forEach((element) => {
  element.textContent = 1;
});

// my account page
const dashbordLink = document.querySelector("#dashbordLink");

const leftBox = document.querySelectorAll(".leftBox__link li");

leftBox.forEach((element) => {
  element.addEventListener("click", () => {
    document
      .querySelector(".rightBoxShowActive")
      .classList.remove("rightBoxShowActive");
    document.querySelector(".activeLink").classList.remove("activeLink");
    let a = element.id;
    document.querySelector("." + a).classList.add("rightBoxShowActive");
    element.classList.add("activeLink");
  });
});

