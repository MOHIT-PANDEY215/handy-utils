function reverse(str) {
    return str.split('').reverse().join('');
  }
  function replace(str, regex, replacement) {
    return str.replace(regex, replacement);
  }
  
  function toSlug(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  module.exports = {
    reverse,
    replace,
    toSlug
  }