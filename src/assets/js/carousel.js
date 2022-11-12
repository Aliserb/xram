var swiper = new Swiper(".calendar_swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".calendar_swiper_next",
        prevEl: ".calendar_swiper_prev",
    },
});

var swiper = new Swiper(".ask_question_swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: false,
    navigation: {
        nextEl: ".ask_question_next button",
    },
});