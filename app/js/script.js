const ball = document.querySelector('.ball');
let leng = '';

function init() {
    ball.onclick = () => {
        switchLeng();
        shake();
        removeContent();
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
    let radio = document.querySelector('.switch');
    if (radio.checked) leng = 'eng';
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

function removeContent() {
    document.getElementById('text').remove();
}

function getAnswer() {
    let rand = db.list[Math.floor(Math.random() * db.list.length)];
    addAnswer(db.answers[leng][rand]);
}

function addAnswer(content) {
    document.querySelector('.ball-center').innerHTML = content;
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







