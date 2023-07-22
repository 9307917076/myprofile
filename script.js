let menuBtnLable = document.querySelector(".menu-btn-lable");
let menuBtn = document.querySelector(".bx");
menuBtnLable.addEventListener("click", () => {
    let navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("active");
    console.log(menuBtn)
    if (menuBtn.classList.contains("bx-menu-alt-right")) {
        menuBtn.classList.replace("bx-menu-alt-right", "bx-x");
    } else {
        menuBtn.classList.replace("bx-x", "bx-menu-alt-right");
    }
})

const accordionContent = document.querySelectorAll(".accordion");
accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () => {
        item.classList.toggle("open")
        let description = item.querySelector(".description");
        let closeBtn = item.querySelector("header > span")
        if (item.classList.contains("open")) {
            description.classList.remove("hidden");
            closeBtn.style.transform = 'rotate(45deg)';
        } else {
            description.classList.add("hidden")
            closeBtn.style.transform = 'rotate(0deg)';
        }
        removeOpen(index);
    })
});

function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {

        if (index1 != index2) {
            item2.classList.remove("open");
            let des = item2.querySelector(".description");
            des.classList.add("hidden");
        }
    })
};

const serviceUl = document.querySelectorAll(".service-ul > li");
const serviceDetails = document.querySelectorAll(".serviceDetails > div");
serviceUl.forEach((item, index) => {
    item.addEventListener("click", () => {
        item.classList.add("active-tab-li")
        if (item.classList.contains("active-tab-li")) {
            let serviceDetails = document.querySelectorAll(".serviceDetails > div");
            serviceDetails[index].classList.replace("hidden", "flex");
        } else {
            serviceDetails[index].classList.replace("flex", "hidden");
        }
        removeActive(index)
    })
});

function removeActive(active) {
    serviceUl.forEach((item, index) => {
        if (active != index) {
            item.classList.remove("active-tab-li")
            serviceDetails[index].classList.replace("flex", "hidden");
        }
    })
}













