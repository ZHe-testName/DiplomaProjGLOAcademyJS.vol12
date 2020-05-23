import RepairSlider from './repairTypesSlider';

const designBlock = () => {
    const designs = document.getElementById('designs'),
        nav = designs.querySelector('.nav-wrap'),
        tabsCollection = designs.querySelectorAll('button'),
        prevBlocks = designs.querySelectorAll('.preview-block'),
        designSlider = designs.querySelector('.designs-slider'),
        navList = designs.querySelector('#designs-list'),
        navTabs = nav.querySelector('.nav-designs');

    let step = 0;
    let slidersArr = [];

    if(nav.scrollWidth < 987){
        for(let i = 0; i < designSlider.children.length; i++){
            slidersArr.push(new RepairSlider({
                main: '.designs-slider-wrap',
                wrap: `.designs-slider__style${i + 1}`,
                nextArrow: '#design_right',
                prevArrow: '#design_left',
                coef: 1.8,
           }));
    
           slidersArr[i].init();
           slidersArr[i].zheStyles('zhe-docs-slider-style', 'zhe-docs-wrap-style', 'zhe-docs-slider-slide-style');
           slidersArr[i].turnOffControls();
        }
    
        slidersArr[0].countShow();
        slidersArr[0].turnOnControls();
    }

    const scrollFunc = (elem, ind) => {
        for(let i = 0; i < designSlider.children.length; i++){
            if(elem === prevBlocks[i]){
                designSlider.children[i].style.transform = `translateY(-${(100 / elem.children.length) * ind}%)`;
                break;
            }        
        }
    };

    prevBlocks.forEach(block => {
        block.addEventListener('click', (event) => {
            let target = event.target;
    
            for(let i = 0; i < block.children.length; i++){
                if(target === block.children[i].children[0]){
                    block.children[i].children[0].classList.add('preview_active');

                    scrollFunc(block, i);
                }else{
                    block.children[i].children[0].classList.remove('preview_active');
                }
            }
        });
    });

    nav.addEventListener('click', (event) => {
        let target = event.target;
        
        if(target.classList.contains('designs-nav__item')){
            tabsCollection.forEach((tab, index) => {
                if(tab === target){
                    tab.classList.add('active');
            
                    for(let i = 0; i < designSlider.children.length; i++){
                         if(index === i){
                            designSlider.children[i].removeAttribute('style');

                            if(nav.scrollWidth < 987){
                                slidersArr.forEach((slider, index) => {
                                    if(index === i){
                                        slider.turnOnControls();
                                        slider.countShow();
                                    }else{
                                        slider.turnOffControls();
                                    }
                                })
                            }

                            prevBlocks[i].classList.add('visible');
                        }else{
                            designSlider.children[i].style.display = 'none';

                            prevBlocks[i].classList.remove('visible');
                        }
                    }
                }else{
                    tab.classList.remove('active');
                }
            })
        }

        if(target.classList.contains('nav-arrow_right') || target.tagName.toLowerCase() === 'svg'){
            if((navList.getBoundingClientRect().right - navTabs.getBoundingClientRect().right) > 0){
                navList.style.transform = `translateX(-${step += 130}px)`;
            }
        }

        if(target.classList.contains('nav-arrow_left') || target.tagName.toLowerCase() === 'svg'){
            if(step > 0){
                navList.style.transform = `translateX(-${step -= 130}px)`;
            }
        }
    });
    
};

export default designBlock;