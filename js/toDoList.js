"use strict";

function Element(name) {
    this.name = name;
}



let elementArray = [];


elementArray.push(new Element("list1"))

console.log(elementArray);

function addList(){
  let myList = document.querySelector(".myInput").value;
  alert(myList)
}







function deleteIcon() {
    let listt = document.querySelector(".myLiElements");
    listt.style.display = "none";
}

function decoration(liElement) {


    if (liElement.style.textDecoration = "none") {
        liElement.style.textDecoration = "line-through"
    } else if (liElement.style.textDecoration = "line-through"
    ) {
        liElement.style.textDecoration = "none"
    }

}
