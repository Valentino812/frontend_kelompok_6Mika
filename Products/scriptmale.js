document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    let autoSlideHero;

    function heroCarouselSlide(index) {
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
        heroCarouselSlide(currentIndex + 1);
    }

    function prevSlide() {
        heroCarouselSlide(currentIndex - 1);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideHero);
        autoSlideHero = setInterval(nextSlide, 8000);
    }

    autoSlideHero = setInterval(nextSlide, 8000);

    document.querySelector('.next').addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });
});
