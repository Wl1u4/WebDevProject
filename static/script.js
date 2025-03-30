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
    document.addEventListener("DOMContentLoaded", function() {
      const navLinks = document.querySelectorAll("nav .nav-links a");
      const currentUrl = window.location.href;
      navLinks.forEach(link => {
        // Check if the current URL includes the link's href
        if (currentUrl.indexOf(link.href) !== -1) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
    
    
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
        const weatherText = `Right now is ${condition}, and it is ${temperature}°C degrees.`;
        
        // Display the message under the "Learn More" section by targeting the container with id "weather-display"
        const weatherDisplay = document.getElementById('weather-display');
        if (weatherDisplay) {
          weatherDisplay.textContent = weatherText;
        }
      })
      .catch(error => console.error('Error fetching weather data:', error));
  });
  











  $(document).ready(function() {
    // Check for both types of carousel containers
    if ($(".gift-images").length > 0) {
      setupImageCarousel(".gift-images");
    }
    if ($(".carousel-container").length > 0) {
      setupImageCarousel(".carousel-container");
    }
  });
  
  function setupImageCarousel(selector) {
    var $carousel = $(selector);
    var $images = $carousel.find("img");
    var currentIndex = 0;
    $images.hide().eq(0).show();
    function showNextImage() {
      $images.eq(currentIndex).fadeOut(500, function() {
        currentIndex = (currentIndex + 1) % $images.length;
        $images.eq(currentIndex).fadeIn(500);
      });
    }
    setInterval(showNextImage, 3000);
  }
  
  

  // Set up directions functionality
var directionsButton = document.getElementById('get-directions');
if (directionsButton) {
  directionsButton.addEventListener('click', function() {
    var originAddress = document.getElementById('origin-address').value;
    if (!originAddress) {
      alert("Please enter your address.");
      return;
    }
    // Use a dedicated variable for the directions API key
    var directionsApiKey = "AIzaSyD_MmXyaws7XhUCXURc-YAAeSjRxooEl1k";
    var destination = "Duquesne Incline, Pittsburgh, PA";
    var mapUrl = "https://www.google.com/maps/embed/v1/directions?key=" +
                 directionsApiKey +
                 "&origin=" + encodeURIComponent(originAddress) +
                 "&destination=" + encodeURIComponent(destination) +
                 "&mode=driving";
    
    // Debug: log the URL to the console to check its correctness
    console.log("Directions URL:", mapUrl);
    
    var mapFrame = document.getElementById('map-frame');
    if (mapFrame) {
      mapFrame.src = mapUrl;
    }
  });
}


