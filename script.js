let sidebar_btn = document.getElementsByClassName("sidebar-btn")[0];

let sidebar_btn_2 = document.getElementsByClassName("sidebar-btn-2")[0];

sidebar_btn_2.addEventListener("click", addSlideBackClass);

sidebar_btn.addEventListener("click", addSlideClass);

function addSlideClass()
{
    let element = document.getElementsByClassName("menu-tab")[0];
    element.classList.add("slide-animation");
    element.classList.remove("slide-back-animation");
    sidebar_btn.style.display = "none";
    setTimeout(function(){
        sidebar_btn_2.style.display = "block";
    }, 1000);
}

function addSlideBackClass()
{
    let element = document.getElementsByClassName("menu-tab")[0];
    element.classList.add("slide-back-animation");
    element.classList.remove("slide-animation");
    sidebar_btn_2.style.display = "none";
    setTimeout(function(){
        sidebar_btn.style.display = "block";
    }, 1000);
}