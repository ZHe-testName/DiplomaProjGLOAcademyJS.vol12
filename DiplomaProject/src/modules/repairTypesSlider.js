import Slider from '../plugins/sliderClass';

class RepairSlider extends Slider{
    nextSlide(){
        super.nextSlide();

        if(this.controlsOn){
            this.countShow();
        }
    }

    prevSlide(){
        super.prevSlide();

        if(this.controlsOn){
            this.countShow();
        }
    }

    countShow(){
        const current = this.main.querySelector('.slider-counter-content__current');
        const total = this.main.querySelector('.slider-counter-content__total');

        current.textContent = `${this.option.position + 1}`;
        total.textContent = `${this.slides.length}`
    }

};

export default RepairSlider;