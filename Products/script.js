// Making sure DOM (Document Object Model) is fully loaded before any manipulation/changes 
document.addEventListener('DOMContentLoaded', () => {

    /* Hero Carousel Start */
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
        clearInterval(autoSlideHero); 
        autoSlideHero = setInterval(nextSlide, 8000); 
    }
  
    // Hero carousel slides automatically every 8 seconds
    autoSlideHero = setInterval(nextSlide, 8000);
  
    // Reset interval when button is clicked
    document.querySelector('.next').addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();  
    });
  
    // Reset interval when button is clicked
    document.querySelector('.prev').addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();  
    });
    // Hero Carousel End
  
  
    // Product Carousel Start
    let currentProductIndex = 0;
    const productCarousel = document.querySelector('.multi-carousel');
    const productItems = document.querySelectorAll('.product-img');
    const totalProductItems = productItems.length;
    const visibleItems = 4; // Visible number of products at a time
    const itemWidth = productItems[0].offsetWidth + 10; // Width of each image including the gap
  
    function updateProductCarousel() {
        const offset = -currentProductIndex * itemWidth;
        productCarousel.style.transform = `translateX(${offset}px)`;
    }
  
    function nextProductCarousel() {
        if (currentProductIndex < totalProductItems - visibleItems) {
            currentProductIndex++;
            updateProductCarousel();
        } else {
            currentProductIndex = 0; 
            updateProductCarousel();
        }
    }
  
    function prevProductCarousel() {
        if (currentProductIndex > 0) {
            currentProductIndex--;
            updateProductCarousel();
        } else {
            currentProductIndex = totalProductItems - visibleItems; 
            updateProductCarousel();
        }
    }
  
    // Event listeners to product carousel buttons
    document.querySelector('.products-carousel-buttons .next-products').addEventListener('click', () => {
        nextProductCarousel();
    });
  
    document.querySelector('.products-carousel-buttons .prev-products').addEventListener('click', () => {
        prevProductCarousel();
    });
  });
  