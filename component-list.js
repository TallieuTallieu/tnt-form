"use strict";

const $ = require( 'jquery' )
	;

class ComponentList
{
	constructor( form ) {
		this.form = form;
		this.components = [];
	}

	add( component ) {
		this.components.push( component );
	}

	build() {
		let $container = $( '<div>' );
		this.components.forEach( c => $container.append( c.getValue() ) );
		return $container;
	}

	validate( data ) {
		let valid = true;
		this.components.forEach( c => {
			valid = valid && c.validate( data );
		} );
		return valid;
	}

	save( data ) {
		this.components.forEach( c => c.save( data ) );
	}

	forEach( cb ) {
		this.components.forEach( c => cb( c ) );
	}
}

module.exports = ComponentList;