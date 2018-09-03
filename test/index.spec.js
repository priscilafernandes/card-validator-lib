const chai = require('chai');
const expect = chai.expect;
const validator = require('./index');

/*
- Quando nao houver parametro deve lancar um erro.
- Quando o numero for uma string deve lancar um erro.
- Quando o numero for um inteiro e houver um digito deve lancar um erro.
- Quando o numero for um inteiro e for um cartão válido deve retornar true, 
  se o cartao for inválido deve retornar false.

Exemplo:
- Entrada: 36490102462661
- Saída: true
*/

describe('validator', () => {

	describe('#cardValidator', () => {

		describe('Quando não houver parâmetro', () => {
			it('Deve retornar um erro', () => {
				var badFn = () => { validator.cardValidator('') };
        expect(badFn).to.throw('O parâmetro não pode estar vazio');
        expect(badFn).to.equal(false);
			})
		});

		describe('Quando o for uma string', () => {
			it('Deve retornar um erro', () => {
				var badFn = () => { validator.cardValidator('abc') };
				expect(badFn).to.throw('Só pode conter números');
				expect(badFn).to.equal(false);
			})
		});

		describe('Quando houver apenas um dígito', () => {
			it('Deve retornar um erro', () => {
				var badFn = () => { validator.cardValidator('1') };
				expect(badFn).to.throw('O número deve ter entre 14 e 16 dígitos');
				expect(badFn).to.equal(false);
			})
		});

		describe('Quando o for uma string', () => {
			it('Deve retornar um erro', () => {
				expect(validator.cardValidator('36490102462661')).to.equal(true);
				expect(true).to.be.true;
				expect(false).to.be.false;
			})
		});

	});

})