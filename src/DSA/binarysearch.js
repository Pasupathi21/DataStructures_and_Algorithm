let input = [3, 12, 14, 19, 22, 23, 27, 28, 31, 37, 45, 46, 51, 53, 56, 58, 64, 67, 71, 74, 78, 82, 85, 88, 89, 90, 94]


function binarySearch(array, searchValue) {
    let start = 0
    let end = array.length
    while(start <= end){
        console.log("interation")
        let mid = Math.floor((start + end) / 2)
        if (array[mid] === searchValue) {
            return mid
        }else if(array[mid] < searchValue){
            start = mid + 1
        }else {
            end = mid - 1
        }
    }
    return -1

}

const position = binarySearch(input, 100)
console.log("value position ", position, "and value", input[position])