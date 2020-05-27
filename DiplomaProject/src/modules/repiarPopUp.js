const repairPopUpActions = () => {
    const repiarTipesWindow = document.querySelector('.popup-repair-types'),
        allServiceList = document.querySelectorAll('.no-overflow'),
        mainMenu = document.querySelector('.popup-dialog-menu'),
        mobileRepairTypesWindow = document.querySelector('.popup-repair-types');

    const listInjection = (array, element) => {
        element.appendChild(objParser(array));
    };

    const objParser = (obj) => {
        let table = document.createElement('tbody');

        obj.priceList.forEach(item => {
            let row = document.createElement('tr');

            row.classList.add('mobile-row');
            row.innerHTML = ` <td class="repair-types-name">${item.typeService}</td>
                            <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                            <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                            <td class="repair-types-value">${item.units}</td>
                            <td class="repair-types-value">${item.cost} руб.</td>`;
    
            table.appendChild(row);
        });

        return table;
    };

    allServiceList.forEach(item => {
        item.addEventListener('click', () => {
            const btnsField = repiarTipesWindow.querySelector('.nav-list-popup-repair'),
                actualDate = repiarTipesWindow.querySelector('.popup-repair-types-content__head-date'),
                priseTable = repiarTipesWindow.querySelector('.popup-repair-types-content-table__list');

            let tableTitle = repiarTipesWindow.querySelector('.popup-repair-types-content__head-title');

            fetch('./db/db.json')
                .then(response => {
                    if(response.status !== 200){
                        throw(new Error('Network status is not OK!'));
                    }

                    return response.json();
                })
                .then(dbArr => {
                    btnsField.innerHTML = '';

                    actualDate.textContent = dbArr[0].date;

                    dbArr.shift();

                    dbArr.forEach((obj, i) => {
                        let btn = document.createElement('button');

                        btn.textContent = obj.title;
                        btn.classList.add('button_o');
                        btn.classList.add('popup-repair-types-nav__item');

                        if(i === 0){
                            btn.style.backgroundColor = 'lightgray';
                        }
                        
                        btnsField.appendChild(btn);
                    })

                    return dbArr;
                })
                .then(dbArr => {
                    listInjection(dbArr[0], priseTable);

                    return dbArr;
                })
                .then(dbArr => {
                    let buttons = btnsField.querySelectorAll('button');

                    btnsField.addEventListener('click', (e) => {
                        let target = e.target;

                        priseTable.innerHTML = '';
                        buttons.forEach((btn, i) => {
                            if(target === btn){
                                tableTitle.textContent = dbArr[i].title;
                                buttons[i].style.backgroundColor = 'lightgray';
                                listInjection(dbArr[i], priseTable);
                            }else{
                                buttons[i].removeAttribute('style');
                            }
                        })
                    })
                })
                .catch(error => {
                    console.error(error);
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