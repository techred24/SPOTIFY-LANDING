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
        const $parentElement = event.target.parentElement;
        const $summaryElement = event.target;
        const $questionElement = $summaryElement.querySelector('.details__title');
        // const attributesNodeArray = [...$parentElement.attributes];
        // attributesNodeArray.reduce((attrs, attribute) => {
        //     attrs[attribute.name] = attribute.value;
        //     return attrs;
        // }, {});
        const $svgElement = event.target.querySelector('.details__svg');
        if ($parentElement.getAttribute('open') == null) {
        // if ('open' in attrs) {
            $svgElement.classList.add('rotate-svg');
            $summaryElement.classList.add('click-background');
            $questionElement.classList.add('click-underline');
            return;
        }
        console.log('removing');
        $svgElement.classList.remove('rotate-svg');
        $summaryElement.classList.remove('click-background');
        $questionElement.classList.remove('click-underline');
    });
});
