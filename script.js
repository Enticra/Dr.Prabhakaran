window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   const testimonials = document.querySelectorAll(".testimonial");
//   const prevBtn = document.getElementById("prev");
//   const nextBtn = document.getElementById("next");
//   let currentTestimonial = 0;
//   testimonials[currentTestimonial].classList.add("active");
  
//   function showNextTestimonial() {
//     testimonials[currentTestimonial].classList.remove("active");     
//     currentTestimonial = (currentTestimonial + 1) % testimonials.length; 
//     testimonials[currentTestimonial].classList.add("active");
//   }
  
//   function showPrevTestimonial() {    
//     testimonials[currentTestimonial].classList.remove("active");
//     currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
//     testimonials[currentTestimonial].classList.add("active");
//   }

//   nextBtn.addEventListener("click", showNextTestimonial);
//   prevBtn.addEventListener("click", showPrevTestimonial);
// });

document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video-element");

  function checkIfVideoInView() {
      const rect = video.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      console.log("Video is in view:", isInView);

      if (isInView) {
          video.play();
      } else {
          video.pause();
      }
  }

  window.addEventListener("scroll", checkIfVideoInView);
  window.addEventListener("resize", checkIfVideoInView); 
  video.addEventListener("fullscreenchange", handleFullscreenChange);
video.addEventListener("webkitfullscreenchange", handleFullscreenChange); // for Safari
video.addEventListener("mozfullscreenchange", handleFullscreenChange);     // for Firefox
video.addEventListener("msfullscreenchange", handleFullscreenChange);      // for IE/Edge

function handleFullscreenChange() {
    if (document.fullscreenElement) {
        video.style.objectFit = "contain"; // Show the entire video in fullscreen
    } else {
        video.style.objectFit = "cover"; // Return to 'cover' when exiting fullscreen
    }
}
});


