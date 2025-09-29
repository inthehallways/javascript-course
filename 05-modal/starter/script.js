// modal development hour 1 - foundation & class toggling
'use strict';

console.log('=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING');

/*
What We're Building Today:
- A complete modal window component
- Modal opens when clicking any "Show modal" button
- Modal closes when clicking the "×" button or overlay
- Professional class-based show/hide functionality
- Reusable helper functions for clean code

Key Concepts:
- DOM element selection and caching
- Class manipulation for show/hide
- Event listeners for user interaction
- DRY (Don't Repeat Yourself) principles
*/

// modal element
const modalEl = document.querySelector('.modal');

// overlay modal
const overlayEl = document.querySelector('.overlay');

// close modal
const btnCloseModalEl = document.querySelector('.close-modal');

// open modal 
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// open functions
const openModal = function() {
    // remove hidden class from modal to show it
    modalEl.classList.remove('hidden');

    // remove hidden class from overlay to show background
    overlayEl.classList.remove('hidden');
}

// close actions
const closeModal = function () {
    modalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
}

// event listeners
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);