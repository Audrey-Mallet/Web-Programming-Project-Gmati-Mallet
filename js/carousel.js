document.addEventListener('DOMContentLoaded', () => {
    // --- Carousel Component ---
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    if (slides.length > 0 && prevBtn && nextBtn) {
        let currentIndex = 1; // Start with the middle slide active

        function updateCarousel() {
            slides.forEach((slide, index) => {
                slide.classList.remove('active-slide', 'prev-slide', 'next-slide');

                if (index === currentIndex) {
                    slide.classList.add('active-slide');
                } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                    slide.classList.add('prev-slide');
                } else if (index === (currentIndex + 1) % slides.length) {
                    slide.classList.add('next-slide');
                }
            });
        }

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        });

        // Initialize classes
        updateCarousel();
    }
});
