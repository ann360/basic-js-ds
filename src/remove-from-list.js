const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  if (!l) return null; // Explicit check for an empty list

  let sentinel = new ListNode(0); // Create a dummy node
  sentinel.next = l;
  let current = sentinel;

  while (current.next) {
    if (current.next.value === k) {
      current.next = current.next.next; // Remove the node
    } else {
      current = current.next;
    }
  }

  return sentinel.next; // Return new head
}

module.exports = { removeKFromList };

// Helper function to convert array to linked list
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert linked list back to array
function listToArray(node) {
  let result = [];
  while (node) {
    result.push(node.value);
    node = node.next;
  }
  return result;
}

console.log(listToArray(removeKFromList(arrayToList([3, 1, 2, 3, 4, 5]), 3))); // [1, 2, 4, 5]
console.log(listToArray(removeKFromList(arrayToList([1, 2, 3, 4, 5]), 6))); // [1, 2, 3, 4, 5] (k not in list)
console.log(listToArray(removeKFromList(arrayToList([2, 2, 2, 2]), 2))); // [] (all elements removed)
console.log(listToArray(removeKFromList(null, 2))); // [] (empty list)
