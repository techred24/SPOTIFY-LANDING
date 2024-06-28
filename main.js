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
        console.log('PARENT TARGET');
        const $parentElement = event.target.parentElement;
        const attributesNodeArray = [...$parentElement.attributes];
        const attrs = attributesNodeArray.reduce((attrs, attribute) => {
            attrs[attribute.name] = attribute.value;
            return attrs;
        }, {});
        console.log('atributos:', attrs);
        // console.log(event.target);
        console.log(event.target.parentElement);
        // console.log(event.target.parentElement.nodeName);
        console.log('open:', $parentElement.getAttribute('open'));
        // console.log(event.target.getAttribute('open'));
        const $svgElement = event.target.querySelector('.details__svg');

        console.log('OPEN IN ATTRS');
        console.log('open' in attrs);
        if ($parentElement.getAttribute('open') == null) {
        // if ('open' in attrs) {
            $svgElement.classList.add('rotate-svg');
            // console.log('here');
            return;
            // $svgElement.style.transform = 'rotate(360deg)';
        }
        $svgElement.classList.remove('rotate-svg');
    })
});

// const node = document.querySelector('div')
// const attributeNodeArray = [...node.attributes];
// const attrs = attributeNodeArray.reduce((attrs, attribute) => {
//   attrs[attribute.name] = attribute.value;
//   return attrs;
// }, {});
// console.log(attrs)