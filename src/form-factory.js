"use strict";

const Form = require( './form' ),
	TextField = require( './component/textfield' ),
	Checkbox = require( './component/checkbox' ),
	api = require( './api' )
;

let fieldmap = {
	'textfield': TextField,
	'checkbox': Checkbox
};

class FormFactory {

	// load( id ) {
	//
	// 	let form = new Form( id );
	//
	// 	api.get( id, r => {
	//
	// 		// @TODO add fields (using addFields method from form)
	// 		console.log( r );
	// 	} );
	//
	// 	return form;
	// }

	create( structure ) {

		let form = new Form( 1, {
			submitButtonText: structure.submitButtonText
		} );

		structure.fields.forEach( f => {

			form.addField( new fieldmap[ f.type ]( 1, f.opts ) );
		} );

		return form;
	}
}

module.exports = FormFactory;