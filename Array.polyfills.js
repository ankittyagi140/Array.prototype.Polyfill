const sampleArrary = [2, 5, 6, 3, 8, 9, 0];

//Array.prototype.forEach
Array.prototype.myForEach = function (callBack, context) {
  if (callBack != "function") {
    return;
  }
  for (let index = 0; index < this.length; index++) {
    callBack(this[index], index, this);
  }
};
const tempArray = [];
sampleArray.myForEach((el) => {
  tempArray.push(el);
  return tempArray;
});
console.log(tempArray);

/*.....................................................................................*/

//Array.prototype.map
Array.prototype.myMap = function (fn, context) {
  if (callBack != "function") {
    return;
  }
  let tempArray = [];
  for (let index = 0; index < this.length; index++) {
    tempArray.push(fn(this[index], index, this));
  }
  return tempArray;
};
const resultforMap = sampleArray.myMap((el) => {
  return el * 2;
});
console.log(resultforMap);

/*.....................................................................................*/

//Array.prototype.Reduce
Array.prototype.myReduce = function (callBack, dependency) {
  if (callBack != "function") {
    return;
  }
  let accumulator = dependency ? dependency : undefined;
  for (let index = 0; index < this.length; index++) {
    if (accumulator != undefined) {
      accumulator = callBack(accumulator, this[index], index, this);
    } else {
      accumulator = this[index];
    }
  }
  return accumulator;
};
const resultForReduce = sampleArray.myReduce((acc, val) => (acc += val), 0);
console.log(resultForReduce);

/*.....................................................................................*/

//Array.polyfill.filter
const sampleArraryForFilter = [2, 5, 6, 3, 8, 9, 0, undefined, null, ,];
Array.prototype.myFilter = function (callback, context) {
  if (callBack != "function") {
    return;
  }
  let tempArray = [];
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this) && tempArray.push(this[index]);
  }
  return tempArray;
};
const resultForFilter = sampleArraryForFilter.myFilter((el) => el);
console.log(resultForFilter);

/*.....................................................................................*/

//Array.polyfill.every
Array.prototype.myEvery = function (callBack) {
  if (callBack != "function") {
    return;
  }
  var count = 0;
  for (var index = 0; index < this.length; index++) {
    if (callBack(this[index], index, this)) {
      count++;
    }
  }
  if (count === this.length) {
    return true;
  } else {
    return false;
  }
};
var resultforEvery = sampleArrary.myEvery((el) => el > 8);
console.log(resultforEvery);

/*.....................................................................................*/
