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
    docBlockPopUpSlider.incertStyle('repair-custom-documents-popoup-style__zhe', `
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
    docBlockPopUpSlider.countShow();
};

export default popUpDocsWindow;