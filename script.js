// scripts.js

// Function to handle project button clicks
function showProjectDetails(projectName) {
    console.log("You clicked on " + projectName);
    // You can add more functionality here, like displaying a modal or redirecting
}

// Add event listeners to project buttons after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    const projectButtons = document.querySelectorAll('.project a');

    projectButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const projectName = this.previousElementSibling.alt; // Get the project name from the image alt attribute
            showProjectDetails(projectName);
        });
    });
});
// Show scroll to top button when scrolling down
window.onscroll = function() {
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Smooth scroll to top
document.getElementById("scrollToTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
