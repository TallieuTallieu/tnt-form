"use strict";

const Eventable = require('./eventable'),
	$ = require( 'jquery' )
;

class Component extends Eventable {

	constructor( id, opts = {} ) {
		super();
		this.id = id;
		this.isDisabled = false;
		this.form = null;
		this.errors = [];
		this.setup();

		(
			{
				v8nRequired : this.v8nRequired = false,
				label : this.label = false,
			}
			= opts
		);
	}

	setup() {}

	setForm( form ) {
		this.form = form;
	}

	getValue() {
		return null;
	}

	validate() {

		this.errors = [];

		if( this.v8nRequired && !this.getValue() ) {
			this.errors.push( { value: 'required', label: 'Required field' } );
		}
	}

	save( data ) {
		data[ this.id ] = this.getValue();
	}

	getContainer() {
		if( ! this.$el ) {
			throw new Error( 'Build the component first' );
		}
		return this.$el;
	}

	hide() {
		this.isDisabled = true;
		this.getContainer().hide();
	}

	show() {
		this.isDisabled = false;
		this.getContainer().show();
	}

	destroy() {
		this.getContainer().remove();
	}

	build() {

		this.$el = $( '<fieldset>' );

		if( this.label ) {

			let $label = $( '<label>' )
				.text( this.label )
				.appendTo( this.$el )
			;

			if( this.v8nRequired ) {
				$label.addClass( 'required' );
			}
		}

		return this.$el;
	}

	postValidate() {

		if( this.errors.length ) {
			let error = ( this.form.errorMessages[this.errors[0].label] ? this.form.errorMessages[this.errors[0].label] : this.errors[0].label );
			this.setError(error);
		} else {
			this.removeError();
		}
	}

	setError( msg ) {
		if( ! this.$error && ! this.form.inlineErrorMessages ) {

			this.$error = $( '<span>' )
				.appendTo( this.getContainer() )
			;
			this.$error.text( msg );
		}

		this.getContainer().addClass( 'has-errors' );
	}

	removeError() {
		this.getContainer().removeClass( 'has-errors' );

		if( this.$error ) {
			this.$error.remove();
			delete this.$error;
		}
	}
}

module.exports = Component;