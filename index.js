const oddIndex = [];
const pairIndex = [];

function cardValidator(num) {
  let regExp = new RegExp(/\d{14,16}(~\W[a-zA-Z])*$/g);
  let validNumber = num.match(regExp);
  //parseInt(validNumber);

  if (num.length > 16 || validNumber === undefined || validNumber === null || validNumber === '') {
    return false;
    // throw new Error('Número inválido');
  }

  return validNumber = finalNumber(num);
}

function pairDigits(num) {
  let digits = num.split('');

  if(num.length === 14 || num.length === 16) {
    for (i = digits.length - 1; i >= 0; i--) {
      if (i % 2 !== 0) {
        oddIndex.push(digits[i]);
      } else {
        pairIndex.push((digits[i] * 2).toString());
      }
    }
  }
}

function oddDigits(num) {
  let digits = num.split('');

  if(num.length === 15) {
    for (i = digits.length - 1; i >= 0; i--) {
      if (i % 2 === 0) {
        oddIndex.push(digits[i]);
      } else {
        pairIndex.push((digits[i] * 2).toString());
      }
    }
  }
}

function finalNumber(num) {
  pairDigits(num);
  oddDigits(num);

  let newPairIndex = pairIndex.join('').split('');  
  let newNumber = newPairIndex.concat(oddIndex);

  for (i = 0; i < newNumber.length; i++) {
    let counter = 0;
    counter += parseInt(newNumber[i], 10);

    if (counter % 10 === 0) {    
      newNumber = true;
    }
  }
  
  return newNumber;
}

module.exports = cardValidator;
