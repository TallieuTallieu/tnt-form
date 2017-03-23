"use strict";

const $ = require( 'jquery' ),
	Component = require('../component')
;

class Checkbox extends Component {

	constructor( id, values ) {
		super( id );
	}

	setup() {
		this.values.forEach( c => this.$container = $('<input>').attr('type', 'checkbox') );
	}

	build() {
		return this.$container;
	}
}

module.exports = Checkbox;