# Array.prototype.Polyfills
Array.prototype.methods  (method like map, reduce, filter, some etc.)


//Array.prototype.forEach
const sampleArrary = [2, 5, 6, 3, 8, 9, 0];
Array.prototype.myForEach = function (callBack, context) {
  for (let index = 0; index < this.length; index++) {
    callBack(this[index], index, this);
  }
};
const tempArray =[];
sampleArray.myForEach((el) => {
 tempArray.push(el);
 return tempArray;
});
console.log(tempArray)


//Array.prototype.map
const sampleArrary = [2, 5, 6, 3, 8, 9, 0];
Array.prototype.myMap = function (fn, context) {
  let tempArray = [];
  for (let index = 0; index < this.length; index++) {
    tempArray.push(fn(this[index], index, this));
  }
  return tempArray;
};
const result = sampleArray.myMap((el) => {
  return el * 2;
});
console.log(result);


//Array.prototype.Reduce
const sampleArrary = [2, 5, 6, 3, 8, 9, 0];
Array.prototype.myReduce = function (callBack, dependency) {
  let accumulator = dependency ? dependency : undefined;
  for (let index = 0; index < this.length; index++) {
    if (accumulator != undefined) {
      accumulator = callBack(accumulator, this[index], index, this);
    } else {
      accumulator=this[index]
    }
  }
  return accumulator;
};
const result = sampleArray.myReduce((acc, val) => (acc += val), 0);
console.log(result);


