const arr = [
    1,
    2,
    [
        3,
        4,
        [
            5,
            6,
            [
                7,
                8
            ],
            [
                9,
                10
            ]
        ]
    ],
    [
        11,
        12,
        13,
        [
            14,
            15,
            [
                16,
                17
            ]
        ]
    ]
]

function getArrays(arrVal, level = 0){
    if(level === 0) return arrVal
    let result = []
    let levelInc = 0
    function innerFn(input){
        console.log('params', input)
      if(levelInc === level)  {
        //   console.log('input >>>>', input)
          result = [...result, ...input]
          levelInc--
          return result
      }else{
      for(let j =0; j < input?.length;j++){
          if(typeof input[j] != 'string' && input[j]?.length){
              levelInc++
              innerFn(input[j])
          }
      }
      }
    }
    
    for(let i =0; i < arrVal?.length; i++){
        if(typeof arrVal[i] != 'string' && arrVal[i]?.length){
            levelInc ++
            innerFn(arrVal[i])
            levelInc = 0
        }
    }
    return result 
}

console.log('result >>>>>', getArrays(arr, 2))
