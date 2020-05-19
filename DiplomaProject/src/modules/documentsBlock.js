import Slider from '../plugins/sliderClass';

const documentSlider = () => {
    const docsSlider = document.querySelector('.transparency-slider-wrap'),
    popupTransparency = document.querySelector('.popup-transparency');

    const  incertStyle = (idStr) => {
        const style = document.createElement('style');

        style.id = idStr;
        style.type = 'text/css';
        style.textContent = `
            .zhe-slider-style{
                overflow: hidden;
                width: 30%;
                margin: auto;
            }
            .zhe-slider-wrap-style{
                display: flex;
                transition: transform .5s;
                will-change: transform;
            }

            .zhe-slider-slide-style{
                flex: 0 0 100%;
                margin: auto;
            }
        `;

        document.head.appendChild(style);
    };

    docsSlider.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('transparency-item__img')){
            popupTransparency.style.visibility = 'visible';
        }
    });

    popupTransparency.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('mobile-hide') || target.classList.contains('popup-transparency')){
            popupTransparency.style.visibility = 'hidden';
        }
    });


    if(docsSlider.scrollWidth < 1051){

        const docBlockSlider = new Slider({
            main: '.transparency-slider-wrap',
            wrap: '.transparency-slider',
            nextArrow: '#transparency-arrow_right',
            prevArrow: '#transparency-arrow_left'
        });

        docBlockSlider.init();

        incertStyle('repair-custom-documents-style__zhe');
    }
    
};

export default documentSlider;