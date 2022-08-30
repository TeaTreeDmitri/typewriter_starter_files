"use strict";

document.addEventListener("DOMContentLoaded", init);
let i = 0;
let hiddenText;
let shownText;

function init() {
    hiddenText = document.querySelector("#hiddenText").textContent;
    //ABOVE try input field for hidden text (.value)
    shownText = document.querySelector("#typeWriter").textContent;
    document.querySelector("#startButton").addEventListener("click", startTyping)
    console.log("initilased")

}

function startTyping() {
    if (i < hiddenText.length) {
        shownText = shownText + hiddenText[i];
        console.log(shownText);
        document.querySelector("#typeWriter").textContent = shownText;
        if (hiddenText[i] !== " ") {
            //play normal sound

        } else {
            //play space sound
        }
        i++;

        setTimeout(startTyping, 100);
        console.log("i =", i);
        console.log("i < length");
    } else {
        console.log("i > length");
        console.log("i =", i);
        console.log("SLUT")
    }


}