const mergeLinkedLists = (list1, list2) => {
  let mergeNode = list1.head;
  let nextNode = list2.head;
  let savedNode;
  while(mergeNode.next || nextNode){
    // account for list2 longer than list1
    if(!mergeNode.next){
      mergeNode.next = nextNode;
      return list1.head;
    }
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

module.exports = { mergeLinkedLists };
