// remove duplicat from linked list
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
const valueArray = []
function removeDuplicateNodeFromLinkedList(node) {
    let uniqueList = null
    let current = node
    let uniqueNodeArray = []

    const pushToArray = (cur) => {
        if(!valueArray.includes(cur.val)){
            valueArray.push(cur.val)
            uniqueNodeArray.push({
                val: cur.val,
                next: null
            })
        }
        // it will pass next next node
        if(cur?.next?.next === null) pushToArray(cur.next)
        return
    }
    while (current?.next != null) {
        pushToArray(current)
        current = current.next
    }
    for (let i = uniqueNodeArray.length - 1; i >= 0; i--) {
        console.log("for loop >>>>", uniqueNodeArray[i])
        if (!uniqueList) {
            uniqueList = { ...uniqueNodeArray[i] }
        } else {
            uniqueList = {
                val: uniqueNodeArray[i].val,
                next: uniqueList
            }
        }
    }
    console.log(JSON.stringify(uniqueList))
    return uniqueList
}

console.log(removeDuplicateNodeFromLinkedList(linkedList))