	module.exports = (function() {
		'use strict';

		// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript

		// like the module pattern but all variables and methods are defined outside the returned object.

		// advantage:
		// * makes it clear & easy to see what variables and functions are public.
		// * can access other variables and methods in the object.

		// disadvantage:
		// same as module.

		// private variables and functions.
		var total = 99;
		var language = 'english';

		function greet() {
			return 'Hi, ' + this.name;
		}

		function exclamation() {
			return 'Hi, ' + toUpperCase(this.name);
		}

		function exclamation2() {
			return exclamation.call(this);
		}

		function toUpperCase(value) {
			return value.toUpperCase();
		}

		return {
			// public variables and functions. 
			language: language,
			greet: greet,
			exclamation: exclamation,
			exclamation2: exclamation2
		};

	})();
