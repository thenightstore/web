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

const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((el) =>

    el.addEventListener("click", () => {
        if (el.classList.contains("faq-active")) {
            el.classList.remove("faq-active");
        } else {
            accordionItem.forEach((el) => el.classList.remove("faq-active"));
            el.classList.add("faq-active");
        }
    })
);