"use strict";

const Component = require('../component');

class Checkbox extends Component {

	constructor( id, inputlabel, opts = {} ) {

		super( id, opts );

		(
			{
				tooltip : this.tooltip = '',
			}
			= opts
		);

		this.inputlabel = inputlabel || '';
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


		this.label = document.createElement( 'label' );
		this.label.textContent = this.inputlabel;
		this.label.classList.add( 'checkbox' );
		this.label.setAttribute( 'for', this.id );

		this.getContainer().appendChild( this.input );
		this.getContainer().appendChild( this.label );

		if( this.tooltipEl ) {

			this.tooltipEl = document.createElement( 'p' );
			this.tooltipEl.textContent = this.tooltup;
			this.getContainer().appendChild( this.tooltipEl );
		}

		this.input.addEventListener( 'change', e => {
			this.trigger( 'change', { value: this.getValue() } );
		} );

		return this.getContainer();
	}
}

module.exports = Checkbox;