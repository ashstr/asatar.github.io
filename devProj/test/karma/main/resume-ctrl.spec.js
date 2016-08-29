'use strict';

describe('module: main, controller: ResumeCtrl', function() {

	// load the controller's module
	beforeEach(module('main'));
	// load all the templates to prevent unexpected $http requests from ui-router
	beforeEach(module('ngHtml2Js'));

	// instantiate controller
	var ResumeCtrl;
	beforeEach(inject(function($controller) {
		ResumeCtrl = $controller('ResumeCtrl');
	}));

	it('should do something', function() {
		expect(!!ResumeCtrl).toBe(true);
	});

});