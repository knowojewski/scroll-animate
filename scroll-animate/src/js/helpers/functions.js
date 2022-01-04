import { defaultAnimationOptions } from "./animations.js";

const setAnimationOptions = (element, customOptions = null) => {
    const elOptions = defaultAnimationOptions;
    const anchor = element.dataset?.saAnchor || customOptions?.anchor || elOptions.anchor;

    elOptions.anchor = document.querySelector(anchor);
    elOptions.delay = Number(element.dataset?.saDelay) || elOptions.delay;
    elOptions.delayOut = Number(element.dataset?.saDelayOut) || elOptions.delayOut;
    elOptions.offset = Number(element.dataset?.saOffset) || elOptions.offset;
    elOptions.offsetOut = Number(element.dataset?.saOffsetOut) || elOptions.offsetOut;
    elOptions.speed = Number(element.dataset?.saSpeed) || elOptions.speed;
    elOptions.speedOut = Number(element.dataset?.saSpeedOut) || elOptions.speedOut;

    return elOptions;
}

const getPosition = (element) => {
    const position = element.getBoundingClientRect().top;

    return position;
}

export { setAnimationOptions, getPosition };