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

    console.log("Annoyance Meter:" + annoyianceMeter)

    annoyianceMeter++;
}

document.addEventListener('DOMContentLoaded', () => {
    const elem = document.getElementById('annoyingLink');

    elem.addEventListener('mouseover', () => moveElem(elem));
});