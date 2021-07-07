// ABOUT LINK POP UP MODAL 

// Get the modal with text
const popModal = document.getElementById('popup-modal');

// Get the link that opens the modal
const modalLink = document.getElementbyId('modal-link');

// Get the element that closes the modal
const closeModal = document.getElementsByClassName('close-modal')[0];

// When user clicks on "About" link in the navigation, modal will pop up.  
modalLink.addEventListener('click', function(){
    popModal.style.display = "block";
    console.log("modal pop!");
});

// When user clicks on the "X" icon, the modal will close. 
closeModal.addEventListener('click', function(){
    popModal.style.display = "none";
});

