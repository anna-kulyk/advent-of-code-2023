let dataText = document.querySelector('.task1').textContent;
//let dataText = document.querySelector('.example').textContent;
let data = dataText.split("\n");
data = data.map(element => element.split(''));

console.log(data)

let result = 0;

for (let i = 0; i < data.length; i++) {
    const dataRow = data[i];
    for (let j = 0; j < dataRow.length; j++) {        
        const element = dataRow[j];
        let numberStartIndex = -1;
        let numberEndIndex = -1;

        if(!isNaN(Number(element))) {
            let isAdjacentToSymbol = false;
            numberStartIndex = j;

            let nextElementIndex = numberStartIndex + 1;
            while(numberEndIndex < 0) {
                if(!isNaN(Number(dataRow[nextElementIndex]))) {
                    nextElementIndex++;
                    continue;
                }
                else {
                    numberEndIndex = nextElementIndex - 1;
                    j = nextElementIndex;
                }
            }

            for (let x = numberStartIndex; x <= numberEndIndex; x++) {
                let elementToCheck

                if(i != 0) {
                    elementToCheck = data[i-1][x];
                    if(elementToCheck != "." && isNaN(Number(elementToCheck))) {
                        isAdjacentToSymbol = true;
                        break;
                    }
                }

                if(i != data.length - 1) {
                    elementToCheck = data[i+1][x];
                    if(elementToCheck != "." && isNaN(Number(elementToCheck))) {
                        isAdjacentToSymbol = true;
                        break;
                    }
                }

                if(x == numberStartIndex && x != 0) {
                    elementToCheck = data[i][x-1];
                    if(elementToCheck != "." && isNaN(Number(elementToCheck))) {
                        isAdjacentToSymbol = true;
                        break;
                    }

                    if(i != 0) {
                        elementToCheck = data[i-1][x-1];
                        if(elementToCheck != "." && isNaN(Number(elementToCheck))) {
                            isAdjacentToSymbol = true;
                            break;
                        }
                    }

                    if(i != data.length - 1) {
                        elementToCheck = data[i+1][x-1];
                        if(elementToCheck != "." && isNaN(Number(elementToCheck))) {
                            isAdjacentToSymbol = true;
                            break;
                        }
                    }
                }

                if(x == numberEndIndex && x != dataRow.length - 1) {
                    elementToCheck = data[i][x+1];
                    if(elementToCheck != "." && isNaN(Number(elementToCheck))) {
                        isAdjacentToSymbol = true;
                        break;
                    }

                    if(i != 0) {
                        elementToCheck = data[i-1][x+1];
                        if(elementToCheck != "." && isNaN(Number(elementToCheck))) {
                            isAdjacentToSymbol = true;
                            break;
                        }
                    }

                    if(i != data.length - 1) {
                        elementToCheck = data[i+1][x+1];
                        if(elementToCheck != "." && isNaN(Number(elementToCheck))) {
                            isAdjacentToSymbol = true;
                            break;
                        }
                    }
                }
            }

            if(isAdjacentToSymbol) {
                let numberArray = dataRow.slice(numberStartIndex, numberEndIndex + 1);
                let numberString = numberArray.join('');
                let number = Number(numberString);

                result += number;
            }
        }
        
    }
}

console.log("Task 1: ", result);

//-------------------------------------------------------------------------------------------------

let result2 = 0;

for (let i = 0; i < data.length; i++) {
    const dataRow = data[i];
    for (let j = 0; j < dataRow.length; j++) {        
        const element = dataRow[j];

        if(element != "*") {
            continue;
        }

        let numberCount = 0;
        let sum = 1;
        let numberStartIndex = -1;
        let numberEndIndex = -1;

        if(j != 0) {
            let elementToCheck = data[i][j-1];
            if(!isNaN(Number(elementToCheck))) {
                numberCount++;
                numberEndIndex = j-1;
                let nextElementIndex = numberEndIndex - 1;

                while(nextElementIndex >= 0) {
                    if(!isNaN(Number(data[i][nextElementIndex]))) {
                        if(nextElementIndex == 0) {
                            numberStartIndex = nextElementIndex;
                            break;
                        }
                        nextElementIndex--;
                    }
                    else {
                        numberStartIndex = nextElementIndex + 1;
                        break;
                    }
                }

                let numberArray = data[i].slice(numberStartIndex, numberEndIndex + 1);
                let numberString = numberArray.join('');
                let number = Number(numberString);

                sum *= number;
            }
        }

        if(j != dataRow.length - 1) {
            let elementToCheck = data[i][j+1];
            if(!isNaN(Number(elementToCheck))) {
                numberCount++;
                numberStartIndex = j+1;
                let nextElementIndex = numberStartIndex + 1;

                while(nextElementIndex < dataRow.length) {
                    if(!isNaN(Number(data[i][nextElementIndex]))) {
                        if(nextElementIndex == dataRow.length - 1) {
                            numberEndIndex = nextElementIndex;
                            break;
                        }
                        nextElementIndex++;
                    }
                    else {
                        numberEndIndex = nextElementIndex - 1;
                        break;
                    }
                }

                let numberArray = data[i].slice(numberStartIndex, numberEndIndex + 1);
                let numberString = numberArray.join('');
                let number = Number(numberString);

                sum *= number;
            }
        }

        if(i != 0) {
            for(x = j-1; x <= j+1; x++) {
                if(x < 0 || x >= dataRow.length) {continue;}
    
                numberEndIndex = x;

                if(!isNaN(Number(data[i-1][x]))) {
                    numberCount++;

                    let index = x - 1;
                    //numberStartIndex
                    if(index != -1) {
                        while(index >= 0) {
                            let elementToCheck = data[i-1][index];
                            if(!isNaN(Number(elementToCheck))) {
                                if(index == 0) {
                                    numberStartIndex = index;
                                    break;
                                }
                                index--;          
                            }
                            else {
                                numberStartIndex = index + 1;
                                break;
                            }
                        }                       
                    }
                    else {
                        numberStartIndex = x;
                    }
                    
                    //numberEndIndex
                    index = x + 1;
                    if(index != dataRow.length) {
                        while(index < dataRow.length) {
                            let elementToCheck = data[i-1][index];
                            if(!isNaN(Number(elementToCheck))) {
                                if(index == dataRow.length - 1) {
                                    numberEndIndex = index;
                                    break;
                                }
                                index++;          
                            }
                            else {
                                numberEndIndex = index - 1;
                                break;
                            }
                        }                       
                    }
                    else {
                        numberEndIndex = x;
                    }

                    let numberArray = data[i-1].slice(numberStartIndex, numberEndIndex + 1);
                    let numberString = numberArray.join('');
                    let number = Number(numberString);
    
                    sum *= number;

                    x = numberEndIndex;
                }
    
            }
        }

        if(i != data.length - 1) {
            for(x = j-1; x <= j+1; x++) {
                if(x < 0 || x >= dataRow.length) {continue;}
    
                numberEndIndex = x;
                
                if(!isNaN(Number(data[i+1][x]))) {
                    numberCount++;

                    let index = x - 1;
                    //numberStartIndex
                    if(index != -1) {
                        while(index >= 0) {
                            let elementToCheck = data[i+1][index];
                            if(!isNaN(Number(elementToCheck))) {
                                if(index == 0) {
                                    numberStartIndex = index;
                                    break;
                                }
                                index--;          
                            }
                            else {
                                numberStartIndex = index + 1;
                                break;
                            }
                        }                       
                    }
                    else {
                        numberStartIndex = x;
                    }
                    
                    //numberEndIndex
                    index = x + 1;
                    if(index != dataRow.length) {
                        while(index < dataRow.length) {
                            let elementToCheck = data[i+1][index];
                            if(!isNaN(Number(elementToCheck))) {
                                if(index == dataRow.length - 1) {
                                    numberEndIndex = index;
                                    break;
                                }
                                index++;          
                            }
                            else {
                                numberEndIndex = index - 1;
                                break;
                            }
                        }                       
                    }
                    else {
                        numberEndIndex = x;
                    }

                    let numberArray = data[i+1].slice(numberStartIndex, numberEndIndex + 1);
                    let numberString = numberArray.join('');
                    let number = Number(numberString);
    
                    sum *= number;

                    x = numberEndIndex;
                }
    
            }
        }

        if(numberCount == 2) {
            result2 += sum;
        }

    }
}

console.log("Task 2: ", result2);