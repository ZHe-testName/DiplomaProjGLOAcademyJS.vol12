import Slider from '../plugins/sliderClass';

const formulaMobSlider = () => {
    const formula = document.getElementById('formula'),
        mobFormulaField = formula.querySelector('.desktop-hide'),
        mobFormulaItems = mobFormulaField.querySelectorAll('.formula-item'),
        mobFormulaItemCards = mobFormulaField.querySelectorAll('.formula-item-popup');
       
    const formMobSlider = new Slider({
        main: '#my-formula-slider',
        wrap: '.formula-slider',
        nextArrow: '#formula-arrow_right',
        prevArrow: '#formula-arrow_left',
    });

    formMobSlider.init();
    formMobSlider.zheStyles('zhe-form-slider-style', 'zhe-docs-wrap-style', 'zhe-form-slider-slide-style');
    formMobSlider.incertStyle('repair-custom-forms-style__zhe', `
    .zhe-form-slider-style{
        overflow: hidden;
    }

    .zhe-form-slider-slide-style{
        margin-block-end: 35%;
        flex: 0 0 100%;
    }
    `);

    mobFormulaItems.forEach((item, ind) => {
        item.addEventListener('mouseenter', () => {
            mobFormulaItemCards[ind].style.visibility = 'visible';
            mobFormulaItemCards[ind].style.opacity = '1';
        });

        item.addEventListener('mouseleave', () => {
            mobFormulaItemCards[ind].removeAttribute('style');
        });
    });
};

export default formulaMobSlider;