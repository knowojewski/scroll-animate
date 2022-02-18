import { getPosition } from "../helpers/functions.js";
import { animations } from "../helpers/animations.js";
import { animationTypes } from "../helpers/animation-types.js";

export default class Animate {
    animation = null;
    elementPosition = null;

    constructor(element, animation, options) {
        this.element = element;
        this.animationName = animation;
        this.options = {...options};

        try {
            this.init();
        } catch(error) {
            console.error(error);
        }
    }

    init() {
        this.setAnimation();
        this.setAnimationType();

        this.scrollHandler();
    }

    setAnimation() {
        this.animation = animations.find(item => item.slug === this.animationName);
        if (!this.animation) throw new Error("Empty or wrong animation name.");
    }

    setAnimationType() {
        const type = animationTypes.find(item => item.name === this.options.type);
        if (!type) throw new Error("Wrong animation type. Avilable types: reach-leave-bottom, reach-bottom.");

        this.options.type = {...type};
    }

    scrollHandler() {
        if (this.element) {
            this.elementPosition = this.options.anchor ? getPosition(this.options.anchor) : getPosition(this.element);

            this.options.type.handler({
                elPosition: this.elementPosition,
                element: this.element,
                animation: this.animation,
                options: this.options
            });
        }
    }

    get elementClasses() {
        return this.element?.classList;
    }
}