"use strict";

const $ = require( 'jquery' );

class ComponentList
{
	constructor( form ) {
		this.form = form;
		this.components = [];
	}

	add( component ) {
		component.setForm( this.form );
		this.components.push( component );
	}

	build() {
		let $container = $( '<div>' );
		this.components.forEach( c => $container.append( c.build() ) );
		return $container;
	}

	validate( data ) {
		this.components.forEach( c => c.validate( data ) );
	}

	save( data ) {
		this.components.forEach( c => c.save( data ) );
	}

	forEach( cb ) {
		this.components.forEach( c => cb( c ) );
	}
}

module.exports = ComponentList;