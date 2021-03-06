import Slider from '../plugins/sliderClass';

const documentSlider = () => {
    const docsSlider = document.querySelector('.transparency-slider-wrap'),
    popupTransparency = document.querySelector('.popup-transparency'),
    nextSlide = document.querySelector('#transparency_right'),
    prevSlide = document.querySelector('#transparency_left');

    docsSlider.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('transparency-item__img')){
            const sliderWrap = docsSlider.children[0];

            for(let i = 0; i < sliderWrap.children.length; i++){
                if(sliderWrap.children[i].children[0] === target){
                    for(let j = 0; j < i; j++){
                        let click = new Event('click');
                        nextSlide.dispatchEvent(click);
                    }
                }
            }
            popupTransparency.style.visibility = 'visible';
        }
    });

    popupTransparency.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('mobile-hide') || target.classList.contains('popup-transparency')){
            popupTransparency.style.visibility = 'hidden';
            let clickBack = new Event('click');
            prevSlide.dispatchEvent(clickBack);
            prevSlide.dispatchEvent(clickBack);
        }
    });

    if(document.body.offsetWidth < 1074){

        const docBlockSlider = new Slider({
            main: '.transparency-slider-wrap',
            wrap: '.transparency-slider',
            nextArrow: '#transparency-arrow_right',
            prevArrow: '#transparency-arrow_left'
        });

        docBlockSlider.init();

        docBlockSlider.zheStyles('zhe-docs-slider-style', 'zhe-docs-wrap-style', 'zhe-docs-slider-slide-style');
        docBlockSlider.incertStyle('repair-custom-documents-style__zhe', `
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
        
    }
    
};

export default documentSlider;