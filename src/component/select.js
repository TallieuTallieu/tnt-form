"use strict";

const $ = require( 'jquery' ),
	Component = require('../component')
;

class Select extends Component {

	constructor( id, values, opts = {} ) {
		super(id, opts);
		this.values = values;
	}

	setup() {
		this.$container = $('<select>')
			.attr('type', 'text')
		;
	}

	getValue() {
		return parseInt( this.$container.val() );
	}

	validate() {

		let val = this.getValue();

		if( val < 0 || val > this.values.length - 1 ) {
			return false;
		}

		return true;
	}

	build() {

		this.values.forEach( ( v, i ) => {

			let $opt = $( '<option>' )
				.attr( 'value', i )
				.text( v )
				.appendTo( this.$container )
			;
		} );

		return this.$container;
	}
}

module.exports = Select;