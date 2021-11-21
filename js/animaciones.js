let timeoutID;
let cta = document.getElementsByClassName('cta')[0];



function cambiarClase() {
    cta.classList.replace("bounce-in-fwd", "pulsate-fwd");
}


window.onload = function () {
    timeoutID = window.setTimeout(cambiarClase, 15000);
}



