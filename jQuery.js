$(document).ready(function () {
// Завдання 1
$('#addHtmlt').html('<h1> New Element </h1>');

$('.hideDiv').hide();

$('section').remove();

$('.addText').addClass('addClass').text('Lumos Maxima');

// Завдання 2
let isTransformed = false;

$('#btnRectangle').click(function () {
    let box = $('#animationBox');
    box.animate({ left: '+=200px' }, 500)
    .animate({ top: '+=200px' }, 500)
    .animate({ left: '-=200px' }, 500)
    .animate({ top: '-=200px' }, 500);
});

$('#btnTriangle').click(function () {
    let box = $('#animationBox');
    box.animate({ left: '+=150px', top: '+=0' }, 500)
    .animate({ left: '-=75px', top: '-=130px' }, 500)
    .animate({ left: '-=75px', top: '+=130px' }, 500);
});

$('#btnTransform').click(function () {
    let box = $('#animationBox');

    if (!isTransformed) {
    box.animate({
        width: '400px',
        height: '400px',
        opacity: 1
    }, 700);
    } else {
    box.animate({
        width: '100px',
        height: '100px',
        left: '0px',
        top: '0px',
        opacity: 1
    }, 700);
    }

    isTransformed = !isTransformed;
});
});
