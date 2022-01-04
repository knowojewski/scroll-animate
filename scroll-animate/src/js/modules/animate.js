import { getPosition } from "../helpers/functions.js";

export default class Animate {
    elementPosition = null;
    screenPositionIn = null;
    screenPositionOut = null;

    constructor(element, animation, options) {
        this.element = element;
        this.animation = animation;
        Object.assign(this, {...options});

        this.init();
    }

    init() {
        this.scrollHandler();
    }

    scrollHandler() {
        if (this.element) {
            this.elementPosition = this.anchor ? getPosition(this.anchor) : getPosition(this.element);
            console.log(this.elementPosition)
            this.screenPositionIn = window.innerHeight * this.offset;
            console.log(this.offset)
            this.screenPositionOut = window.innerHeight * this.offsetOut;

            if (this.elementPosition < this.screenPositionIn) {
                this.animateIn();
            } else if (this.elementPosition > this.screenPositionOut) {
                this.animateOut();
            }
        }
    }

    animateIn = () => {
        console.log("Animate in")
        // if (this.delay !== 0) {
        //     setTimeout(() => {

        //         this.element.classList.remove(`${this.animationOut}`);
        //         this.element.classList.add(`${this.animationIn}`);
        //     }, this.delay);
        // } else {
        //     this.setStyle(this.startStyles, true);

        //     this.element.classList.remove(`${this.animationOut}`);
        //     this.element.classList.add(`${this.animationIn}`);
        // }
    }

    animateOut = () => {
        console.log("Animate out")
        // if (this.delay !== 0) {
        //     setTimeout(() => {
        //         this.element.classList.remove(`${this.animationIn}`);
        //         this.element.classList.add(`${this.animationOut}`);
        //     }, this.delay);
        // } else {
        //     this.element.classList.remove(`${this.animationIn}`);
        //     this.element.classList.add(`${this.animationOut}`);
        // }
    }
}

class ScrollAnimation {
    elementPosition = null;
    screenPositionIn = null;
    screenPositionOut = null;

    constructor({
        element,
        offsetIn,
        animationIn,
        offsetOut,
        animationOut,
        delay = 0,
        container = null,
        startStyles = null
    }) {
        this.element = element;
        this.offsetIn = offsetIn;
        this.animationIn = animationIn;
        this.offsetOut = offsetOut;
        this.animationOut = animationOut;
        this.delay = delay;
        this.container = container;
        this.startStyles = startStyles;

        this.init();
    }

    init = () => {
        this.setStyle(this.startStyles);

        setTimeout(() => {
            this.animateOnScroll();
        }, 100);
    }

    animateOnScroll = () => {
        if (this.element) {
            this.elementPosition = this.container ? this.container.getBoundingClientRect().top : this.element.getBoundingClientRect().top;
            this.screenPositionIn = window.innerHeight * this.offsetIn;
            this.screenPositionOut = window.innerHeight * this.offsetOut;

            if (this.elementPosition < this.screenPositionIn) {
                this.animateIn();
            } else if (this.elementPosition > this.screenPositionOut) {
                this.animateOut();
            }
        }
    }

    animateIn = () => {
        if (this.delay !== 0) {
            setTimeout(() => {
                this.setStyle(this.startStyles, true);

                this.element.classList.remove(`${this.animationOut}`);
                this.element.classList.add(`${this.animationIn}`);
            }, this.delay);
        } else {
            this.setStyle(this.startStyles, true);

            this.element.classList.remove(`${this.animationOut}`);
            this.element.classList.add(`${this.animationIn}`);
        }
    }

    animateOut = () => {
        if (this.delay !== 0) {
            setTimeout(() => {
                this.element.classList.remove(`${this.animationIn}`);
                this.element.classList.add(`${this.animationOut}`);
            }, this.delay);
        } else {
            this.element.classList.remove(`${this.animationIn}`);
            this.element.classList.add(`${this.animationOut}`);
        }
    }

    setStyle = (styles, clear = false) => {
        if (styles) {
            if (!clear) {
                for (const [key, value] of Object.entries(styles)) {
                    this.element.style[key] = value;
                }
            } else {
                for (const [key, value] of Object.entries(styles)) {
                    this.element.style[key] = null;
                }
            }
        }
    }
}