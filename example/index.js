const $ = require('jquery'),
	lib = require('../src/index')
;

let $value = $('<span>').appendTo('body');

let form = new lib.Form( 4 );

form.addField( new lib.TextField( 'name', {
	label: 'Hoe is uw naam?',
	v8nRequired: true
} ) );
form.addField( new lib.Select( 'options', [ 'lol', 'ok' ] ) );
form.addField( new lib.Checkbox( 'checkbox', 'Vink mij aan' ) );

form.build().appendTo('body');

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