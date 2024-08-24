document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('movingButton');

    button.addEventListener('mouseover', () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;

        const newTop = Math.random() * (viewportHeight - buttonHeight);
        const newLeft = Math.random() * (viewportWidth - buttonWidth);

        button.style.top = `${newTop}px`;
        button.style.left = `${newLeft}px`;
    });
});