var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};

  _.extend(newQueue, queueMethods);

  return newQueue;

};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  if (this.size() === 0) {
    this.storage[0] = value;
  } else {
    var lastElementKey = _.max(Object.keys(this.storage));
    this.storage[lastElementKey + 1] = value;
  }
};

queueMethods.dequeue = function () {
  var firstElementkey = _.min(Object.keys(this.storage));
  var dequeueEle = this.storage[firstElementkey];
  delete this.storage[firstElementkey];
  return dequeueEle;
};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};
