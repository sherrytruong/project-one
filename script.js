// ABOUT LINK POP UP MODAL (Inspired by: https://www.w3schools.com/howto/howto_css_modals.asp)

// Get the modal with text
const popModal = document.getElementById('popup-modal');

// Get the link that opens the modal
const modalLink = document.getElementById('modal-link');

// Get the element that closes the modal
const closeModal = document.getElementsByClassName('close-modal')[0];

// When user clicks on "About" link in the navigation, modal will pop up.  
modalLink.addEventListener('click', function(){
    popModal.style.display = "block";
});

// When user clicks on the "X" icon, the modal will close. 
closeModal.addEventListener('click', function(){
    popModal.style.display = "none";
});

// HAMBURGER MENU

// Get the hamburger button
const hamburger = document.getElementById('hamburger');

// Get the navigation links
const navLinks = document.getElementById('nav-mobile-links');

// When user clicks on the hamburger menu, toggle the class name with show to display nav links (toggle between display block and display none)
hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('show');
});