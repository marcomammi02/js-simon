const eleNumbers = document.querySelector('.casual-numbers');
const eleTitle = document.querySelector('.title');
const eleSubtitle = document.querySelector('.subtitle');
const arrNumbers = [];
let n1;
let n2;
let n3;
let n4;
let n5;
let numbersGuessedList = [];
let howManyNumbersGuessed = 0;

getRandonIntegerArray()
eleNumbers.innerHTML = arrNumbers;
console.log(arrNumbers);

const myTimeoutHidder = setTimeout(hidder, 30000);
const myTimeoutQuestions = setTimeout(questionsAndAnswer, 30500);


function hidder() {
    eleNumbers.classList.add('hidden');
    eleTitle.classList.add('hidden');
    eleSubtitle.classList.remove('hidden');
    clearTimeout(myTimeoutHidder)
}

function questionsAndAnswer() {
    clearTimeout(myTimeoutQuestions)
    n1 = prompt('Inserisci il primo numero che ricordi...');
    n2 = prompt('Un\'altro...');
    n3 = prompt('Ancora uno...');
    n4 = prompt('Ancora un numero forza...');
    n5 = prompt('Questo è l\'ultimo dai!');
    
    if (arrNumbers.includes(parseInt(n1))) {
        numbersGuessedList.push(n1);
        howManyNumbersGuessed += 1;
    }
    if (arrNumbers.includes(parseInt(n2))) {
        numbersGuessedList.push(n2);
        howManyNumbersGuessed += 1;
    }
    if (arrNumbers.includes(parseInt(n3))) {
        numbersGuessedList.push(n3);
        howManyNumbersGuessed += 1;
    }
    if (arrNumbers.includes(parseInt(n4))) {
        numbersGuessedList.push(n4);
        howManyNumbersGuessed += 1;
    }
    if (arrNumbers.includes(parseInt(n5))) {
        numbersGuessedList.push(n5);
        howManyNumbersGuessed += 1;
    }
    eleSubtitle.classList.add('hidden');
    const eleAnswer = document.querySelector('.answer');
    eleAnswer.innerHTML = `Hai indovinato ${howManyNumbersGuessed} numeri: ${numbersGuessedList}`
}

function getRandonIntegerArray() {
    while (arrNumbers.length < 5) {
        let randomInteger = Math.floor(Math.random() * 100);
        if (!arrNumbers.includes(randomInteger)) {
            arrNumbers.push(randomInteger);
        }
    }
}