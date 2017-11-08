const lib = require('../src/index');

let form = new lib.Form( 4, { submitButtonText: 'test' } );

form.addField( new lib.TextField( 'name', {
	label: 'Your name',
	v8nRequired: true
} ) );

form.addField( new lib.TextField( 'message', {
	label: 'Your message',
	multiline: true
} ) );

form.addField( new lib.Stack( 'stack', [
	new lib.TextField( 'Hello', {
		label: 'Hello',
		multiline: true,
		v8nRequired: true
	} ),
	new lib.TextField( 'Hi', {
		label: 'Hi',
		multiline: true
	} )
] ) );

form.addField( new lib.Select( 'accomodations', [ 'hi', 'hi 2', 'hi 3' ] ) );

form.addField( new lib.MultiCheckbox( 'select_some', [ 'hi', 'check this', 'whats up' ] ) );
form.addField( new lib.Checkbox( 'select_me', 'My label' ) );

form.addField( new lib.Stack( 'stack1', [
	new lib.Checkbox( 'check1', 'Voeg 50 euro toe' ),
	new lib.Checkbox( 'check2', 'Voeg 20 euro toe' ),
	new lib.Checkbox( 'check3', 'Voeg 70 euro toe' )
] ) );

form.on( 'submit', e => {
	console.log( e.data );
} );

form.getField( 'name' ).on( 'change', e => {
	console.log( e.value );
} );

form.setErrorMessages( {
	required: 'This message is required!'
} );

document.body.appendChild( form.build() );