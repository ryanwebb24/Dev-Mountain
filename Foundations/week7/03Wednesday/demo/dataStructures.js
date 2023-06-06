class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
    setNext(item) {
        this.next = item
    }
}


class LinkedList {
    constructor(head = null){
        this.head = head
    }
    getLast() {
        let lastNode = this.head
        if(lastNode) {
            while(lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
    addNewItem(data, previous) {
        let item = new Node(data)
        item.setNext(previous.next)
        previous.setNext(item)
    }
}

let nodeA = new Node("A")
let nodeB = new Node("B")
let nodeC = new Node("C")
nodeA.setNext(nodeB)
nodeB.setNext(nodeC)

let list = new LinkedList(nodeA)
list.addNewItem("J", list.getLast())

console.log(list);
console.log(list.getLast());