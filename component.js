"use strict";

class Component
{
	constructor( id ) {
		this.id = id;
	}

	getValue() {
		// @TODO return correct value based on input
		return 'My value';
	}

	validate() {
		return true;
	}

	save( data ) {
		data[ this.id ] = this.getValue();
	}
}