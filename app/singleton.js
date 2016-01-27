	module.exports = (function() {
		// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript

		// The Singleton pattern creates a new instance of the object if one doesn't exist and returns it. 
		// If an instance already exists, it simply returns a reference to that object.

		// Whilst the Singleton has valid uses, 
		// often when we find ourselves needing it in JavaScript it's a sign that we may need to re-evaluate our design.

		var instance;

		function init() {
			var count = 0;
			return {
				increment: function() {
					return ++count;
				},
				decrement: function() {
					return --count;
				},
				value: function() {
					return count;
				}
			};
		}

		return {
			getInstance: function() {
				if (!instance) {
					instance = init();
				}
				return instance;
			}
		};
	})();
