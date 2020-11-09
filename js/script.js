const body = document.querySelector('body');
const toggleSwitchBtn = document.querySelector('.toggle-switch__btn');
const cards = document.querySelectorAll('.card');

function toggleSwitch() {
    toggleSwitchBtn.classList.toggle('toggle-switch__btn--inactive');
}

function switchThemesBody() {
    if (body.classList.contains('body-dark-theme')) {
        body.classList.replace('body-dark-theme', 'body-light-theme');
    } else {
        body.classList.replace('body-light-theme', 'body-dark-theme');
    }
}

function switchThemesCards() {
    cards.forEach((card, index) => {
        card.style.transition = `all .5s ease ${index / 12}s`;
        if (card.classList.contains('card-dark-theme')) {
            card.classList.replace('card-dark-theme', 'card-light-theme');
        } else {
            card.classList.replace('card-light-theme', 'card-dark-theme');
        }
    });
}

function toggleThemes() {
    toggleSwitch();
    switchThemesBody();
    switchThemesCards();
}

toggleSwitchBtn.addEventListener('click', toggleThemes);