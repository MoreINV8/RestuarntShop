let menu = document.querySelector(".menu");
// ตอนเรียก query มาต้องใส่ .class
const showHide = () => {
    menu.classList.toggle("hide");
}

const food = ["./images/pasta.jpg", "./images/burger.jpg", "./images/curryRice.jpg"]
for (let i = 0; i < food.length; i++) {
    const box = document.createElement("li");
    const tagImg = document.createElement("img");
    tagImg.setAttribute("src", food[i]);
    box.appendChild(tagImg)
    document.getElementById("showFood").appendChild(box);
}

const dessert = ["./images/pancake.jpg", "./images/danggo.jpg", "./images/pudding.jpg"]
for (let i = 0; i < dessert.length; i++) {
    const box = document.createElement("li");
    const tagImg = document.createElement("img");
    tagImg.setAttribute("src", dessert[i]);
    box.appendChild(tagImg)
    document.getElementById("showDessert").appendChild(box);
}

const drink = ["./images/cola.jpg", "./images/lime.jpg", "./images/milk tea.jpg"]
for (let i = 0; i < drink.length; i++) {
    const box = document.createElement("li");
    const tagImg = document.createElement("img");
    tagImg.setAttribute("src", drink[i]);
    box.appendChild(tagImg)
    document.getElementById("showDrink").appendChild(box);
}