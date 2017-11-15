"use strict";

const Component = require('../component'),
	util = require('../util/util.js')
;

class File extends Component {

	constructor( id, opts = {} ) {

		super( id, opts );

		(
			{
				accept : this.accept = '',
				multiple: this.multiple = false,
			}
			= opts
		);
	}

	getValue() {
		return this.input.files;
	}

	validate() {

		super.validate();
		this.postValidate();
	}

	build() {

		super.build();

		this.input = document.createElement( 'input' );
		this.input.setAttribute( 'type', 'file' );
		this.input.setAttribute( 'accept', this.accept );

		if( this.v8nRequired ) {
			this.input.required = true;
		}

		if( this.multiple ) {
			this.input.setAttribute( 'multiple', '' );
		}

		this.preview = document.createElement( 'div' );
		this.preview.classList.add( 'file-preview' );

		this.getContainer().appendChild( this.input );
		this.getContainer().appendChild( this.preview );

		this.input.addEventListener( 'change', e => {

			this.trigger( 'change' );

			let files = this.input.files;
			let imageType = /image.*/;
			this.preview.innerHTML = '';

			for( let i = 0; i < files.length; i++ ) {

				let file = files[ i ];

				let previewEl = document.createElement( 'div' );
				previewEl.classList.add( 'file-preview-item' );

				let filenameEl = document.createElement( 'div' );
				filenameEl.classList.add( 'file-preview-item-filename' );
				filenameEl.textContent = file.name;

				if( file.type.match( imageType ) ) {

					let reader = new FileReader();

					reader.onload = e => {

						let img = new Image();
						img.src = reader.result;

						previewEl.appendChild( img );
					};

					reader.readAsDataURL( file );
				}

				previewEl.appendChild( filenameEl );
				this.preview.appendChild( previewEl );
			}
		});

		return this.getContainer();
	}
}

module.exports = File;