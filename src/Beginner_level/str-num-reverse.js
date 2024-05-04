function reverseNumFn(num){
    let convert = '' + num 
    let reverseNum = ''
    // console.log(reverseNum)
    let i = convert?.length
      // console.log('reverseNum >>>', convert)
    while(i > 0){
      reverseNum += convert[i - 1]
      i--
    }
    return parseFloat(reverseNum)
  }
  
  console.log(reverseNumFn(123456789))
  // console.log(typeof '' + 10 )