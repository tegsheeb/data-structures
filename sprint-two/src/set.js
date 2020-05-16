var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // time complexity: constant;
  // check if storage contains item
  if (this.contains(item)) {
    // if yes, return nothing
    return;
  } else {
    // if no (else), add item to storage
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  // time complexity: constant;
  // set._storage = {
  // 'Susan Sarandon': 'Susan Sarandon',
  // }
  // check whether storage contains item
  if (this._storage[item] !== undefined) {
    // return true if yes
    return true;
  } else {
    // return false if no
    return false;
  }
};

setPrototype.remove = function(item) {
  // time complexity: constant;
  // check if storage contains item,
  if (this.contains(item)) {
    // if yes, delete item
    delete this._storage[item];
  }
  // else, nothing
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
