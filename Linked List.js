
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    
}


class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
 
    size() {
        return this.length
    }

    isEmpty() {
        return this.length === 0;
    }

    printList() {
        var nodes = [];
        let current = this.head;
        while (current) {
            nodes.push(current.value);
            current = current.next
        }
        return nodes.join(' -> ')
    }



    addNode(node){
        if (this.head === null) {
            this.head = node;
        }
        else {
            var current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }


    add(element) {
        var node = new Node(element);
        if (this.head === null) {
            this.head = node;

        }
        else {
            var current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }


    remove(element) {
        var current = this.head
        var previous;

        if (current.value === element){
            this.head = current.next
        } 
        else {
            while (current.value !== element){
                previous = current;
                current = current.next
            }
            previous.next = current.next
        }
        this.length --;
    }


    indexOf(element) {
        var current = this.head;
        var index = -1;


        while(current){
            index++;
            if (current.value === element){
                return index;
            }
            current = current.next;
        }

        return index
    }


    elementAt(index) {
        var current = this.head
        var count = 0;

        while (count < index){
            count ++;
            if (current.next !== null) {
                current = current.next 
            }
            else {
                return null
            }
        }
        return current.value
    }


    addAt(index, element){
        var node = new Node(element);

        var current = this.head
        var previous;
        var currentIndex = 0;


        if (index > this.length){
            return false
        }

        if(index === 0){
            node.next = current;
            this.head = node;
        }
        else {
            while(currentIndex < index){
                currentIndex ++;
                previous = current;
                current = current.next;
            }
            node.next = current
            previous.next = node;
        }
        this.length ++
    }


    removeAt(index) {
        var current = this.head;
        var previous;
        var currentIndex = 0;
        if(index < 0 || index >= this.length){
            return null;
        }
        if (index === 0){
            this.head = current.next;
        }
        else {
            while (currentIndex < index) {
                currentIndex++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next
        }
        this.length --
        return current.value
    }



}






let nod1 = new Node('big')

let list1 = new LinkedList()

list1.addNode(nod1)


list1.add('house')
list1.add(162)

list1.add('bomb')

list1.add('bozi')




console.log(list1.length);

console.log(list1.indexOf(162));


list1.remove('bozi');

console.log(list1.printList());


list1.addAt(1, 'kiki')




console.log(list1.elementAt(2));


console.log(list1.removeAt(3));



console.log(list1.printList());
// let list = new LinkedList();





// LinkedList.prototype.insertAtBeginning = function (value) {
//     let newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     return this.head;
// }

// LinkedList.prototype.insertAtEnd = function (value) {

//     let newNode = new Node(value);
//     if (!this.head) {
//         this.head = newNode;
//         return this.head;
//     }

//     let tail = this.head;
//     while (tail.next !== null) {
//         tail = tail.next;
//     }
//     tail.next = newNode;
//     return this.head;
// }

