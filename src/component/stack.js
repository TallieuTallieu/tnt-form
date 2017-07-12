"use strict";

const $ = require( 'jquery' ),
	Component = require('../component'),
	ComponentList = require('../component-list')
;

class Stack extends Component {

	constructor( id, components, opts = {} ) {

		super( id, opts );

		this.components = new ComponentList( this.form );

		components.forEach( c => {
			this.components.add( c );
		} );
	}

	build() {

		this.$el = $( '<div class="stack">' )
			.append( this.components.build() )
		;

		return this.$el;
	}

	save( data ) {
		this.components.forEach( c => {
			c.save( data );
		} );
	}
}

module.exports = Stack;