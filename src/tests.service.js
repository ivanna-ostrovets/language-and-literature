function TestsService(
  LANGUAGE_MORFOLOGY_1,
  LANGUAGE_MORFOLOGY_2,
  LANGUAGE_MORFOLOGY_3,
  LANGUAGE_MORFOLOGY_4,
  LANGUAGE_MORFOLOGY_5,
  LANGUAGE_SYNTAX_1,
  LANGUAGE_SYNTAX_2,
  LANGUAGE_SYNTAX_3,
  LANGUAGE_SYNTAX_4,
  LANGUAGE_SYNTAX_5,
  LITERATURE_1,
  LITERATURE_2,
  LITERATURE_3,
  LITERATURE_4,
  LITERATURE_5
)
{
  this.tests = {
    'language_morfology_1': LANGUAGE_MORFOLOGY_1,
    'language_morfology_2': LANGUAGE_MORFOLOGY_2,
    'language_morfology_3': LANGUAGE_MORFOLOGY_3,
    'language_morfology_4': LANGUAGE_MORFOLOGY_4,
    'language_morfology_5': LANGUAGE_MORFOLOGY_5,
    'language_syntax_1': LANGUAGE_SYNTAX_1,
    'language_syntax_2': LANGUAGE_SYNTAX_2,
    'language_syntax_3': LANGUAGE_SYNTAX_3,
    'language_syntax_4': LANGUAGE_SYNTAX_4,
    'language_syntax_5': LANGUAGE_SYNTAX_5,
    'literature_1': LITERATURE_1,
    'literature_2': LITERATURE_2,
    'literature_3': LITERATURE_3,
    'literature_4': LITERATURE_4,
    'literature_5': LITERATURE_5
  }
}

TestsService.prototype.get = function (id) {
  return this.tests[id];
};

TestsService.prototype.check = function (answers) {
  /*
   answers = [0, 2, 1, 1]
   Перевіряєш правильність
   */
};

angular.module('llt.app')
    .service('tests', TestsService);
