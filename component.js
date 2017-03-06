"use strict";

class Component
{
	constructor( id ) {
		this.id = id;
	}

	getValue() {
		// @TODO return correct value based on input
		return 'My value has id: ' +  this.id  + '<br />';
	}

	validate() {
		return true;
	}

	save( data ) {
		data[ this.id ] = this.getValue();
	}
}

module.exports = Component;