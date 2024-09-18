const topBtn = document.getElementById('topButton')
// show or hide on croll
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        topBtn.classList.remove('hidden')
    } else{
        topBtn.classList.add('hidden')
    }
}
// scroll smoothly to the top
topBtn.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
// hide and show menu

const menuBar = document.getElementById('menu-bar')
const hamburgerbar = document.getElementById('showlinks')
function showsidebar(){
    menuBar.classList.remove('hidden')
    hamburgerbar.classList.add('hidden')
}
function hidesidebar(){ 
    menuBar.classList.add('hidden')
    hamburgerbar.classList.remove('hidden')
} 