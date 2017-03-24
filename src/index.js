"use strict";

const Form = require( './form' ),
	TextField = require( './component/textfield' ),
	Checkbox = require( './component/checkbox' ),
	Select = require( './component/select' ),
	$ = require( 'jquery' )
;

let form =  new Form( 1, {
	submitButtonText: 'Give me the values!'
} );

form.addField( new TextField( 1, {
	v8nRequired: true,
	v8nMaxLength: 5,
	multiline: true,
	label: 'Naam',
} ) );

form.addField( new TextField( 2, {
	v8nEmail: true,
} ) );

form.addField( new Select( 4, [ 'None', 'Vegetarian', 'Etc' ], {
	label: 'Select an itemmmm',
} ) );
form.addField( new Select( 5, [ 'Pick me', 'Or me', 'Nooo, pick me!' ] ) );

form.addField( new Checkbox( 6, 'Concert of Hilary Han' ) );
form.addField( new Checkbox( 7, 'Een ander event ehja', {
	label: 'checkbox',
} ) );

form.build().appendTo('body');

form.on( 'submit', e => {

	$( '<textarea>' )
		.css( {
			height: 300,
			width: 300
		} )
		.appendTo('body')
		.text( JSON.stringify( e.data, null, '\t' ) )
	;
} );