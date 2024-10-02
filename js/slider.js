const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

let slideIndex = 0;

// Create dots
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.setAttribute("data-index", i);
  dotsContainer.appendChild(dot);
}

// Show initial slide
slides[slideIndex].style.display = "block";

// Add click event to dots
const dots = document.querySelectorAll(".dot");
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    slideIndex = dot.getAttribute("data-index");
    showSlide();
  });
});

// Auto slide
let autoSlideInterval;
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide();
  }, 3000); // Adjust the interval as needed
}

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

startAutoSlide();
