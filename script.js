const menuBtn = document.querySelector('.menu-bar')
const sideMenu = document.querySelector('.side-container')

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('active')
    sideMenu.classList.toggle('active')
})