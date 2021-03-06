'use strict';
var grunt = require('grunt');

exports.bowerRJS = {
	wireupComponent: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/config.js');
		var expected = grunt.file.read('test/fixtures/config-expected.js');
		test.equal(actual, expected, 'should wireup Bower components in RequireJS config');

		test.done();
	},
	wireupComponentGlobalConfig: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/global-config.js');
		var expected = grunt.file.read('test/fixtures/global-config-expected.js');
		test.equal(actual, expected, 'should wireup Bower components in RequireJS config');

		test.done();
	},
	wireupComponentBaseUrl: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/baseurl-config.js');
		var expected = grunt.file.read('test/fixtures/baseurl-config-expected.js');
		test.equal(actual, expected, 'should consider baseUrl when wiring up Bower components in RequireJS config');

		test.done();
	}
};
