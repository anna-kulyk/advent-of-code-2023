let dataText = document.querySelector('.task1').textContent;
let data = dataText.split("\n");

let result = 0;

data.forEach(element => {
    let elementArray = element.split(/[\s,:;]+/);

    let game = Number(elementArray[1]);

    let red = blue = green = 0;
    for (let index = 3; index < elementArray.length; index += 2) {
        const color = elementArray[index];

        if(color == "red" && red < Number(elementArray[index - 1])) {
            red = Number(elementArray[index - 1]);
        }
        else if (color == "green" && green < Number(elementArray[index - 1])) {
            green = Number(elementArray[index - 1]);
        }
        else if(color == "blue" && blue < Number(elementArray[index - 1])) {
            blue = Number(elementArray[index - 1]);
        }
     
    }

    if(red <= 12 && green <= 13 && blue <= 14) {
        result += game;
    }
})

console.log("Task 1: ", result);

//-------------------------------------------------------------------------------------------------

let result2 = 0;

data.forEach(element => {
    let elementArray = element.split(/[\s,:;]+/);

    let red = blue = green = 0;
    for (let index = 3; index < elementArray.length; index += 2) {
        const color = elementArray[index];

        if(color == "red" && red < Number(elementArray[index - 1])) {
            red = Number(elementArray[index - 1]);
        }
        else if (color == "green" && green < Number(elementArray[index - 1])) {
            green = Number(elementArray[index - 1]);
        }
        else if(color == "blue" && blue < Number(elementArray[index - 1])) {
            blue = Number(elementArray[index - 1]);
        }
     
    }

    result2 += (red * blue * green);
})



console.log("Task 2: ", result2);