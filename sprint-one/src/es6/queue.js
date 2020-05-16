class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage) {
    this.storage = {};
  }

  enqueue(value) {
    if (this.size() === 0 ) {
      this.storage[0] = value;
    } else {
      var lastEleKey = _.max(Object.keys(this.storage));
      this.storage[lastEleKey + 1] = value;
    }
  }

  dequeue() {
    var firstEleKey = _.min(Object.keys(this.storage));
    var dequeueEle = this.storage[firstEleKey];
    delete this.storage[firstEleKey];
    return dequeueEle;

  }

  size() {
    return Object.keys(this.storage).length;
  }
}
