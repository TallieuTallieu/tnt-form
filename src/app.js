"use strict";

const Form = require( './form' ),
	TextField = require( './component/TextField' )
;

let form =  new Form( 1 );

form.addField( new TextField( 1 ) );
form.addField( new TextField( 2 ) );
form.addField( new TextField( 3 ) );

form.build().appendTo('body');

form.on( 'submit', e => {

	alert( JSON.stringify( e.data ) )
} );