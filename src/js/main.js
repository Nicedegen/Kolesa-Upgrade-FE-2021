import '../css/style.scss';

const accessories = [
    {
        img:         '/src/assets/img/bottle-modal.png',
        price:       50,
        title:       'Бутылка для воды',
        id:          0,
        isNew:       true,
        description: 'Бутылка для воды с трубочкой',
        isDescr:     false,
    },
    {
        price:       100,
        img:         '/src/assets/img/bottle-modal.png',
        id:          1,
        title:       'Бутылка без воды',
        isNew:       true,
        description: 'Бутылка для воды с трубочкой',
        isDescr:     false,
    },
    {
        price:       200,
        img:         '/src/assets/img/bottle-modal.png',
        id:          2,
        title:       'Вода без бутылки',
        isNew:       false,
        description: 'Бутылка для воды с трубочкой',
        isDescr:     false,
    },
    {
        price:       300,
        img:         '/src/assets/img/bottle.jpg',
        id:          3,
        title:       'Бутылка обыкновеникус',
        isNew:       false,
        description: 'Бутылка для воды с трубочкой',
        isDescr:     false,
    },
    {
        price:       400,
        img:         '/src/assets/img/bottle.jpg',
        id:          4,
        title:       'Бутылка "Creative: none"',
        isNew:       false,
        description: 'Бутылка для воды с трубочкой',
        isDescr:     false,
    },
    {
        price:       500,
        img:         '/src/assets/img/bottle.jpg',
        id:          5,
        title:       'Бутылка с автографом Жванецкого',
        isNew:       false,
        description: 'Бутылка для воды с трубочкой',
        isDescr:     false,
    },
    {
        price:       600,
        img:         '/src/assets/img/bottle.jpg',
        id:          6,
        title:       'Бутылка первого президента',
        isNew:       false,
        description: 'Бутылка для воды с трубочкой',
        isDescr:     false,
    },
];

const clothes = [
    {
        price:       500,
        img:         '/src/assets/img/shirt-main.png',
        id:          7,
        title:       'Футболка "Эволюционируй или сдохни"',
        isNew:       true,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        isDescr:     true,
    },
    {
        price:       1000,
        img:         '/src/assets/img/shirt-main.png',
        id:          8,
        title:       'Футболка "Сдохни или умри"',
        isNew:       true,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        isDescr:     true,
    },
    {
        price:       2000,
        img:         '/src/assets/img/shirt-main.png',
        id:          9,
        title:       'Футболка "Сделай дз за день или сдохни"',
        isNew:       false,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        isDescr:     true,
    },
    {
        price:       3000,
        img:         '/src/assets/img/shirt-main.png',
        id:          10,
        title:       'Футболка "Эволюция, труд, май"',
        isNew:       false,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        isDescr:     true,
    },
    {
        price:       4000,
        img:         '/src/assets/img/shirt-main.png',
        id:          11,
        title:       'Футболка "Здесь могла быть ваша реклама"',
        isNew:       false,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        isDescr:     true,
    },
    {
        price:       5000,
        img:         '/src/assets/img/shirt-main.png',
        id:          12,
        title:       'Футболка "Любовь, код и котики"',
        isNew:       false,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        isDescr:     true,
    },
    {
        price:       6000,
        img:         '/src/assets/img/girl-shirt.jpg',
        id:          13,
        title:       'Футболка "Эволюционируй или сдохни"',
        isNew:       false,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        isDescr:     true,
    },
    {
        price:       7000,
        img:         '/src/assets/img/girl-shirt.jpg',
        id:          14,
        title:       'Футболка "Моя бабушка верстает лучше чем я"',
        isNew:       false,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        isDescr:     true,
    },
    {
        price:       8000,
        img:         '/src/assets/img/girl-shirt.jpg',
        id:          15,
        title:       'Футболка "я сделан из NaNNaN"',
        isNew:       false,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        isDescr:     true,
    },
    {
        price:       9000,
        img:         '/src/assets/img/girl-shirt.jpg',
        id:          16,
        title:       'Футболка "What is love?"',
        isNew:       false,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        isDescr:     true,
    },
    {
        price:       10000,
        img:         '/src/assets/img/girl-shirt.jpg',
        id:          17,
        title:       'Футболка "А у меня есть ТриКошки"',
        isNew:       false,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        isDescr:     true,
    },
];

const concatMass = accessories.concat(clothes);

function sortMass(value) {
    value.sort((a, b) => {
        if (a.isNew > b.isNew) {
            return -1;
        }

        if (a.isNew < b.isNew) {
            return 1;
        }

        return 0;
    });
}

const addCard = (img, price, title, isNew, id) => `<div class="main-block">
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
    Размеры S/M/L
    </span>
  </div>
  <div class="main-card__description-hidden open-modal" id="${id}">
    <button class="main-card__description-btn" type="button">
    Заказать
    </button>
  </div>
</section>
</div>`;

const addModal = (img, price, title, description, isDescr) => `
<div class="modal-solution__main">
  <div class="modal-solution__card">
    <div class="modal-solution__card--big"><img src="${img}"
        alt="Футболка с надписью 'Эволюционируй или сдохни'" width="330" height="330"></div>
    <div>
    <ul class="cards-little">
        <li class="modal-solution__card--little"><img src="/src/assets/icons/image-girl.png"
            alt="иконка товара">
        </li>
        <li class="modal-solution__card--little card-active"><img src="/src/assets/icons/t-shirt-sml.png"
            alt="иконка товара">
        </li>
        <li class="modal-solution__card--little"><img src="/src/assets/icons/image-man.png"
            alt="иконка товара">
            </li>
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
        <section class="modal-main-info__colors">
        <p class="modal-main-info__colors-text">Цвета:</p>
        <form action="" class="modal-main-info__choise-color">
            <div class="modal-main-info__radio">
            <input type="radio" name="colors" id="blue" value="blue" class="modal-main-info__input" checked>
            <label for="blue" class="modal-main-info__label label-1">Синий</label>
            </div>
            <div class="modal-main-info__radio">
            <input type="radio" name="colors" id="biege" value="biege" class="modal-main-info__input">
            <label for="biege" class="modal-main-info__label label-2">Бежевый</label>
            </div>
            <div class="modal-main-info__radio">
            <input type="radio" name="colors" id="gray" value="gray" class="modal-main-info__input">
            <label for="gray" class="modal-main-info__label label-3">Серый</label>
            </div>
        </form>
        </section>
        <section class="modal-main-info__size">
        <p class="modal-main-info__size-text">Размер:</p>
        <form action="#" class="modal-main-info__form-size">
            <div class="modal-main-info__radio-size">
            <input type="radio" name="size" id="S" value="S" class="modal-main-info__input-size active-size"
                checked>
            <label for="S" class="modal-main-info__label-size">S</label>
            </div>
            <div class="modal-main-info__radio-size">
            <input type="radio" name="size" id="M" value="M" class="modal-main-info__input-size">
            <label for="M" class="modal-main-info__label-size">M</label>
            </div>
            <div class="modal-main-info__radio-size">
            <input type="radio" name="size" id="L" value="L" class="modal-main-info__input-size">
            <label for="L" class="modal-main-info__label-size">L</label>
            </div>
        </form>
        </section>
        <section class="modal-main-info__descr">
            <p class="modal-main-info__descr-bold">
                Детали:
            </p>
            <p class="modal-main-info__descr-regular">
            ${description}
            </p>
            ${isDescr ? '' : ' <p class="modal-main-info__descr-bold">Как выбрать размер: </p>'}
            ${isDescr ? '' : '<p class="modal-main-info__descr-regular">Написать дяде Рику для уточнения.</p>'}
        </section>
    </div>`;

function cardChange(value) {
    value.forEach((card) => {
        const {
            price, img, title, isNew, id,
        } = card;
        const cardHtml = addCard(img, price, title, isNew, id);

        document.querySelector('.js__catalog').innerHTML += cardHtml;
    });
}

cardChange(concatMass);
// sortMass(concatMass);

function clearZone() {
    document.querySelector('.js__catalog').innerHTML = '';
}

const funcModal = (img, price, title, description) => {
    const modalHtml = addModal(img, price, title, description);

    document.querySelector('.js__modal').innerHTML = modalHtml;
};

const modal = document.querySelector('.mod');

const changeMass = document.querySelector('.choise-active');

const defaultMass = concatMass;

function itemRedef() {
    const item = document.querySelectorAll('.open-modal');

    item.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            const massId = defaultMass[btn.id];

            funcModal(massId.img, massId.price, massId.title, massId.description);
        });
    });
}

if (changeMass.dataset.key === 'all') {
    // defaultMass = concatMass;
    itemRedef(concatMass);
} else if (changeMass.dataset.key === 'clothes') {
    // defaultMass = clothes;
    itemRedef(clothes);
} else if (changeMass.dataset.key === 'accessories') {
    // defaultMass = accessories;
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

        if (activeBtn) {
            activeBtn.classList.remove('choise-active');
        }

        if (category === 'all') {
            clearZone();
            // sortMass(concatMass);
            cardChange(concatMass);
            btnChoise.classList.add('choise-active');
            itemRedef();
        } else if (category === 'clothes') {
            clearZone();
            sortMass(clothes);
            cardChange(clothes);
            btnChoise.classList.add('choise-active');
            itemRedef();
        } else if (category === 'accessories') {
            clearZone();
            sortMass(accessories);
            cardChange(accessories);
            btnChoise.classList.add('choise-active');
            itemRedef();
        }
    });
});
