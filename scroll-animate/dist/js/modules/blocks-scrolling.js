export default class BlocksScrolling {
    element = null;
    lastScrollTop = 0;
    scrollTop = 0;
    scrollLeft = 0;
    
    constructor(element) {
        this.element = element;

        try {
            this.init();
        } catch (error) {
            console.error(error);
        }
    }

    init() {
        this.addEvents();
    }

    addEvents() {
        this.element.addEventListener("wheel", this.scrollHandler, { passive: false });
        this.element.addEventListener("touchmove", this.scrollHandler, { passive: false });
    }

    scrollHandler(e) {
        console.log("Scroll");
        e.preventDefault();
        e.stopPropagation();
    }
}