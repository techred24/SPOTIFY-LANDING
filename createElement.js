export const createElement = ({ name, attributes }) => {
    const element = document.createElement(name);
    for (const [attribute, value] of Object.entries(attributes)) {
        element.setAttribute(attribute, value);
    }
    return element;
}

export const navElement = {
    name: 'nav',
    attributes: {
        class: 'header__nav'
    }
}
export const ulElement = {
    name: 'ul',
    attributes: {
        class: 'header__menu'
    }
}
export const liElement = {
    name: 'li',
    attributes: {
        class: 'header__menu-item'
    }
}