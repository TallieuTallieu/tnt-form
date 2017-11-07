"use strict";

const Component = require('../component'),
	dom = require('../util/dom')
;

class MultiCheckbox extends Component {

	constructor( id, checkboxes, opts = {} ) {
		super( id, opts );
		this.checkboxes = checkboxes;
		this.inputs = [];
	}

	getValue() {

		let data = {};

		this.inputs.forEach( ( input, index ) => {
			data[ index ] = input.checked;
		} );

		return data;
	}

	build() {

		super.build();

		this.checkboxes.forEach( text => {

			let label = document.createElement( 'label' );
			this.getContainer().appendChild( label );

			let checkbox = document.createElement( 'input' );
			checkbox.setAttribute( 'type', 'checkbox' );
			checkbox.setAttribute( 'id', this.inputlabel );
			label.textContent = text;
			dom.prepend( label, checkbox );

			checkbox.addEventListener( 'change', e => {
				this.trigger( 'change', { value: this.getValue() } );
			} );

			this.inputs.push( checkbox );
		} );

		return this.getContainer();
	}
}

module.exports = MultiCheckbox;