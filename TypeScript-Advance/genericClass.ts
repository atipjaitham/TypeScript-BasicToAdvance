class Stack<T=string>{ //When set generic on default, that can change after that.
    private items:T[] = []
    pushElement(element:T){
        this.items.push(element)
    }
}

const stack = new Stack(); //set type in <....>
stack.pushElement("ATPKS")
stack.pushElement("BBX")
console.log(stack)