describe('FilterSpec', function() {

	var emailFilter;

	beforeEach(module('starter'));

	beforeEach(inject(function($filter){
		emailFilter = $filter('email');
	}));

	it('should validate an e-mail', function() {

		var validEmail = "vitor@gmail.com";
		var invalidEmail = "vitor.com";

		expect(emailFilter(invalidEmail)).toBe(false);
		expect(emailFilter(validEmail)).toBe(true);
		
	});
});
