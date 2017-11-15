"use strict";

const Component = require('../component');

class Checkbox extends Component {

	constructor( id, text, opts = {} ) {

		super( id, opts );
		this.text = text || '';
	}

	getValue() {

		return this.input.checked;
	}

	build() {

		super.build();

		this.input = document.createElement( 'input' );
		this.input.classList.add( 'single-checkbox' );
		this.input.setAttribute( 'type', 'checkbox' );
		this.input.setAttribute( 'id', this.id );

		this.textEl = document.createElement( 'label' );
		this.textEl.textContent = this.text;
		this.textEl.classList.add( 'checkbox' );
		this.textEl.setAttribute( 'for', this.id );

		this.getContainer().appendChild( this.input );
		this.getContainer().appendChild( this.textEl );

		this.input.addEventListener( 'change', e => {
			this.trigger( 'change', { value: this.getValue() } );
		} );

		return this.getContainer();
	}
}

module.exports = Checkbox;