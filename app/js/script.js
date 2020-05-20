function init() {
    let ball = document.getElementById('ball');

    ball.onclick = function () {
        shake();
        removeContent();
        setTimeout(getAnswer, 800);
    }

    ball.oncontextmenu = function () {
        return false;
    }

    ball.onmousedown = function () {
        return false;
    }
}

function shake() {
    move(30, 200);
    move(-20, 300);
    move(30, 400);
    move(0, 500);
}

function move(index, time) {
    setTimeout(() => {
        ball.style.marginTop = index + 'px'
    }, time);
}

function removeContent() {
    document.getElementById('text').remove();
}

function getAnswer() {
    let rand = db.list[Math.floor(Math.random() * db.list.length)];
    addAnswer(db.answers[rand]);
}

function addAnswer(content) {
    document.getElementById('triangle').innerHTML = content;
    setTimeout(seeming, 250);
}

function seeming() {
    let text = document.getElementById('text');
    let seeming = 0.1;
    let timer;
    function showText() {
        text.style.opacity = seeming;
        seeming = seeming + 0.1;
        if (seeming > 1) {
            clearTimeout(timer);
        }
        else {
            timer = setTimeout(showText, 350);
        }
    }
    showText();
}

document.onload = init();







