import Slider from '../plugins/sliderClass';

const mobProblemSlider = () => {
    const problems = document.getElementById('problems'),
        mobProblemsField = problems.querySelector('.desktop-hide'),
        mobProblemSlides = mobProblemsField.querySelectorAll('.problems-item'),
        mobProblemsItems = mobProblemsField.querySelectorAll('.problems-item__icon'),
        mobProblemsCards = mobProblemsField.querySelectorAll('.problems-item-popup');

    if(problems.scrollWidth < 1013){
        const problemsMobSlider = new Slider({
            main: '.problems-slider-wrap',
            wrap: '.problems-slider',
            nextArrow: '#problems-arrow_right',
            prevArrow: '#problems-arrow_left',
        })
    
        problemsMobSlider.init();
        problemsMobSlider.zheStyles('zhe-form-slider-style', 'zhe-docs-wrap-style', 'zhe-form-slider-slide-style');
    
        mobProblemsItems.forEach((item, i) => {
            item.addEventListener('click', () => {
                mobProblemsCards.forEach((card, index) => {
                    if(index === i){
                        mobProblemSlides[index].classList.add('active-item');
                        card.style.visibility = 'visible';
                        card.style.opacity = '1';
                    }else{
                        mobProblemSlides[index].classList.remove('active-item');
                        card.style.visibility = 'hidden';
                        card.style.opacity = '0';
                    }
                }
            );
        });
        });
    }
};

export default mobProblemSlider;