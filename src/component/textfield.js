"use strict";

const $ = require( 'jquery' ),
	Component = require('../component')
;

class TextField extends Component {

	setup() {
		this.$container = $('<input>')
			.attr('type', 'text')
		;
	}

	getValue() {
		return this.$container.val();
	}

	build() {
		return this.$container;
	}
}

module.exports = TextField;