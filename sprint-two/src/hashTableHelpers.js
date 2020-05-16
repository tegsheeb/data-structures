/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};


var limitedArray = LimitedArray();

limitedArray.set(3, 'hi');
console.log(limitedArray.get(3)); // returns 'hi'

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var example1 = getIndexBelowMaxForKey('table', 8);
console.log(example1);

var example2 = getIndexBelowMaxForKey('tea', 8);
console.log(example2);

var example3 = getIndexBelowMaxForKey('hi', 8);
console.log(example3);

var example4 = getIndexBelowMaxForKey('bubbletea', 8);
console.log(example4);
var example5 = getIndexBelowMaxForKey('h', 8);
console.log(example5);

var example6 = getIndexBelowMaxForKey('teaful', 8);
console.log(example2);

/*
 * Complexity: What is the time complexity of the above functions?
 */
