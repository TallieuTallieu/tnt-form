"use strict";

const $ = require( 'jquery' ),
	Component = require('../component'),
	ComponentList = require('../component-list')
;

class Stack extends Component {

	constructor( id, components, opts = {} ) {

		super( id, opts );

		(
			{
				label : this.label = '',
				direction : this.direction = 'horizontal',
			}
				= opts
		);

		this.components = new ComponentList( this.form );

		components.forEach( c => {
			this.components.add( c );
		} );
	}

	build() {

		this.$el = $( '<div>' ).addClass( 'stack' ).addClass( this.direction );

		let $componentContainer = $( '<div>' )
			.appendTo( this.$el )
			.append( this.components.build() )
		;

		if( this.label ) {
			$componentContainer.prepend( $( '<div>' ).addClass( 'stack-title' ).text( this.label ) );
		}

		return this.$el;
	}

	save( data ) {
		this.components.forEach( c => {
			c.save( data );
		} );
	}
}

module.exports = Stack;