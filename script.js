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

let TOPROLL = [1,3,12,21,23,25,28,34,37,38,39,40,42,44,46,47,51,52,61,63,66,68,77,83,84,88,95,97,98,99,102,108,110,111,117,119,121,122,131,135,138,141,142,144,150,151,157,158,160,167];
let JGROLL = [6,15,19,26,29,30,31,33,40,41,42,43,48,50,51,58,62,64,65,70,72,79,80,83,91,93,94,104,105,109,114,118,120,124,132,141,147,148,151,152,155,160];
let MIDROLL = [2,3,4,7,8,11,12,13,17,22,24,26,29,35,36,45,47,52,59,60,69,73,76,78,86,90,96,101,112,129,130,132,133,137,139,145,149,150,154,156,157,161,163,165,168];
let BOTROLL = [9,10,20,27,32,53,54,55,57,67,74,82,92,113,123,125,137,140,143,153,156,162,163];
let SUPROLL = [5,10,14,16,17,18,49,56,71,75,76,79,81,85,87,89,90,98,99,100,103,106,107,115,116,126,127,128,131,134,136,146,154,159,164,166];

let TOPCHAR = [];
let JGCHAR = [];
let MIDCHAR = [];
let BOTCHAR = [];
let SUPCHAR = [];

let Character = [];
for(let i=1;i<=168;i++){
    let tmp = document.createElement("img");
    tmp.src = "img/CHAR/"+i+".png";
    Character[i] = tmp;
}

for(let i=0;i<TOPROLL.length;i++){
    TOPCHAR[i] = Character[TOPROLL[i]]
}

for(let i=0;i<JGROLL.length;i++){
    JGCHAR[i] = Character[JGROLL[i]]
}

for(let i=0;i<MIDROLL.length;i++){
    MIDCHAR[i] = Character[MIDROLL[i]]
}

for(let i=0;i<BOTROLL.length;i++){
    BOTCHAR[i] = Character[BOTROLL[i]]
}

for(let i=0;i<SUPROLL.length;i++){
    SUPCHAR[i] = Character[SUPROLL[i]]
}

const OPGGlink = [
    "https://www.colordic.org/",
    "https://example.com/newlink2",
    "https://example.com/newlink3"
];

let functionlist = [
    toprandom,
    jgrandom,
    midrandom,
    botrandom,
    suprandom
];


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
    for (let i = 0; i < 2; i++) {
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
    for (let i = 0; i < 4; i++) {
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
    for (let i = 0; i < 6; i++) {
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
    for (let i = 0; i < 8; i++) {
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
    for (let i = 0; i < 10; i++) {
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

let flag2=true;
//ランダムチャンピオン
function randomchampion(){
    if(flag2){
        flag2=false;
        let select = document.getElementById("champion");
        let value = select.value;
        if(value=="0"){
            all("championcell");
        }else if(value=="1"){
            toprandom("championcell");
        }else if(value=="2"){
            jgrandom("championcell");
        }else if(value=="3"){
            midrandom("championcell");
        }else if(value=="4"){
            botrandom("championcell");
        }else if(value=="5"){
            suprandom("championcell");
        }else{
            flag2=true;
        }
    }
}

async function all(cell){
    let randomM = -1;
    let randomN = -1;
    for (let i = 0; i < 25; i++) {
        await sleep(200);
        do {
            randomN = Math.floor(Math.random() * 168) + 1;
        } while (randomN === randomM);
        randomM = randomN;
        const container = document.getElementById(cell);
        const Element = container.querySelector('img');
        if (Element) {
            Element.src = Character[randomN].src;
        } else {
            const newElement = document.createElement('img');
            newElement.src = Character[randomN].src;
            container.appendChild(newElement);
        }
    }
    randomN = Math.floor(Math.random() * 168) + 1;
    document.getElementById(cell).querySelector('img').src = Character[randomN].src;
    selectnumber = randomN;
    flag2=true;
}

async function toprandom(cell){
    let randomM = -1;
    let randomN = -1;
    for (let i = 0; i < 25; i++) {
        await sleep(200);
        do {
            randomN = Math.floor(Math.random() * TOPCHAR.length);
        } while (randomN === randomM);
        randomM = randomN;
        const container = document.getElementById(cell);
        const Element = container.querySelector('img');
        if (Element) {
            Element.src = TOPCHAR[randomN].src;
        } else {
            const newElement = document.createElement('img');
            newElement.src = TOPCHAR[randomN].src;
            container.appendChild(newElement);
        }
    }
    randomN = Math.floor(Math.random() * TOPCHAR.length);
    document.getElementById(cell).querySelector('img').src = TOPCHAR[randomN].src;
    selectnumber = randomN;
    flag2=true;
    flag=true;
}

async function jgrandom(cell){
    let randomM = -1;
    let randomN = -1;
    for (let i = 0; i < 25; i++) {
        await sleep(200);
        do {
            randomN = Math.floor(Math.random() * JGCHAR.length);
        } while (randomN === randomM);
        randomM = randomN;
        const container = document.getElementById(cell);
        const Element = container.querySelector('img');
        if (Element) {
            Element.src = JGCHAR[randomN].src;
        } else {
            const newElement = document.createElement('img');
            newElement.src = JGCHAR[randomN].src;
            container.appendChild(newElement);
        }
    }
    randomN = Math.floor(Math.random() * JGCHAR.length);
    document.getElementById(cell).querySelector('img').src = JGCHAR[randomN].src;
    selectnumber = randomN;
    flag2=true;
    flag=true;
}

async function midrandom(cell){
    let randomM = -1;
    let randomN = -1;
    for (let i = 0; i < 25; i++) {
        await sleep(200);
        do {
            randomN = Math.floor(Math.random() * MIDCHAR.length);
        } while (randomN === randomM);
        randomM = randomN;
        const container = document.getElementById(cell);
        const Element = container.querySelector('img');
        if (Element) {
            Element.src = MIDCHAR[randomN].src;
        } else {
            const newElement = document.createElement('img');
            newElement.src = MIDCHAR[randomN].src;
            container.appendChild(newElement);
        }
    }
    randomN = Math.floor(Math.random() * MIDCHAR.length);
    document.getElementById(cell).querySelector('img').src = MIDCHAR[randomN].src;
    selectnumber = randomN;
    flag2=true;
    flag=true;
}

async function botrandom(cell){
    let randomM = -1;
    let randomN = -1;
    for (let i = 0; i < 25; i++) {
        await sleep(200);
        do {
            randomN = Math.floor(Math.random() * BOTCHAR.length);
        } while (randomN === randomM);
        randomM = randomN;
        const container = document.getElementById(cell);
        const Element = container.querySelector('img');
        if (Element) {
            Element.src = BOTCHAR[randomN].src;
        } else {
            const newElement = document.createElement('img');
            newElement.src = BOTCHAR[randomN].src;
            container.appendChild(newElement);
        }
    }
    randomN = Math.floor(Math.random() * BOTCHAR.length);
    document.getElementById(cell).querySelector('img').src = BOTCHAR[randomN].src;
    selectnumber = randomN;
    flag2=true;
    flag=true;
}

async function suprandom(cell){
    let randomM = -1;
    let randomN = -1;
    for (let i = 0; i < 25; i++) {
        await sleep(200);
        do {
            randomN = Math.floor(Math.random() * SUPCHAR.length);
        } while (randomN === randomM);
        randomM = randomN;
        const container = document.getElementById(cell);
        const Element = container.querySelector('img');
        if (Element) {
            Element.src = SUPCHAR[randomN].src;
        } else {
            const newElement = document.createElement('img');
            newElement.src = SUPCHAR[randomN].src;
            container.appendChild(newElement);
        }
    }
    randomN = Math.floor(Math.random() * SUPCHAR.length);
    document.getElementById(cell).querySelector('img').src = SUPCHAR[randomN].src;
    selectnumber = randomN;
    flag2=true;
    flag=true;
}

//ランダムパーティ処理
function randomparty(){
    if(flag){
        flag=false;
        functionlist[roll[0]]("P1");
        functionlist[roll[1]]("P2");
        functionlist[roll[2]]("P3");
        functionlist[roll[3]]("P4");
        functionlist[roll[4]]("P5");
    }
}

let selectnumber = -1;
function setlink(){
    let linknumber;
    let select = document.getElementById("champion");
    let value = select.value;
    if(value=="0"){
        CHaracter[selectnumber];
    }else if(value=="1"){
        TOPROLL[selectnumber]
    }else if(value=="2"){
        JGROLL[selectnumber];
    }else if(value=="3"){
        MIDROLL[selectnumber];
    }else if(value=="4"){
        BOTROLL[selectnumber];
    }else if(value=="5"){
        SUPROLL[selectnumber];
    }
    let linkcell = document.getElementById("OPGG");
    linkcell.href = OPGGlink[linknumber];
}