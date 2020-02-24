module.exports = function arrayMap(arr, fn) {
    let res = [];
    arr.reduce(function (res,one){
        res.push(fn(one));
        return res;
    },res);
    return res;
  }
