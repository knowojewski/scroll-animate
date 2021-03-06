import { animationTypes } from "./animation-types.js";

const defaultAnimationOptions = {
    type: "reach-leave-bottom",
    offset: 0.8,
    offsetOut: 1,
    speed: 1,
    speedOut: 1,
    delay: 0,
    delayOut: 0,
    anchor: null,
}

const animations = [
    {
        name: "Fade in",
        desc: "Fade in animation.",
        slug:"fade-in",
        class: "fade-in",
    },
    {
        name: "Fade out",
        desc: "Fade out animation.",
        slug:"fade-out",
        class: "fade-out",
    },
    {
        name: "Fade in left",
        desc: "Fade in from left animation.",
        slug:"fade-in-left",
        class: "fade-in-left",
    },
    {
        name: "Fade out left",
        desc: "Fade out to left animation.",
        slug:"fade-out-left",
        class: "fade-out-left",
    },
    {
        name: "Fade in right",
        desc: "Fade in from right animation.",
        slug:"fade-in-right",
        class: "fade-in-right",
    },
    {
        name: "Fade out right",
        desc: "Fade out to right animation.",
        slug:"fade-out-right",
        class: "fade-out-right",
    },
    {
        name: "Fade in left long",
        desc: "Fade in from long left animation.",
        slug:"fade-in-left-long",
        class: "fade-in-left-long",
    },
    {
        name: "Fade out long left",
        desc: "Fade out to long left animation.",
        slug:"fade-out-left-long",
        class: "fade-out-left-long",
    },
    {
        name: "Fade in long right",
        desc: "Fade in from long right animation.",
        slug:"fade-in-right-long",
        class: "fade-in-right-long",
    },
    {
        name: "Fade out long right",
        desc: "Fade out to long right animation.",
        slug:"fade-out-right-long",
        class: "fade-out-right-long",
    },
    {
        name: "Fade in down",
        desc: "Fade in from down animation.",
        slug:"fade-in-down",
        class: "fade-in-down",
    },
    {
        name: "Fade out down",
        desc: "Fade out to down animation.",
        slug:"fade-out-down",
        class: "fade-out-down",
    },
    {
        name: "Fade in long down",
        desc: "Fade in from long down animation.",
        slug:"fade-in-down-long",
        class: "fade-in-down-long",
    },
    {
        name: "Fade out long down",
        desc: "Fade out to long down animation.",
        slug:"fade-out-down-long",
        class: "fade-out-down-long",
    },
    {
        name: "Fade in top",
        desc: "Fade in from top animation.",
        slug:"fade-in-top",
        class: "fade-in-top",
    },
    {
        name: "Fade out top",
        desc: "Fade out to top animation.",
        slug:"fade-out-top",
        class: "fade-out-top",
    },
    {
        name: "Fade in long top",
        desc: "Fade in from long top animation.",
        slug:"fade-in-top-long",
        class: "fade-in-top-long",
    },
    {
        name: "Fade out long top",
        desc: "Fade out to long top animation.",
        slug:"fade-out-top-long",
        class: "fade-out-top-long",
    },
    {
        name: "Zoom in",
        desc: "Zoom in animation.",
        slug:"zoom-in",
        class: "zoom-in",
    },
    {
        name: "Zoom out",
        desc: "Zoom out animation.",
        slug:"zoom-out",
        class: "zoom-out",
    }
];


export { defaultAnimationOptions, animations };