import Slider from '../plugins/sliderClass';

const reviewSlider = () => {
    const revSliderField = document.querySelector('#reviews'),
        dotsField = revSliderField.querySelector('.slider-dots-reviews'),
        dots = dotsField.querySelectorAll('.dot-reviews');

    if(revSliderField.scrollWidth > 558){
        let slisdeCounter = 0;
    
    const revSlider = new Slider({
        main: '.reviews-slider-wrap',
        wrap: '.reviews-slider',
        nextArrow: '#reviews-arrow_right',
        prevArrow: '#reviews-arrow_left',
        slideTranslate: true
    });

    revSlider.init();
    revSlider.zheStyles('zhe-docs-slider-style', 'zhe-docs-wrap-style', 'zhe-docs-slider-slide-style');

    dotsField.style.display = 'flex';

    revSliderField.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('slider-arrow_left') && (slisdeCounter > 0)){
            slisdeCounter--;
            
            dots.forEach((dot, index) => {
                if(index === slisdeCounter){
                    dot.classList.add('dot_active');
                }else{
                    dot.classList.remove('dot_active');
                }
            });
        }else if(target.classList.contains('slider-arrow_right') && (slisdeCounter < dots.length - 1)){
            slisdeCounter++;

            dots.forEach((dot, index) => {
                if(index === slisdeCounter){
                    dot.classList.add('dot_active');
                }else{
                    dot.classList.remove('dot_active');
                }
            });
        }
    });
    }
    
};

export default reviewSlider;