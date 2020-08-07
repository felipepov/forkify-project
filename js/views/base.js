export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchRes: document.querySelector('.results'),
    searchResList: document.querySelector('.results__list'),
    searchResPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe'),
    shopping: document.querySelector('.shopping'),
    shoppingAdd: document.querySelector('.shopping__add'),
    manualValue:document.querySelector('.manual--value'),
    manualUnit:document.querySelector('.manual--unit'),
    manualIng:document.querySelector('.manual--ingredient'),
    shoppingList: document.querySelector('.shopping__list'),
    shoppingDeleteAll: document.querySelector('.shopping__deleteAll'),
    likesMenu: document.querySelector('.likes__field'),
    likesList: document.querySelector('.likes__list'),
    errorRecipe: document.querySelector('.error__getResult'),
    errorResults: document.querySelector('.error__getRecipe'),
    errorSearch: document.querySelector('.error__controlSearch'),
};

export const elementStrings = {
    loader: 'loader'
};

export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
};
