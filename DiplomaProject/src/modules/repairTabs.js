import RepairSlider from './repairTypesSlider';

const repairTabs = () => {
    const repairButtonsField = document.querySelector('.nav-list-repair'),
        slidersCollection = document.querySelector('.repair-types-slider');

    const  incertStyle = (idStr) => {
        const style = document.createElement('style');

        style.id = idStr;
        style.type = 'text/css';
        style.textContent = `
            .zhe-slider-wrap-style{
                display: flex;
                transition: transform .5s;
                will-change: transform;
            }

            .zhe-slider-slide-style{
                flex: 0 0 100%;
                margin: auto 0;
                transition: transform .5s;
                will-change: transform;
            }
        `;

        document.head.appendChild(style);
    };

    let slidersArr = [];

    for(let i = 0; i < slidersCollection.children.length; i++){
        slidersArr.push(new RepairSlider({
            main: '.repair-types-slider-wrap',
            wrap: `.types-repair${i + 1}`,
            nextArrow: '.slider-arrow_right',
            prevArrow: '.slider-arrow_left'
       }));

       slidersArr[i].init();
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

    incertStyle('repair-custom-slider-style__zhe');
};

export default repairTabs;