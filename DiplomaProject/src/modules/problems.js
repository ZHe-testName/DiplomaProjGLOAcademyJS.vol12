const problemsMotion = () => {
    const problems = document.querySelector('#problems'),
         problemsField = problems.querySelector('.tablet-hide'),
         problemsPopUps = problems.querySelectorAll('.problems-item-popup'),
         problemsItems = problems.querySelectorAll('.problems-item__icon');

    problemsItems.forEach((item, i) => {
        item.addEventListener('mouseenter', (event) => {
            let target = event.target;

            if(Math.floor(problemsPopUps[i].getBoundingClientRect().top) > 0){
                problemsPopUps[i].style.visibility = 'visible';
                problemsPopUps[i].style.opacity = '1';
                item.children[1].classList.add('active-item');
            }
            else{
                for(let i = 0; i < problemsField.children.length; i++){
                    if(problemsField.children[i] === target.parentNode.parentNode){
                        problemsField.children[i].style.zIndex = '99';
                    }
                }

                for(let j = 0; j < problemsPopUps[i].children.length; j++){
                    problemsPopUps[i].children[j].classList.add('rotate-formula-card-par');
                }
               
                problemsPopUps[i].classList.add('rotate-formula-card');
                problemsPopUps[i].style.top = '200%';
                problemsPopUps[i].style.visibility = 'visible';
                problemsPopUps[i].style.opacity = '1';

                item.children[1].classList.add('active-item');
            }
        });

        item.addEventListener('mouseleave', () => {
            problemsPopUps[i].style.visibility = 'hidden';
            problemsPopUps[i].style.opacity = '0';
            problemsPopUps[i].classList.remove('rotate-formula-card');
            problemsPopUps[i].classList.remove('rotate-formula-card-par');

            if(problemsPopUps[i].hasAttribute('style')){
                problemsPopUps[i].removeAttribute('style');
            }

            for(let i = 0; i < problemsField.children.length; i++){
                if(problemsField.children[i].hasAttribute('style')){
                    problemsField.children[i].removeAttribute('style');
                };
            }

            
            for(let j = 0; j < problemsPopUps[i].children.length; j++){
                problemsPopUps[i].children[j].classList.remove('rotate-formula-card-par');
            }
    
            problemsPopUps[i].style.visibility = 'hidden';
            problemsPopUps[i].style.opacity = '0';
    
            item.children[1].classList.remove('active-item');
        });
    })
};

export default problemsMotion;