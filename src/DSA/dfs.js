const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F', 'G'],
    'D': ['B'],
    'E': ['B'],
    'F': ['C'],
    'G': ['C']
}

let result = []
let edgesIsExist = true
function DFS(keys){
   for(let i =0; i < keys?.length; i++){

    if(result.includes(keys[i])){
        edgesIsExist = false
        if(i + 1 === keys?.length){
            return
        }
        continue
    }

    if(!result.includes(keys[i])){
        edgesIsExist = true
        result.push(keys[i])
    }

    if(edgesIsExist){
        DFS(graph[keys[i]])
    }
   }
}

DFS(Object.keys(graph))
console.log("edges >>>>>>>>", result)