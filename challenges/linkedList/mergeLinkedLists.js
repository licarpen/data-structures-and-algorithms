const { LinkedList } = require('./LinkedList');

const mergeLinkedLists = (list1, list2) => {
  let currentNode1 = list1.head;
  let currentNode2 = list2.head;
  while(currentNode1.next || currentNode2.next){
    if(currentNode2.next){
      currentNode1.next = currentNode2;
      currentNode2 = currentNode2.next;
    }
    if(currentNode1.next){
      currentNode2.next = currentNode1;
      currentNode1 = currentNode1.next;
    }
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

console.log(mergeLinkedLists(linkedList1, linkedList2));
