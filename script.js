let sidebar_btn = document.getElementsByClassName("sidebar-btn")[0];

sidebar_btn.addEventListener("click", addSlideClass);

function addSlideClass()
{
    let element = document.getElementsByClassName("menu-tab")[0];
    element.classList.add("slide-animation");
}