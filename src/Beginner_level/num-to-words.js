const { digits_with_words, one_to_99 } = require('./data')
  

function to_words(value){
    if(!value) return null
    let word = ''
    const hundred = (hnd, n) =>  hnd["num"] === 100 ? `${n && (one_to_99[n])} ${hnd["word"]} And`.trim(): ``
    function loop(val){
        console.log("val >>>>>>>>", val)
        const to_string = val.toString()
        const get_digit = digits_with_words[to_string.length]
        // if (!get_digit) return null
        if (to_string.length <= 2 || !get_digit) return word += one_to_99[to_string]

        const num_to_letters = Math.floor(val / get_digit["num"])
        let hnd = hundred(get_digit, num_to_letters) 
        if (hnd) {
            word += hnd
        }else {
            
        }
        // if (num_to_letters === 1) {
        //     word += get_digit["word"]
        // }
        // else {
        //     let hnd = hundred(get_digit, num_to_letters) 
        //     if (hnd) {
        //         word += hnd
        //     }else {

        //     }
            
        // }
        let remain = val % get_digit["num"]
        return loop(remain)

    }
    let final_value = loop(value)
    return final_value && `${final_value} Rupees Only`
}

const result = to_words(12345)
console.log(result)
