const header = document.querySelector("header")
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 140)

})
const buttonMenu = document.querySelector("#menu-icon")
const headerNav = document.querySelector(".header-nav")

buttonMenu.addEventListener("click", () => {
    buttonMenu.classList.toggle("bx-x")
    headerNav.classList.toggle("open")



})