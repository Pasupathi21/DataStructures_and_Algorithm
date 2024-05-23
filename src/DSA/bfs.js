const graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 5],
    3: [1, 6],
    4: [1, 7],
    5: [2],
    6: [3],
    7: [4, 8],
    8: [7, 9],
    9: [8]
}
function mergeSort(array){
    if(array?.length === 1){
        return array
    }
   let pivot = array[Math.floor(array.length / 2)]
   let left = []
   let rigth = []
   for(let i=0; i < array?.length; i++){
    array[i] = parseFloat(array[i])
    if(array[i] < pivot){
        left.push(array[i])
    }
    if(array[i] > pivot){
        rigth.push(array[i])
    }
   }
   return [
    ...mergeSort(left),
    pivot,
    ...mergeSort(rigth)
   ]
}

function BFS(){
    const result = []
    const keys = Object.keys(graph)
    let incrementVal = 0
    function innerFn(ks){
        for(let i =0; i < ks?.length; i++){
            if(!result?.includes(ks[i])){
                result.push(ks[i])
            }
            if(i + 1 === ks?.length){
                incrementVal++
                innerFn(graph[keys[incrementVal]])
            }
            if(incrementVal + 1 === keys?.length) return 
        }
    }
    // result.push(keys[incrementVal])
    innerFn(graph[keys[incrementVal]])
    // return result
    return mergeSort(result)
}

console.log(BFS())
