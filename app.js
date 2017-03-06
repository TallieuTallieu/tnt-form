"use strict";

const FormFactory = require( './form-factory' ),
		Component = require( './component' ),
		ComponentList =  require( './component-list' ),
		Form = require( './form' ),
		$ = require( 'jquery' )
		;

let formfactory = new FormFactory();
formfactory.load( 1 );

console.log( formfactory );

let comp1 = new Component( 1 );
let comp2 = new Component( 2 );
let comp3 = new Component( 3 );

let form =  new Form( 1 );
form.addField( comp1 );
form.addField( comp2 );
form.addField( comp3 );

init();

function init( e )
{
	let formoutput = form.build();
	$( ".output" ).append( formoutput );
}

