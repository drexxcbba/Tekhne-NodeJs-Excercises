function getDependencies(mod, result) {
    result = result || []
    var dependencias = mod && mod.dependencies || []
    Object.keys(dependencias).forEach(function(one) {
      var key = one + '@' + mod.dependencies[one].version
      if (result.indexOf(key) === -1) result.push(key)
      getDependencies(mod.dependencies[one], result)
    })
    return result.sort()
  }

module.exports = getDependencies