import '../css/style.scss';

const modal = document.querySelector('.mod');

const item = document.querySelector('.open-modal');

const span = document.querySelector('.modal-content__close');

item.onclick = function () {
    modal.style.display = 'block';
};

span.onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
