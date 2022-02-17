import Parallax from "./modules/parallax.js";
import Animate from "./modules/animate.js";
import { defaultAnimationOptions } from "./helpers/animations.js";
import { setAnimationOptions } from "./helpers/functions.js";

export default class ScrollAnimate {
    animationsElements = document.querySelectorAll("[data-sa-animation]");
    parallaxElements = document.querySelectorAll("[data-sa-parallax]");
    animationsInst = [];
    parallaxInst = [];

    constructor() {
        this.init();
    }

    init() {
        this.initAnimations();
        this.initParallaxes();

        this.startScrollAnimate();
    }
    
    initAnimations() {
        this.animationsElements.forEach(element => {
            const animation = element.dataset.saAnimation;
            const options = setAnimationOptions(element);

            const animate = new Animate(element, animation, {...options});
            this.animationsInst.push(animate);
        });
    }
    
    initParallaxes() {
        this.parallaxElements.forEach(element => {
            const parallax = new Parallax(element);
            this.parallaxInst.push(parallax);
        });
    }

    addAnimation(element, animation, customOptions = null) {
        const options = setAnimationOptions(element, customOptions);
        const animate = new Animate(element, animation, {...options});

        this.animationsInst.push(animate);
    }

    addParallax() {

    }

    startScrollAnimate() {
        window.addEventListener("scroll", this.scrollEvent);
    }

    scrollEvent = () => {
        this.animationsInst.forEach(animation => { animation.scrollHandler(); });
        this.parallaxInst.forEach(parallax => { parallax.scrollHandler(); });
    }

    restart = () => {
        window.removeEventListener("scroll", this.scrollEvent);
        this.animationsInst.length = 0;
        this.parallaxInst.length = 0;

        this.init();
    }

    destroy = () => {
        window.removeEventListener("scroll", this.scrollEvent);
        this.animationsInst.length = 0;
        this.parallaxInst.length = 0;
    }
}