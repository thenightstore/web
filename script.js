const menubtn = document.querySelector(".menu-btn")
const overlay = document.querySelector(".overlay")
const navlinks = document.querySelector(".nav-links")
menubtn.addEventListener("click", ()=>{
    navlinks.style.left = "0%";
    overlay.style.display = "block"
})
overlay.addEventListener("click", ()=>{
    navlinks.style.left = "-150%";
    overlay.style.display = "none"
})