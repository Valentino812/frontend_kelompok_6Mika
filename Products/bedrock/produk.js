// JavaScript untuk interaksi jika diperlukan

document.addEventListener('DOMContentLoaded', () => {
    // Menangani klik pada gambar dalam config-section
    const configSections = document.querySelectorAll('.config-section');

    configSections.forEach(section => {
        const images = section.querySelectorAll('img');

        images.forEach(image => {
            image.addEventListener('click', () => {
                // Hapus kelas 'selected' dari semua gambar dalam section
                images.forEach(img => img.classList.remove('selected'));
                // Tambahkan kelas 'selected' pada gambar yang diklik
                image.classList.add('selected');
            });
        });
    });

    // Menangani perubahan pada select (opsional)
    const selects = document.querySelectorAll('.config-section select');

    selects.forEach(select => {
        select.addEventListener('change', (e) => {
            // Anda dapat menambahkan logika tambahan di sini jika diperlukan
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

    // Handler untuk SHOE LAST
    const shoeLastImages = document.querySelectorAll('.shoe-last-option');
    const shoeLastDescription = document.getElementById('shoe-last-description');

    shoeLastImages.forEach(img => {
        img.addEventListener('click', () => {
            // Hapus kelas 'selected' dari semua gambar
            shoeLastImages.forEach(image => image.classList.remove('selected'));
            
            // Tambahkan kelas 'selected' pada gambar yang diklik
            img.classList.add('selected');
            
            // Perbarui deskripsi
            const description = img.getAttribute('data-description');
            shoeLastDescription.textContent = description;
        });
    });
});
