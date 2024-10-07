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

    function searchProducts() {
        const searchInput = document.querySelector('#navbar-search-input').value.toLowerCase();
        const products = document.querySelectorAll('.product');

        products.forEach(product => {
            product.style.display = 'block'; // Ensure all products are always displayed
        });
    }

    // Add event listener for search
    document.querySelector('#navbar-search-input').addEventListener('input', searchProducts);

    // Remove search popup functionality

    // New event listener for search results
    document.getElementById('navbar-search-input').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const products = document.querySelectorAll('.product');
        const resultsList = document.getElementById('results-list');
        const searchResults = document.getElementById('search-results');

        resultsList.innerHTML = '';

        if (query) {
            products.forEach(product => {
                const productName = product.querySelector('h2').textContent.toLowerCase();
                if (productName.startsWith(query)) { 
                    const imgSrc = product.querySelector('.main-image').src;
                    const productName = product.querySelector('h2').textContent;
                    const productPrice = product.querySelector('p').textContent;

                    const li = document.createElement('li');
                    li.innerHTML = `<img src="${imgSrc}" alt="${productName}"><span>${productName} - ${productPrice}</span>`;
                    resultsList.appendChild(li);
                }
            });

            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    });
});
