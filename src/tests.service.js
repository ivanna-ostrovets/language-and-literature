function TestsService(
	//TEST_1_1,
	//TEST_1_2,
	//TEST_1_3,
	////...
) {
	this.tests = {
		'1_1': TEST_1_1,
		'1_2': TEST_1_2,
		'1_3': TEST_1_3
	}
}

TestService.prototype.get = function(testId) {
	return this.tests[testId];
}

TestService.prototype.check = function(answers) {
	/* 
		answers = [0, 2, 1, 1]
		Перевіряєш правильність
	*/
}

angular.module('lm')
	.service('tests', TestsService)
