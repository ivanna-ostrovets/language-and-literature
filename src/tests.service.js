function TestsService(
    LANGUAGE_MORFOLOGY_1
) {
	this.tests = {
		'language_morfology_1' : LANGUAGE_MORFOLOGY_1,
	}
}

TestsService.prototype.get = function(id) {
	return this.tests[id];
};

TestsService.prototype.check = function(answers) {
	/*
		answers = [0, 2, 1, 1]
		Перевіряєш правильність
	*/
};

angular.module('llt.app')
	.service('tests', TestsService);
