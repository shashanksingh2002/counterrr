const increement = document.querySelector("#increement");
const decreement = document.querySelector("#decreement");
const save = document.querySelector("#save");
const counter = document.querySelector("h2");
const display = document.querySelector("#savecountText");
const reset = document.querySelector("#reset");

let count = 0;
let saveStr = "Previous-Count: ";

const displayCount = () => counter.innerText = count;
const displayText = () => {
    saveStr = saveStr + count + "-";
    display.innerText = saveStr;
};

increement.addEventListener('click', () => {
    ++count;
    counter.style.fontSize = "6em";
    displayCount();
});

decreement.addEventListener('click', () => {
    if (!count) {
        counter.innerText = "Cannot Go Negative";   
        counter.style.fontSize="2.5em";
    }
    else {
        --count;
        displayCount();
    }
});

save.addEventListener('click', () => {
    if (counter.innerText !== "Cannot Go Negative") {
        displayText();
    }
});

reset.addEventListener('click', () => {
    count = 0;
    counter.style.fontSize = "6em";
    saveStr = "Previous-Count: ";
    display.innerText = saveStr;
    displayCount();
});
