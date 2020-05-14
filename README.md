# Data Structure and Algorithms

## Overview

Tested implementation of a variety of array methods, linked lists, queues, stacks, binary search trees, search and sort algorithms, recursion, and more.  Includes selected exercises from Cracking the Coding Interview.  Any problem numbers listed refer to this text.  

## Arrays and Strings
  * array-reverse: reverses the elements of an array
  * array-shift: inserts an element in the middle of an array
  * Problem 1.1 isUnique: checks if elements of an array are unique
  * Problem 1.2 checkPermutation: checks if string 1 is a permutation of string 2
  * Problem 1.4 isPalindromPermutation: checks if string is a permutation of a palindrome
    * uses hash map
  * Problem 1.5 isOneAway: checks if string1 is less than 2 edits away (deletion, addition, substitution) from string2 using a hash map
  * Problem 1.5 isOneWayLoops: checks if string1 is less than 2 edits away (deletion, addition, substitution) from string2 by iterating through strings and tracking edits
  * Problem 1.7 swapColumns(swapRowsColumns(medium)): Rotates an n x n matrix by 90 degrees (clockwise) in place.

## Hash Map
  * charachtersHash(string): constructs a hash map for frequency of characters in a string

## Sets
  * 8.4 Power Set: Write a method to return all subsets of a set

## Linked Lists

LinkedList.js contains constrcutors for two classes, Node and LinkedList. 

### Node Properties

* value
* next

### LinkedList Properties and Methods

* head
* insert(value)
* includes(value)
* toString()
* append(value)
* insertBefore(value, reference)
* insertAfter(value, reference)
* delete(value)
* kFromEnd(k)
* removeDuplicates()

### Linked List Algorithms/Challenges

* mergeLinkedLists(list1, list2)

## Queue

queue.js contains constructors for two classes, Node (as described above) and Queue

### Queue properties and methods

* front
* back
* enqueue(value)
* dequeue()
* peek()
* isEmpty()

### Queue Algorithms/Challenges

* Animal-Queue.js: uses a queue to simulate adoptions from an animal shelter

## Stack

stack.js contains constructors for two classes, Node (as described above) and Stack

### Stack properties and methods

* top
* push(value)
* pop()
* peek()
* isEmpty()

### Stack Algorithms/Challenges

* Problem 3.1: implementing 3 stacks with arrays
* mulit-bracket-validation: checks if a string containing multiple pairs of brackets is of valid syntax
* pseudo-queue.js implements a queue with stacks

## Sorting

* Problem 10.2: group together the anagrams in an array of strings

## Binary Search Tree

tree.js contains constructors for two classes, Node (as described above) and BinaryTree

### BinaryTree properties and methods

* add(value)
* contains(value)
* findMaxValue()
* preOrder()
* inOrder()
* postOrder()
* breadthFirst()

### Binary Tree Algorithms/Challenges

* Problem 4.3: Lists of Depths
  * Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (if you have a tree with depth D, you'll have D linked lists)
* fizzBuzzTree(tree) replaces values of a tree with fizz, buzz, and fizzbuzz depending on properties of each value

## Trie

trie.js constains constructors for two classes, Node and Trie.  

### Node Properties

* value
* children (array of nodes)
* isEnd (boolean)

### Trie Properties and Methods

* root: a node
* add(word)
* contains(word): boolean
* countWordsWithPrefix(pre)
  * uses recursion to do a depth-first search for all words containing the prefix
  * returns result object { count: int, words: []}

  ## Graph

  graph.js contains constructors for two classes, Node and Graph

  ### Node Properties

  * value
  * adjacent (array)

  ### Graph Properties and Methods

  * nodes
  * findByValue(value)
    * returns node with value or undefined
  * add(data, edgesOut = [], edgesIn = [])
    * adds a node to the graph with value
    * finds nodes associated with values in edgesOut and adds edge from new node to each mathching edgesOut node
    * finds nodes associated with values in edgesIn and adds edge from node matching edgesIn value to new node
  * edge(fromValue, toValue)
    * adds edge from existing node matching fromValue to existing node matching toValue
  * isRoute(valueA, valueB)
    * problem 4.1: Given a directed graph, design an algorithm to find out whether there is a route between two nodes
    * returns true is route exists
    * returns false otherwise

  ## Dynamic Programming

  * stair-hops.js
    * Problem 8.1 Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs. 
    * best solution uses memoization to count the number of ways 'n' steps can be taken