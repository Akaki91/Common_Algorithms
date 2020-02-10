origBoard = Array.from(Array(9).keys())

// console.log(origBoard);


// const car = {
//     color: 'blue',
//     brand: 'Ford',
//     engine: '2.0'
// }
// const prop = 'color'

// const newCar = Object.keys(car).reduce((object, key) => {
//     if (key !== prop) {
//         object[key] = car[key]
//     }
//     return object
// }, {})


// console.log(newCar);



// var lengthOfLongestSubstring = function (s) {
//     var subs = []
//     var uniq = []
//     let longest = 0

//     for (var i = 0; i < s.length; i++) {
//         for (var j = i + 1; j <= s.length; j++) {
//             var el = s.substring(i, j)

//             for (var k = 0; k < el.length; k++)
//                 if 

//             subs.push(el)
//         }
//     }

    //     for (var k = 0; k < subs.length; ++){

    //          }
// }




function finder (s){
    var max = 0;
    var arr = []

    for (var i = 0; i < s.length; i++) {  
        if (!arr.includes(s[i])){
            arr.push(s[i]);
            max < arr.length ? max = arr.length : max;
        }
        else  {
            arr.push(s[i]);
            arr = arr.slice(arr.indexOf(s[i]) + 1, arr.length)
        }
    }
    return max
}



// console.log(finder('abcancbb'));
// console.log(finder('bbbbb'));
// console.log(finder('pwwkew'))

// console.log('pwwkew'[3]);



// var lengthOfLongestSubstring = function (s) {

//     let map = {}
//     let start = 0
//     let maxLen = 0
//     let arr = s.split('')

//     for (i = 0; i < s.length; i++) {
//         let current = map[arr[i]]
//         map[arr[i]] = i
//         if (current != null && start <= current) {
//             start = current + 1
//         } else {
//             maxLen = Math.max(maxLen, i - start + 1)
//         }
//     }

//     return maxLen

// };


var lengthOfLongestSubstring = function (s) {
    var set = new Set()
    var max = 0
    for (let i = 0; i < s.length; i++) {
        var element = s[i];
        set.add(element)
        if (max < set.size) {
            max = set.size
        }
    }

    return max
}

// console.log(lengthOfLongestSubstring('abcancbb'))
// console.log(lengthOfLongestSubstring('bbbbb'))
// console.log(lengthOfLongestSubstring('pwwkew'))


// var map = {}


// var map['a'] = 4

// var current = map['a']

// console.log(map);
// console.log(current);


// console.log(current == null);


// var arr = ['b', 'n', 'c', 'n', 'o']

// arr = arr.slice(arr.indexOf('n') + 1, arr.length)

// console.log(arr);


var findMedianSortedArrays = function (nums1, nums2) {
    var sort = nums1.concat(nums2)
    var sorted = sort.sort((a, b) => a - b)
    var len = sorted.length
    console.log(sorted);
    
    result = 0

    for (let i = 0; i < len; i++) {
        if (sorted.length % 2 != 0) {
            result = sorted[(len -1)/2]
        }
        else {
            result = (sorted[len / 2] + sorted[len / 2 - 1])/2
        }
        
    }
    return result
}



nums1 = [1, 3]
nums2 = [2]


nums3 = [1, 2]
nums4 = [3, 4]


nums5 = [3]
nums6 = [-2, -1]

// console.log(findMedianSortedArrays(nums1, nums2));
// console.log(findMedianSortedArrays(nums3, nums4));
// console.log(findMedianSortedArrays(nums5, nums6));
var m = 1

