"use strict";

class Form
{
	constructor( id ) {
		this.id = id;
		this.components = new ComponentList( this );
	}

	addField( component ) {
		this.components.add( component );
	}

	build() {

		let $container = $( '<form>' );
		let $saveButton = $( '<button>' )
			.attr( 'type', 'submit' )
			.text( 'Submit' )
		;

		$container.append( this.components.build() );
		$container.append( $saveButton );

		return $container;
	}

	validate( data ) {
		this.components.validate( data );
	}

	save() {
		let data = {};
		this.components.save( data );

		console.log( data );
		// @TODO do something with data (send xhr ;) )
	}
}