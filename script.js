// Function to toggle the navigation menu
function toggleMenu() {
    const nav = document.querySelector('nav'); // Select the navigation element
    nav.classList.toggle('visible'); // Toggle the 'visible' class
}

// Close the navigation menu when clicking outside
function closeMenu(event) {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger-icon');
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
        nav.classList.remove('visible');
    }
}

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a'); // Select all links in the navigation
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const targetId = link.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId); // Select the target section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Enable smooth scrolling
                block: 'start' // Scroll to the top of the section
            });
        }
    });
});


// Function to filter projects by category
function filterProjects(category) {
    const projects = document.querySelectorAll('.Project-Card'); // Select all project cards
    projects.forEach(project => {
        if (category === 'All' || project.dataset.category === category) {
            project.style.display = 'block'; // Show matching projects
        } else {
            project.style.display = 'none'; // Hide non-matching projects
        }
    });
}

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const closeLightbox = document.querySelector('.lightbox .close');

// Open lightbox when an image is clicked
document.querySelectorAll('.Project-Card img').forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // Show the lightbox
        lightboxContent.src = image.src; // Set the lightbox image source
        lightboxContent.alt = image.alt; // Set the lightbox image alt text
    });
});

// Close lightbox when the close button is clicked
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Hide the lightbox
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none'; // Hide the lightbox
    }
});


// Real-time validation for the "Contact" form
const nameInput = document.getElementById('Name');
const emailInput = document.getElementById('Email');
const messageInput = document.getElementById('Message');

// Function to show error messages
function showError(input, message) {
    const errorElement = input.nextElementSibling; // Assume the error message is the next sibling
    errorElement.textContent = message; // Set the error message
    errorElement.style.color = 'red'; // Style the error message
}

// Function to clear error messages
function clearError(input) {
    const errorElement = input.nextElementSibling; // Assume the error message is the next sibling
    errorElement.textContent = ''; // Clear the error message
}

// Validate Name in real-time
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required.');
    } else {
        clearError(nameInput);
    }
});

// Validate Email in real-time
emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        showError(emailInput, 'Email is required.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        showError(emailInput, 'Please enter a valid email address.');
    } else {
        clearError(emailInput);
    }
});

// Validate Message in real-time
messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required.');
    } else {
        clearError(messageInput);
    }
});

// Initialize all functionality
function initialize() {
    const hamburger = document.querySelector('.hamburger-icon');
    hamburger.addEventListener('click', toggleMenu);
    document.addEventListener('click', closeMenu);
    enableSmoothScrolling();
    setupLightbox();
    setupFormValidation();
}

// Run initialization on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initialize);