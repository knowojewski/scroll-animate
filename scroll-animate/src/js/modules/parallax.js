export default class Parallax {
    constructor(element) {
        this.element = element;

        try {
            this.init();
        } catch (error) {
            console.error(error);
        }
    }

    init() {
        // console.log("-------- Parallax module ---------");
        // console.log(this.element);
        this.scrollHandler();
    }

    scrollHandler() {
        // console.log("Parallax on scroll");
    }
}

class ParallaxPlugin {
    blockPosFromTop = null;
    windowPosition = null;
    parallaxTransition = null;

    constructor(element, block, speed, direction, startTransition) {
        this.element = element;
        this.block = block;
        this.speed = speed || 0.2;
        this.direction = direction || 1;
        this.startTransition = startTransition || 1;

        this.init();
    }

    init = () => {
        this.updateElementPosition(true);
    }

    handleScroll = () => {
        this.updateElementPosition(false);
    }

    updateElementPosition = (transition = false) => {
        this.blockPosFromTop = window.pageYOffset + this.block.getBoundingClientRect().top;
        this.windowPosition = window.scrollY - this.blockPosFromTop + (window.innerHeight - this.block.offsetHeight) / 2;
        this.parallaxTransition = this.windowPosition * this.direction * this.speed;

        this.element.style.transition = `transform ${transition ? this.startTransition : 0}s`;

        this.element.style.transform = `translateY(${this.parallaxTransition}px)`;
    }
}