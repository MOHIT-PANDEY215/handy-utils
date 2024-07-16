function toCamelCase(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }
  
  function toPascalCase(str) {
    return str.replace(/(?:^|[^a-zA-Z0-9]+)(.)/g, (m, chr) => chr.toUpperCase()).replace(/[^a-zA-Z0-9]/g, '');
  }
  
  function toUpperCase(str) {
    return str.toUpperCase();
  }
  
  function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  function toSnakeCase(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '_');
  }
  
  function toKebabCase(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
  }
  
  function toTitleCase(str) {
    return str.replace(/\b\w/g, chr => chr.toUpperCase());
  }
  
  function toSentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  
  module.exports = {
    toCamelCase,
    toPascalCase,
    toUpperCase,
    toLowerCase,
    toSnakeCase,
    toKebabCase,
    toTitleCase,
    toSentenceCase,
  }