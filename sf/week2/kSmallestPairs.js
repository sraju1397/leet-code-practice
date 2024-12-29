class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return top;
  }

  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex >= 0 && this.heap[index][0] < this.heap[parentIndex][0]) {
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      this.bubbleUp(parentIndex);
    }
  }

  bubbleDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallest = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex][0] < this.heap[smallest][0]) {
      smallest = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][0] < this.heap[smallest][0]) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.bubbleDown(smallest);
    }
  }

  size() {
    return this.heap.length;
  }
}

function kSmallestPairs(nums1, nums2, k) {
  const m = nums1.length;
  const n = nums2.length;
  const result = [];
  const minHeap = new MinHeap();

  if (m === 0 || n === 0 || k === 0) return result;

  for (let i = 0; i < Math.min(k, m); i++) {
    minHeap.push([nums1[i] + nums2[0], i, 0]);
  }

  while (k > 0 && minHeap.size() > 0) {
    const [sum, i, j] = minHeap.pop();
    result.push([nums1[i], nums2[j]]);

    if (j + 1 < n) {
      minHeap.push([nums1[i] + nums2[j + 1], i, j + 1]);
    }
    k--;
  }

  return result;
}