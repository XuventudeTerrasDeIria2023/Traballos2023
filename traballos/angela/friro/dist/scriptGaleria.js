
const slidesCount = document.querySelectorAll(".product-gallery-swiper-box .swiper-slide").length;

        const swiper = new Swiper(".swiper", {
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            loop: false,
            slidesPerView: "auto",
            spaceBetween: 10,
            preloadImages: false,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: slidesCount / 2,
                loadOnTransitionStart: true,
            },
            watchSlidesProgress: true,
            pagination: {
                el: ".swiper-pagination--mdd",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next-1",
                prevEl: ".swiper-button-prev-1",
            },
            breakpoints: {
                900: {
                    spaceBetween: 10,
                }
            }
        });