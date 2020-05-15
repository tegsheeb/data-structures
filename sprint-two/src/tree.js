var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // time complexity: constant

  // instantiate new tree within this tree's children array
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // time complexity: linear

  //check the value of the current node whether it is equal to target
  if (this.value === target) {
    // if so, return true
    return true;
  } else {
    // if not, check if there is children
      // if there is children , loop through children
      // recurse on each child
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    }
    // return false (because we didn't find the target and should have already returned true)
    return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
*/
