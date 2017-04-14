$(document).ready(function() {

    for (var i = 0; i < 15; i++) {
        $('.box').append(`<canvas class="drag" id="${i}"><canvas>`);
    };

    $('.drag').draggable({
        grid: [50, 20]
    });

    var blocks = $('.drag');
    for (canvas in blocks) {
        console.log(blocks[canvas]);
    }

    var r = Math.floor(Math.random() * 255),
        g = Math.floor(Math.random() * 255),
        b = Math.floor(Math.random() * 255),
        a = Math.random();

    // console.log(r, g, b, a);
});