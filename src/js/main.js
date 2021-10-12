import '../css/style.scss';
import accessories from './obj/accessories';
import clothes from './obj/clothes';

const allProducts = accessories.concat(clothes);

function sortByNew(a, b) {
    if (a.isNew > b.isNew) {
        return -1;
    }

    if (a.isNew < b.isNew) {
        return 1;
    }

    return 0;
}

const addCard = (img, price, title, isNew, id, label, volume, isClothes) => `<div class="main-block">
<section class="main-block__item">
  <div class="main-card">
    <img src="${img}" alt="Картинка футболки" class="main-card__img"
    width="330" height="330">
    ${isNew ? '<span class="main-card__badge">new</span>' : ''}
  </div>
  <div class="main-card__description">
    <span class="main-card__description-price">
    ${price} баллов
    </span>
    <h3 class="main-card__description-title">
    ${title}
    </h3>
    <span class="main-card__description-hint">
    ${label} ${isClothes ? `${volume}/M/L` : `${volume}`}
    </span>
  </div>
  <div class="main-card__description-hidden open-modal" id="${id}">
    <button class="main-card__description-btn" type="button">
    Заказать
    </button>
  </div>
</section>
</div>`;

const addModal = (img, price, title, description, isDescr, volume, imgSml, label, isClothes) => `
<div class="modal-solution__main">
  <div class="modal-solution__card">
    <div class="modal-solution__card--big"><img src="${img}"
        alt="${title}" width="330" height="330"></div>
    <div>
    <ul class="cards-little">
    ${isClothes ? '<li class="modal-solution__card--little js__img" data-key="imgSml-1">'
    + '<img src="/src/assets/icons/image-girl.png"'
            + 'alt="иконка товара" width="50" height="50">'
        + '</li>'
    : ''}
        <li class="modal-solution__card--little card-active js__img" data-key="imgSml-2"><img src="${imgSml}"
            alt="иконка товара" width="50" height="50">
        </li>
        ${isClothes ? '<li class="modal-solution__card--little js__img" data-key="imgSml-3">'
        + '<img src="/src/assets/icons/image-man.png"'
            + 'alt="иконка товара" width="50" height="50">'
        + '</li>'
        : ''}
        </ul>
        </div>
    </div>
    <div class="modal-main-info info-indent">
        <section class="modal-main-info info-title">
        <div>
            <h2 class="modal-main-info__title">${title}</h2>
            <div class="modal-main-info__title--how-balls">${price} балов</div>
            <input type="button" value="Попросить 50 балов" class="modal-main-info__title--yellow-btn">
        </div>
        <div class="modal-main-info__balance">
            <div class="modal-main-info__text">
            <h2 class="modal-main-info__text--title">Твой баланс:</h2>
            <h3 class="modal-main-info__text--subtitle">50 Балов</h3>
            </div>
        </div>
        </section>
        ${isClothes ? '<section class="modal-main-info__colors">'
        + '<p class="modal-main-info__colors-text">Цвета:</p>'
        + '<form action="" class="modal-main-info__choise-color">'
            + '<div class="modal-main-info__radio">'
            + '<input type="radio" name="colors" id="blue" value="blue" class="modal-main-info__input" checked>'
            + '<label for="blue" class="modal-main-info__label label-1">Синий</label>'
            + '</div>'
            + '<div class="modal-main-info__radio">'
            + '<input type="radio" name="colors" id="biege" value="biege" class="modal-main-info__input">'
            + '<label for="biege" class="modal-main-info__label label-2">Бежевый</label>'
            + '</div>'
            + '<div class="modal-main-info__radio">'
            + '<input type="radio" name="colors" id="gray" value="gray" class="modal-main-info__input">'
            + '<label for="gray" class="modal-main-info__label label-3">Серый</label>'
            + '</div>'
        + '</form>'
        + '</section>'
            : ''}
        <section class="modal-main-info__size">
        <p class="modal-main-info__size-text">${label}</p>
        <form action="#" class="modal-main-info__form-size">
            <div class="modal-main-info__radio-size">
            <input type="radio" name="size" id="S" value="S" class="modal-main-info__input-size active-size"
                checked>
            <label for="S" class="modal-main-info__label-size">${volume}</label>
            </div>
            ${isClothes ? '<div class="modal-main-info__radio-size">'
            + '<input type="radio" name="size" id="M" value="M" class="modal-main-info__input-size">'
            + '<label for="M" class="modal-main-info__label-size">M</label>'
            + '</div>'
            + '<div class="modal-main-info__radio-size">'
            + '<input type="radio" name="size" id="L" value="L" class="modal-main-info__input-size">'
            + '<label for="L" class="modal-main-info__label-size">L</label>'
            + '</div>'
                : ''}
        </form>
        </section>
        <section class="modal-main-info__descr">
            <p class="modal-main-info__descr-bold">
                Детали:
            </p>
            <p class="modal-main-info__descr-regular">
            ${description}
            </p>
            ${isDescr ? '<p class="modal-main-info__descr-bold"> Как выбрать размер:</p>'
            + '<p class="modal-main-info__descr-regular">Написать дяде Рику для уточнения.</p>' : ''}
        </section>
    </div>`;

function cardChange(value) {
    const catalogSelector = document.querySelector('.js__catalog');

    value.forEach((card) => {
        const cardHtml = addCard(card.img, card.price, card.title, card.isNew,
            card.id, card.label, card.volume, card.isClothes);

        catalogSelector.innerHTML += cardHtml;
    });
}

allProducts.sort(sortByNew);
cardChange(allProducts);

function clearZone() {
    document.querySelector('.js__catalog').innerHTML = '';
}

const addValuesModal = (variable) => {
    const modalSelector = document.querySelector('.js__modal');
    const modalHtml = addModal(variable.img, variable.price, variable.title, variable.description, variable.isDescr,
        variable.volume, variable.imgSml, variable.label, variable.isClothes);

    modalSelector.innerHTML = modalHtml;
};

const modal = document.querySelector('.mod');

const changeMass = document.querySelector('.choise-active');

let defaultMass = allProducts;

function itemRedef(mass) {
    const item = document.querySelectorAll('.open-modal');

    defaultMass = mass;

    item.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            const btnId = +btn.id;

            const massValue = defaultMass.find(({ id }) => id === btnId);

            addValuesModal(massValue);
        });
    });
}

if (changeMass.dataset.key === 'all') {
    itemRedef(allProducts);
} else if (changeMass.dataset.key === 'clothes') {
    itemRedef(clothes);
} else if (changeMass.dataset.key === 'accessories') {
    itemRedef(accessories);
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

const close = document.querySelector('.modal-content__close');

close.onclick = function () {
    modal.style.display = 'none';
};

document.querySelectorAll('.js__choise-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const btnChoise = event.target;
        const category = btnChoise.dataset.key;

        const activeBtn = document.querySelector('.choise-active');

        function changeCategory(mass) {
            clearZone();
            mass.sort(sortByNew);
            cardChange(mass);
            itemRedef(mass);
            btnChoise.classList.add('choise-active');
        }

        if (activeBtn) {
            activeBtn.classList.remove('choise-active');
        }

        if (category === 'all') {
            changeCategory(allProducts);
        } else if (category === 'clothes') {
            changeCategory(clothes);
        } else if (category === 'accessories') {
            changeCategory(accessories);
        }
    });
});
