// instanciate new modal
var modal = new tingle.modal({
    footer: false,
    stickyFooter: true,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['anim'],
    onOpen: function () {
        console.log('modal open');
    },
    onClose: function () {
        console.log('modal closed');
    },
    beforeOpen: function () {
        console.log('Antes de abrir!');
        cta.innerHTML = '!';
        document.getElementsByClassName('tingle-modal-box')[0].classList.add('scale-in-ver-bottom');
    },
    beforeClose: function () {
        // here's goes some logic
        // e.g. save content before closing the modal
        cta.innerHTML = '?';
        return true; // close the modal
        //return false; // nothing happens
    }
});


// set content
modal.setContent('<h2>pronto una sorpresa!</h2><button id="close-modal" class="button-circle">X</button>');



/*
// add a button
modal.addFooterBtn('cerrar', 'tingle-btn tingle-btn--danger', function () {
    // here goes some logic
    modal.close();
});


// add another button
modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--danger', function () {
    // here goes some logic
    modal.close();
});


// open modal
modal.open();

// close modal
modal.close();
*/

function showModal() {
    modal.open();
}
function closeModal() {
    modal.close();
}

cta.addEventListener("click", showModal);

document.getElementById('close-modal').addEventListener("click", closeModal);
