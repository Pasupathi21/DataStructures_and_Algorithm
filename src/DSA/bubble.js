function bubbleSort(array) {
    let isSwapped;
    while (!isSwapped) {
        console.log('>>>>>')
        isSwapped = true;
        for (let current = 0; current < array.length - 1; current++) {
            let next = current + 1
            if (array[current] > array[next]) {
                let tempValue = array[next];
                array[next] = array[current];
                array[current] = tempValue;
                isSwapped = false;
            }
        }
    }
    if (isSwapped) return array


}

function bubbleSortDoWhile(array) {
    let isSwapped;
    do {
        isSwapped = false;
        console.log('>>>>>')
        for (let current = 0; current < array.length - 1; current++) {
            let next = current + 1
            if (array[current] > array[next]) {
                let tempValue = array[next];
                array[next] = array[current];
                array[current] = tempValue;
                isSwapped = true;
            }
        }
    }while(isSwapped)
    return array


}

const unsortedArr = [10, 20, 30, 40, 5, -1000, 5, 15, 25, 35, 45, -10]
console.log(bubbleSortDoWhile(unsortedArr))