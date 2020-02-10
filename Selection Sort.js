// class Employee {
//     constructor(name, lastname) {
//         this.name = name;
//         this.lastname = lastname;
//     }
    

//     greeting() {
//         return 'hello sir';
        
//     }
// }


// var jemal = new Employee('jemal', 'tkemal')


// console.log(jemal.greeting());



function selectionSort (array) {
    

    for (let i = 0; i < array.length-1; i++) {
        var minindex = i 
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minindex]) {
                minindex = j;
            } 
        }
        [array[i], array[minindex]] = [array[minindex], array[i]]
    }

    return array
}


var arr = [54, 3, 10, 5, 24, -4, 8]


console.log(selectionSort(arr));
