"use strict";

const Form = require( './form' ),
		api = require( './api' )
		;

class FormFactory
{
	load( id ) {

		let form = new Form( id );

		api.get( id, r => {

			// @TODO add fields (using addFields method from form)
			console.log( r );
		} );

		return form;
	}
}

module.exports = FormFactory;