import { elements } from './base.js';

export const renderItem = item => {
    const markup = `
        <li class="shopping__item" data-itemid=${item.id}>
            <div class="shopping__count">
                <input type="number" value="${item.count}" step="${item.count}" class="shopping__count-value">
                <p>${item.unit}</p>
            </div>
            <p class="shopping__description">${item.ingredient}</p>
            <button class="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>
    `;
    elements.shoppingList.insertAdjacentHTML('afterbegin', markup);
};

export const deleteRender = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if (item) item.parentElement.removeChild(item);
};

export const deleteAll = () => {
    elements.shoppingList.innerHTML = '';
}

export const getInput = () => {
    const newItem = {};
    newItem.value = elements.manualValue.value;
    newItem.unit = elements.manualUnit.value;
    newItem.ing = elements.manualIng.value;
    return newItem;
}