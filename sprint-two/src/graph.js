

// Instantiate a new graph
var Graph = function() {
  // we know we need a storage object/array

  this.storage = {};

};

// node1 = { // this is node
//     node: 1;
//     edges: [2, 5]
// }


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  //
  // create a variable that generates an Object with properties node and egdes
  var dot = {
    node: value,
    edges: []
  };
  // add a key called node of this Object to storage object within graph with a value of this object
  this.storage[dot.node] = dot;
  //console.log(this.storage);

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // search within keys of this.storage to see if contains target
  var keys = Object.keys(this.storage);
  // if contains, return true
  for (var i = 0; i < keys.length; i++) {
    if (Number(keys[i]) === node) {
      return true;
    }
  }
  return false;
  // else, return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // iterate through edges array of node
  _.each(this.storage[node].edges, (element) => {
    this.removeEdge(node, element);
  });
  // use removeEdge method on each edge
  // delete node from storage
  delete this.storage[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // search fromNode's edges to check whether it has toNode's value
  return _.contains(this.storage[fromNode].edges, toNode);
  // if yes, return true
  // if no, return false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // reach into the storage at fromNode and insert an edge to toNode
  this.storage[fromNode].edges.push(toNode);

  // reach into the storage at toNode and insert an edge to fromNode
  this.storage[toNode].edges.push(fromNode);
  //console.log(this.storage[fromNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // 1.declare a variable which points to edges of fromNode
  var edgesArr = this.storage[fromNode].edges;
  // 2.get the index of toNode in the edge array of fromNode
  var targetEle = _.indexOf(edgesArr, toNode);

  // 3.splice the element at that index
  this.storage[fromNode].edges.splice(targetEle, 1);

  // 4.repeat step 1-3 on toNode
  var edgesArrTo = this.storage[toNode].edges;
  var targetEleTo = _.indexOf(edgesArrTo, fromNode);
  this.storage[toNode].edges.splice(targetEleTo, 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //declare a variable that will point to array of keys in this.storage
  var arrKeys = Object.keys(this.storage);
  // _.each on array of keys passing in call back as iterator
  _.each(arrKeys, function(ele) {
    cb(ele);
  });

  // for (var node in this.storage) {
  //   cb(node);
  // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
