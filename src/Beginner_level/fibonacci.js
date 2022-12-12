/**
 * @description 
 * To generate the given range of the sequence of the number
 * Fibnocci is  0 + 1 = 1 , 1 + 2 = 3, 3 + 4 = 7 [0, 1, 3, 7]
 * 0, 1, 1, 2, 3, 5, 8
 */

function fibonacci(range) {
    let count = 0;
    let firstValue = 0;
    let secondValue = 1
    console.log(firstValue);
    console.log(secondValue)
    while(count <= range) {  
        let additionValue = firstValue + secondValue;
        console.log(additionValue);
        firstValue = secondValue;
        secondValue = additionValue;
        count ++
    }
}

fibonacci(7)