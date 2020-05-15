var LinkedList = function() {
  var list = {
    // head: Node1,
    // 24: { value: 24,
    // next : list.tail
    //               },
    // tail: Node1
  };
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // time complexity: O(1) constant

    // check if list is first item ?
    if ( list.head === null) {
      // update the value of the node that we are adding;
      list[value] = Node(value);
      // update head to point to new node
      list.head = list[value];
      // update tail to point to new node
      list.tail = list[value];
    } else {
      // update the value ;
      list[value] = Node(value);
      // update previos node 's tail into this new node
      list.tail.next = list[value].value;
      // update the tail into point to new node
      list.tail = list[value];
    }

  };

  list.removeHead = function() {
    // time complexity: O(1) constant

    // if there are no nodes after removeHead is invoked, set head and tail to null
    if (list.head !== list.tail) {
      // find the node that head points to, and save that node to a result var
      var result = list.head;
      // we need to delete the actual node, not just the reference to it
      delete list[list.head.value];
      // change head to point to second node (new first node after remove head)
      list.head = list[result.next];
      // return result
      console.log(list);
      return result.value;

    } else {
      var result = list.head;
      delete list[list.head.value];

      list.head = null;
      list.tail = null;
      //delete list.head;

      return result.value;
    }
  };

  list.contains = function(target) {
    // time complexity: O(n) linear

    // create a var List that set to the keys of the list
    var listOfKeys = Object.keys(list);

    // create a var and save parse the value of the list into number , with _.map
    var parsedKeys = _.map(listOfKeys, function(num) {
      return parseInt(num);
    });

    // return "implement _.contains passing list and target"
    return _.contains(parsedKeys, target);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
O(1), O(logn), O(n), O(n^2), O(c^n)
 */
