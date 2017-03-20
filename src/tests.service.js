class TestsService {
  constructor(LANGUAGE_MORFOLOGY_1,
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
              LITERATURE_5) {
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

  get(id) {
    return this.tests[id];
  }

  getAnswers(test) {
    let answers = [];

    test.forEach((question) => {
      if (question.table) {
        answers.push([]);
        const lastIndex = answers.length - 1;

        question.answers.forEach((answer) => {
          answers[lastIndex].push(answer.correct);
        });
      } else {
        question.answers.forEach((answer, index) => {
          if (answer.correct) {
            answers.push(index + 1);
          }
        });
      }
    });

    return answers;
  }

  check(results, testId) {
    let count = 0;
    const test = this.get(testId);
    const answers = this.getAnswers(test);

    results.forEach((result, index) => {
      if (typeof result === 'object') {
        result.forEach((res, idx) => {
          if (answers[index][idx] == result[idx]) {
            count += 0.25;
          }
        });
      }
      else {
        if (answers[index] == result) {
          count += 1;
        }
      }
    });

    return count;
  }
}

angular.module('llt.app')
    .service('tests', TestsService);
