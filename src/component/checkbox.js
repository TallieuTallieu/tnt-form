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

		this.$label = $('<label>')
			.text( this.inputlabel )
			.appendTo( this.getContainer() )
		;

		this.$input = $( '<input>' )
			.attr( 'type', 'checkbox' )
			.prependTo( this.$label )
		;

		return this.getContainer();
	}
}

module.exports = Checkbox;