const modalBtn = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');

const closeButton = document.createElement('button');
closeButton.className = 'modal__close';
closeButton.innerHTML = 'X';
closeButton.style.position = 'absolute';
closeButton.style.top = 0;
closeButton.style.right = 0;
closeButton.style.padding = '10px 15px';
closeButton.style.fontSize = '10px';

const modalInner = document.querySelector('.modal__inner');
modalInner.style.position = 'relative';
modalInner.prepend(closeButton);

modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})

closeButton.addEventListener('click', () => {
    modal.style.display = 'none'
})

modal.addEventListener('click', (e) => {
    const modalContent = e.target.closest('.modal__inner')
    if (!modalContent) {
        modal.style.display = 'none'
    }
})

