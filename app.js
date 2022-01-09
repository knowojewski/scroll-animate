import ScrollAnimate from "./scroll-animate/dist/js/scroll-animate.js";

class Animations {
    firstEl = document.querySelector(".element.fifth");

    init = () => {
        const test = new ScrollAnimate();
        test.addAnimation(this.firstEl, "fade-in", {
            anchor: ".wrapper.fifth",
            speed: 2
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new Animations().init();
});

