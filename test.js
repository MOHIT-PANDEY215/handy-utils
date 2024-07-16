
const {
    toCamelCase,
    toPascalCase,
    toUpperCase,
    toLowerCase,
    toSnakeCase,
    toKebabCase,
    toTitleCase,
    toSentenceCase,
    trim,
    trimStart,
    trimEnd,
    padStart,
    padEnd,
    reverse,
    startsWith,
    endsWith,
    includes,
    match,
    replace,
    toSlug
  } = require('./index');
  
  console.log(toCamelCase('hello world')); // helloWorld
  console.log(toPascalCase('hello world')); // HelloWorld
  console.log(toUpperCase('hello world')); // HELLO WORLD
  console.log(toLowerCase('HELLO WORLD')); // hello world
  console.log(toSnakeCase('hello world')); // hello_world
  console.log(toKebabCase('hello world')); // hello-world
  console.log(toTitleCase('hello world')); // Hello World
  console.log(toSentenceCase('hello world')); // Hello world
  console.log(trim('  hello world  ')); // hello world
  console.log(trimStart('  hello world  ')); // hello world  
  console.log(trimEnd('  hello world  ')); //   hello world
  console.log(padStart('hello', 10, ' ')); // '     hello'
  console.log(padEnd('hello', 10, ' ')); // 'hello     '
  console.log(reverse('hello')); // 'olleh'
  console.log(startsWith('hello world', 'hello')); // true
  console.log(endsWith('hello world', 'world')); // true
  console.log(includes('hello world', 'lo wo')); // true
  console.log(match('hello world', /lo/)); // [ 'lo' ]
  console.log(replace('hello world', /hello/, 'hi')); // hi world
  console.log(toSlug('Hello World! How are you?')); // hello-world-how-are-you
  