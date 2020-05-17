const consultationPopUp = () => {
    const consultBtns = document.querySelectorAll('.button_wide'),
        consultPopUpWindow = document.querySelector('.popup-consultation');

    consultBtns.forEach(item => {
        item.addEventListener('click', () => {
            consultPopUpWindow.style. visibility = 'visible';
        });
    });

    consultPopUpWindow.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('close-consultation') || target.classList.contains('popup-consultation')){
            consultPopUpWindow.style. visibility = 'hidden';
        }
    });
};

export default consultationPopUp;