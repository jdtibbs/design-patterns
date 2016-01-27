var test = require('tape');
var proto = require('./prototype');

var person = {
	name: 'sam'
};

test('foo', function(t) {
	t.plan(1);

	t.equal(proto.foo.walk.call(person), 'sam is walking.');
});

test('bar', function(t) {
	t.plan(2);

	// bar inherits from foo...
	t.equal(proto.bar.walk.call(person), 'sam is walking.');
	t.equal(proto.bar.run.call(person), 'sam is running.');
});

test('baz', function(t) {
	t.plan(4);

	// baz inherits from bar...
	t.equal(proto.baz.walk.call(person), 'sam is walking.');
	t.equal(proto.baz.run.call(person), 'sam is running.');
	t.equal(proto.baz.sleep.call(person), 'sam is sleeping.');
	t.equal(proto.baz.awake.call(person), 'sam is awake.');
});

test('foo initialized with object descriptor', function(t) {
	t.plan(1);

	var jane = Object.create(proto.foo, {
		name: {
			value: 'jane'
		}
	});

	t.equal(jane.walk(), 'jane is walking.');
});

test('enumerate own properties of baz prototype', function(t) {
	t.plan(2);

	var props = ['sleep', 'awake'];
	Object.getOwnPropertyNames(proto.baz).forEach(function(object) {
		t.notEqual(props.indexOf(object), -1);
	});

});
