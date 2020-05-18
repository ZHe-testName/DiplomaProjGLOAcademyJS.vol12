import * as repairTypesSliderObj from './repairTypesSlider';

repairTypesSliderObj.repairTypesSlider1.init();
repairTypesSliderObj.repairTypesSlider1.countShow();

const repairTabs = () => {
    const repairButtonsField = document.querySelector('.nav-list-repair'),
        slidersCollection = document.querySelector('.repair-types-slider');

    repairButtonsField.addEventListener('click', (event) => {
        let target = event.target;

        if(target.tagName.toLowerCase() === 'button'){
            let buttonNum = target.classList[2].substr(-1);

            for(let i = 0; i < repairButtonsField.children.length; i++){
                if(repairButtonsField.children[i].className.indexOf(buttonNum) > 0){
                    document.head.querySelector('#ssRepairBlock').remove();

                    slidersCollection.children[i].style.display = 'flex';

                    switch(buttonNum){
                        case '1':
                            repairTypesSliderObj.repairTypesSlider1.init();
                            repairTypesSliderObj.repairTypesSlider1.countShow();
                            break;
                        case '2':
                            repairTypesSliderObj.repairTypesSlider2.init();
                            repairTypesSliderObj.repairTypesSlider2.countShow();
                            break;
                        case '3':
                            repairTypesSliderObj.repairTypesSlider3.init();
                            repairTypesSliderObj.repairTypesSlider3.countShow();
                            break;
                        case '4':
                            repairTypesSliderObj.repairTypesSlider4.init();
                            repairTypesSliderObj.repairTypesSlider4.countShow();
                            break;
                        case '5':
                            repairTypesSliderObj.repairTypesSlider5.init();
                            repairTypesSliderObj.repairTypesSlider5.countShow();
                            break;
                        default:
                            console.error('switch case problem');
                    }

                    repairButtonsField.children[i].classList.add('active');
                }else{
                    repairButtonsField.children[i].classList.remove('active');

                    slidersCollection.children[i].classList.remove('zhe-slider-wrap-style');
                    slidersCollection.children[i].style.display = 'none';
                }
            }
            
        }
    });
};

export default repairTabs;