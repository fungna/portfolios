// Header navbar
let nav = document.querySelector(".navbar")
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header_scrolled")
    } else {
        nav.classList.remove("header_scrolled")
    }
}

//  Hide nav
let navLink = document.querySelectorAll(".nav-link, .btn_main");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navLink.forEach(function(a) {
    a.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    })
})