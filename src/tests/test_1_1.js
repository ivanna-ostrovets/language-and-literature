angular.module('ml')
  .constant('TEST_1_1', [
    {
      question: 'Blablabla?',
      answers: [
        {
          text: 'blabla', 
          correct: true
        },
        {
          text: 'not true'
        },
        {
          text: 'easy'
        }
      ],
    },
    {
      question: 'Blabla?',
      answers: [
        {
          text: 'foobar'
        },
        {
          text: 'zzzzz'
        },
        {
          text: 'wow',
          correct: true
        }
      ]
    }
  ]);
