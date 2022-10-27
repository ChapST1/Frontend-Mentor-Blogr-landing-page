const hamburguer = document.querySelector('.nav__hamburguer')

hamburguer.addEventListener('click', () => {
    let nav = hamburguer.previousElementSibling;
    nav.classList.toggle('nav-active')
    if (nav.className.includes('nav-active')) {
        hamburguer.setAttribute('src', "./../images/icon-close.svg")
    } else {
        hamburguer.setAttribute('src', "./../images/icon-hamburger.svg")
    }
})