var calendar = new Swiper(".calendar_swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".calendar_swiper_next",
        prevEl: ".calendar_swiper_prev",
    },
    breakpoints: {
        570: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        840: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
});

var askQuestion = new Swiper(".stories_row", {
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: false,
    breakpoints: {
        620: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        880: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    },
    navigation: {
        nextEl: ".stories_swiper_next",
        prevEl: ".stories_swiper_prev",
    },
});

var askQuestion = new Swiper(".ask_question_swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: false,
    navigation: {
        nextEl: ".ask_question_next button",
    },
});

var askQuestion = new Swiper(".split_banner_swiper", {
    slidesPerView: 1,
    allowTouchMove: false,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        440: {
          slidesPerView: 2,
        },
        720: {
            slidesPerView: 3,
        },
    },
});

var newsGallery = new Swiper(".news_gallery_thumblains", {
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    spaceBetween: 13,
    breakpoints: {
        1100: {
            slidesPerView: 4,
            spaceBetween: 37,
        },
    },
});

var newsGalleryThumbs = new Swiper(".news_gallery", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".news_gallery_next",
        prevEl: ".news_gallery_prev",
    },
    thumbs: {
        swiper: newsGallery,
    },
});

var moreNews = new Swiper(".more_news", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".more_news_next",
        prevEl: ".more_news_prev",
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var schoolThumbs = new Swiper(".school_swiper_years", {
    spaceBetween: 0,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        1100: {
            slidesPerView: 14,
            spaceBetween: 0,
        },
    },
  });
var schoolThumbsContent = new Swiper(".school_swiper_content", {
    spaceBetween: 0,
    navigation: {
        nextEl: ".school_swiper_next",
        prevEl: ".school_swiper_prev",
},
    thumbs: {
    swiper: schoolThumbs,
},
});

var moreNews = new Swiper(".movie_select_series", {
    slidesPerView: 10,
    spaceBetween: 16,
    navigation: {
        nextEl: ".movie_select_next",
        prevEl: ".movie_select_prev",
    },
});

var historyThumbs = new Swiper(".history_thumbs_swiper", {
    slidesPerView: 4,
    spaceBetween: 94,
    breakpoints: {
        720: {
            slidesPerView: 6,
            spaceBetween: 94,
        },
        840: {
            slidesPerView: 8,
            spaceBetween: 94,
        },
    },
  });
var historySwiper = new Swiper(".history_swiper", {
    spaceBetween: 0,
    navigation: {
        nextEl: ".history_thumbs_next",
        prevEl: ".history_thumbs_prev",
},
    thumbs: {
    swiper: historyThumbs,
},
});

var moreNews = new Swiper(".saint_content_item_images_swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.saints_swiper_pagination',
        clickable: true,
    },
});


window.addEventListener('resize', () => {
    let peoplesSwiper = document.querySelectorAll('.peoples_swiper');
    let peoplesSwiperCount = 0;

    peoplesSwiper.forEach(people => {
        let peopleSwiperWrapper = people.querySelector('.peoples_swiper_wrapper');
        peoplesSwiperCount += 1;
        let peoplesSwiperId = 'people_swiper_number-' + peoplesSwiperCount;
        people.classList.add(peoplesSwiperId);
        
        if (document.documentElement.clientWidth < 940) {
            people.classList.add('swiper');
            peopleSwiperWrapper.classList.add('swiper-wrapper');

            var peoplesSlider = new Swiper('.' + peoplesSwiperId, {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: '.' + peoplesSwiperId + ' .swiper_pagination',
                    clickable: true,
                },
            });
        } else {
            people.classList.remove('swiper');
            peopleSwiperWrapper.classList.remove('swiper-wrapper'); 
        }
    })
});