
document.addEventListener("htmx:afterSwap", function (e) {
    // Перевірка, чи це секція services
    if (e.target && e.target.matches("section.services")) {
        new Swiper('.swiper', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: 30,
        });
    }
});