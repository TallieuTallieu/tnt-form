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

		let container = document.createElement( 'div' );
		container.classList.add( 'multicheckbox' );
		this.getContainer().appendChild(container);

		this.checkboxes.forEach( ( text, i ) => {

			let checkboxId = 'multicheckbox-' + this.id + '-' + i;

			let wrap = document.createElement( 'div' );
			let label = document.createElement( 'label' );
			label.setAttribute( 'for', checkboxId );
			wrap.appendChild( label );

			let checkbox = document.createElement( 'input' );
			checkbox.setAttribute( 'id', checkboxId );
			checkbox.setAttribute( 'type', 'checkbox' );
			label.textContent = text;
			dom.prepend( wrap, checkbox );

			container.appendChild( wrap );

			checkbox.addEventListener( 'change', e => {
				this.trigger( 'change', { value: this.getValue() } );
			} );

			this.inputs.push( checkbox );
		} );

		return this.getContainer();
	}
}

module.exports = MultiCheckbox;