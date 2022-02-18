import { parallaxTypes } from "../helpers/parallaxes.js";

export default class Parallax {
    blockPosFromTop = null;
    windowPosition = null;
    parallaxTransform = null;

    constructor(element, options) {
        this.element = element;
        this.options = options;

        try {
            this.init();
        } catch (error) {
            console.error(error);
        }
    }

    init() {
        this.checkType();
        this.setAnchor();

        this.updateElementPosition(true);
    }

    checkType() {
        const type = parallaxTypes.find(item => item.name === this.options.type);
        if (!type) throw new Error("Wrong parallax type. Avilable types: vertical, horizontal.");

        this.options.type = {...type};
    }

    setAnchor() {
        if (!this.options.anchor) this.options.anchor = this.element;
    }

    scrollHandler() {
        this.updateElementPosition();
    }

    updateElementPosition = (transition = false) => {
        const {anchor, type, direction, speed, startTransition} = this.options;

        this.anchorPosFromTop = window.pageYOffset + anchor.getBoundingClientRect().top;
        this.windowPosition = window.scrollY - this.anchorPosFromTop + (window.innerHeight - this.options.anchor.offsetHeight) / 2;
        this.parallaxTransition = this.windowPosition * direction * speed;

        this.element.style.transition = `transform ${transition ? startTransition : 0}s`;
        this.element.style.transform = `translate${type.axis}(${this.parallaxTransition}px)`;
    }
}