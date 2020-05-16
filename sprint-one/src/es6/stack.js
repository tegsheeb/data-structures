class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage) {
    this.storage = {};
  }

  push( value) {
    if (this.size() === 0) {
      this.storage[0] = value;
    } else {
      var lastEleKey = _.max(Object.keys(this.storage));
      this.storage[lastEleKey + 1] = value;
    }
  }

  pop() {
    var lastEleKey = _.max(Object.keys(this.storage));
    var popEle = this.storage[lastEleKey];
    delete this.storage[lastEleKey];
    return popEle;

  }

  size() {
    return Object.keys(this.storage).length;
  }
}