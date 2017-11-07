"use strict";

const Component = require('../component'),
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

		components.forEach( c => this.components.add( c ) );
	}

	build() {

		this.el = document.createElement( 'div' );
		this.el.classList.add( 'stack' );
		this.el.classList.add( this.direction );

		let componentContainer = document.createElement( 'div' );

		if( this.label ) {

			let label = document.createElement( 'div' );
			label.classList.add( 'stack-title' );
			label.textContent = this.label;
			componentContainer.appendChild( $( '<div>' ).addClass( 'stack-title' ).text( this.label ) );

			this.el.classList.add( 'has-title' );
		}

		componentContainer.classList.add( 'stack-wrap' );
		this.el.appendChild( componentContainer );
		componentContainer.appendChild( this.components.build() );

		return this.el;
	}

	save( data ) {

		this.components.forEach( c => c.save( data ) );
	}
}

module.exports = Stack;