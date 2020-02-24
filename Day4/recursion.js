function reduce(arr, fn, initial) {
  return (function step(i,actual){
    if(i >= arr.length) return actual;
    return step(i + 1,(fn(actual,arr[i],i,arr)));
  })(0, initial);
}

module.exports = reduce

