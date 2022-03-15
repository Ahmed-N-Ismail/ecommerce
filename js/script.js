// index page slider 

let slider =document.querySelectorAll('.slider-box'),
    btnNext=document.querySelector('.bntnext'),
    btnPre=document.querySelector('.bntpre');

btnNext.addEventListener('click',()=>{
    document.querySelector('.slider .slider-box.active').classList.remove('active');
    slider[1].classList.add('active');
});
btnPre.addEventListener('click',()=>{
    document.querySelector('.slider .slider-box.active').classList.remove('active');
    slider[0].classList.add('active');
});