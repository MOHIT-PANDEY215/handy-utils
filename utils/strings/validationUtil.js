function startsWith(str, searchString, position = 0) {
    return str.startsWith(searchString, position);
  }
  
  function endsWith(str, searchString, length) {
    return str.endsWith(searchString, length);
  }
  
  function includes(str, searchString, position = 0) {
    return str.includes(searchString, position);
  }
  
  function match(str, regex) {
    return str.match(regex);
  }
  
  module.exports = {
    startsWith,
    endsWith,
    includes,
    match,
  };
  
