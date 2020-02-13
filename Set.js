

function mySet() {

    var collection = [];

    this.has = function(element) {
        return (collection.indexOf(element) !== -1)
    }


    this.values = function() {
        return collection;
    }

    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false
    }


    this.remove = function(element) {
        if(this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true
        }
        return false;
    }


    this.size = function() {
        return collection.length
    }


    this.union - function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(el => {
            unionSet.add(el);
        });
        secondSet.forEach(el => {
            unionSet.add(el);
        })
        return unionSet
    }


    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(el => {
            if (otherSet.has(el)){
                intersectionSet.add(el)
            }
        });
        return intersectionSet
    }


}





var lengthOfLongestSubstring = function (s) {

    let map = {}
    let start = 0
    let maxLen = 0
    let arr = s.split('')

    for (i = 0; i < s.length; i++) {
        let current = map[arr[i]];
        // console.log(current);
        if (current != null && start <= current) {
            start = current + 1
        } else {
            maxLen = Math.max(maxLen, i - start + 1)
          
            
        }
        map[arr[i]] = i;
        
    }

    return maxLen

};


// console.log(lengthOfLongestSubstring('abcancblo'))


var map = {}

var current = map['a'];
map['a'] = 0





var fib = function (N) {

    if (N === 0) {
        return 0
    }

    if (N === 1) {
        return 1
    }

    if (N === 2) {
        return 1
    }

    return (fib(N - 1) + fib(N - 2))
    
}

console.log(fib());
