import { responsiveMedia } from "./helpers.js";

const doc = document;
// let $menuButton = document.getElementById('header__menu-button');
// let $headerContainer = document.getElementById('header__container');


document.addEventListener('DOMContentLoaded', () => {
    console.log('Se cargó el contenido');
    // The cut must be in 990mq
    responsiveMedia('(min-width: 880px)');
});

// $menuButton.addEventListener('click', () => {
//     console.log('cambiado clas')
//     $menuButton.classList.toggle('open');
// });

