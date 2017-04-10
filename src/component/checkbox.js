"use strict";

const $ = require( 'jquery' ),
	Component = require('../component')
;

class Checkbox extends Component {

	constructor( id, inputlabel, opt = {} ) {
		super( id, opt );
		this.inputlabel = "";

		if( inputlabel ) {
			this.inputlabel = inputlabel;
		}
	}

	getValue() {
		return this.$input[0].checked;
	}

	build() {

		super.build();

		this.$input = $( '<input>' )
			.attr( 'type', 'checkbox' )
			.attr( 'id',  this.inputlabel )
			.appendTo( this.getContainer() )
		;

		this.$label = $('<label>')
			.text( this.inputlabel )
			.addClass( 'checkbox' )
			.attr( 'for' , this.inputlabel )
			.appendTo( this.getContainer() )
		;

		this.$input.change( e => this.trigger( 'change', { value: this.getValue() } ) );

		return this.getContainer();
	}
}

module.exports = Checkbox;