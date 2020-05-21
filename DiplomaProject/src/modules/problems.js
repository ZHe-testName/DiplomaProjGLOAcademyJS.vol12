const problemsMotion = () => {
    const problems = document.querySelector('#problems'),
         problemsField = problems.querySelector('.tablet-hide'),
         problemsPopUps = problems.querySelectorAll('.problems-item-popup'),
         problemsItems = problems.querySelectorAll('.problems-item__icon');

    problemsItems.forEach((item, i) => {
        item.addEventListener('mouseenter', () => {
            problemsPopUps[i].style.visibility = 'visible';
            problemsPopUps[i].style.opacity = '1';

            item.children[1].classList.add('active-item');
        });

        item.addEventListener('mouseleave', () => {
            problemsPopUps[i].style.visibility = 'hidden';
            problemsPopUps[i].style.opacity = '0';

            item.children[1].classList.remove('active-item');
        })
    })
};

export default problemsMotion;