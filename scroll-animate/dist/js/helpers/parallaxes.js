const defaultParallaxOptions = {
    type: "vertical",
    anchor: null,
    direction: 1,
    speed: 0.2,
    startTransition: 1
}

const parallaxTypes = [
    {
        name: "vertical",
        desc: "description",
        axis: "Y"
    },
    {
        name: "horizontal",
        desc: "description",
        axis: "X"
    }
]

export { parallaxTypes, defaultParallaxOptions }