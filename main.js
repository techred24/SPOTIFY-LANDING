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

const $detailsTags = document.querySelectorAll('.details');

$detailsTags.forEach((detailTag) => {
    // console.log(detailTag);
    detailTag.addEventListener('click', function (event) {
        console.log(event.target);
        console.log(event.target.getAttribute('open'));
        if (event.target.getAttribute('open')) {
            const $svgElement = event.target.querySelector('.details__svg');
            $svgElement.classList.add('rotate-svg');
            console.log('here');
            // $svgElement.style.transform = 'rotate(360deg)';
        }
    })
})