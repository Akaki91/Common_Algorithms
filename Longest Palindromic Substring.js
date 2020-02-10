
// Given a string s, find the longest palindromic substring in s.You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
//     Example 2:

// Input: "cbbd"
// Output: "bb"



// First Solution 

// var longestPalindrome = function (s) {
//     var split = s.split('')
//     var palrr = []
//     var longest = ''

//     for (let i = 0; i < split.length; i++) {
//         for (let j = i + 1; j <= s.length; j++) {
//             palrr.push(split.slice(i, j))
//         }
//     }

//     for (let arr of palrr){        
//         if (arr.join() == arr.reverse().join() && longest.length < arr.length) { 
//             longest = arr.join('')
            
//         }

//     }
// return longest

// };



// Second solution



var longestPalindrome = function (s) {
    var start = 0;
    var end = 0;
    var len = s.length;
    var num = 0;
    for (var i = 0; i < len; i++) {
        num = Math.max(expandAroundCenter(s, i, i), expandAroundCenter(s, i, i + 1));
        
        if (num > end - start) {
            start = i - Math.floor((num - 1) / 2);
            end = i + Math.floor(num / 2);
        }
    }
    return s.slice(start, end + 1);
};

var expandAroundCenter = function (s, left, right) {
    var l = left;
    var r = right;
    var len = s.length;
    while (0 <= l && r < len && s[l] === s[r]) {
        l--;
        r++;
        
    }
    return r - l - 1;
};

// console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'));
// console.log(longestPalindrome('throrhtp'));
// console.log(longestPalindrome(''));
// console.log(longestPalindrome('bbb'))



