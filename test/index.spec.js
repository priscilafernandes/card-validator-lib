const chai = require('chai');
const expect = chai.expect;
const validator = require('../index');

/* TESTES:
- Quando nao houver parametro deve lançar um erro.
- Quando o numero for uma string deve lançar um erro.
- Quando o numero for um inteiro e houver um digito deve lancar um erro.
- Quando o numero for um inteiro e for um cartão válido deve retornar true, 
  se o cartao for inválido deve retornar false.

Exemplo:
- Entrada: 36490102462661
- Saída: true
*/

describe('cardValidator()', () => {

	it('Quando não houver parâmetro deve retornar um erro', () => {
		let badFn = () => { validator.cardValidator('') };
    expect(badFn).to.throw('O parâmetro não pode estar vazio');
    expect(badFn).to.equal(false);
	});

	it('Quando for uma string deve retornar um erro', () => {
		
    let badFn = () => { validator.cardValidator('abc') };
		//expect(badFn).to.throw('Só pode conter números');
		expect(badFn).to.equal(false);
	});
		
	it('Quando houver apenas um dígito deve retornar um erro', () => {
		let badFn = () => { validator.cardValidator('1') };
		//expect(badFn).to.throw('O número deve ter entre 14 e 16 dígitos');
		expect(badFn).to.equal(false);
	});
		
	it('Quando for um cartão válido deve retornar true', () => {
		expect(validator.cardValidator(36490102462661)).to.equal(true);
	});
	
  it('Quando for um cartão inválido deve retornar false', () => {
    expect(validator.cardValidator('12345')).to.equal(false);
  });

});