


function BubleSort(array) {
    var sorted = false 

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]){
                [array[i], array[i + 1]] = [array[i + 1], array[i]]
                sorted = false
            }
        }
    }
return array
}


arr = [23, 4, 3, 10, -5, 18, 7]
arr1 = [5, 1, 1, 2, 0, 0]

console.log(BubleSort(arr));

console.log(BubleSort(arr1));
