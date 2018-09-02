const oddIndex = [];
const pairIndex = [];

function cardValidator(num) {
  let regExp = new RegExp(/\d{14,16}(~\W[a-zA-Z])*$/g);
  let validNumber = num.match(regExp); 

  if (num.length > 16 || validNumber === undefined || validNumber === null || validNumber === '') {
    return false;
  }
  
  return validNumber = finalNumber(num);
}

// Algoritimo de Luhn:

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

console.log(cardValidator('36490102462661'));
console.log(cardValidator('5555666677778884'));
console.log(cardValidator('dsdsdsdsdsds'));
console.log(cardValidator('38522370005544'));
console.log(cardValidator('36490102462661'));
console.log(cardValidator('5555666677778884'));
console.log(cardValidator('4012001037141112'));
console.log(cardValidator('376449047333005'));
console.log(cardValidator('6362970000457013'));
console.log(cardValidator('36490102462661'));
console.log(cardValidator('6370950000000005'));
console.log(cardValidator('6062825624254001'));

module.exports = cardValidator;