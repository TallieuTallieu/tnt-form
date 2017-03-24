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
			}
			= opts
		);
	}

	getValue() {
		return this.$input.val();
	}

	validate() {

		if( this.getValue().length > this.v8nMaxLength  )
		{
			alert( this.id + ' has a maxlenght of ' + this.v8nMaxLength );
			return false;
		}

		if( this.v8nEmail && !util.RE_EMAIL.test( this.getValue() ) )
		{
			alert( this.id + ' is not a valid email.' );
			return false;
		}

		return super.validate();
	}

	build() {

		super.build();

		if( this.multiline ) {

			this.$input = $('<textarea>')
				.attr('type', 'text')
				.appendTo( this.getContainer() )
			;
		} else {

			this.$input = $('<input>')
				.attr('type', 'text')
				.appendTo( this.getContainer() )
			;
		}

		return this.getContainer();
	}
}

module.exports = TextField;