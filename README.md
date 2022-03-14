# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install@juliaxtran/lotide`

**Require it:**

`const _ = require(@juliaxtran/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
head : find the head of an array 
  tail : find the tail of an array
  middle : find the middle of an array
  countLetters : count the letters in a string
  countOnly : take in a collection of items and return counts for a specific subset of those items
  findKey: find a specific key in an object
  findKeyByValue:  search for a key on an object where its value matches a given value.
  flatten: flatten an array of arrays
  letterPositions: find the index of letters in a string 
  map: manipulates an array 
  takeUntil:creates a slice of an array untill a certain specific value
  without:creates a slice of an array leaving a specific value out
