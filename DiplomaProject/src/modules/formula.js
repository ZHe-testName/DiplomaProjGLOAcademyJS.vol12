const formulaBlockActions = () => {
    const dtFormulaField = document.querySelector('.tablet-hide'),
        formulaItems = dtFormulaField.querySelectorAll('.formula-item__icon-inner-text'),
        formulaItemCards = dtFormulaField.querySelectorAll('.formula-item-popup');

    formulaItems.forEach((item) => {
        item.addEventListener('mouseenter', (event) => {
            let target = event.target;

            formulaItemCards.forEach(card => {
                if(card.className.substr(-2) === target.textContent){
                    if(Math.floor(card.getBoundingClientRect().top) > 0){
                        card.style.visibility = 'visible';
                        card.style.opacity = '1';
                    }else{
                        for(let i = 0; i < dtFormulaField.children.length; i++){
                            let elems = dtFormulaField.children[i].querySelectorAll('span');

                            elems.forEach(elem => {
                                if(elem === target){
                                    dtFormulaField.children[i].style.zIndex = '99';
                                }
                            })
                        }
                        card.firstChild.classList.add('rotate-formula-card-par');
                        card.classList.add('rotate-formula-card');;
                        card.style.visibility = 'visible';
                        card.style.opacity = '1';
                    }
                    
                }
            });

        });
        
        item.addEventListener('mouseleave', (event) => {
            let target = event.target;
    
            formulaItemCards.forEach(card => {
                if(card.className.search(`${target.textContent}`) >= 0){
                    card.style.visibility = 'hidden';
                    card.style.opacity = '0';
                    card.classList.remove('rotate-formula-card');
                    card.firstChild.classList.remove('rotate-formula-card-par');

                    for(let i = 0; i < dtFormulaField.children.length; i++){
                        if(dtFormulaField.children[i].hasAttribute('style')){
                            dtFormulaField.children[i].removeAttribute('style');
                        };
                    }
                }
            });
        });
    })
};

export default formulaBlockActions;