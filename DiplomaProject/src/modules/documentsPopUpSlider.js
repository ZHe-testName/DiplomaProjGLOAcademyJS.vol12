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
    docBlockPopUpSlider.countShow();
};

export default popUpDocsWindow;