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

var schoolThumbs = new Swiper(".school_swiper_years", {
    spaceBetween: 0,
    slidesPerView: 14,
    freeMode: true,
    watchSlidesProgress: true,
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
    slidesPerView: 8,
    spaceBetween: 94,
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