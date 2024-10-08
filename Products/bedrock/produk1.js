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
    const shoeLastDescription = document.getElementById('shoe-last-description');

    shoeLastImages.forEach(img => {
        img.addEventListener('click', () => {

            shoeLastImages.forEach(image => image.classList.remove('selected'));
            
            img.classList.add('selected');
             const description = img.getAttribute('data-description');
            shoeLastDescription.textContent = description;
        });
    });

    // Handle "Add to Cart" button click
    const addToCartButton = document.getElementById('add-to-cart-button');
    addToCartButton.addEventListener('click', () => {
        alert('Item added to cart!');
        // You can add more logic here to actually add the item to a car
    });
});
