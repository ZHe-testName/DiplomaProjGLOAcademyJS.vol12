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
                        card.firstChild.classList.add('rotate-formula-card-par');
                        card.classList.add('rotate-formula-card');;
                        card.style.visibility = 'visible';
                        card.style.opacity = '1';
                        card.style.zIndex = '90';
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
                }
            });
        });
    })
};

export default formulaBlockActions;