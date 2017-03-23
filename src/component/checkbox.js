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
		this.$container = $('<label>');
	}

	getValue() {
		return ( this.$container.find('input').prop('checked') ) ? this.$container.find('input:checked').val() : "0";
	}

	build() {

		this.$container.text( this.value ).prepend( $( '<input>' )
			.attr( 'type', 'checkbox' )
			.attr( 'value', 1 ) );

		return this.$container;
	}
}

module.exports = Checkbox;