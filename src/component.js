"use strict";

const Eventable = require('./eventable'),
	$ = require( 'jquery' )
;

class Component extends Eventable {

	constructor( id, opts = {} ) {
		super();
		this.id = id;
		this.form = null;
		this.setup();

		(
			{
				v8nRequired : this.v8nRequired = false,
				label : this.label = false,
			}
			= opts
		);
	}

	setForm( form ) {
		this.form = form;
	}

	setup() {}

	getValue() {
		return null;
	}

	validate() {

		if( this.v8nRequired && !this.getValue() )
		{
			alert( this.id + ' is a required field*' );
			return false;
		}

		return true;
	}

	save( data ) {
		data[ this.id ] = this.getValue();
	}

	getContainer() {
		if( ! this.$el ) {
			throw new Error( 'Built the component first' );
		}
		return this.$el;
	}

	build() {

		this.$el = $( '<fieldset>' );

		if( this.label ) {

			let $label = $( '<label>' )
				.text( this.label )
				.appendTo( this.$el )
			;
		}

		return this.$el;
	}
}

module.exports = Component;