'use strict';
const Array = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';

function convert(arr){
  let parsearr = [];
  arr = arr.split(' ');
  console.log(arr.length);
  arr.forEach(x => parsearr.push(parseInt(x)));

  return parsearr;
}

let converter = convert(Array);

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function bucketSort(arr, smallest, biggest) {
  const found = [];
  //Build array of nulls of size 'biggest', where smallest and biggest indices are not null
  for (let i = 0; i <= biggest; i++) {
    if (i === smallest || i === biggest) {
      found.push([i]);
    } else {
      found.push([]);
    }
  }
  console.log(found);
  for (let i = 0; i < arr.length; i++) {
    if( i === smallest || i === biggest) {
      continue;
    }
    found[arr[i]].push(arr[i]);
  }
  //console.log(found);
  let result = [];
  found.forEach(item => {
    console.log(item);
    if (item.length > 0) {
      result = [...result, ...item];
    }
  });
  return result;
}

function randomSort(arr){
  for (let i =0; i < arr.length; i++) {
    swap(arr, i, Math.floor(Math.random() * arr.length));
  }
  return arr;
}

//console.log(converter.length);
//console.log(converter);
const array = bucketSort(converter, 1, 98);
console.log(array);
console.log(array.length);
console.log(converter.length);
// console.log(array[100]);
// console.log(array.length);

//convert title to lowercase
//strip punctuation
//strip 'A ', 'An ', and 'The ' from the beginnings
//strip whitespace
//sort ascending
