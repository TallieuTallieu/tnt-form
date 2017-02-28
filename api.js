"use strict";

const api = {
	eventListeners: {}
};

api.save = function( id, cb ) {

	api.methods.get( 'api/save/', response => {

		api.trigger( 'savedForm' );

		cb( response );
	} );
};

api.get = function( id, cb ) {

	api.methods.get( 'api/get/', response => {

		api.trigger( 'receivedForm', response );

		cb( response );
	} );
};

api.methods = {};

api.methods.get = function( path, cb ) {

	let xhr = new XMLHttpRequest();

	xhr.open( 'GET', path );
	xhr.send( null );

	xhr.onreadystatechange = () => {

		if( xhr.readyState === 4 ) { // done

			if( xhr.status === 200 ) { // success

				if( typeof cb !== 'undefined' ) {

					cb( JSON.parse( xhr.response ) );
				}
			}

		} else { // error

			api.error( 'API Received ' + xhr.status + ' (' + xhr.readyState + ')' );
		}
	};
};

api.error = function( message ) {

	console.error( message );

	api.trigger( 'apiError', {
		message: message
	} );
};

/*
 *
 * Event system
 *
 * */

api.on = function( eventName, cb ) {

	if( typeof api.eventListeners[ eventName ] === 'undefined' ) {

		api.eventListeners[ eventName ] = [];
	}

	api.eventListeners[ eventName ].push( cb );
};

api.trigger = function( eventName, arg ) {

	if( typeof api.eventListeners[ eventName ] !== 'undefined' ) {

		api.eventListeners[ eventName ].forEach( cb => {

			cb( arg );
		} );
	}
};

module.exports = api;