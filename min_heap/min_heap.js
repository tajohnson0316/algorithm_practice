/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
  constructor() {
    /**
     * 0th index not used, so null is a placeholder. Not using 0th index makes
     * calculating the left and right children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null];
  }

  /**
   * Retrieves the size of the heap, ignoring the null placeholder.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number}
   */
  size() {
    // - 1 since 0 index is unused
    return this.heap.length - 1;
  }

  /**
   * Extracts the min num from the heap and then re-orders the heap to
   * maintain order so the next min is ready to be extracted.
   * 1. Save the first node to a temp var.
   * 2. Pop last node off and overwrite idx1 with it.
   * 3. Iteratively swap the old last node that is now at idx1 with it's
   *    smallest child IF the smallest child is smaller than it.
   * - Time: O(log n) logarithmic due to shiftDown.
   * - Space: O(1) constant.
   * @returns {?number} The min number or null if empty.
   */
  extract() {
    if (this.size() == 0) {
      return null;
    }

    let minValue = this.top();
    let replacement = this.heap[this.size()];
    this.heap[1] = replacement;
    this.heap[this.size()] = minValue;
    this.heap.pop();

    let replacementIdx = 1;
    let swapIdx = this.minLeftOrRight(replacementIdx);

    while (this.heap[replacementIdx] > this.heap[swapIdx]) {
      let temp = this.heap[replacementIdx];
      this.heap[replacementIdx] = this.heap[swapIdx];
      this.heap[swapIdx] = temp;

      replacementIdx = swapIdx;
      swapIdx = this.minLeftOrRight(replacementIdx);
    }

    return minValue;
  }

  minLeftOrRight(parentIdx) {
    if (this.heap[parentIdx * 2] < this.heap[parentIdx * 2 + 1]) {
      return parentIdx * 2;
    }

    return parentIdx * 2 + 1;
  }

  /**
   * Retrieves the top (minimum number) in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  top() {
    if (this.heap.length > 1) {
      return this.heap[1];
    }

    return null;
  }

  /**
   * Inserts a new number into the heap and maintains the heaps order.
   * 1. Push new num to back then.
   * 2. Iteratively swap the new num with it's parent while it is smaller than
   *    it's parent.
   * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
   * - Space: O(1) constant.
   * @param {number} num The num to add.
   * @returns {MinHeap} returns the mutated heap
   */
  insert(num) {
    this.heap.push(num);

    let newIdx = this.heap.length - 1;
    let parentIdx = Math.floor(newIdx / 2);

    while (this.heap[newIdx] < this.heap[parentIdx] && parentIdx != 0)
      if (num < this.heap[parentIdx]) {
        let temp = this.heap[parentIdx];
        this.heap[parentIdx] = this.heap[newIdx];
        this.heap[newIdx] = temp;

        newIdx = parentIdx;
        parentIdx = Math.floor(newIdx / 2);
      }

    return this;
  }

  /**
   * Logs the tree horizontally with the root on the left and the index in
   * parenthesis using reverse inorder traversal.
   */
  printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
      return;
    }

    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${this.heap[parentIdx]} (${parentIdx})`
    );

    this.printHorizontalTree(parentIdx * 2, spaceCnt);
  }
}

let testHeap = new MinHeap();
testHeap.insert(1).insert(10).insert(5).insert(15).insert(8);
testHeap.insert(0);
// testHeap.printHorizontalTree();

testHeap.extract();
console.log(testHeap.heap);
testHeap.printHorizontalTree();
