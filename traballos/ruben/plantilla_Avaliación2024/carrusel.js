document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    let index = 0;

    function showSlide() {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        slides[index].style.display = 'block';
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide();
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        showSlide();
    }

    document.querySelector('.carousel-next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-prev').addEventListener('click', prevSlide);

    showSlide();
});
