const { Trie } = require('./trie.js');

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
  it('properly adds a string to a trie', () => {
    trie.add('ba');
    expect(trie.print()).toEqual({ 'root': { 'children': [{ 'children': [{ 'children': [], 'isEnd': true, 'value': 'a' }], 'isEnd': false, 'value': 'b' }], 'isEnd':
    false, 'value': null } });
  });
  it('properly adds a string with characters already existing in the trie', () => {
    trie.add('ba');
    trie.add('bat');
    expect(trie.print()).toEqual({ 'root': { 'children': [{ 'children': [{ 'children': [{ 'children': [], 'isEnd': true, 'value': 't' }], 'isEnd': true, 'value': 'a' }], 'isEnd': false, 'value': 'b' }], 'isEnd': false, 'value': null } }); 
  });
  it('properly adds a string with characters not already in the trie', () => {
    trie.add('bat');
    trie.add('cat');
    expect(trie.print()).toEqual({ 'root': { 'children': [{ 'children': [{ 'children': [{ 'children': [], 'isEnd': true, 'value': 't' }], 'isEnd': false, 'value': 'a' }], 'isEnd': false, 'value': 'b' }, { 'children': [{ 'children': [{ 'children': [], 'isEnd': true, 'value': 't' }], 'isEnd': false, 'value': 'a' }], 'isEnd': false, 'value': 'c' }], 'isEnd': false, 'value': null } }); 
  });
  it('properly identifies a string already in the trie', () => {
    trie.add('cat');
    expect(trie.contains('cat')).toEqual(true); 
  });
  it('properly identifies a string not in the trie', () => {
    trie.add('cat');
    trie.contains('ca');
    expect(trie.contains('ca')).toEqual(false); 
  });
});
