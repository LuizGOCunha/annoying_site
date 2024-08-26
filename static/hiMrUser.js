function redirectToHome(){
    alert("Stop cheating, fat ass")
    window.location.href = "/"
}

function waitAndRedirect(){
    setTimeout(redirectToHome, 11000)
}

document.addEventListener("DOMContentLoaded", waitAndRedirect)