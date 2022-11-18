const menuEl = document.querySelector('.menu');
const menuTextEl = document.querySelector('.menu p');
const listsEl = document.querySelector('.social-lists');
const liEls = document.querySelectorAll('li');

menuEl.addEventListener('click', () => {
    listsEl.classList.toggle('hide');
    menuEl.classList.toggle('rotate');
});

liEls.forEach(liEl => {
    liEl.addEventListener('click', () => {
        menuTextEl.innerHTML = liEl.innerHTML;
        listsEl.classList.add('hide');
        menuEl.classList.remove('rotate');
    })
})