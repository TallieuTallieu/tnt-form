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

		this.rawComponents = components;
	}

	build() {

		this.components = new ComponentList( this.form );
		this.rawComponents.forEach( c => this.components.add( c ) );

		this.el = document.createElement( 'div' );
		this.el.classList.add( 'stack' );
		this.el.classList.add( this.direction );

		let componentContainer = document.createElement( 'div' );

		if( this.label ) {

			let label = document.createElement( 'div' );
			label.classList.add( 'stack-title' );
			label.textContent = this.label;

			componentContainer.appendChild( label );

			this.el.classList.add( 'has-title' );
		}

		componentContainer.classList.add( 'stack-wrap' );
		this.el.appendChild( componentContainer );
		componentContainer.appendChild( this.components.build() );

		return this.el;
	}

	validate( data ) {

    this.errors = [];

    this.components.validate( data );

    this.components.forEach(c => {
    	if (c.errors.length) {
    		this.errors.push({ id: 'stackContainsError', default: 'One or more fields in the stack has an error' });
	    }
    });

	}

	save( data ) {

		this.components.save( data );
	}
}

module.exports = Stack;