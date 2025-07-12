 <script>
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

    // Carousel Functionality
    const carouselImages = document.getElementById('carousel-images');
    const carouselPrevBtn = document.getElementById('carousel-prev');
    const carouselNextBtn = document.getElementById('carousel-next');
    const carouselDotsContainer = document.getElementById('carousel-dots');
    const images = carouselImages.querySelectorAll('img');
    let currentIndex = 0;

    function updateCarousel() {
      const offset = -currentIndex * 100;
      carouselImages.style.transform = `translateX(${offset}%)`;
      updateDots();
    }

    function updateDots() {
      carouselDotsContainer.innerHTML = ''; // Clear existing dots
      images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('carousel-dot');
        if (index === currentIndex) {
          dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
          currentIndex = index;
          updateCarousel();
        });
        carouselDotsContainer.appendChild(dot);
      });
    }

    carouselPrevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
      updateCarousel();
    });

    carouselNextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    });

    // Initialize carousel
    updateCarousel();

    // Auto-advance carousel (optional)
    setInterval(() => {
      carouselNextBtn.click();
    }, 5000); // Change image every 5 seconds

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

  </script>
