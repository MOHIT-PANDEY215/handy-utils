function trim(str) {
    return str.trim();
  }
  
  function trimStart(str) {
    return str.trimStart();
  }
  
  function trimEnd(str) {
    return str.trimEnd();
  }
  
  function padStart(str, targetLength, padString) {
    return str.padStart(targetLength, padString);
  }
  
  function padEnd(str, targetLength, padString) {
    return str.padEnd(targetLength, padString);
  }

  module.exports = {
    trim,
    trimStart,
    trimEnd,
    padStart,
    padEnd,
  }