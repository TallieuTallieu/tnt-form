"use strict";

const $ = require( 'jquery' ),
	Component = require('../component')
;

class Checkbox extends Component {

	constructor( id, inputlabel, opt = {} ) {
		super( id, opt );
		this.inputlabel =  inputlabel;
	}

	getValue() {

		return this.$input[0].checked;
	}

	build() {

		super.build();

		this.$input = $( '<input>' )
			.attr( 'type', 'checkbox' )
			.appendTo( this.getContainer() )
		;

		this.$label = $('<label>')
			.text( this.inputlabel )
		;

		return this.getContainer();
	}
}

module.exports = Checkbox;