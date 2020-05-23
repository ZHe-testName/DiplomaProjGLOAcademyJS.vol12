import Slider from '../plugins/sliderClass';

const designBlock = () => {
    const designs = document.getElementById('designs'),
        nav = designs.querySelector('.nav-wrap'),
        tabsCollection = designs.querySelectorAll('button'),
        prevBlocks = designs.querySelectorAll('.preview-block'),
        designSlider = designs.querySelector('.designs-slider');

    nav.addEventListener('click', (event) => {
        let target = event.target;
        
        if(target.classList.contains('designs-nav__item')){
            tabsCollection.forEach((tab, index) => {
                if(tab === target){
                    tab.classList.add('active');
            
                    for(let i = 0; i < designSlider.children.length; i++){
                         if(index === i){
                            designSlider.children[i].removeAttribute('style');

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