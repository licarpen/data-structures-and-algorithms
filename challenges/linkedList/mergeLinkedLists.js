const mergeLinkedLists = (list1, list2) => {
  if(!list1.head || !list2.head){
    throw 'Each list must contain at least 1 node to merge.';
  }
  let mergeNode = list1.head;
  let nextNode = list2.head;
  let savedNode;
  while(mergeNode.next || nextNode){
    // account for different lengths of lists
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
