const chai = require('chai');
const expect = chai.expect;
const cardValidator = require('../index');

describe('cardValidator()', () => {

	describe('Parâmetro vazio', () => {
		it('Quando não houver parâmetro deve retornar um erro', () => {
			let badFn = function () { cardValidator(); };
      expect(badFn).to.throw('Número inválido');
		});
	});

	describe('Caracteres inválidos', () => {
		it('Quando for uma string inválida deve retornar um erro', () => {
      let badFn = function () { cardValidator('abc12345'); };
      expect(badFn).to.throw('Número inválido');
		});
	});	
			
	describe('Apenas um dígito', () => {		
		it('Quando houver apenas um dígito deve retornar um erro', () => {
			let badFn = function () { cardValidator('1'); };
      expect(badFn).to.throw('Número inválido');
		});
	});	
		
	describe('Cartão válido', () => {
		it('Quando for um cartão válido deve retornar true', () => {
			expect(cardValidator('36490102462661')).to.equal(true);
		});
	});

	describe('Cartão inválido', () => {
	  it('Quando for um cartão inválido deve retornar false', () => {
	    expect(cardValidator('12345')).to.equal(false);
	  });
	});

});