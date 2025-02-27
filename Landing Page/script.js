// Smooth scroll to sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent!");
});
