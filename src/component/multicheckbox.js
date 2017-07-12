"use strict";

const $ = require( 'jquery' ),
	Component = require('../component')
;

class MultiCheckbox extends Component {

	constructor( id, checkboxes, opts = {} ) {
		super( id, opts );
		this.checkboxes = checkboxes;
		this.inputs = [];
	}

	getValue() {

		let data = {};

		this.inputs.forEach( ( $input, i ) => {

			data[ i ] = $input[0].checked;
		} );

		return data;
	}

	build() {

		super.build();

		this.checkboxes.forEach( text => {

			let $label = $( '<label>' )
				.text( text )
				.appendTo( this.getContainer() )
			;

			let $checkbox = $( '<input>' )
				.attr( 'type', 'checkbox' )
				.attr( 'id',  this.inputlabel )
				.prependTo( $label )
				.change( e => this.trigger( 'change', { value: this.getValue() } ) )
			;

			this.inputs.push( $checkbox );
		} );

		return this.getContainer();
	}
}

module.exports = MultiCheckbox;