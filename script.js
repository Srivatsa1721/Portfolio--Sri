// Open the menu when clicking the menu icon
document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('menu-overlay').style.height = '100%';
    document.body.classList.add('menu-open');
});

// Close the menu when clicking the close button
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('menu-overlay').style.height = '0%';
    document.body.classList.remove('menu-open');
});

// Handle clicks on menu links for smooth scrolling
document.querySelectorAll('.menu-overlay a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default page jump

        let targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }

        // Close the menu after clicking a link
        document.getElementById('menu-overlay').style.height = '0%';
        document.body.classList.remove('menu-open');
    });
});

// Load the first section when the page loads
document.addEventListener("DOMContentLoaded", function () {
    let hash = window.location.hash;
    if (hash) {
        let targetSection = document.querySelector(hash);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    }
});

// Typing effect with infinite loop
document.addEventListener("DOMContentLoaded", function () {
    const text = "Let's Connect! 🙌";
    let i = 0;
    let isDeleting = false;
    const speed = 100; // Typing speed in milliseconds
    const delayBetweenLoops = 1000; // Pause before restarting
    const heading = document.getElementById("typing-heading");

    function typeEffect() {
        if (!isDeleting) {
            heading.innerHTML = text.substring(0, i);
            i++;

            if (i > text.length) {
                isDeleting = true;
                setTimeout(typeEffect, delayBetweenLoops);
                return;
            }
        } else {
            heading.innerHTML = text.substring(0, i);
            i--;

            if (i < 0) {
                isDeleting = false;
            }
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});
