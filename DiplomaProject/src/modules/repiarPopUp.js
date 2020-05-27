const repairPopUpActions = () => {
    const repiarTipesWindow = document.querySelector('.popup-repair-types'),
        allServiceList = document.querySelectorAll('.no-overflow'),
        mainMenu = document.querySelector('.popup-dialog-menu'),
        mobileRepairTypesWindow = document.querySelector('.popup-repair-types');

    allServiceList.forEach(item => {
        item.addEventListener('click', () => {
            const btnsField = repiarTipesWindow.querySelector('.nav-list-popup-repair'),
                actualDate = repiarTipesWindow.querySelector('.popup-repair-types-content__head-date');

            fetch('./db/db.json')
                .then(response => response.json())
                .then(dbArr => {
                    actualDate.textContent = dbArr[0].date;

                    dbArr.shift();

                    dbArr.forEach(obj => {
                        let btn = document.createElement('button');

                        btn.textContent = obj.title;
                        btn.classList.add('button_o');
                        btn.classList.add('popup-repair-types-nav__item');
                        
                        btnsField.appendChild(btn);
                    }) 
                    console.log(dbArr);
                });
               
            mainMenu.classList.remove('header-menu-descktop-show');
            mainMenu.classList.remove('header-menu-mobile-show');
            repiarTipesWindow.style.visibility = 'visible';
        })
    });

    repiarTipesWindow.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('mobile-hide') || target.classList.contains('popup-repair-types')){
            repiarTipesWindow.style.visibility = 'hidden';
        }
    });

    mobileRepairTypesWindow.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('close')){
            mobileRepairTypesWindow.style.visibility = 'hidden';
        }
    })
};

export default repairPopUpActions;