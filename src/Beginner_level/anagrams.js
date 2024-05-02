function anagram(actual, input){
    let actulaString = actual?.trim().toLowerCase()?.split('')
    let inputString = input.toLowerCase()?.split('')
    let isAnagram = true
  
    for(let i =0; i < inputString?.length; i++){
      console.log('actulaString', actulaString)
      if(!actulaString?.length) {
        isAnagram = false
        break
      }
      if(actulaString?.includes(inputString[i])){
        actulaString.splice(actulaString.findIndex(fI => fI === inputString[i]), 1)
        isAnagram = true
      }
    }
    return isAnagram
  }
  console.log(anagram("listen", "silent"))