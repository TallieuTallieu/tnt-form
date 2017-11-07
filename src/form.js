"use strict";

const ComponentList = require( './component-list' ),
	Eventable = require('./eventable')
;

class Form extends Eventable {

	constructor( id, opts = {} ) {
		super();
		this.id = id;
		this.errorMessages = {};
		this.components = new ComponentList( this );

		(
			{
				submitButtonText: this.submitButtonText = 'Send',
				inlineErrorMessages: this.inlineErrorMessages = false,
			}
			= opts
		);
	}

	addField( component ) {

		this.components.add( component );
	}

	removeField( id ) {

		this.components.remove( id );
	}

	getField( id ) {

		return this.components.get( id );
	}

	build() {

		let container = document.createElement( 'form' );

		let saveBtn = document.createElement( 'button' );
		saveBtn.setAttribute( 'type', 'submit' );
		saveBtn.textContent = this.submitButtonText;

		container.appendChild( this.components.build() );
		container.appendChild( saveBtn );

		container.addEventListener( 'submit', e => {

			if( this.validate() ) {
				this.save();
			}

			e.preventDefault();
		} );

		return container;
	}

	setErrorMessages( messages ) {

		this.errorMessages = messages;
	}

	validate( data ) {

		this.components.validate( data );

		let valid = true;
		this.components.forEach( c => {

			if( c.errors.length ) {
				valid = false;
			}

			c.postValidate();
		} );

		return valid;
	}

	save() {

		let data = {};
		this.components.save( data );
		this.trigger( 'submit', { data: data } );
	}
}

module.exports = Form;