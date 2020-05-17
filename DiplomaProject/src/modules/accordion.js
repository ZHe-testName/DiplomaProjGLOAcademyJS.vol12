const accordionSwitch = () => {
    const accordion = document.querySelector('.accordion'),
        allHeaders = accordion.querySelectorAll('h2');

    allHeaders.forEach((item, i) => {
        item.addEventListener('click', () => {
            if(item.classList.contains('msg-active')){
                item.classList.remove('msg-active');
            }else{
                if(i > 0){
                    allHeaders[i - 1].classList.remove('msg-active');
                }

                item.classList.add('msg-active');
            }
        });
    });

};

export default accordionSwitch;