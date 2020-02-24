let unboundSlice = Array.prototype.slice
let slice = Function.prototype.call.bind(unboundSlice)
module.exports = slice