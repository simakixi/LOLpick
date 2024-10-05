let roll = [0,1,2,3,4];
let number = [0,1,2,3,4];
let top1 = document.createElement('img');
let jg = document.createElement('img');
let mid = document.createElement('img');
let bot = document.createElement('img');
let sup = document.createElement('img');

top1.src = "img/top.png";
jg.src = "img/jg.png";
mid.src = "img/mid.png";
bot.src = "img/bot.png";
sup.src = "img/sup.png";

img = [top1,jg,mid,bot,sup];
flag = true;

async function random(){
    if(flag){
    flag=false;
    shuffle();
    topanime();
    jganime();
    midanime();
    botanime();
    supanime();
    }
}

function shuffle(){
    for(let i=0;i<200;i++){
        const index1 = Math.floor(Math.random() * 5);
        const index2 = Math.floor(Math.random() * 5);
        if (index1 !== index2) {
            [roll[index1], roll[index2]] = [roll[index2], roll[index1]];
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function topanime() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
            await sleep(200);
            const container = document.getElementById("T1");
            const Element = container.querySelector('img');
            if (Element) {
                Element.src = img[j].src;
            } else {
                const newElement = document.createElement('img');
                newElement.src = img[j].src;
                container.appendChild(newElement);
            }
        }
    }
    document.getElementById("T1").querySelector('img').src = img[roll[0]].src;
}

async function jganime() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            await sleep(200);
            const container = document.getElementById("T2");
            const Element = container.querySelector('img');
            if (Element) {
                Element.src = img[(j + 1) % 5].src;
            } else {
                const newElement = document.createElement('img');
                newElement.src = img[(j + 1) % 5].src;
                container.appendChild(newElement);
            }
        }
    }
    document.getElementById("T2").querySelector('img').src = img[roll[1]].src;
}

async function midanime() {
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 5; j++) {
            await sleep(200);
            const container = document.getElementById("T3");
            const Element = container.querySelector('img');
            if (Element) {
                Element.src = img[(j + 2) % 5].src;
            } else {
                const newElement = document.createElement('img');
                newElement.src = img[(j + 2) % 5].src;
                container.appendChild(newElement);
            }
        }
    }
    document.getElementById("T3").querySelector('img').src = img[roll[2]].src;
}

async function botanime() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 5; j++) {
            await sleep(200);
            const container = document.getElementById("T4");
            const Element = container.querySelector('img');
            if (Element) {
                Element.src = img[(j + 3) % 5].src;
            } else {
                const newElement = document.createElement('img');
                newElement.src = img[(j + 3) % 5].src;
                container.appendChild(newElement);
            }
        }
    }
    document.getElementById("T4").querySelector('img').src = img[roll[3]].src;
}

async function supanime() {
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 5; j++) {
            await sleep(200);
            const container = document.getElementById("T5");
            const Element = container.querySelector('img');
            if (Element) {
                Element.src = img[(j + 4) % 5].src;
            } else {
                const newElement = document.createElement('img');
                newElement.src = img[(j + 4) % 5].src;
                container.appendChild(newElement);
            }
        }
    }
    document.getElementById("T5").querySelector('img').src = img[roll[4]].src;
    await sleep(500);
    flag=true;
}