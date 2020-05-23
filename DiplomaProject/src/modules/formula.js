const formulaBlockActions = () => {
    const formula = document.querySelector('#formula'),
        dtFormulaField = formula.querySelector('.tablet-hide'),
        formulaItems = dtFormulaField.querySelectorAll('.formula-item__icon'),
        formulaItemCards = dtFormulaField.querySelectorAll('.formula-item-popup');

    formulaItems.forEach((item, index) => {
        item.addEventListener('mouseenter', (event) => {
                let target = event.target;

                if(Math.floor(formulaItemCards[index].getBoundingClientRect().top) > 0){
                    formulaItemCards[index].style.visibility = 'visible';
                    formulaItemCards[index].style.opacity = '1';
                }else{
                    for(let i = 0; i < dtFormulaField.children.length; i++){
                        if(dtFormulaField.children[i] === target.parentNode.parentNode){
                            dtFormulaField.children[i].style.zIndex = '99';
                        }
                    }

                    formulaItemCards[index].firstChild.classList.add('rotate-formula-card-par');
                    formulaItemCards[index].classList.add('rotate-formula-card');
                    formulaItemCards[index].style.visibility = 'visible';
                    formulaItemCards[index].style.opacity = '1';
                }
                    
            }

        );
        
        item.addEventListener('mouseleave', () => {
            formulaItemCards[index].style.visibility = 'hidden';
            formulaItemCards[index].style.opacity = '0';
            formulaItemCards[index].classList.remove('rotate-formula-card');
            formulaItemCards[index].firstChild.classList.remove('rotate-formula-card-par');

            for(let i = 0; i < dtFormulaField.children.length; i++){
                if(dtFormulaField.children[i].hasAttribute('style')){
                    dtFormulaField.children[i].removeAttribute('style');
                };
            }

        });
    })
};

export default formulaBlockActions;