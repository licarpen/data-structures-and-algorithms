// 4.1 Route Between Nodes
// Given a directed graph, design an algorithm to find out whether there is a route between two nodes

class Node {
  constructor(data = null){
    this.value = data;
    this.adjacent = [];
  }
}

class Graph {
  constructor(){
    this.nodes = [];
  }

  findByValue(value) {
    return this.nodes.find(node => node.value === value);
  }
  
  add(data, edgesOut = [], edgesIn = []){
    const node = new Node(data);
    this.nodes.push(node);

    for(let i = 0; i < edgesOut.length; i++){
      for(let j = 0; j < this.nodes.length; j++){
        if(this.nodes[j].value === edgesOut[i]){
          node.adjacent.push(this.nodes[j]);
          break;
        }
      }
    }

    for(let i = 0; i < edgesIn.length; i++){
      for(let j = 0; j < this.nodes.length; j++){
        if(this.nodes[j].value === edgesIn[i]){
          this.nodes[j].adjacent.push(node);
          break;
        }
      }
    }
  }

  edge(fromValue, toValue){
    this.findByValue(fromValue).adjacent.push(this.findByValue(toValue));
  }

  isRoute(valueA, valueB) {
    const nodeA = this.findByValue(valueA);
    const stack = [];
    let current = null;
    nodeA.adjacent.forEach(node => stack.push(node));
    while(stack.length > 0){
      current = stack.pop();
      if(current.value === valueB) return true;
      else (current.adjacent.forEach(node => stack.push(node)));
    }
    return false;
  }
}

const graph = new Graph();
graph.add(3);
graph.add(4);
graph.add(5, [5, 4]);
// console.log(JSON.stringify(graph, null, 2))
// console.log(util.inspect(graph));

// https://stackoverflow.com/questions/11616630/how-can-i-print-a-circular-structure-in-a-json-like-format
const customStringify = v => {
  const cache = new Set();
  return JSON.stringify(v, function(key, value) {
    if(typeof value === 'object' && value !== null) {
      if(cache.has(value)) {
        // Circular reference found
        try {
          // If this value does not reference a parent it can be deduped
          return JSON.parse(JSON.stringify(value));
        }
        catch(err) {
          // discard key if value cannot be deduped
          return;
        }
      }
      // Store value in our set
      cache.add(value);
    }
    return value;
  }, 2);
};

customStringify(graph);

module.exports = { Node, Graph };
