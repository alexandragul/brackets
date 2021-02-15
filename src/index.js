module.exports = function check(str, bracketsConfig) {
  arrayOfBrackets = str.split('');

  let firstBrackets = [];
  let secondBrackets =[];
  
  bracketsConfig.forEach(element => {
    firstBrackets.push(element[0]);
    secondBrackets.push(element[1]);
  });

  let firstBracketsArray = [];
  let checker = true;

  for (let i = 0; i < arrayOfBrackets.length; i++) {
    if (firstBrackets.includes(arrayOfBrackets[i])) {
      firstBracketsArray.push(arrayOfBrackets[i]);

    } else if (secondBrackets.includes(arrayOfBrackets[i])) {
        if (secondBrackets.findIndex(element => element == arrayOfBrackets[i]) != 
        firstBracketsArray.findIndex(element => element == firstBracketsArray.pop()))
          checker = false;
    }
  }
  return checker;
}
