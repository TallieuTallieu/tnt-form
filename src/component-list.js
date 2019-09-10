"use strict";

class ComponentList {
	
	constructor( form ) {

		this.form = form;
		this.components = [];
	}

	add( component ) {

		component.setForm( this.form );
		this.components.push( component );
	}

	remove( id ) {

		let index = this.getIndex( id );

		if( index !== false ) {

			this.components[ index ].destroy();
			this.components.splice( index, 1 );
		}
	}

	get( id ) {

		let index = this.getIndex( id );

		if( index !== false ) {
			return this.components[ index ];
		}

		for( let i = 0; i < this.components.length; i++ ) {
			if( this.components[i].components ) {
				let component = this.components[i].components.get( id );
				if( component ) {
					return component;
				}
			}
		}

		return false;
	}

	getIndex( id ) {

		for( let i = 0; i < this.components.length; i++ ) {
			if( this.components[ i ].id == id ) {
				return i;
			}
		}
		return false;
	}

	build() {

		let el = document.createElement( 'div' );

		this.components.forEach( c => {
			el.appendChild( c.build() );
		} );

		return el;
	}

	validate( data ) {

		this.forEach( c => {
			c.validate( data );
		});
	}

	save( data ) {

		this.forEach( c => c.save( data ) );
	}

	forEach( cb ) {

		this.components.forEach( c => {
			if( ! c.isDisabled ) {
				cb( c );
			}
		} );
	}

	forEachAll( cb ) {

		this.components.forEach( c => {
			cb( c );
		} );
	}
}

module.exports = ComponentList;