function selectImgBorder (){
    var withBorder = document.querySelector("img");
    withBorder.removeAttribute("class");
    withBorder.parentElement.nextElementSibling.firstElementChild.nextElementSibling.className = "selected";
}

selectImgBorder();