let currentIndex = 0;
let autoSlideInterval;

function startCarousel() {
    const slides = document.querySelectorAll('.carousel-item');

    function showSlide(index) {
        slides.forEach((slide) => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    autoSlideInterval = setInterval(nextSlide, 3000);

    showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    startCarousel();
});