import { defaultAnimationOptions } from "./animations.js";

const setAnimationOptions = (element, customOptions = null) => {
    const elOptions = {...defaultAnimationOptions};
    const anchor = element.dataset?.saAnchor || customOptions?.anchor || elOptions.anchor;

    elOptions.anchor = element.closest(anchor);
    elOptions.type = element.dataset?.saType || customOptions?.type || elOptions.type;
    elOptions.delay = Number(element.dataset?.saDelay) || customOptions?.delay || elOptions.delay;
    elOptions.delayOut = Number(element.dataset?.saDelayOut) || customOptions?.delayOut || elOptions.delayOut;
    elOptions.offset = Number(element.dataset?.saOffset) || customOptions?.offset || elOptions.offset;
    elOptions.offsetOut = Number(element.dataset?.saOffsetOut) || customOptions?.offsetOut || elOptions.offsetOut;
    elOptions.speed = Number(element.dataset?.saSpeed) || customOptions?.speed || elOptions.speed;
    elOptions.speedOut = Number(element.dataset?.saSpeedOut) || customOptions?.speedOut || elOptions.speedOut;

    return elOptions;
}

const getPosition = (element) => {
    const position = element.getBoundingClientRect();

    return position;
}

export { setAnimationOptions, getPosition };