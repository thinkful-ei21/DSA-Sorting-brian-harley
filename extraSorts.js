'use strict';

const {converter} = require('./quicksortAndmerge');

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function bucketSort(arr, smallest, biggest) {

}

function randomSort(arr){
  for (let i =0; i < arr.length; i++) {
    swap(arr, i, Math.floor(Math.random() * arr.length));
  }
  return arr;
}

const array = randomSort(converter);
console.log(array);