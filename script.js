document.addEventListener('DOMContentLoaded', function() {
    // Select the menu icon and the navigation menu
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('.nav');
  
    // Get all the links in the navigation menu
    const links = nav.querySelectorAll('a');
  
    // Add a click event listener to each link
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        // Uncheck the menu icon to close the menu
        menuIcon.checked = false;
      });
    });
  });

  // Get all navigation links
const navLinks = document.querySelectorAll('.navbar a');

// Add a mouseenter event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    // Remove the background color on mouseenter for all links
    navLinks.forEach((otherLink) => {
      otherLink.style.setProperty('--underline-color', 'transparent');
    });

    // Set the background color to green for the active link
    link.style.setProperty('--underline-color', '#4CAF50');
  });
});

// to get the soomther
// JavaScript can be used to toggle the "active" class when a link is clicked.
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a');
  
    navLinks.forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove the "active" class from all links
            navLinks.forEach((navLink) => {
                navLink.classList.remove('active');
            });
  
            // Add the "active" class to the clicked link
            this.classList.add('active');
  
            // Scroll to the target section smoothly
            const targetId = this.getAttribute('href').substr(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth',
            });
        });
    });
  });

     // typing text animation script
     var typed = new Typed(".typing", {
        strings: ["Developer", "Freelancer", "Designer", "Programmer","Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Freelancer", "Designer", "Programmer","Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // "About Me" section appear when it enters the viewport:

    window.addEventListener('scroll', function() {
        var about = document.getElementById('about');
        var rect = about.getBoundingClientRect();
        var windowHeight = window.innerHeight;
        if (rect.top < windowHeight / 2) {
          about.classList.add('show');
        }
      });
      
      // JavaScript to make the About Me section visible on scroll
window.addEventListener('scroll', () => {
    const aboutSection = document.getElementById('about');
    const aboutContent = document.querySelector('.about-content');
    const aboutPosition = aboutSection.getBoundingClientRect().top;
  
    if (aboutPosition < window.innerHeight / 1.5) {
      aboutContent.classList.add('about-visible');
    }
  });
  

  // for skills section smooth scrolling
  document.addEventListener('DOMContentLoaded', function() {
    // Map bars to their respective percentages
    const skillBars = {
        'html-bar': 90,
        'css-bar': 75,
        'js-bar': 72,
        'jQuery-bar': 68
    };

    for (let id in skillBars) {
        animateBar(id, skillBars[id]);
    }
});

function animateBar(id, percentage) {
    const elem = document.getElementById(id);
    let width = 1;
    const interval = setInterval(function() {
        if (width >= percentage) {
            clearInterval(interval);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }, 10); // You can adjust the '10' value to make the animation faster or slower
}

// for the skills section
// Change dots accordingly

$(document).ready(() => {
  // Dot Counter

  let n = 1;

  $("div", ".skill-level").each((i, element) => {
    let hasClass = element.classList.contains("fill");
    if (hasClass) {
      element.classList.add("l" + n, "fadeIn");
    } else {
      element.classList.add("fadeIn");
    }

    // Increase counter by 1 if less than 5 & current has fill class.

    n = n < 5 && hasClass ? n + 1 : 1;
  });
});
 //for skills
 $(document).ready(function() {
  $(`.skill-per`).each(function() {
    var $this = $(this);
    var percentage = $this.attr('percentage');
    $this.css("width", percentage + "%");
    $({
      animatedValue: 0
    }).animate({
      animatedValue: percentage
    }, {
      duration: 1300,
      step: function() {
        $this.attr("percentage", Math.floor(this.animatedValue));
      }
    });
  });
});

document.getElementById('toggle-button').addEventListener('click', function () {
  const card = document.getElementById('card');
  card.classList.toggle('clicked');
});
