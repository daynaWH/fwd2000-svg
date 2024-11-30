// --------- Basic Features Demo Code -----------

const btnDemo = document.querySelectorAll(".basic-demo-btn");
const demoDesc = document.querySelectorAll(".basic-demo-desc");

btnDemo.forEach((btnDemo) =>
    btnDemo.addEventListener("click", function () {
        let demoDesc = this.nextElementSibling;
        demoDesc.classList.toggle("open");
        console.log(demoDesc);
    })
);
