(function() {
	'use strict';


	// The module pattern allows for public and private (plus the lesser-know protected and privileged) access levels.
	// Created by using a IIFE.

	// private variables and functions.
	var total = 99;

	function toUpperCase(value) {
		return value.toUpperCase();
	}

	var service = {
		language: 'english',
		// public variables and functions. 
		greet: function() {
			return 'Hi, ' + this.name;
		},
		exclamation: function() {
			return 'Hi, ' + toUpperCase(this.name);
		}
	};

	module.exports = service;
})();
