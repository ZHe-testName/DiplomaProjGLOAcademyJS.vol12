import Slider from '../plugins/sliderClass';

const designBlock = () => {
    const designs = document.getElementById('designs'),
        nav = designs.querySelector('.nav-wrap'),
        tabsCollection = designs.querySelectorAll('button');

    nav.addEventListener('click', (event) => {
        let target = event.target;
        
        if(target.classList.contains('designs-nav__item')){
            tabsCollection.forEach((tab, index) => {
                if(tab === target){
                    tab.classList.add('active');

                    // slideCollection.forEach(slide => {
                    //     slide.style.transform = `translateY(-${100 * index}%)`;
                    // });

                    // descriptionCollection.forEach((item, i) => {
                    //     if(i === index){
                    //         item.classList.add('visible-content-block');
                    //     }else{
                    //         item.classList.remove('visible-content-block');
                    //     }
                        
                    // })
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