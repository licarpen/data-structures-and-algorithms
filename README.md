# Data Structure and Algorithms

## Overview

Tested implementation of a variety of array methods, linked lists, queues, stacks, binary search trees, search and sort algorithms, recursion, and more.  Includes selected exercises from Cracking the Coding Interview.  And problem numbers listed refer to this text.  

## Arrays and Strings
  * array-reverse: reverses the elements of an array
  * array-shift: inserts an element in the middle of an array
  * Problem 1.1 isUnique: checks if elements of an array are unique
  * Problem 1.2 checkPermutation: checks if string 1 is a permutation of string 2

## Hash Map
  * charachtersHash(string): constructs a hash map for frequency of characters in a string

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