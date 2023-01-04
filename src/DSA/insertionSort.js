/**
 * @decription Insertion Sort
 * 1) Assume the first element in the array as a sorted 
 * 2) Rest of the elements are unsorted 
 * 3) All unsorted elements to compare the sorted element and 
*     insert the greater elements to the correct position
 */

function insertionSort(array) {

    for(let i = 1; i < array.length; i++) {
        let currentElement = array[i];
        let j = i - 1;
        while(j >=0 && array[j] > currentElement) {
            array[j+1] = array[j];
            j = j -1;
        }
        array[j+1] = currentElement;
    }
    return array
}

const unsortedArr = [100, 20, 30, 40, 5, -1000, 5, 15, 25, 35, 45, -10]
console.log(insertionSort(unsortedArr))