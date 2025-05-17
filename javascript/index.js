document.addEventListener("DOMContentLoaded", function () {
    const leftButton = document.querySelector(".carousel__button--left");
    const rightButton = document.querySelector(".carousel__button--right");
    const track = document.querySelector(".carrosel__track");

    let currentIndex = 0;
    const slides = document.querySelectorAll(".carrosel__slide");
    const totalSlides = slides.length;

    
    function moveCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    
    leftButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1; 
        }
        moveCarousel();
    });

    
    rightButton.addEventListener("click", function () {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        moveCarousel();
    });
});
