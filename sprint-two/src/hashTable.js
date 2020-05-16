

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // note: storage = [undef, undef, [[],[]], undef]
  // note: k = input key (cat) , v = input value (fiesty)

  // create a tuple of [k, v]
  var newTuple = [k, v];


  // check if the value of storage at var index is undefined or an existing array
  if (this._storage[index] === undefined) {
    // if undefined, make a new array at that index as a value
    this._storage[index] = [];
    // push the [k,v] tuple
    this._storage[index].push(newTuple);
  } else {
    // iterate through tuples whether its index 0 is the k ?
    var len = this._storage[index].length;
    for (i = 0; i < len; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
      } else {
        this._storage[index].push(newTuple);
        // if yes, set the index 1 as the new value
        // if not,
      }
      // push the [k, v] tuple
      // if there is array exist already,
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // we need to go inside and iterate through array of arrays and check if index 0 of each tuple equals our target
  if (this._storage[index] !== undefined) {
    var targetLen = this._storage[index].length;
    for (var i = 0; i < targetLen; i++) {
      if (this._storage[index][i][0] === k) {
        // if yes, return value of that tuple
        return this._storage[index][i][1];
      }
    }
  }
  // return the value at the index within the storage
  return undefined;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // iterate through tuples at index of storage
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
      break;
    }
  }
  // if key matched k, splice that tuple out

  // set the value at the index undefined
  //this._storage[index] = undefined;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


