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

            for(let child of repairButtonsField.children){
                if(child.className.indexOf(buttonNum) > 0){
                    child.classList.add('active');
                }else{
                    child.classList.remove('active');
                }
            }
            
        }
    });
};

export default repairTabs;