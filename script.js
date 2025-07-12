// Theme toggle (Light/Dark Mode)
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Set initial theme based on localStorage or system preference
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  htmlElement.classList.add('dark');
} else {
  htmlElement.classList.remove('dark');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  htmlElement.classList.toggle('dark');
  if (htmlElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Hamburger menu functionality
const hamburgerButton = document.getElementById('hamburger-button');
const navLinks = document.querySelector('.nav-links');

hamburgerButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Simple Fade-in animation for sections (re-apply on scroll)
const fadeInSections = document.querySelectorAll('.animate-fadeIn');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    } else {
      // Optional: reset opacity/transform if section goes out of view
      // entry.target.style.opacity = '0';
      // entry.target.style.transform = 'translateY(20px)';
    }
  });
}, { threshold: 0.1 }); // Adjust threshold as needed

fadeInSections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
  observer.observe(section);
});

// Add this to your script.js file

document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.getElementById('carousel-images');
    const carouselPrev = document.getElementById('carousel-prev');
    const carouselNext = document.getElementById('carousel-next');
    const carouselDotsContainer = document.getElementById('carousel-dots');
    const images = carouselImages.querySelectorAll('img');
    const totalImages = images.length;
    let currentIndex = 0;
    let autoSlideInterval;

    // Create carousel dots
    function createDots() {
        for (let i = 0; i < totalImages; i++) {
            const dot = document.createElement('span');
            dot.classList.add('carousel-dot');
            if (i === 0) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetAutoSlide();
            });
            carouselDotsContainer.appendChild(dot);
        }
    }

    // Update active dot
    function updateDots() {
        const dots = carouselDotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Move to a specific slide
    function goToSlide(index) {
        if (index < 0) {
            currentIndex = totalImages - 1;
        } else if (index >= totalImages) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100; // 100% per image
        carouselImages.style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    // Next slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    // Previous slide
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // Auto slide functionality
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000); // Change image every 3 seconds
    }

    // Reset auto slide on manual interaction
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Event listeners for navigation buttons
    carouselNext.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    carouselPrev.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    // Initialize carousel
    createDots();
    startAutoSlide(); // Start auto-sliding when the page loads
});

// Dummy form submission for demonstration (requires backend for real functionality)
document.getElementById('order-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Order placed! (This is a dummy submission. A server-side script is needed to process and email this data.)');
  this.reset(); // Clear the form
});

document.getElementById('message-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Message sent! (This is a dummy submission. A server-side script is needed to process and email this data to pratik_mhnrs2023@kusoa.edu.np.)');
  this.reset(); // Clear the form
});
