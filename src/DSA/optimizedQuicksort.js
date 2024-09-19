// refered from ChatGPT

function quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        // Partition the array and get the pivot index
        const pivotIndex = partition(array, low, high);
        
        // Recursively sort the left part
        quickSort(array, low, pivotIndex - 1);
        
        // Recursively sort the right part
        quickSort(array, pivotIndex + 1, high);
    }
    return array;
}

function partition(array, low, high) {
    // Optimized pivot selection: median of first, middle, and last elements
    const mid = Math.floor((low + high) / 2);
    const pivotIndex = medianOfThree(array, low, mid, high);
    const pivot = array[pivotIndex];
    
    // Move pivot to the end of the range
    [array[pivotIndex], array[high]] = [array[high], array[pivotIndex]];

    let i = low - 1;

    // Partition the array based on pivot
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Place the pivot back in the correct position
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}

function medianOfThree(array, low, mid, high) {
    if (array[low] > array[mid]) {
        [array[low], array[mid]] = [array[mid], array[low]];
    }
    if (array[mid] > array[high]) {
        [array[mid], array[high]] = [array[high], array[mid]];
    }
    if (array[low] > array[mid]) {
        [array[low], array[mid]] = [array[mid], array[low]];
    }
    return mid;  // Median is now in the middle
}

console.log(quickSort([10, 20, 30, 40, 5, -1000, 5, 15, 25, 35, 45, -10, -5]));
