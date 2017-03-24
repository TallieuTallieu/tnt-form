"use strict";

const FormFactory = require( './form-factory' );

let formfactory = new FormFactory();

let form = formfactory.create( {
	submitButtonText: 'Send me!',
	fields: [
		{
			type: 'textfield',
			opts: {
				v8nRequired: true
			}
		},
		{
			type: 'checkbox'
		}
	]
} );

form.build().appendTo( 'body' );