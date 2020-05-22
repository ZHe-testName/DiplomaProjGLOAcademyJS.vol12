import Slider from '../plugins/sliderClass';

const portfolioSlider = () => {
    const portfolio = document.getElementById('portfolio'),
        portfolioSlider = portfolio.querySelector('.portfolio-slider-wrap'),
        portfolioTabs = portfolio.querySelectorAll('.portfolio-slider__slide'),
        portfolioLeftArrow = portfolio.querySelector('#portfolio-arrow_left'),
        portfolioRightArrow = portfolio.querySelector('#portfolio-arrow_right');

    const mainSlider = new Slider({
        main: '.portfolio-slider-wrap',
        wrap: '.portfolio-slider-block-wrap',
        nextArrow: '#portfolio-arrow_right',
        prevArrow: '#portfolio-arrow_left',
        slideTranslate: true,
    })

    mainSlider.init();
    mainSlider.zheStyles('zhe-portfolio-slider-style', 'zhe-portfolio-wrap-style', 'zhe-portfolio-slider-slide-style');
    mainSlider.incertStyle('repair-custom-portfolio-style__zhe', `
    .zhe-portfolio-slider-style{
        margin: auto;
    }
    .zhe-portfolio-wrap-style{
        display: flex;
        transition: transform .5s;
        will-change: transform;
    }

    .zhe-portfolio-slider-slide-style{
        flex: 0 0 33%;
        margin: auto;
        transition: transform .5s;
        will-change: transform;
    }
`);

portfolioSlider.addEventListener('click', (event) => {
    let target = event.target;
    let clientX;

    if(target.classList.contains('slider-arrow_right-portfolio')){
        portfolioLeftArrow.style.display = 'flex';

        clientX = portfolioTabs[portfolioTabs.length - 1].getBoundingClientRect().right - portfolioSlider.getBoundingClientRect().right;

        if(clientX < 380){
            portfolioRightArrow.style.display = 'none';
        }
        
    }else if(target.classList.contains('slider-arrow_left-portfolio')){
        let zeroPoint = portfolioTabs[0].style.transform.substr(-4);

        portfolioRightArrow.removeAttribute('style');

        if(zeroPoint === '(0%)'){
            portfolioLeftArrow.removeAttribute('style');
        };
    }
});

};

export default portfolioSlider;