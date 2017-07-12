"use strict";

const $ = require( 'jquery' ),
	Component = require('../component')
;

class Checkbox extends Component {

	constructor( id, inputlabel, opts = {} ) {
		super( id, opts );

		(
			{
				tooltip : this.tooltip = '',
			}
			= opts
		);

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
			.addClass( 'single-checkbox' )
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

		if( this.tooltip ) {
			this.$tooltip = $('<p>')
				.text( this.tooltip )
				.appendTo( this.getContainer() )
			;
		}

		this.$input.change( e => this.trigger( 'change', { value: this.getValue() } ) );

		return this.getContainer();
	}
}

module.exports = Checkbox;