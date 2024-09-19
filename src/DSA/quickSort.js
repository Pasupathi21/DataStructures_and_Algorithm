function quickSort(array){
    // console.log("array", array)
    if(array?.length < 2) return array
    const pivot = Math.floor(array.length / 2)
    const leftArray = []
    const rightArray = []
    for(let i =0; i < array?.length; i++){
        if(pivot != i){
            if(array[i] < array[pivot]) leftArray.push(array[i])
            if(array[i] >= array[pivot]) rightArray.push(array[i])
        }
    }
    console.log(leftArray, array[pivot], rightArray)
    console.log("=================================")
    return[ ...quickSort(leftArray), array[pivot],...quickSort(rightArray)]


}

console.log(quickSort([10, 20, 30, 40, 5, -1000, 5, 15, 25, 35, 45, -10, -5]))
// console.log(quickSort([20, 10]))
// console.log(quickSort([10]))
// console.log(quickSort([null, undefined, true, false]))

