let list  = document.querySelector(".navList");
let hamburger = document.querySelector(".fa-bars");



hamburger.addEventListener("click",()=>{
hamburger.classList.toggle("fa-x");
list.classList.toggle("navlist-active");
})

let contact = document.querySelector("#contact")

contact.addEventListener("click",()=>{
document.querySelector(".input-container").scrollIntoView({behavior:"smooth"})
})