let nameInput;
let formButton;
let container;

$(document).ready(() => {
    nameInput = $('#nameInput');
    formButton = $('#formButton');
    container = $('#container');
    let textContainer = $('<div></div>');

    nameInput.keydown((ev) => {
        if (nameInput.val().length === 1 && ev.keyCode === 8) {
            formButton.prop('disabled', true);
        } else {
            formButton.prop('disabled', false);
        }
    });

    formButton.click(() => {
        let value = nameInput.val();

        let text = $(`<h2>${value}</h2>`);

        text.mouseover(() => {
            text.css({
                backgroundColor: getRandomColor(),
                borderRadius: `${randomBorderRadius()}%`,
            });
        });

        textContainer.append(text);
        nameInput.val('');
    });

    container.append(textContainer);
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomBorderRadius() {
    return Math.floor(Math.random() * 100);
}
