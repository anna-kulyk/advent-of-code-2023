let dataText = document.querySelector('.task1').textContent;
let data = dataText.split(" ");

let result = 0;

data.forEach(element => {
    let allNumbers = element.match(/\d/g);

    if(allNumbers) {
        let number = Number(allNumbers[0]*10) + Number(allNumbers[allNumbers.length -1]);
        
        if(!isNaN(number)) {
            result += number;
        }
    }
});

console.log("Task 1: ", result);

//-------------------------------------------------------------------------------------------------

let result2 = 0;

data.forEach(element => {
    let replacedNumbers = element.replaceAll("one", "one1one").replaceAll("two", "two2two").replaceAll("three", "three3three").replaceAll("four", "four4four").replaceAll("five", "five5five").replaceAll("six", "six6six").replaceAll("seven", "seven7seven").replaceAll("eight", "eight8eight").replaceAll("nine", "nine9nine");

    let allNumbers = replacedNumbers.match(/\d/g);

    if(allNumbers) {
        let number = Number(allNumbers[0]*10) + Number(allNumbers[allNumbers.length -1]);

        if(!isNaN(number)) {
            result2 += number;
        }
    }
});

console.log("Task 2: ", result2);