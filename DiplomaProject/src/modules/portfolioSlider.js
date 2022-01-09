import Slider from '../plugins/sliderClass';
import RepairSlider from './repairTypesSlider';

const portfolioSlider = () => {
    const portfolio = document.getElementById('portfolio'),
        portfolioSlider = portfolio.querySelector('.portfolio-slider-wrap'),
        portfolioTabs = portfolio.querySelectorAll('.portfolio-slider__slide'),
        portfolioLeftArrow = portfolio.querySelector('#portfolio-arrow_left'),
        portfolioRightArrow = portfolio.querySelector('#portfolio-arrow_right'),
        portfolioFrames = portfolioSlider.children[portfolioSlider.children.length - 1].querySelectorAll('.portfolio-slider__slide-frame'),

        portfolioPopUp = document.querySelector('.popup-portfolio'),
        portfolioPopUpSlider = portfolioPopUp.querySelector('.popup-portfolio-slider'),
        popUpTexts = portfolioPopUp.querySelectorAll('.popup-portfolio-text'),
        prevArrow = portfolioPopUp.querySelector('#popup_portfolio_left'),
        nextArrow = portfolioPopUp.querySelector('#popup_portfolio_right');

    if(portfolio.scrollWidth > 558){
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
    
    const popUpSlider = new RepairSlider({
        main: '.popup-portfolio-slider-wrap',
        wrap: '.popup-portfolio-slider',
        nextArrow: '#popup_portfolio_right',
        prevArrow: '#popup_portfolio_left',
        slideTranslate: true,
    });
    
    popUpSlider.init();
    popUpSlider.zheStyles('zhe-docs-slider-style', 'zhe-docs-wrap-style', 'zhe-docs-slider-slide-style');
    popUpSlider.incertStyle('repair-custom-documents-popoup-style__zhe', `
    .zhe-docs-slider-style{
        margin: auto;
    }
    .zhe-docs-wrap-style{
        display: flex;
        transition: transform .5s;
        will-change: transform;
    }
    
    .zhe-docs-slider-slide-style{
        flex: 0 0 100%;
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
   
            if(clientX <= 380){
                portfolioRightArrow.style.display = 'none';
            }
            
        }else if(target.classList.contains('slider-arrow_left-portfolio')){
            let zeroPoint = portfolioTabs[0].style.transform.substr(-4);
    
            portfolioRightArrow.removeAttribute('style');
    
            if(zeroPoint === '(0%)'){
                portfolioLeftArrow.removeAttribute('style');
            };
        }
    
        if(target.classList.contains('portfolio-slider__slide-frame')){
            if(portfolioPopUp.scrollWidth > 1007){
                portfolioPopUpSlider.classList.remove('zhe-docs-wrap-style');
    
                portfolioFrames.forEach((item, ind) => {
                
                    if(item === target){
                        portfolioPopUpSlider.style.transform = `translateY(-${10 * ind}%)`;
                        popUpTexts[ind].style.display = 'block';
                    }
                });
                
                portfolioPopUp.style.visibility = 'visible';
            }else{
                portfolioPopUpSlider.removeAttribute('style');
                portfolioPopUpSlider.classList.add('zhe-docs-wrap-style');
    
                for(let i = 0; i < portfolioFrames.length; i++){
                    if(portfolioFrames[i] === target){
                        for(let j = 0; j < i; j++){
                            let click = new Event('click');
                            nextArrow.dispatchEvent(click);
                        }
                    }
                }
                popUpSlider.countShow();
    
                portfolioPopUp.style.visibility = 'visible';
    
            }  
            
        }
        });
    
    portfolioPopUp.addEventListener('click', (event) => {
        let target = event.target;
    
        if(target.classList.contains('popup-portfolio') || target.classList.contains('mobile-hide') ){
            popUpTexts.forEach(item => {
                item.removeAttribute('style');
            });
    
            portfolioPopUp.style.visibility = 'hidden';
        }
    });
    }else{
        const mobPortfolioSlider = new RepairSlider({
            main: '.portfolio-slider-wrap',
            wrap: '.portfolio-slider-mobile',
            nextArrow: '#portfolio-arrow-mobile_right',
            prevArrow: '#portfolio-arrow-mobile_left',
            slideTranslate: true,
        });

        mobPortfolioSlider.init();
        mobPortfolioSlider.zheStyles('zhe-docs-slider-style', 'zhe-docs-wrap-style', 'zhe-docs-slider-slide-style');
        mobPortfolioSlider.countShow();
    }
   

};

export default portfolioSlider;