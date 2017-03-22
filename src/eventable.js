"use strict";

class Eventable {

	on( eventName, cb ) {

		if( ! this.eventListeners ) {
			this.eventListeners = [];
		}

		if( typeof this.eventListeners[ eventName ] === 'undefined' ) {
			this.eventListeners[ eventName ] = [];
		}

		this.eventListeners[ eventName ].push( cb );
	}

	trigger( eventName, arg ) {

		if( ! this.eventListeners ) {
			this.eventListeners = [];
		}

		if( typeof this.eventListeners[ eventName ] !== 'undefined' ) {
			this.eventListeners[ eventName ].forEach( cb => {
				cb( arg );
			} );
		}
	};
}

module.exports = Eventable;