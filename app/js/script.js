const ball = document.querySelector('.ball');
let leng = '';

function init() {
    ball.onclick = () => {
        document.getElementById('text').remove();
        switchLeng();
        shake();
        setTimeout(getAnswer, 800);
    }

    ball.oncontextmenu = () => {
        return false;
    }

    ball.onmousedown = () => {
        return false;
    }
}

function switchLeng() {
    let chbox = document.querySelector('.switch');
    if (chbox.checked) leng = 'eng';
    else leng = 'rus';
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

function getAnswer() {
    let answer = 'answer';
    answer += Math.round(1 - 0.5 + Math.random() * (20 - 1 + 1));
    addAnswer(db.answers[leng][answer]);
}

function addAnswer(content) {
    let out = `<div id="text">${content}</div>`
    document.querySelector('.ball-center').innerHTML = out;
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

init();







