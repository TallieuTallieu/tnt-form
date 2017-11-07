"use strict";

const Component = require('../component');

class Select extends Component {

	constructor( id, values, opts = {} ) {

		super(id, opts);
		this.values = values;
	}

	getValue() {

		return parseInt( this.select.value );
	}

	validate() {

		let val = this.getValue();

		if( val < 0 || val > this.values.length - 1 ) {
			return false;
		}

		return super.validate();
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