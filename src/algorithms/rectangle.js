// find largest rectangles
/**
 * 
 * @param {*} array 
 * Imagine you have a set of bars in a histogram, each with a specific height. The goal is to find the largest rectangle you can form using one or more consecutive bars.

In this case, the input [2, 1, 5, 6, 2, 3] represents the heights of these bars. To find the largest rectangular area:

Start with each bar and think about using that bar (and possibly adjacent bars) to form a rectangle. The height of the rectangle will be limited by the smallest bar in that range.

For example, if you take the bars of height 5 and 6 (which are consecutive), you can form a rectangle. The rectangle's height will be the height of the smaller bar, which is 5 in this case (since both bars must be part of the same rectangle).

The width of this rectangle is the number of bars you're using. Since you're using two bars (the ones with height 5 and 6), the width is 2.

Now, the area of the rectangle is calculated as:

Area = Height × Width = 5 × 2 = 10
Area=Height×Width=5×2=10
So, the largest rectangle has an area of 10.

This rectangle is the largest possible one that can be formed in this histogram, even though there are other smaller rectangles that can be formed using different combinations of bars. The critical idea is that the height of the rectangle is dictated by the shortest bar within any range of consecutive bars.
 */
function rectangleArea(array){
    const sortedArray = array.sort()
    console.log("sortedArray", sortedArray)
    let height = 0
    let width = 0
    let i = sortedArray?.length - 1
    while(i > -1){
        if(sortedArray[i] > height){
            height = sortedArray[i]
            // width = height
            for(let j = i; j > -1; j--){
                if(sortedArray[j] > width && sortedArray[j] != height) width = sortedArray[j]
            }
        }
        i--
    }
    // for(let i= sortedArray?.length - 1; i >= -1 ; i--){
    //     // calculate height
    //     if(sortedArray[i] > height){
    //         height = sortedArray[i]
    //         // width = height
    //     }
    //     // calculate width
    //     if(sortedArray[i] > width && width != height){
    //         width = sortedArray[i]
    //     }
    // }
    // sortedArray[sortedArray]
    console.log("height", height, "width", width)
    return height * width
}

console.log(rectangleArea([2, 1, 5, 6, 2, 3]))
// [1, 2, 2, 3, 5, 6]