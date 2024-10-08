import Caesar from './caesar';

var encryptedYDIRoute: string = document.getElementById('Nothing to see here, keep walking!')!.className;
var secretPageAddress: string | null= document.getElementById("annoyingLink")!.getAttribute("href")

var key = 0
for (let i = 0; i < secretPageAddress!.length; i++){
    let numeric_char = Number(secretPageAddress![i]);
    if (!isNaN(numeric_char)){
        key += Number(secretPageAddress![i])        
    }
}
console.log("Key: " + key);

var annoyianceMeter = 0;

function moveElem(elem: HTMLElement | null){
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const elemWidth = elem!.offsetWidth;
    const elemHeight = elem!.offsetHeight;

    const newTop = Math.random() * (viewportHeight - elemHeight);
    const newLeft = Math.random() * (viewportWidth - elemWidth);

    elem!.style.top = `${newTop}px`;
    elem!.style.left = `${newLeft}px`;

    // console.log("Annoyance Meter:" + annoyianceMeter)
    if (annoyianceMeter == 10){
        cloneAnnoyingElem(elem, "Help Me!")
    }

    if (annoyianceMeter == 30){
        cloneAnnoyingElem(elem, "Give Up")
    }

    annoyianceMeter++;
}

function cloneAnnoyingElem(elem, newText){
    const clone = elem.cloneNode(true);
    clone.innerHTML = newText
    clone.addEventListener('mouseover', () => moveElem(clone))
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
    const elem: HTMLElement | null = document.getElementById('annoyingLink');

    elem!.addEventListener('mouseover', () => moveElem(elem));
    elem!.addEventListener('click', redirectToSuccessPage);

});
document.addEventListener("click", ohIMissed);
// Add event listener for when the user leaves the page, displaying "User successfully annoyed" message