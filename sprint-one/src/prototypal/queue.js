var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function( value ) {
  if (this.size() === 0) {
    this.storage[0] = value;
  } else {
    var lastEleKey = _.max(Object.keys(this.storage));
    this.storage[lastEleKey + 1] = value;
  }
};

queueMethods.dequeue = function() {
  var firstEleKey = _.min(Object.keys(this.storage));
  var dequeEle = this.storage[firstEleKey];
  delete this.storage[firstEleKey];
  return dequeEle;

};

queueMethods.size = function() {
  return Object.keys(this.storage).length;

};

