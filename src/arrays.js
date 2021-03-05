const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join(",");
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);

};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(n => n.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(s => s.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(s => s.split("").reverse().join(""));
};

const onlyEven = numbers => {
  return numbers.filter( n => (n % 2) == 0 );
};

const removeNthElement2 = (index, array) => {
  return array.filter( function (v , i) { return i != index });
};

const elementsStartingWithAVowel = strings => {
  return strings.filter( s => (s.split('')[0]).toLowerCase().match(/[aeiou]/ig) );
};

const removeSpaces = string => {
  return string.replace(/ /g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce(((sum, n) => sum + n),0)
};

const sortByLastLetter = strings => {
  return strings.sort( (a, b) => a[a.length -1].localeCompare(b[b.length -1]));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
