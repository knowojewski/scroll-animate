const defaultAnimationOptions = {
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
        inClass: "fade-in",
        outClass: "fade-out",
    }
];

export { defaultAnimationOptions, animations };