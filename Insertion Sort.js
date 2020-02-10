
function insertionSort(array) {

    for (let i = 0; i < array.length; i++) {
        var current = array[i] 
        j = i - 1
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j = j - 1;
            array[j + 1] = current
        }
    }
    return array  
} 


// function insertionSort(array) {

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[j] < array[i]) {
//                 [array[i], array[j]] = [array[j], array[i]]
//             }
//         }
//     }
//     return array
// }


var arr = [54, 3, 10, 5, 24, -4, 8]

// 1) [3, 54, 10, 5, 24, -4, 8]
// 2) [3, 10, 54, 5, 24, -4, 8]
// 3) [3, 5, 10, 54, 24, -4, 8]
// 4) [3, 5, 10, 24, 54, -4, 8]
// 5) [-4, 3, 5, 10, 24, 54, 8]
// 6) [-4, 3, 5, 8, 10, 24, 54]


console.log(insertionSort(arr));