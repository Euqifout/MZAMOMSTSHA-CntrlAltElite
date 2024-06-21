const initSlider = () => {
    const imageList = document.querySelector(".rightContent .service_box");
    const slideButtons = document.querySelectorAll(".rightContent .slide-Btn-mp");
    const slideScrollbar = document.querySelector(".service_box .main-slider-scrollbar");
    const slideScroThumb= slideScrollbar.querySelector(".main-scrollbar-thumb");

    slideButtons.forEach(button => {
       button.addEventListener("click", () => {
            const direction = button.id === "prev-slide-mp" ? -1 : 1 ;
            const scrollAmount  =   imageList.clienWidth * direction ;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
       })
    })
}

window.addEventListener("load", initSlider);