var calendar = new Swiper(".calendar_swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".calendar_swiper_next",
        prevEl: ".calendar_swiper_prev",
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

var newsGallery = new Swiper(".news_gallery_thumblains", {
    spaceBetween: 37,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
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
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".more_news_next",
        prevEl: ".more_news_prev",
    },
});