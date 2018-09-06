const oddIndex = [];
const pairIndex = [];

function cardValidator(num) {
  throwError(num);
  
  let regExp = new RegExp(/\d{14,16}(~\W[a-zA-Z])*$/g);
  if (!regExp.test(num)) {
    return false;
  } 
  let validNumber = num.match(regExp);
  
  validNumber = finalNumber(num);

  return validNumber ? true : false;
}

function pairDigits(num) {
  let digits = num.split('');

  if(num.length === 14 || num.length === 16) {
    for (let i = digits.length - 1; i >= 0; i--) {
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
    for (let i = digits.length - 1; i >= 0; i--) {
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

  for (let i = 0; i < newNumber.length; i++) {
    let counter = 0;
    counter += parseInt(newNumber[i], 10);

    if (counter % 10 === 0) {    
      newNumber = true;
    }
  }
  
  return newNumber;
}

function throwError(num) {
  if (num === undefined || num === null || num === '' || num.length <= 1 || !parseInt(num)) {
    throw new Error('Número inválido');
  }
}

module.exports = cardValidator;