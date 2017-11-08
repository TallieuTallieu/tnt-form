const expect = chai.expect;
const assert = chai.assert;

chai.should();

const Form = tntform.Form;
const TextField = tntform.TextField;
const Component = tntform.Component;

describe('Form', () => {

	let form = new Form(1);

	describe('#addField(Component)', () => {

		it('Should add a field', (done) => {

			form.addField(new TextField(1));
			form.components.components.should.have.lengthOf(1);
			done();
		});
	});

	describe('getField(index)', () => {

		it('Should return an instance of Component', (done) => {

			expect(form.getField(1)).to.be.an.instanceof(Component);
			done();
		});
	});

	describe('removeField(index)', () => {

		it('Should remove a field', (done) => {

			form.removeField(1);
			done();
		});

		it('Should now have 0 components', (done) => {

			form.components.components.should.have.lengthOf(0);
			done();
		});
	});

	describe('getField(index)', () => {

		it('Should return false', (done) => {

			expect(form.getField(1)).to.be.false;
			done();
		});
	});

	describe('build()', () => {

		it('Should return an instance of HTMLElement', (done) => {

			expect(form.build()).to.be.an.instanceof(HTMLElement);
			done();
		});
	});
});