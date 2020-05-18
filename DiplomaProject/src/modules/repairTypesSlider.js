import Slider from '../plugins/sliderClass';

const repairTypesSlider = new Slider({
    main: '.repair-types-slider-wrap',
    wrap: '.types-repair1',
    nextArrow: '.slider-arrow_right',
    prevArrow: '.slider-arrow_left',
    infinity: true
});

export default repairTypesSlider;