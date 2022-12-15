// toggle menu @ nav bar start
const menu = document.querySelectorAll(".menu");
const showSee = () => {
    menu.forEach((liTag) => {
        liTag.classList.toggle("toggle");
    })
}
// toggle menu @ nav bar end

// switch picture start
const box_block = document.getElementById("background-box");
const pics = ["./images/cookies.jpg", "./images/chips.jpg", "./images/pasta.jpg", "./images/pancake.jpg", "./images/sandwiches.jpg", "./images/tea.jpg", "./images/coffee.jpg"];
let at_pic = 0;
const show_hide = () => {
    box_block.style.backgroundImage = `url("${pics[at_pic]}")`;
    at_pic++;
    if (at_pic > pics.length - 1) {
        at_pic = 0;
    }
    setTimeout(show_hide, 3000);
}

show_hide();
// switch picture end

