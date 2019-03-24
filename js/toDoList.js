"use strict";
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
