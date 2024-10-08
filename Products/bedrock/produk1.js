// JavaScript untuk interaksi jika diperlukan

document.addEventListener('DOMContentLoaded', () => {
    const configSections = document.querySelectorAll('.config-section');

    configSections.forEach(section => {
        const images = section.querySelectorAll('img');

        images.forEach(image => {
            image.addEventListener('click', () => {
                images.forEach(img => img.classList.remove('selected'));
                image.classList.add('selected');
            });
        });
    });

    // Menangani perubahan pada select (opsional)
    const selects = document.querySelectorAll('.config-section select');

    selects.forEach(select => {
        select.addEventListener('change', (e) => {
            console.log(`Pilihan diubah menjadi: ${e.target.value}`);
        });
    });

    // Menangani toggle burger menu untuk responsivitas (opsional)
    const burgerMenu = document.getElementById('burger-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
    const closeButton = document.getElementById('close-button');

    burgerMenu.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        closeButton.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        closeButton.style.display = 'none';
    });

    // Handler for SHOE LAST
    const shoeLastImages = document.querySelectorAll('.shoe-last-option');
    const shoeLastPreview = document.getElementById('shoe-last-preview');

    shoeLastImages.forEach(img => {
        img.addEventListener('click', () => {
            shoeLastImages.forEach(image => image.classList.remove('selected'));
            img.classList.add('selected');
            const description = img.querySelector('img').getAttribute('data-description');
            shoeLastPreview.innerHTML = description;
        });

        img.addEventListener('mouseenter', () => {
            const src = img.querySelector('img').src.replace('-thumb', '');
            shoeLastPreview.innerHTML = `<img src="${src}" alt="Shoe Last Preview" />`;
            shoeLastPreview.style.display = 'block';
            shoeLastPreview.style.left = `${img.getBoundingClientRect().left}px`;
            shoeLastPreview.style.top = `${img.getBoundingClientRect().top + img.offsetHeight}px`;
        });

        img.addEventListener('mouseleave', () => {
            shoeLastPreview.style.display = 'none';
        });
    });

    // Handler for TOE BOX
    const toeBoxImages = document.querySelectorAll('.toe-box-option img');
    const toeBoxPreview = document.getElementById('toe-box-preview');

    toeBoxImages.forEach(img => {
        img.addEventListener('click', () => {
            toeBoxImages.forEach(image => image.classList.remove('selected'));
            img.classList.add('selected');
            const description = img.getAttribute('data-description');
            toeBoxPreview.innerHTML = description; 
        });

        img.addEventListener('mouseenter', () => {
            const src = img.src.replace('-thumb', ''); 
            toeBoxPreview.innerHTML = `<img src="${src}" alt="Toe Box Preview" />`;
            toeBoxPreview.style.display = 'block';
            toeBoxPreview.style.left = `${img.getBoundingClientRect().left}px`; 
            toeBoxPreview.style.top = `${img.getBoundingClientRect().top + img.offsetHeight}px`; 
        });

        img.addEventListener('mouseleave', () => {
            toeBoxPreview.style.display = 'none';
        });
    });

    // Handle "Add to Cart" button click
    const addToCartButton = document.getElementById('add-to-cart-button');
    addToCartButton.addEventListener('click', () => {
        alert('Item added to cart!');
    });

    // Handle changes in the "UPPER" dropdown
    const upperSelect = document.querySelector('.config-section select[name="upper"]');
    const upperOptions = {
        "Badalassi Nemesis": ["Option 1", "Option 2"],
        "Badalassi Vachetta": ["Option 3", "Option 4"],
        "Badalassi Suede": ["Option 5", "Option 6"],
        "Badalassi Nubuck": ["Option 7", "Option 8"]
    };

    upperSelect.addEventListener('change', (e) => {
        const selectedUpper = e.target.value;
        const optionsContainer = document.querySelector('.upper-options');

        // Clear existing options
        optionsContainer.innerHTML = '';

        // Add new options based on the selected upper
        upperOptions[selectedUpper].forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.textContent = option;
            optionsContainer.appendChild(optionElement);
        });
    });
});
