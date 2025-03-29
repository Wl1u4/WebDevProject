document.addEventListener('DOMContentLoaded', function() {
    // 1. Contact Form Validation (only if the form exists)
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function(e) {
        // Get the values from the fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        let errorMessage = '';
    
        // Check that Name is not empty
        if (name === '') {
          errorMessage += "Please fill in your Name.\n";
        }
    
        // Check that Email is not empty and includes '@'
        if (email === '') {
          errorMessage += "Please fill in your Email.\n";
        } else if (!email.includes('@')) {
          errorMessage += "Please enter a valid email address.\n";
        }
    
        // If there is any error, prevent form submission and alert the user
        if (errorMessage !== '') {
          e.preventDefault();
          alert(errorMessage);
        }
      });
    }
    
    // 2. Navigation Active Link Highlighting
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav .nav-links a');
    
    function highlightActiveNav() {
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // Check if the section is near the top of the viewport (50px threshold)
        if (rect.top <= 50 && rect.bottom >= 50) {
          // Remove 'active' from all links
          navLinks.forEach(link => link.classList.remove('active'));
          // Add 'active' to the corresponding nav link
          if (navLinks[index]) {
            navLinks[index].classList.add('active');
          }
        }
      });
    }
    
    // Initialize and update on scroll
    highlightActiveNav();
    window.addEventListener('scroll', highlightActiveNav);
    
    // 3. Fetch and Display Weather Data
    const apiKey = 'dcd1a73e78e446a291652038252903';
    const locationName = 'Pittsburgh'; // Change location as needed
    const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationName}`;
    
    fetch(weatherUrl)
      .then(response => response.json())
      .then(data => {
        // Extract the weather condition and temperature (in Celsius)
        const condition = data.current.condition.text;
        const temperature = data.current.temp_c;
        // Build the message in the desired format
        const weatherText = `Today is a ${condition} day, it is ${temperature}°C degrees.`;
        
        // Display the message under the "Learn More" section by targeting the container with id "weather-display"
        const weatherDisplay = document.getElementById('weather-display');
        if (weatherDisplay) {
          weatherDisplay.textContent = weatherText;
        }
      })
      .catch(error => console.error('Error fetching weather data:', error));
  });
  











  $(document).ready(function() {
    // Only initialize the carousel if the gift-images container exists
    if ($('.gift-images').length > 0) {
      setupImageCarousel();
    }
  });
  
  function setupImageCarousel() {
    // Select the container with the gift images
    var $carousel = $('.gift-images');
    // Select all images within the container
    var $images = $carousel.find('img');
    var currentIndex = 0;
    
    // Hide all images and only show the first one
    $images.hide().eq(0).show();
    
    // Function to show the next image in the carousel
    function showNextImage() {
      $images.eq(currentIndex).fadeOut(500, function() {
        // Calculate the next index (cycle back to 0 if at the end)
        currentIndex = (currentIndex + 1) % $images.length;
        $images.eq(currentIndex).fadeIn(500);
      });
    }
    
    // Set up the carousel to change images every 3 seconds
    setInterval(showNextImage, 3000);
  }
  