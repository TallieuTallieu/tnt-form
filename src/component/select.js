"use strict";

const Component = require('../component');

class Select extends Component {

	constructor( id, values, opts = {} ) {

		super(id, opts);
		this.values = values;

		(
			{
				emptyOptionText : this.emptyOptionText = ''
			}
			= opts
		);

		if( ! this.v8nRequired ) {
			this.values.unshift( this.emptyOptionText );
		}
	}

	getValue() {

		let intValue = parseInt(this.select.value);

		if( ! this.v8nRequired ) {
			if(intValue === 0) {
				return null;
			}

			return ( intValue - 1 );
		}

		return intValue;
	}

	validate() {

		super.validate();

		let val = this.getValue();

		if( val < 0 || val > this.values.length - 1 ) {
			this.errors.push( { id: 'invalidOption', default: 'Invalid option selected' } );
		}

		this.postValidate();
	}

	build() {

		super.build();

		this.select = document.createElement( 'select' );
		this.select.setAttribute( 'type', 'text' );

		this.getContainer().appendChild( this.select );

		this.values.forEach( ( text, index ) => {

			let option = document.createElement( 'option' );
			option.setAttribute( 'value', index );
			option.textContent = text;
			this.select.appendChild( option );
		} );

		this.select.addEventListener( 'change', e => {
			this.trigger( 'change', { value: this.getValue() } )
		} );

		return this.getContainer();
	}
}

module.exports = Select;