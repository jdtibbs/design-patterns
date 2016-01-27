	module.exports = (function() {
		'use strict';

		// See: https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

		// The Module pattern was originally defined as a way to provide both private and public encapsulation 
		// for classes in conventional software engineering.

		// advantages:
		// * private variables and methods.

		// disadvantages: 
		// * cannot directly test private methods.
		// * cannot access other methods in the returned object.

		// private variables and functions.
		var total = 99;

		function toUpperCase(value) {
			return value.toUpperCase();
		}

		// return public variables and functions. 
		return {
			language: 'english',
			greet: function() {
				return 'Hi, ' + this.name;
			},
			exclamation: function() {
				return 'Hi, ' + toUpperCase(this.name);
			},
			exclamation2: function() {
				try {
					return exclamation();
				} catch (error) {
					if (error instanceof ReferenceError) {
						return undefined;
					}
					return error;
				}
			}
		};

	})();
