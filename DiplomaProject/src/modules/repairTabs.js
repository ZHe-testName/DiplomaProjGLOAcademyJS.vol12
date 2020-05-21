import RepairSlider from './repairTypesSlider';

const repairTabs = () => {
    const repairButtonsField = document.querySelector('.nav-list-repair'),
        slidersCollection = document.querySelector('.repair-types-slider');

    let slidersArr = [];

    for(let i = 0; i < slidersCollection.children.length; i++){
        slidersArr.push(new RepairSlider({
            main: '.repair-types-slider-wrap',
            wrap: `.types-repair${i + 1}`,
            nextArrow: '.slider-arrow_right',
            prevArrow: '.slider-arrow_left'
       }));

       slidersArr[i].init();
       slidersArr[i].zheStyles('zhe-docs-slider-style', 'zhe-docs-wrap-style', 'zhe-docs-slider-slide-style');
       slidersArr[i].turnOffControls();
    }

    
    slidersArr[0].countShow();
    slidersArr[0].turnOnControls();

    repairButtonsField.addEventListener('click', (event) => {
        let target = event.target;

        if(target.tagName.toLowerCase() === 'button'){
            let buttonNum = target.classList[2].substr(-1);

            for(let i = 0; i < repairButtonsField.children.length; i++){
                if(repairButtonsField.children[i].className.indexOf(buttonNum) > 0){

                    slidersCollection.children[i].style.display = 'flex';   

                    slidersArr.forEach((slider, index) => {
                        if(index === i){
                            slider.turnOnControls();
                            slider.countShow();
                        }else{
                            slider.turnOffControls();
                        }
                    })

                    repairButtonsField.children[i].classList.add('active');
                }else{
                    repairButtonsField.children[i].classList.remove('active');
                    
                    slidersCollection.children[i].style.display = 'none';
                }
            }
            
        }
    });
};

export default repairTabs;