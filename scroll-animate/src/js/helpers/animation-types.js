const animationTypes = [
    {
        name: "reach-leave-bottom",
        desc: "Animate in when element top reached bottom of viewport (with offset) during scrolling down and animate out when element top leaved bottom of viewport (with offset-out) during scrolling up.",
        handler: (args) => { reachLeaveBottom(args); }
    },
    {
        name: "reach-bottom",
        desc: "Animate in when element top reached bottom of viewport (with offset) during scrolling down.",
        handler: (args) => { reachLeaveBottom(args, true, false); }
    }
];

function reachLeaveBottom(args, reach = true, leave = true) {
    if (args.elPosition.top < (window.innerHeight * args.options.offset) && reach) {
        if (!args.element.classList.contains(args.animation.class)) {
            args.element.classList.add(args.animation.class);
            args.element.style.transitionDuration = `${args.options.speed}s`;
            args.element.style.transitionDelay = `${args.options.delay}s`;
        }
    } else if (args.elPosition.top > (window.innerHeight * args.options.offsetOut) && leave) {
        if (args.element.classList.contains(args.animation.class)) {
            args.element.classList.remove(args.animation.class);
            args.element.style.transitionDuration = `${args.options.speedOut}s`;
            args.element.style.transitionDelay = `${args.options.delayOut}s`;
        }
    }
}

export { animationTypes, reachLeaveBottom };