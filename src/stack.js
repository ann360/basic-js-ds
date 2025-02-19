const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop(); // No need for explicit check, `pop()` returns `undefined` if empty
  }

  peek() {
    return this.items[this.items.length - 1]; // No need for explicit check, will return `undefined` if empty
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = { Stack };

const stack = new Stack();

stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop()); // 20
console.log(stack.peek()); // 10
console.log(stack.pop()); // 10
console.log(stack.pop()); // undefined (stack is empty)
console.log(stack.isEmpty()); // true
