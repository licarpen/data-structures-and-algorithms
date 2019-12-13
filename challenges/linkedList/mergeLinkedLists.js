const { LinkedList } = require('./LinkedList');

const mergeLinkedLists = (list1, list2) => {
  let mergeNode = list1.head;
  let nextNode = list2.head;
  let savedNode = mergeNode.next;
  while(mergeNode && savedNode){
    // save node in current position for later
    savedNode = mergeNode.next;
    // point across to other list
    mergeNode.next = nextNode; 
    // update for next iteration
    nextNode = savedNode;
    mergeNode = mergeNode.next;    
  }
  return list1.head;
};

const linkedList1 = new LinkedList();
const linkedList2 = new LinkedList();

linkedList1.insert(2);
linkedList1.insert(4);
linkedList1.insert(6);
linkedList2.insert(1);
linkedList2.insert(3);
linkedList2.insert(5);
linkedList1.insert(8);
linkedList1.insert(10);

module.exports = { mergeLinkedLists };
