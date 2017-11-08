"use strict";

const Eventable = require('./eventable'),
	dom = require('./util/dom')
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
			this.errors.push( { id: 'required', default: 'Required field' } );
		}
	}

	save( data ) {

		data[ this.id ] = this.getValue();
	}

	getContainer() {

		if( ! this.el ) {
			throw new Error( 'Build the component first' );
		}
		return this.el;
	}

	hide() {

		if( ! this.isDisabled ) {

			this.isDisabled = true;
			this.getContainer().hide();

			if( this.components ) {
				this.components.forEachAll( c => {
					c.hide();
				} );
			}

			this.trigger( 'hide' );
		}
	}

	show() {

		if( this.isDisabled ) {

			this.isDisabled = false;
			this.getContainer().show();

			if( this.components ) {
				this.components.forEachAll( c => {
					c.show();
				} );
			}

			this.trigger( 'show' );
		}
	}

	destroy() {

		if( this.el ) {

			dom.remove( this.getContainer() );
			delete this.el;
		}
	}

	build() {

		this.el = document.createElement( 'fieldset' );

		if( this.label ) {

			let label = document.createElement( 'label' );
			label.textContent = this.label;
			this.el.appendChild(label);

			if( this.v8nRequired ) {
				label.classList.add( 'required' );
			}
		}

		return this.$el;
	}

	postValidate() {

		if( this.errors.length ) {
			let errorMessage = ( this.form.errorMessages[this.errors[0].id] ? this.form.errorMessages[this.errors[0].id] : this.errors[0].default );
			this.setError(errorMessage);
		} else {
			this.removeError();
		}
	}

	setError( errorMessage ) {

		if( ! this.error && ! this.form.inlineErrorMessages ) {

			this.error = document.createElement( 'span' );
			this.error.textContent = errorMessage;
			this.getContainer().appendChild( this.error );
		}

		this.getContainer().classList.add( 'has-errors' );
	}

	removeError() {

		this.getContainer().classList.remove( 'has-errors' );

		if( this.error ) {
			dom.remove(this.error);
			delete this.error;
		}
	}
}

module.exports = Component;