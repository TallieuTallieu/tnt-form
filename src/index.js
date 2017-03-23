"use strict";

const Form = require( './form' ),
	TextField = require( './component/TextField' ),
	Checkbox = require( './component/Checkbox' ),
	Select = require( './component/select' )
;

let form =  new Form( 1, {
	submitButtonText: 'Give me the values!'
} );

form.addField( new TextField( 1 ) );
form.addField( new TextField( 2 ) );
form.addField( new TextField( 3 ) );

form.addField( new Select( 4, [ 'None', 'Vegetarian', 'Etc' ] ) );
form.addField( new Select( 5, [ 'Pick me', 'Or me', 'Nooo, pick me!' ] ) );

form.addField( new Checkbox( 6, 'Concert of Hilary Han' ) );

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