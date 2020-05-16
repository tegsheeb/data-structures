class BinarySearchTree {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(node) {
    // Time complexity : O(log n)
    // compare the node with current node value
    if (this.value > node) {
      // if smaller, then check if .left is defined
      if (this.left === null) {
        // if null; set the node to the left
        this.left = new BinarySearchTree(node);
      } else {
        // if defined, recurse
        this.left.insert(node);
      }
    } else {
      // if larger,  then check if right is defined
      if (this.right === null) {
        // if null, set the node to the right
        this.right = new BinarySearchTree(node);
      } else {
        // if defined, recurse
        this.right.insert(node);
      }
    }
  }

  contains(node) {
    // Time complexity : O(log n)
    var result = false;
    // check if node equals current node's value
    if (this.value === node) {
      // if yes, return true
      result = true;
      return result;
      // if not, check if node is smaller/bigger
    } else {

      if (this.value < node && this.right !== null) {
      // if node is bigger, recurse on right side
        if (this.right.contains(node)) {
          result = true;
          return result;
        }
      } else if (this.value > node && this.left !== null) {
        // if smaller, recurse on left side
        if (this.left.contains(node)) {
          result = true;
          return result;
        }
      }
    }
    // return false
    return result;

  }

  depthFirstLog(cb) {
    // Time complexity: O(n)
    // run call back on current node's value
    cb(this.value);

    // check if left and right are not null
    if (this.left !== null) {
      // if not null, recurse on left and right whichever not null
      this.left.depthFirstLog(cb);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
  }

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
