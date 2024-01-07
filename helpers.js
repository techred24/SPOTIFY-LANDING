import { createElement, liElement, navElement, ulElement } from './createElement.js';
let $headerContainer = document.querySelector('.header__container');

const createButtonMenu = () => {
    const $menuButton = document.createElement('button');

    $menuButton.setAttribute('id', 'header__menu-button');
    $menuButton.classList.add('header__menu-button');
    const $linesFragment = document.createDocumentFragment();
    const spanLinesClases = ['top-line', 'middle-line', 'bottom-line'];
    for (const lineClass of spanLinesClases) {
        const $spanLine = document.createElement('span');
        $spanLine.classList.add(lineClass);
        $linesFragment.append($spanLine);
    }
    $menuButton.appendChild($linesFragment);
    return $menuButton;
}
const addListenerToButton = () => {
    const $menuButton = document.getElementById('header__menu-button');
    $menuButton.addEventListener('click', () => {
        $menuButton.classList.toggle('open');
    });
}
const removeButton = () => {
    const $menuButton = document.getElementById('header__menu-button');
    if ($menuButton) $menuButton.remove();
}

/*
<nav class="header__nav">
                <ul class="header__menu">
                    <li class="header__menu-item">Premium</li>
                    <li class="header__menu-item">Ayuda</li>
                    <li class="header__menu-item">Descargar</li>
                    <li class="header__menu-item separator">|</li>
                    <li class="header__menu-item">Registrarse</li>
                    <li class="header__menu-item">Iniciar Sesión</li>
                </ul>
</nav>
*/
const addDesktopMenu = () => {
    const $navNode = createElement(navElement);
    $navNode.setAttribute('id', 'header__nav');
    const $ulNode = createElement(ulElement);
    const textInLiTags = ['Premium', 'Ayuda', 'Descargar', '|', 'Registrarse', 'Iniciar Sesión'];
    $navNode.appendChild($ulNode);
    for (let i = 0; i < textInLiTags.length; i++) {
        const $liElement = createElement(liElement);
        $liElement.innerText = textInLiTags[i]
        if (textInLiTags[i] === '|') $liElement.classList.add('separator');
        $ulNode.appendChild($liElement);
    }
    $headerContainer.appendChild($navNode);
}
const removeDesktopMenu = () => {
    const $nav = document.getElementById('header__nav');
    if ($nav) $nav.remove();
}

export const responsiveMedia = (mq) => {
    let breakpoint = window.matchMedia(mq);
    console.log(breakpoint.matches, 'Coincide media query al cargar');
    if (breakpoint.matches) {
        addDesktopMenu();
    } else {
        $headerContainer.appendChild(createButtonMenu());
        addListenerToButton();
    }
    breakpoint.addEventListener('change', (event) => {
        console.log(event.matches, 'EL EVENTO');
        if (event.matches) {
            removeButton();
            addDesktopMenu();
            return
        }
        removeDesktopMenu();
        $headerContainer.appendChild(createButtonMenu());
        addListenerToButton();
    });
}