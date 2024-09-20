let currentIndex = 0;
let autoSlideHero;

function heroCorouselSlide(index) {
  const carousel = document.querySelector('.carousel-hero');
  const totalSlides = document.querySelectorAll('.carousel-hero img').length;
  
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    heroCorouselSlide(currentIndex + 1);
}

function prevSlide() {
    heroCorouselSlide(currentIndex - 1);
}

// Resetting the hero carousel auto slide interval
function resetAutoSlide() {
    clearInterval(autoSlideHero); // Clearing
    autoSlideHero = setInterval(nextSlide, 8000); // Restarting
}
  
// Execute event when the HTML loading is completed
document.addEventListener('DOMContentLoaded', () => { 
    // The hero carousel slides automaticly every 8 seconds
    autoSlideHero = setInterval(nextSlide, 8000);

    // Reset interval when next button is clicked
    document.querySelector('.next').addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();  
    });

    // Reset interval when prev button is clicked
    document.querySelector('.prev').addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();  
    });
})