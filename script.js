const eleNumbers = document.querySelector('.casual-numbers');
const arrNumbers = [];

getRandonIntegerArray()
eleNumbers.innerHTML = arrNumbers;


















function getRandonIntegerArray() {
    while (arrNumbers.length < 5) {
        let randomInteger = Math.floor(Math.random() * 100);
        if (!arrNumbers.includes(randomInteger)) {
            arrNumbers.push(randomInteger);
        }
    }
}