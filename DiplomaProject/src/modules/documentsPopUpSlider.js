import  RepairSlider from '../modules/repairTypesSlider';

const popUpDocsWindow = () => {
    const docBlockPopUpSlider = new RepairSlider({
        main: '.popup-transparency-slider-wrap',
        wrap: '.popup-transparency-slider',
        nextArrow: '#transparency_right',
        prevArrow: '#transparency_left',
        slideTranslate: true
    });
    
    docBlockPopUpSlider.init();
    docBlockPopUpSlider.zheStyles('zhe-docs-slider-style', 'zhe-docs-wrap-style', 'zhe-docs-slider-slide-style');
    docBlockPopUpSlider.countShow();
};

export default popUpDocsWindow;