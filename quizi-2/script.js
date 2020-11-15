function getPositiveNumbersAverage(numbersArray){
    var negativeNumbers = [];
    var positiveNumbers = [];
    for(let i=0;i < numbersArray.length;i++){
        if(numbersArray[i] >= 0){
            positiveNumbers.push(numbersArray[i]);
        }
        else if(numbersArray[i]<0){
            negativeNumbers.push(numbersArray[i]);
        }
    }
    var count = 0;
    for(let i =0;i<positiveNumbers.length;i++){
        count += positiveNumbers[i];
    }

    count /= positiveNumbers.length;
    alert(count);
}

let arr = [-4,-7,14,17,23,76,-6,-1,-19,7,8,4];

getPositiveNumbersAverage(arr);