(function() {

	// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#prototypepatternjavascript

	// One of the benefits of using the prototype pattern is that we're working with the 
	// prototypal strengths JavaScript has to offer natively rather than attempting to imitate features
	// of other languages. With other design patterns, this isn't always the case.

	// prototype pattern is basically implementing JavaScripts prototypal inheritance.


	var foo = {
		walk: function() {
			return this.name + ' is walking.';
		}
	};

	// bar inherits from foo:

	var bar = Object.create(foo);
	bar.run = function() {
		return this.name + ' is running.';
	};

	// baz inherits from bar:

	// define object properties using the object descriptor:
	var barDesc = {
		sleep: {
			value: function() {
				return this.name + ' is sleeping.';
			}
		},
		awake: {
			value: function() {
				return this.name + ' is awake.';
			}
		}
	};

	var baz = Object.create(bar, barDesc);

	module.exports = {
		foo: foo,
		bar: bar,
		baz: baz
	};
})();
