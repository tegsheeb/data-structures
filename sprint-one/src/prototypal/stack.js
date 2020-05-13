var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};


  return newStack;
};

var stackMethods = {};

stackMethods.push = function (value) {
  var lastElementKey = _.max(Object.keys(this.storage));
  this.storage[lastElementKey + 1] = value;
};

stackMethods.pop = function () {
  var lastElementKey = _.max(Object.keys(this.storage));
  var popEle = this.storage[lastElementKey];
  delete this.storage[lastElementKey];
  return popEle;
};

stackMethods.size = function () {
  return Object.keys(this.storage).length;

};