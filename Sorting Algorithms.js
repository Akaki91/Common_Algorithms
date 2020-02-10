
function quick_Sort(array) {
    var pivot = array[0];
    var left = [];
    var right = [];

    if (array.length <= 1 ){
        return array
    }

    else if (array.length > 1){
        
        for (let i = 1; i < array.length; i++) {
            if (array[i] < pivot) {
                left.push(array[i])
            }
            else {
                right.push(array[i])
            }
        }
    }
    
    return [...quick_Sort(left), pivot, ...quick_Sort(right)]
}





// another way of Quicksort -- This code is bulshit


function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}



var array = [8, -2, 6, 23, 5, 1, 3]






// console.time('my quicksort');

//     quick_Sort(array)

// console.timeEnd('my quicksort')


// console.time('not my quicksort');

//     quickSort(array, 0, array.length - 1)


// console.timeEnd('not my quicksort')


function shellSort(arr) {
    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];

            while (j >= increment && arr[j - increment] > temp) {
                arr[j] = arr[j - increment];
                j = j - increment;
            }

            arr[j] = temp;
        }

        if (increment == 2) {
            increment = 1;
        } 
        else {
            increment = parseInt(increment * 5 / 11);
        }
    }
    return arr;
}


var gaps = [1093, 364, 121, 40, 13, 4, 1];

function shellsort(array) {
    for (var g = 0; g < gaps.length; g++) {
        var gap = gaps[g];
        for (var i = gap; i < array.length; i++) {
            var temp = array[i];
            for (var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
            }
            array[j] = temp;
            // console.log(array);
            // console.log(j);
            
        }
    }
    return array;
}




// console.time('shell sort');

//     shellsort(array)


// console.timeEnd('shell sort');



// Counting Sort

function countSort(arr, min, max) {
    let i = min,
        j = 0,
        len = arr.length,
        count = new Array(max).fill(0)

    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
    return arr;
}



// var log = []

// for (var i = 0; i <= 9; i++) {
//     log[i] = 0;
// }

// console.log(log);


// var blog = new Array(10).fill(0)

// console.log(blog);



// Radix sort


function radixSort(arr) {
    // Find the max number and multiply it by 10 to get a number
    // with no. of digits of max + 1
    const maxNum = Math.max(...arr) * 10;
    let divisor = 10;
    while (divisor < maxNum) {
        // Create bucket arrays for each of 0-9
        let buckets = [...Array(10)].map(() => []);
        // For each number, get the current significant digit and put it in the respective bucket
        for (let num of arr) {
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
        }
        // Reconstruct the array by concatinating all sub arrays
        arr = [].concat.apply([], buckets);
        // Move to the next significant digit
        divisor *= 10;
    }
    return arr;
}


// console.log(radixSort(array));


// let buckets = [...Array(10)].map(() => [])

// console.log(buckets);

// bucketSort
function bucketSort(list, bucketCount){
    // only for numbers
    var min = Math.min.apply(Math, list),  // get the min
        buckets = [],
        bucket_count = bucketCount || 200

    // build the bucket and distribute the elements in the list
    for (var i = 0; i < list.length; i++) {
        // this is a simple hash function that will make sure the basic rule of bucket sort
        var newIndex = Math.floor((list[i] - min) / bucket_count);

        buckets[newIndex] = buckets[newIndex] || []
        buckets[newIndex].push(list[i])
    }
    // refill the elements into the list
    var idx = 0
    for (i = 0; i < buckets.length; i++) {
        if (typeof buckets[i] !== "undefined") {
            // select those non-empty buckets
            insertionSort(buckets[i]);  // use any sorting algorithm would be fine
            // sort the elements in the bucket
            for (var j = 0; j < buckets[i].length; j++) {
                list[idx++] = buckets[i][j]
            }
        }
    }
    return list
}