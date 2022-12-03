// toggle menu @ nav bar start
const menu = document.querySelectorAll(".menu") ;
const showSee = () => {
    menu.forEach((liTag) => {
        liTag.classList.toggle("toggle")
    })
}
// toggle menu @ nav bar end