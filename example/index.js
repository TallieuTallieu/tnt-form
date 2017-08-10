const $ = require('jquery'),
	lib = require('../src/index')
;

// let $value = $('<span>').appendTo('body');

let form = new lib.Form( 4, { submitButtonText: 'test', inlineErrorMessages: true } );

form.addField( new lib.Stack( 'stack1', [
	new lib.Checkbox( 'check1', 'Voeg 50 euro toe' ),
	new lib.Checkbox( 'check2', 'Voeg 20 euro toe' ),
	new lib.Checkbox( 'check3', 'Voeg 70 euro toe' )
] ) );

form.getField( 'stack1' ).on( 'hide', e => {
	console.log( 'stack 1' );
} );

form.getField( 'check1' ).on( 'hide', e => {
	console.log( 'check 1' );
} );

form.getField( 'check2' ).on( 'hide', e => {
	console.log( 'check 2' );
} );

form.getField( 'check3' ).on( 'hide', e => {
	console.log( 'check 3' );
} );

form.on( 'submit', e => {

	console.log( e.data );
} );

form.build().appendTo('body');

$( '<button>' ).appendTo( 'body' ).click( e => {

	form.getField( 'stack1' ).hide();
} );

/*
form.getField( 'name' ).hide();
form.getField( 'checkbox' ).hide();

form.getField( 'name' ).on( 'change', e => {

	if( e.value === 'dieter' ) {
		form.getField( 'checkbox' ).show();
	} else {
		form.getField( 'checkbox' ).hide();
	}

	$value.text( e.value );
} );

form.getField( 'checkbox' ).on( 'change', e => {

	if( e.value ) {
		form.getField( 'name' ).hide();
		form.getField( 'options' ).hide();
	} else {
		form.getField( 'name' ).show();
		form.getField( 'options' ).show();
	}
} );

form.getField( 'options' ).on( 'change', e => {

	let field = form.getField( 'name' );

	if( e.value == 0 && field ) {
		field.hide();
	} else if( field ) {
		field.show();
	}
} );

form.on( 'submit', e => {

	console.log( e.data );
} );
*/