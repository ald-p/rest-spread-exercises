// Given this function: 
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

// Refactor to use rest operator and arrow function
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

// findMin
const findMin = (...nums) => nums.reduce((min, currVal) => currVal < min ? currVal : min); 

// mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...nums) => {
  const doubledVals = nums.map(num => num * 2);
  return [...arr, ...doubledVals];
}

// Slice and Dice!
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (...items) => {
  const idxToRemove = Math.floor(Math.random() * items.length);
  return [...items.filter((val, i) => i !== idxToRemove)];
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

/** Return a new object with a key removed. */

function removeKey(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({...obj, [key] : val});