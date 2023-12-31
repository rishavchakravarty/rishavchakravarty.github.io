document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Other JavaScript functionalities can be added here.
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Check if the link is internal
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
        // If not, the default action (navigating to a new page) will occur
    });
});

// Dropdown functionality
document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    var isClickInsideAnyDropdown = Array.from(document.querySelectorAll('.dropdown')).some(dropdown => dropdown.contains(event.target));

    if (!isClickInsideAnyDropdown) {
        document.querySelectorAll('.dropdown-content').forEach(dropdownContent => {
            dropdownContent.style.display = 'none';
        });
    }
});

// Back to Top Button Functionality
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dynamic Year Update in Footer
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;