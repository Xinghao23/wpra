
document.addEventListener('DOMContentLoaded', (event) => {
    const targetBurger = document.querySelector('.target-burger');
    const body = document.querySelector('body');

    targetBurger.addEventListener('click', () => {
        body.classList.toggle('toggled');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900 && body.classList.contains('toggled')) {
            body.classList.remove('toggled');
        }
    });
});