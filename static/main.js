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
    console.log(elem.style)

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

document.addEventListener('DOMContentLoaded', () => {
    const elem = document.getElementById('annoyingLink');

    elem.addEventListener('mouseover', () => moveElem(elem));
});