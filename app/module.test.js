var test = require('tape');
var modulePattern = require('./module');

var sam = {
	name: 'sam'
};



test('module.pattern.total', function(t) {
	t.plan(1);

	t.equal(modulePattern.total, undefined);
});


test('module.pattern.toUpperCase', function(t) {
	t.plan(1);

	t.equal(modulePattern.toUpperCase, undefined);
});

test('module.pattern.language', function(t) {
	t.plan(1);

	t.equal(modulePattern.language, 'english');
});


test('module.pattern.greet', function(t) {
	t.plan(1);

	t.equal(modulePattern.greet.call(sam), 'Hi, sam');
});

test('module.pattern.exclamation', function(t) {
	t.plan(1);

	t.equal(modulePattern.exclamation.call(sam), 'Hi, SAM');
});

test('module.pattern.exclamation2', function(t) {
	t.plan(1);

	t.equal(modulePattern.exclamation2.call(sam), undefined);
});
