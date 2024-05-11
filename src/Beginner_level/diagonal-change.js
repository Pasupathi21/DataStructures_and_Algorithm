let array = [
  [1, 3, 5, 6, 6],
  [1, 3, 5, 6, 8],
  [1, 3, 5, 6, 55],
  [1, 3, 5, 6, 4],
  [1, 3, 5, 6, 4],
]

function diagonalChanges(input, replaceElemet = 0){
  let numberOfElemetConverttoZero = 0
  for(let i = 0; i < input?.length; i++){
    numberOfElemetConverttoZero = i
    // reverse order
    while(numberOfElemetConverttoZero < input[i]?.length){
      input[i][numberOfElemetConverttoZero] = replaceElemet
      numberOfElemetConverttoZero ++
    }
  }
  return array
}

console.log(diagonalChanges(array))

