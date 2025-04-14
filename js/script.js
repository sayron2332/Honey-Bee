
document.addEventListener("htmx:afterSwap", function (e) {
    // Перевірка, чи це секція services
    if (e.target && e.target.matches("section.services")) {
        new Swiper('.swiper', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            speed: 500,
            pagination: {
                el: '.swiper-pagination',
            },
            slidesPerView: 3,
            spaceBetween: 30,
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            }

        });
    }
});