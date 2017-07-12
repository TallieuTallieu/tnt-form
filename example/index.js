const $ = require('jquery'),
	lib = require('../src/index')
;

// let $value = $('<span>').appendTo('body');

let form = new lib.Form( 4, { submitButtonText: 'test', inlineErrorMessages: true } );

form.addField( new lib.Select( 'options', [ 'lol', 'ok' ] ) );

form.addField( new lib.Stack( 'stack', [
	new lib.TextField( 'first_name', {
		label: 'First name',
		v8nRequired: true
	} ),
	new lib.TextField( 'last_name', {
		label: 'Last name',
		v8nRequired: true
	} )
] ) );

form.addField( new lib.Stack( 'stack2', [
	new lib.TextField( 'city', {
		label: 'City',
		v8nRequired: true
	} )
] ) );

form.addField( new lib.MultiCheckbox( 'food', [ 'Vol au vent', 'Vegetarian', 'French fries', 'Insects' ], {
	label: 'Which food do you prefer?'
} ) );

form.addField( new lib.Checkbox( 'food', 'Dit is de checkbox', {
	label: 'Single checkbox'
} ) );

form.build().appendTo('body');

form.getField( 'city' ).on( 'change', e => {

	console.log( e.value );
} );

form.getField( 'first_name' ).on( 'change', e => {

	console.log( e.value );
} );

form.getField( 'last_name' ).on( 'change', e => {

	console.log( e.value );
} );

form.on( 'submit', e => {

	console.log( e.data );
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