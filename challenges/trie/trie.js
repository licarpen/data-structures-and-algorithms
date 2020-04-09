// Trie
// Given a dictionary stored in a trie and a prefix, list and count the words with given prefix.


class Node {

  constructor(data){
    this.value = data;
    this.children = [];
    this.isEnd = false;
  }
}

class Trie {

  constructor(){
    this.root = new Node(null);
  }

  add(word){
    
    let current = this.root;
    for(const char of word) {
      let found = false;
      for(let i = 0; i < current.children.length; i++){
        if(current.children[i].value === char) {
          current = current.children[i];
          found = true;
          break;
        }
      }
      if(!found){
        const node = new Node(char);
        current.children.push(node);
        current = node;
      }
    }          
    current.isEnd = true;
  }

  contains(word){
    let current = this.root;
    for(const char of word) {
      let found = false;
      for(let i = 0; i < current.children.length; i++){
        if(current.children[i].value === char) {
          current = current.children[i];
          found = true;
          break;
        }
      }
      if(!found) return false;
    }
    return current.isEnd;
  }

  countWordsWithPrefix(pre){
    let current = this.root;
    let found;
    const result = {
      count: 0,
      words: []
    };

    for(const char of pre){
      found = false;
      for(let i = 0; i < current.children.length; i++){
        if(current.children[i].value === char) {
          current = current.children[i];
          found = true;
          break;
        }
      }
    }
    if(!found) return result;

    const countWords = (current, result, word = pre) => {
      if(current.isEnd){
        result.words.push(word);
        result.count++;
      }
      if(current.children.length > 0){
        current.children.forEach(node => {
          word = word + node.value;
          result = countWords(node, result, word);
        });
      }
      return result;
    };
    
    return countWords(current, result);
  }
  
  print() {
    return this;
  }
}

module.exports = { Node, Trie };
