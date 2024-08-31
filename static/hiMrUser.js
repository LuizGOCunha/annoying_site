function redirectToHome(){
    alert("No cheating")
    window.location.href = "/"
}

function waitAndRedirect(){
    setTimeout(redirectToHome, 11000)
}

document.addEventListener("DOMContentLoaded", waitAndRedirect)