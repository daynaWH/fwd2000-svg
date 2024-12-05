// --------- Navigation Menu Toggle -----------

const navBtn = document.getElementById("nav-btn");
const navBar = document.getElementById("nav-list");
const navItem = document.querySelectorAll(".navigation li");

navBtn.addEventListener("click", function () {
    navBar.classList.toggle("open");
});

navItem.forEach((navItem) =>
    navItem.addEventListener("click", function () {
        navBar.classList.remove("open");
    })
);

// --------- Demo Code -----------

const btnDemo = document.querySelectorAll(".basic-demo-btn");
const demoDesc = document.querySelectorAll(".basic-demo-desc");

btnDemo.forEach((btnDemo) =>
    btnDemo.addEventListener("click", function () {
        let demoDesc = this.nextElementSibling;
        demoDesc.classList.toggle("open");
        console.log(demoDesc);
    })
);
