import Parallax from "./modules/parallax.js";
import Animate from "./modules/animate.js";
import BlocksScrolling from "./modules/blocks-scrolling.js";
import { defaultAnimationOptions } from "./helpers/animations.js";
import { setAnimationOptions, setParallaxOptions } from "./helpers/functions.js";

export default class ScrollAnimate {
    animationsElements = [];
    parallaxElements = [];
    blocksScrollingElements = [];
    animationsInst = [];
    parallaxInst = [];
    blocksScrollingInst = [];

    constructor() {
        this.init();
    }

    init() {
        this.setElements();
        this.initAnimations();
        this.initParallaxes();
        this.initBlocksScrolling();

        this.startScrollAnimate();
    }

    setElements() {
        this.animationsElements = document.querySelectorAll("[data-sa-animation]");
        this.parallaxElements = document.querySelectorAll("[data-sa-parallax]");
        this.blocksScrollingElements = document.querySelectorAll("[data-sa-blocks-scrolling]");
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
            const options = setParallaxOptions(element);

            const parallax = new Parallax(element, {...options});
            this.parallaxInst.push(parallax);
        });
    }

    initBlocksScrolling() {
        this.blocksScrollingElements.forEach(element => {
            const scrolling = new BlocksScrolling(element);

            this.blocksScrollingInst.push(scrolling);
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
        this.blocksScrollingInst.length = 0;

        this.init();
    }

    destroy = () => {
        window.removeEventListener("scroll", this.scrollEvent);
        this.animationsInst.length = 0;
        this.parallaxInst.length = 0;
        this.blocksScrollingInst.length = 0;
    }
}