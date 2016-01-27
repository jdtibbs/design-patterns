var test = require('tape');
var singletonPattern = require('./singleton');

var singletonA = singletonPattern.getInstance();
var singletonB = singletonPattern.getInstance(); // this is the same instance as A!

test('module.pattern.increment', function(t) {
	t.plan(2);

	t.equal(singletonA.increment(), 1);
	t.equal(singletonB.value(), 1);
});

test('module.pattern.decrement', function(t) {
	t.plan(2);

	t.equal(singletonB.decrement(), 0);
	t.equal(singletonA.value(), 0);
});
