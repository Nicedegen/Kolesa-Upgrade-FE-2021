import '../css/style.css';

const modal = document.getElementById('mod');

const item = document.getElementsByClassName('items-1')[0];

const span = document.getElementsByClassName('close')[0];

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
