var img1 = document.querySelector(".jedan");
var img2 = document.querySelector(".dva");
var img3 = document.querySelector(".tri");
var img4 = document.querySelector(".cetiri");
var img5 = document.querySelector(".pet");
var img6 = document.querySelector(".sest");
var gallery = document.querySelector(".gallery");


document.addEventListener("click", function (event) {
    console.log(event.target);

})
img1.addEventListener("click", select);
img2.addEventListener("click", select);
img3.addEventListener("click", select);
img4.addEventListener("click", select);
img5.addEventListener("click", select);
img6.addEventListener("click", select);
var counter =1;
function select(event) {
    counter++;
    for (var i = 0; i < gallery.children.length; i++) {
        gallery.children[i].classList.remove("selected");
    }

    if (this.width !== 300) {
        event.stopPropagation();
        console.log(event);

    }
    console.log(this.className);

  if(counter === 2){

      this.classList.toggle("selected");
      counter = 0
  }


}