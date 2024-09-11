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