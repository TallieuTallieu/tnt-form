"use strict";

const $ = require( 'jquery' ),
	Component = require('../component')
;

class Select extends Component {

	constructor( id, values, opts = {} ) {
		super(id, opts);
		this.values = values;
	}

	getValue() {

		return parseInt( this.$select.val() );
	}

	validate() {

		let val = this.getValue();

		if( val < 0 || val > this.values.length - 1 ) {
			return false;
		}

		return super.validate();
	}

	build() {

		super.build();

		this.$select = $('<select>')
			.attr('type', 'text')
			.appendTo( this.getContainer() )
		;

		this.values.forEach( ( v, i ) => {

			let $opt = $( '<option>' )
				.attr( 'value', i )
				.text( v )
				.appendTo( this.$select )
			;
		} );

		this.$select.change( e => this.trigger( 'change', { value: this.getValue() } ) );

		return this.getContainer();
	}
}

module.exports = Select;