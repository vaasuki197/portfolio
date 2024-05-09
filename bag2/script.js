let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document
    .getElementsByClassName("slideshow")[0]
    .getElementsByTagName("img");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment slide index and reset to 0 if it exceeds the number of slides
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";

  // Change slides every 3 seconds (adjust as needed)
  setTimeout(showSlides, 3000);
}

// JavaScript for manual slideshow with navigation dots
let manualSlideIndex = 0;
showManualSlides(manualSlideIndex);

function showManualSlides(n) {
  let i;
  const slides = document.getElementsByClassName("manualSlides");
  const dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the specific slide
  slides[n].style.display = "block";
  // Add active class to the corresponding dot
  dots[n].className += " active";
}

// Function to handle dot click event
function currentSlide(n) {
  showManualSlides((manualSlideIndex = n - 1));
}
