"use strict";

const $ = require( 'jquery' ),
	Component = require('../component')
;

class Checkbox extends Component {

	constructor( id, value, opt = {} ) {
		super( id, opt );
		this.value =  value;
	}

	setup() {
		this.$container = $('<div>');
	}

	build() {

		let checkbox = $('<label />').html( this.value ).prepend( $( '<input>' )
			.attr( 'type', 'checkbox' )
			.attr( 'value', this.value ) )
			checkbox.appendTo( this.$container )
		;

		return this.$container;
	}
}

module.exports = Checkbox;