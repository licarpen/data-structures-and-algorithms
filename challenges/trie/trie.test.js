const { Node, Trie } = require('./Trie.js');

describe('Trie class', () => {
  let trie;
  beforeEach(() => {
    trie = new Trie();
  });
  it('successfully instantiates an empty trie', () => {
    expect(trie.root.value).toBeNull();
  });
  it('properly adds a string with one character to a trie', () => {
    trie.add('a');
    expect(trie.print()).toEqual({ root: { value: null, children: [{ value: 'a', children: [], isEnd: true }], isEnd: false } }); 
  });
});
