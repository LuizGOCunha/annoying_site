import Caesar from './cryptography_js/caesar.js';

var encryptedYDIRoute = document.getElementById('Nothing to see here, keep walking!').className;
var secretPageAddress = document.getElementById("annoyingLink").getAttribute("href")

var key = 0
// making calculations for decryption key
for (let i = 0; i < secretPageAddress.length; i++){
    let numeric_char = Number(secretPageAddress[i]);
    if (!isNaN(numeric_char)){
        key += Number(secretPageAddress[i])        
    }
}
console.log("Key: " + key);

var annoyianceMeter = 0;

function moveElem(elem){
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const elemWidth = elem.offsetWidth;
    const elemHeight = elem.offsetHeight;

    const newTop = Math.random() * (viewportHeight - elemHeight);
    const newLeft = Math.random() * (viewportWidth - elemWidth);

    elem.style.top = `${newTop}px`;
    elem.style.left = `${newLeft}px`;

    // console.log("Annoyance Meter:" + annoyianceMeter)
    if (annoyianceMeter == 10){
        cloneAnnoyingElem(elem, "Help Me!", () => alert("See? You can do it! No help needed."), "red")
    }

    if (annoyianceMeter == 30){
        cloneAnnoyingElem(elem, "Give Up", () => alert("Never Give up!"), "black")
    }

    annoyianceMeter++;
}

function cloneAnnoyingElem(elem, newText, annoyingAlert, backgroundColor){
    const clone = elem.cloneNode(true);
    clone.innerHTML = newText;
    clone.href = "#";
    clone.style.backgroundColor = backgroundColor;
    clone.addEventListener('mouseover', () => setTimeout(() => moveElem(clone), 150))
    clone.addEventListener('click', () => annoyingAlert())
    document.body.appendChild(clone)
    clone.style.top = "20px";
    clone.style.left = "20px";
}

function ohIMissed(){
    const missed = new Audio("static/missed.m4a")
    missed.volume = 0.5;
    missed.play();
}

function redirectToSuccessPage(event){
    event.preventDefault();
    let encryptor = new Caesar(key);
    encryptor.reverseKey()
    let YDIRoute = encryptor.encrypt(encryptedYDIRoute)
    console.log(encryptor.key)
    console.log(YDIRoute)
    window.location.href = YDIRoute;
}

document.addEventListener('DOMContentLoaded', () => {
    const elem = document.getElementById('annoyingLink');

    elem.addEventListener('mouseover', () => moveElem(elem));
    elem.addEventListener('click', redirectToSuccessPage);

});
document.addEventListener("click", (e) => {
    if (!e.target.id.includes("annoyingLink")){
        ohIMissed()
    }
});
// Add event listener for when the user leaves the page, displaying "User successfully annoyed" message