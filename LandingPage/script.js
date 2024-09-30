// Mobile Menu Toggle
function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
}

// Close mobile menu on link click
function closeMenu() {
  document.getElementById("mobile-menu").style.display = "none";
}

// Cookie Popup
function acceptCookies() {
  document.getElementById("cookie-popup").style.display = "none";
}

//Mobile Menu Toggle (toggleMenu): When a user clicks to open or close the mobile menu, this function checks if the menu is visible (display: block). If it is, the menu is hidden; if it isn't, the menu is displayed.
//Close Mobile Menu (closeMenu): This hides the mobile menu, typically after a user clicks a link.
//Cookie Popup (acceptCookies): When the user accepts cookies, the cookie popup is hidden.
//Each function manipulates the style.display property of elements.

//The toggleMenu function controls the visibility of the mobile menu. It works as follows:
//It first selects the element with the ID "mobile-menu" using document.getElementById.
//The function checks the current display property of this element:
//If the menu is visible (display is "block"), it hides the menu by setting display to "none".
//Otherwise, it shows the menu by changing display to "block".
//This creates a toggle effect, showing or hiding the mobile menu when a user clicks a button.

//In JavaScript, a function is a reusable block of code that performs a specific task. Think of it as a recipe for cooking.
//Example:
//Define a recipe (function):
//function cookPasta() {
//console.log("Boil water");
//console.log("Add pasta");
//console.log("Cook for 10 minutes");
//console.log("Drain and serve");}

//Use the recipe (call the function):
//cookPasta();
//When you call cookPasta(), JavaScript follows the instructions inside, like cooking based on the recipe steps. You can reuse this function whenever you want to cook pasta!

// First Carousel
const prevButtonFirst = document.querySelector(
  ".carousel-navigation-first .prev"
);
const nextButtonFirst = document.querySelector(
  ".carousel-navigation-first .next"
);
const carouselSlideFirst = document.querySelector(".carousel-slide-first");
const imagesFirst = document.querySelectorAll(".carousel-slide-first img");

let indexFirst = 0;

function updateCarouselFirst() {
  const offsetFirst = -indexFirst * (imagesFirst[0].width + 10); // Adjust the 10 to match your margin
  carouselSlideFirst.style.transform = `translateX(${offsetFirst}px)`;
}

nextButtonFirst.addEventListener("click", () => {
  indexFirst = (indexFirst + 1) % imagesFirst.length;
  updateCarouselFirst();
});

prevButtonFirst.addEventListener("click", () => {
  indexFirst = (indexFirst - 1 + imagesFirst.length) % imagesFirst.length;
  updateCarouselFirst();
});

// Initialize
updateCarouselFirst();

//Second Carousel
// Select all the images and bullets (pagination dots) from the second carousel
const slides = document.querySelectorAll(".carousel-slide-second img");
const bullets = document.querySelectorAll(".carousel-bullets-second .bullet");
// Select the next and previous buttons within the second carousel
const nextButton = document.querySelector(".carousel-navigation-second .next");
const prevButton = document.querySelector(".carousel-navigation-second .prev");
// Initialize a variable to keep track of the current slide index
let currentSlide = 0;

// Function to display the current slide
function showSlide(n) {
  // Ensure the slide index stays within the range of available slides
  if (n >= slides.length) {
    currentSlide = 0; // If the index exceeds the total slides, loop back to the first slide
  } else if (n < 0) {
    currentSlide = slides.length - 1; // If the index is negative, go to the last slide
  } else {
    currentSlide = n; // Otherwise, set the current slide to the provided index
  }

  // Move the slides horizontally using CSS 'transform' property
  const slideWidth = slides[0].clientWidth; // Get the width of the first slide (all slides have the same width)
  document.querySelector(
    ".carousel-slide-second"
  ).style.transform = `translateX(${-currentSlide * slideWidth}px)`;

  // Update the "active" state of the bullets (pagination dots)
  bullets.forEach((bullet, index) => {
    bullet.classList.toggle("active", index === currentSlide); // Activate the bullet corresponding to the current slide
  });
}

// Function to move to the next slide
function nextSlide() {
  showSlide(currentSlide + 1); // Show the next slide by incrementing the current slide index
}

// Function to move to the previous slide
function prevSlide() {
  showSlide(currentSlide - 1); // Show the previous slide by decrementing the current slide index
}

// Add event listeners to the navigation buttons (next and previous arrows)
if (nextButton && prevButton) {
  nextButton.addEventListener("click", nextSlide); // Move to the next slide when the "next" button is clicked
  prevButton.addEventListener("click", prevSlide); // Move to the previous slide when the "prev" button is clicked
} else {
  console.error("Next or Prev buttons not found!"); // Log an error if the buttons are not found
}

// Add event listeners to the bullet navigation (pagination dots)
bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    showSlide(index); // Show the slide corresponding to the clicked bullet (dot)
  });
});
