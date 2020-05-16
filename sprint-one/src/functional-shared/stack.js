var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = {};

  newStack.storage = {};

  _.extend(newStack, stackMethods);

  return newStack;

};

var stackMethods = {};


stackMethods.push = function (value) {
  var currentLength = this.size();
  this.storage[currentLength] = value;
};

stackMethods.pop = function () {
  var currentLength = this.size();
  var lastItem = this.storage[currentLength - 1];
  delete this.storage[currentLength - 1];
  return lastItem;

};

stackMethods.size = function () {
  return Object.keys(this.storage).length;
};


