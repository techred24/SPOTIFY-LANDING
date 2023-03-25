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
        console.log('cambiado clas');
        $menuButton.classList.toggle('open');
    });
}
const removeButton = () => {
    const $menuButton = document.getElementById('header__menu-button');
    if ($menuButton) $menuButton.remove();
}

export const responsiveMedia = (mq) => {
    let breakpoint = window.matchMedia(mq);
    console.log(breakpoint.matches, 'Coincide media query al cargar');
    if (breakpoint.matches) {

    } else {
        $headerContainer.appendChild(createButtonMenu());
        addListenerToButton();
    }


    breakpoint.addEventListener('change', (event) => {
        console.log(event.matches, 'EL EVENTO');
        if (event.matches) {
            removeButton();
            return
        }
        $headerContainer.appendChild(createButtonMenu());
        addListenerToButton();
    });
}