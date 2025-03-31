document.addEventListener('DOMContentLoaded', function() {
    // Contact Form
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function(e) {

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        let errorMessage = '';

        if (name === '') {
          errorMessage += "Please fill in your Name.\n";
        }
    
        if (email === '') {
          errorMessage += "Please fill in your Email.\n";
        } else if (!email.includes('@')) {
          errorMessage += "Please enter a valid email address.\n";
        }

        if (errorMessage !== '') {
          e.preventDefault();
          alert(errorMessage);
        }
      });
    }
    
    // Nav links
    document.addEventListener("DOMContentLoaded", function() {
      const navLinks = document.querySelectorAll("nav .nav-links a");
      const currentUrl = window.location.href;
      navLinks.forEach(link => {
        if (currentUrl.indexOf(link.href) !== -1) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
    
    
    // Fetch and Display Weather Data
    //https://www.weatherapi.com/docs/
    const apiKey = 'dcd1a73e78e446a291652038252903';
    const locationName = 'Pittsburgh'; 
    const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationName}`;
    
    fetch(weatherUrl)
      .then(response => response.json())
      .then(data => {
        // Extract the weather ccond n temp (cel)
        const condition = data.current.condition.text;
        const temperature = data.current.temp_c;

        const weatherText = `Right now is ${condition}, and it is ${temperature}°C degrees.`;
        const weatherDisplay = document.getElementById('weather-display');
        if (weatherDisplay) {
          weatherDisplay.textContent = weatherText;
        }
      })
      .catch(error => console.error('Error fetching weather data:', error));
  });
  




    // Sub nav 
$(document).ready(function() {
  // hours
  $("#tab-hours").click(function(){
    $("#content-hours").show();
    $("#content-tours, #content-map").hide();
    $("#tab-hours").addClass("active");
    $("#tab-tours, #tab-map").removeClass("active");
  });
  
  // tours
  $("#tab-tours").click(function(){
    $("#content-tours").show();
    $("#content-hours, #content-map").hide();
    $("#tab-tours").addClass("active");
    $("#tab-hours, #tab-map").removeClass("active");
  });
  
  // map
  $("#tab-map").click(function(){
    $("#content-map").show();
    $("#content-hours, #content-tours").hide();
    $("#tab-map").addClass("active");
    $("#tab-hours, #tab-tours").removeClass("active");
  });
  
  // by default show hours
  $("#content-hours").show();
  $("#content-tours, #content-map").hide();
  $("#tab-hours").addClass("active");
});










  $(document).ready(function() {

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
  
  

  // Map, direction
var directionsButton = document.getElementById('get-directions');
if (directionsButton) {
  directionsButton.addEventListener('click', function() {
    var originAddress = document.getElementById('origin-address').value;
    if (!originAddress) {
      alert("Please enter your address.");
      return;
    }

    var directionsApiKey = "AIzaSyD_MmXyaws7XhUCXURc-YAAeSjRxooEl1k";
    var destination = "Duquesne Incline, Pittsburgh, PA";
    var mapUrl = "https://www.google.com/maps/embed/v1/directions?key=" +
                 directionsApiKey +
                 "&origin=" + encodeURIComponent(originAddress) +
                 "&destination=" + encodeURIComponent(destination) +
                 "&mode=driving";
    

    console.log("Directions URL:", mapUrl);
    
    var mapFrame = document.getElementById('map-frame');
    if (mapFrame) {
      mapFrame.src = mapUrl;
    }
  });
}


