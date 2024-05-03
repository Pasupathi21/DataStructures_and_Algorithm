/**
 * @description
 *  fixed size of table
 *  ======= UTF-8 unicode values only
 * 1) create hash values
 * 2) insert value
 * 3) remove values 
 * 4) update values
 */
class HashTable{
    // this  main hash table
    table

    // create array for storing values
    constructor(size = 10){
        this.table = new Array(size)
    }

    /**
     * 
     * @param {*} key is string
     * get unicode values from key string
     * chatCodeAt -> fn return UTF-8 character values(integers)
     */
    hash(key = ''){
        let index = 0
        for (let i =0; i < key?.length; i++){
           index += key.charCodeAt(i)
        }
        return index
    }

    /**
     * 
     * @param {*} value 
     * generate key values
     * set key as index in table, then push values to array
     * 
     */
    insert(value = '') {
        const key = this.hash(value)
        if(!this.table[key]){
            this.table[key] = []
        }
        this.table[key].push({
            key,
            value
        })
    }

    get(value){
        const key = this.hash(value)
        if(!this.table[key]){
            return undefined
        }
        return this.table[key]?.find(f => f?.value === value)
    }

    remove(value){
        const key = this.hash(value)
        if(!this.table[key]){
            return false
        }
        for(let i =0; i < this.table[key]?.length; i++){
            if(this.table[key][i].value === value){
                this.table[key].splice(i, 1)
                return true
            }
        }
    }
}

const hashTable = new HashTable(15)

hashTable.insert("this hash table algorithm basic example")
hashTable.insert("hi")
hashTable.insert("bye")

console.log("hashTable: ", hashTable.table)

hashTable.remove("bye")

console.log(hashTable.get("hi"))
console.log("hashTable: ", hashTable.table?.length)
