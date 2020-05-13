var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var currentLength = someInstance.size();
    storage[currentLength] = value;
  };

  someInstance.pop = function() {
    var currentLength = someInstance.size();
    var lastItem = storage[currentLength - 1];
    delete storage[currentLength - 1];
    return lastItem;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
