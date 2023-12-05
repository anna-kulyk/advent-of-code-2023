let dataText = document.querySelector('.task1').textContent;
// let dataText = document.querySelector('.example').textContent;
let data = dataText.split("\n");
data = data.map(element => element.split(/[:|]+/));

console.log(data);

let result = 0;

data.forEach(element => {
    let winningNumbers = element[1].trim().split(/\s+/);
    let userNumbers = element[2].trim().split(/\s+/);

    const filteredNumbers = winningNumbers.filter(value => userNumbers.includes(value));
    if(filteredNumbers != 0) {
        let number = Math.pow(2, filteredNumbers.length - 1);
        result += number;
    } 
})

console.log("Task 1: ", result);

//-------------------------------------------------------------------------------------------------

let result2 = 0;

let numberOfCards = [];

data.forEach((element, index) => {
    let winningNumbers = element[1].trim().split(/\s+/);
    let userNumbers = element[2].trim().split(/\s+/);

    const filteredNumbers = winningNumbers.filter(value => userNumbers.includes(value));
    let matchingNumbersCount = filteredNumbers.length;

    if(numberOfCards[index] == undefined) {
        numberOfCards[index] = 1;
    }
    else {
        numberOfCards[index] = numberOfCards[index] + 1;
    }

    let nextIndex = index + 1;
    for (let i = nextIndex; i < nextIndex + matchingNumbersCount; i++) {
        if(numberOfCards[i] == undefined) {
            numberOfCards[i] = numberOfCards[index];
        }
        else {
            numberOfCards[i] = numberOfCards[i] + numberOfCards[index];
        }
    }
})

numberOfCards.forEach(el => result2 += el);

console.log("Task 2: ", result2);