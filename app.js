import ScrollAnimate from "./scroll-animate/dist/js/scroll-animate.js";

class Animations {
    firstEl = document.querySelector(".element.first");

    init = () => {
        const test = new ScrollAnimate();
        test.addAnimation(this.firstEl, "fade-in", { anchor: ".test" });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new Animations().init();
});

