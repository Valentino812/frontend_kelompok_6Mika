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
        const resultsList = document.getElementById('results-list');
        const searchResults = document.getElementById('search-results');

        resultsList.innerHTML = '';

        if (searchInput) {
            let hasResults = false;
            products.forEach(product => {
                const productName = product.querySelector('h2').textContent.toLowerCase();
                if (productName.includes(searchInput)) {
                    const imgSrc = product.querySelector('.main-image').src;
                    const productName = product.querySelector('h2').textContent;
                    const productPrice = product.querySelector('p').textContent;

                    const li = document.createElement('li');
                    li.innerHTML = `<img src="${imgSrc}" alt="${productName}"><span>${productName} - ${productPrice}</span>`;
                    resultsList.appendChild(li);
                    hasResults = true;
                }
            });

            searchResults.style.display = hasResults ? 'block' : 'none';
        } else {
            searchResults.style.display = 'none';
        }
    }

   
    document.querySelector('#navbar-search-input').addEventListener('input', searchProducts);


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

    function sortProducts(criteria) {
        const productsContainer = document.querySelector('.products');
        const products = Array.from(productsContainer.children);

        products.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('p').textContent.replace(/[^0-9.-]+/g, ""));
            const priceB = parseFloat(b.querySelector('p').textContent.replace(/[^0-9.-]+/g, ""));
            const nameA = a.querySelector('h2').textContent.toLowerCase();
            const nameB = b.querySelector('h2').textContent.toLowerCase();

            if (criteria === 'price') {
                return priceB - priceA; // Sort by price descending
            } else if (criteria === 'alphabetical') {
                return nameA.localeCompare(nameB); // Sort alphabetically
            }
        });

        products.forEach(product => productsContainer.appendChild(product));
    }

    // Add event listener for the sort dropdown
    document.querySelector('#sort-select').addEventListener('change', (event) => {
        sortProducts(event.target.value);
    });
});
