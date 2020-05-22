import Slider from '../plugins/sliderClass';

const partnersSlider = () => {
    const partners = document.querySelector('#partners'),
        sliderWrap = document.querySelector('.wrapper');
console.log(sliderWrap);
    const pertnerSlider = new Slider({
        main: '#slider-wrap',
        wrap: '.partners-slider',
        nextArrow: '#partners-arrow_right',
        prevArrow: '#partners-arrow_left',
        slideTranslate: true,
    });
    
    pertnerSlider.init();
    pertnerSlider.zheStyles('zhe-docs-slider-style', 'zhe-docs-wrap-style', 'zhe-docs-slider-slide-style');
};

export default partnersSlider;