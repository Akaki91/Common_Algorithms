
class Stack {
    constructor() {
        this.count = 0;
        this.storage = {}
    }

    push(value){
        this.storage[this.count] = value;
        this.count ++
    }

    pop() {
        if (this.count === 0){
            return undefined
        }
        this.count --;
        var result = this.storage[this.count]
        delete this.storage[this.count];
        return result;
    }

    peek() {
        return this.storage[this.count-1]
    }

}




var stack = new Stack()



stack.push(16)

stack.push(25)


console.log(stack.peek());
console.log(stack.pop());
console.log(stack.count);


console.log(stack.storage);



class Queue {
    constructor() {
        this.line = [];
    }

    print() {
        console.log(this.line);     
    }

    enqueue(element) {
        this.line.push(element)
    }

    dequeue() {
        return this.line.shift()
    }

    peek() {
        return this.line[0]
    }

    size() {
        return this.line.length()
    }

    isEmpty() {
        return line === 0
    }
}


var queue = new Queue()


queue.enqueue('jemal')



queue.print()