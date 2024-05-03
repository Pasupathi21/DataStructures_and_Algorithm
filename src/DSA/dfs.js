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
function DFS(input){
   const keys = Object.keys(input)
   for(let i =0; i < keys?.length; i++){
    if(!result.includes(keys[i])){
        result.push(keys[i])
        
    }
   }
}