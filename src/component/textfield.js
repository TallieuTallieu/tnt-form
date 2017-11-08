"use strict";

const Component = require('../component'),
	util = require('../util/util.js')
;

class TextField extends Component {

	constructor( id, opts = {} ) {

		super( id, opts );

		(
			{
				v8nMaxLength : this.v8nMaxLength = 255,
				v8nEmail : this.v8nEmail = false,
				multiline : this.multiline = false,
				defaultValue : this.defaultValue = '',
				placeholder : this.placeholder = '',
			}
			= opts
		);
	}

	getValue() {
		return this.input.value;
	}

	validate() {

		super.validate();

		if( this.v8nEmail && !util.RE_EMAIL.test( this.getValue() ) ) {
			this.errors.push( { id: 'invalidEmail', default: 'Invalid Email' } );
		}

		if( this.getValue().length > this.v8nMaxLength ) {
			this.errors.push( { id: 'maxLength', default: 'Input is too long ( max ' + this.v8nMaxLength + ' )' } );
		}

		this.postValidate();
	}

	setError( errorMessage ) {

		super.setError( errorMessage );

		if( this.form.inlineErrorMessages ) {

			this.input.value = '';
			this.input.setAttribute( 'placeholder', errorMessage );
		}
	}

	build() {

		super.build();

		if( this.multiline ) {

			this.input = document.createElement( 'textarea' );
			this.input.innerHTML = this.defaultValue;

		} else {

			this.input = document.createElement( 'input' );
			this.input.setAttribute( 'type', 'text' );
			this.input.setAttribute( 'value', this.defaultValue );
		}

		this.getContainer().appendChild( this.input );

		if( this.placeholder ) {
			this.input.setAttribute( 'placeholder', this.placeholder );
		}

		this.input.addEventListener( 'change', e => {
			this.trigger( 'change', { value: this.getValue() } )
		} );

		this.input.addEventListener( 'keyup', e => {
			this.trigger( 'change', { value: this.getValue() } )
		} );

		this.input.addEventListener( 'keydown', e => {
			this.trigger( 'change', { value: this.getValue() } )
		} );

		return this.getContainer();
	}
}

module.exports = TextField;