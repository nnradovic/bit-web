var body = document.querySelector("body");

function createDropdown(strArr, parentNode, name){
    var select = document.createElement("select");
    select.name = name
    strArr.forEach(function (element){
        var option = document.createElement("option");
        option.value = element;
        option.textContent = element;
        select.appendChild(option);
    })
    body.appendChild(select);
}


createDropdown(["volvo", "mercedes", "fiat", "renault"], body, "cars");
createDropdown(["srbija", "nemacka", "madjarska"], body, "drzave");

