const linkedList = {
    val: 10,
    next: {
        val: 20,
        next: {
            val: 10,
            next: {
                val: 40,
                next: {
                    val: 10,
                    next: {
                        val: 10,
                        next: {
                            val: 40,
                            next: {
                                val: 50,
                                next: null
                            }
                        }
                    }
                }
            }
        }
    }
}

function linkedListToArray(input, output){
    if (typeof input.val === 'number') output.push(input.val)
    if (input.next !== null) linkedListToArray(input.next, output)    
    if (!input?.next) return output
    return output
}

function arrayToLinkedList(input, output, currentNode) {
    if (currentNode > input.length){
        return output
    }else{
        output.val = input[currentNode]
        currentNode++
        output.next = currentNode === input.length ? null : arrayToLinkedList(input, {}, currentNode)
    } 
    return output
}

const getArray = linkedListToArray(linkedList, [])
const getLinkedList = arrayToLinkedList(getArray, {}, 0)
console.log('LL to Array', getArray)
console.log('Array to LL', JSON.stringify(getLinkedList, null, 2))