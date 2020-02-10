// left child = 2i + 1
// right child = 2i + 2
// parent = (i - 1)/2

class MaxHeap {
    constructor() {
        this.heap = []
    }

    insert(num) {
        this.heap.push(num);
        if (this.heap.length > 1) {
            let idx = this.heap.length - 1;
            let parentIdx = Math.floor((idx - 1) / 2);
            while (this.heap[idx] > this.heap[parentIdx]){
                if (idx >= 0) {
                    [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
                    if (parentIdx >= 1) {
                        idx = parentIdx;
                        parentIdx = Math.floor((idx - 1) / 2)
                    } 
                    // else {
                    //     break
                    // }
                }
            }
        }
    }

    removeRoot() {
        let largest = this.heap[0];
        if (this.heap.length > 1){
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1)

            if (this.heap.length == 2){
                if (this.heap[0] < this.heap[1]){
                    [this.heap[0], this.heap[1]] = [this.heap[1], this.heap[0]]
                }
                return largest
            }

            let i = 0;
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            while (this.heap[i] <= this.heap[left] || this.heap[i] <= this.heap[right]) {
                if (this.heap[left] > this.heap[right]) {
                    [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]]
                    i = 2 * i + 1;
                }
                else {
                    [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]]
                    i = 2 * i + 2;
                }
                left = 2 * i + 1;
                right = 2 * i + 2;
            }
        }
        else if (this.heap.length == 1) {
            this.heap.splice(0, 1)
        }
        else {
            return null
        }
    return largest
    } 
        
    // My solution
    sort() {

        var j = 0
        while (j < this.heap.length - 1) {
            if (this.heap[0] > this.heap[this.heap.length - 1 - j]) {
                [this.heap[0], this.heap[this.heap.length - 1 - j]] = [this.heap[this.heap.length - 1 - j], this.heap[0]]
                

                let i = 0;
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                while ((this.heap[i] <= this.heap[left] || this.heap[i] <= this.heap[right]) && left < (this.heap.length - 1 - j) && right < (this.heap.length - 1 - j)) {
                    if (this.heap[left] > this.heap[right]) {
                        [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]]
                        i = 2 * i + 1;
                    }
                    else {
                        [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]]
                        i = 2 * i + 2;
                    }
                    left = 2 * i + 1;
                    right = 2 * i + 2;
                }

            }
            j ++
        }
        return this.heap
    }

}
            




var max = new MaxHeap()

max.insert(4)
max.insert(3)

// console.log(max.heap);

max.insert(12)
// console.log(max.heap);

max.insert(5)
// console.log(max.heap);

max.insert(7)
// console.log(max.heap);

max.insert(14)
console.log(max.heap);



max.removeRoot()
console.log(max.heap);


var min = new MaxHeap()


min.insert(3)

// console.log(min.sort());
console.log(max.sort());
