"use strict";

const Eventable = require('./eventable');

class Component extends Eventable {

	constructor( id ) {
		super();
		this.id = id;
		this.form = null;
		this.setup();
	}

	setForm( form ) {
		this.form = form;
	}

	setup() {}

	getValue() {
		return null;
	}

	validate() {
		return true;
	}

	save( data ) {
		data[ this.id ] = this.getValue();
	}

	build() {}
}

module.exports = Component;