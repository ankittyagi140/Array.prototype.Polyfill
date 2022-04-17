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
