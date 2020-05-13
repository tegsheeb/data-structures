var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (someInstance.size() === 0) {
      storage[0] = value;
    } else {
      var lastElementKey = _.max(Object.keys(storage));
      storage[lastElementKey + 1] = value;
    }
  };

  someInstance.dequeue = function() {
    var firstElementkey = _.min(Object.keys(storage));
    var dequeueEle = storage[firstElementkey];
    delete storage[firstElementkey];
    return dequeueEle;
  };

  someInstance.size = function() {
    var keys = Object.keys(storage);
    return keys.length;
  };

  return someInstance;
};
