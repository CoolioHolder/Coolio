particlesJS('particles-js', 
{
  "particles": {
    "number": {
      "value": 150, // Increase the number of particles for a denser snowfall
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" // Snowflakes are white
    },
    "shape": {
      "type": "circle", // Snowflakes are circular
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.8, // Slightly transparent snowflakes
      "random": true // Random opacity for a more natural look
    },
    "size": {
      "value": 3, // Snowflake size
      "random": true, // Random sizes for variety
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": false // Disable connecting lines for a cleaner look
    },
    "move": {
      "enable": true,
      "speed": 1, // Slow speed for a gentle snowfall
      "direction": "bottom", // Snow falls downward
      "random": true,
      "straight": false,
      "out_mode": "out", // Particles leave the canvas
      "bounce": false,
      "attract": {
        "enable": false
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false // No interaction on hover
      },
      "onclick": {
        "enable": false // No interaction on click
      },
      "resize": true
    },
    "modes": {}
  },
  "retina_detect": true
});
