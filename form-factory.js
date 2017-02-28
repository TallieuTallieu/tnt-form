"use strict";

const FormFactory = {

	load: function( id ) {

		let form = new Form( id );

		api.get( this.id, r => {

			// @TODO add fields (using addFields method from form)
			console.log( r );
		} );

		return form;
	}
};