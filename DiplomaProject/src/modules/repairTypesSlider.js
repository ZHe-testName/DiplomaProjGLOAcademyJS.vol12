import Slider from '../plugins/sliderClass';

class RepairSlider extends Slider{
    nextSlide(){
        super.nextSlide();
        this.countShow();
    }

    prevSlide(){
        super.prevSlide();
        this.countShow();
    }

    countShow(){
        const current = this.main.querySelector('.slider-counter-content__current');
        const total = this.main.querySelector('.slider-counter-content__total');

        current.textContent = `${this.option.position + 1}`;
        total.textContent = `${this.slides.length}`
    }
};

const repairTypesSlider = new RepairSlider({
    main: '.repair-types-slider-wrap',
    wrap: '.types-repair1',
    nextArrow: '.slider-arrow_right',
    prevArrow: '.slider-arrow_left'
});

repairTypesSlider.countShow();

export default repairTypesSlider;