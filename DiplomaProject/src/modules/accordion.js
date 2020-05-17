const accordionSwitch = () => {
    const accordion = document.querySelector('.accordion'),
        accordItems = accordion.querySelectorAll('h2');

    accordion.addEventListener('click', (event) => {
        let target = event.target;

        if(target.tagName.toLowerCase() === 'h2'){
            accordItems.forEach(item => {
                if(item !== target){
                    item.classList.remove('msg-active');
                }
            });

            target.classList.toggle('msg-active');
        }
    });
};

export default accordionSwitch;