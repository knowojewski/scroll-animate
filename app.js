import ScrollAnimate from "./scroll-animate/dist/js/scroll-animate.js";

class Animations {
    firstEl = document.querySelector(".element.fifth");

    init = () => {
        const test = new ScrollAnimate();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new Animations().init();
});

