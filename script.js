const prevBtn= document.querySelector(".bi-chevron-left");
const nextBtn= document.querySelector(".bi-chevron-right");
const imageSlide=document.querySelector("#main-img");
const allImage=document.querySelectorAll(".other-img");
const preloader=document.querySelector("#preloader")

let i=0

imageSlide.src=allImage[i].src

prevBtn.addEventListener("click", ()=>{
    if(i===0){
        i=4
    }else{
        i--
    }
    imageSlide.src=allImage[i].src
})

nextBtn.addEventListener("click", ()=>{
    if(i===allImage.length-1){
        i=0
    }else{
        i++
    }
    imageSlide.src=allImage[i].src
})

//event listener to know when the page has finish loading
window.addEventListener("load", ()=>{
    preloader.style.display= "none"
})