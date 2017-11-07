"use strict";

let dom = {};

dom.remove = (htmlElement) => {
	htmlElement.parentNode.removeChild(htmlElement);
};

dom.prepend = ( parent, htmlElement ) => {
	parent.insertBefore(htmlElement, parent.firstChild);
};

module.exports = dom;