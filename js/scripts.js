// Toggle Mobile Menu
document.getElementById("menu-toggle").addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
  });
  
  // Toggle Dropdown Menu
  document.getElementById("dropdown-button").addEventListener("click", function () {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("hidden");
  });
  
  // Toggle Mobile Dropdown Menu
  document.getElementById("mobile-dropdown-button").addEventListener("click", function () {
    const mobileDropdownMenu = document.getElementById("mobile-dropdown-menu");
    mobileDropdownMenu.classList.toggle("hidden");
  });

// scripts.js
document.addEventListener("DOMContentLoaded", function() {
  // Select all elements with the class 'animate-fade-in'
  const elements = document.querySelectorAll('.animate-fade-in');

  // Set up the Intersection Observer to trigger when the element is in the viewport
  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.1, // Trigger animation when 10% of the element is visible
  };

  // Callback function that adds the 'visible' class when the element is in the viewport
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add 'visible' class to trigger the animation
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing the element after it becomes visible
      }
    });
  };

  // Create the Intersection Observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each element that should animate on scroll
  elements.forEach(element => {
    observer.observe(element);
  });
});


// scripts.js
document.addEventListener("DOMContentLoaded", function() {
  // Select all elements with the class 'animate-slide-in'
  const elements = document.querySelectorAll('.animate-slide-in');

  // Set up the Intersection Observer to trigger when the element is in the viewport
  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.1, // Trigger animation when 10% of the element is visible
  };

  // Callback function that adds the 'visible' class when the element is in the viewport
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add 'visible' class to trigger the animation
        entry.target.classList.add('visible');
      } else {
        // Remove 'visible' class when the element leaves the viewport
        entry.target.classList.remove('visible');
      }
    });
  };

  // Create the Intersection Observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each element that should animate on scroll
  elements.forEach(element => {
    observer.observe(element);
  });
});



  