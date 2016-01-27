var test = require('tape');
var modulePattern = require('./revealing.module');

var sam = {
	name: 'sam'
};


test('revealing.module.pattern.total', function(t) {
	t.plan(1);

	t.equal(modulePattern.total, undefined);
});


test('revealing.module.pattern.toUpperCase', function(t) {
	t.plan(1);

	t.equal(modulePattern.toUpperCase, undefined);
});

test('revealing.module.pattern.language', function(t) {
	t.plan(1);

	t.equal(modulePattern.language, 'english');
});


test('revealing.module.pattern.greet', function(t) {
	t.plan(1);

	t.equal(modulePattern.greet.call(sam), 'Hi, sam');
});

test('revealing.module.pattern.exclamation', function(t) {
	t.plan(1);

	t.equal(modulePattern.exclamation.call(sam), 'Hi, SAM');
});

test('revealing.module.pattern.exclamation2', function(t) {
	t.plan(1);

	t.equal(modulePattern.exclamation2.call(sam), 'Hi, SAM');
});
