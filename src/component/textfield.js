"use strict";

const $ = require( 'jquery' ),
	Component = require('../component'),
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
			}
			= opts
		);
	}

	getValue() {
		return this.$input.val();
	}

	validate() {

		super.validate();

		if( this.v8nEmail && !util.RE_EMAIL.test( this.getValue() ) ) {
			this.errors.push( 'invalidEmail' );
		}

		if( this.getValue().length > this.v8nMaxLength ) {
			this.errors.push( 'maxLength' );
		}

		this.postValidate();
	}

	build() {

		super.build();

		if( this.multiline ) {

			this.$input = $( '<textarea>' )
				.attr( 'type', 'text' )
				.html( this.defaultValue )
				.appendTo( this.getContainer() )
			;
		} else {

			this.$input = $( '<input>' )
				.attr( 'type', 'text' )
				.attr( 'value', this.defaultValue )
				.appendTo( this.getContainer() )
			;
		}

		this.$input.bind( 'change keyup keydown', e => {

			this.trigger( 'change', { value: this.getValue() } )
		} );

		return this.getContainer();
	}
}

module.exports = TextField;