angular.module('llt.app')
  .constant('LANGUAGE_SYNTAX_1', [
    {
      question: 'Визначте тип словосполучення за способом вираження головного слова.<span class="italic">Зустрів її, пішли зі мною, прочитаю газет</span>',
      answers: [
        {
          text: 'іменникове'
        },
        {
          text: 'прикметникове'
        },
        {
          text: 'дієслівне',
          correct: true
        },
        {
          text: 'займенникове'
        },
        {
          text: 'прислівникове'
        }
      ]
    },
    {
      question: 'Яким членом речення є виділене слово?<span class="italic">Електричний ліхтар <strong>на березі</strong> змагався з темрявою, яка, здавалося, суцільним муром насувалася з моря (О. Донченко).</span>',
      answers: [
        {
          text: 'підметом'
        },
        {
          text: 'присудком'
        },
        {
          text: 'означенням'
        },
        {
          text: 'додатком'
        },
        {
          text: 'обставиною',
          correct: true
        }
      ]
    },
    {
      question: 'З’ясуйте, у якому реченні невиправдано пропущено тире між підметом і присудком?',
      answers: [
        {
          text: 'Ластівка день починає, а соловей кінчає.'
        },
        {
          text: 'Хто літом спеки боїться, той зимою не має чим гріться.'
        },
        {
          text: 'Хто про землю дбає, вона тому повертає.'
        },
        {
          text: 'Писать не язиком чесать.',
          correct: true
        },
        {
          text: 'Вчення в щасті прикрашає, а в нещасті утішає (З народної творчості).'
        }
      ]
    },
    {
      question: 'Визначте, чим ускладнене просте речення.<span class="italic">Там, на столі, лежить моє перо (Л. Костенко).</span>',
      answers: [
        {
          text: 'однорідними членами речення'
        },
        {
          text: 'відокремленими членами речення',
          correct: true
        },
        {
          text: 'вставними конструкціями'
        },
        {
          text: 'звертаннями'
        }
      ]
    },
    {
      question: 'З’ясуйте умови відокремлення означення.<span class="italic">Пахло васильками, натиканими за сволок, і татарським зіллям, розкиданим на чисто вимитій підлозі (П. Панч).</span>',
      answers: [
        {
          text: 'стоїть після означуваного слова, вираженого іменником',
          correct: true
        },
        {
          text: 'пояснює особовий займенник'
        },
        {
          text: 'стоїть перед означуваним іменником і має обставинний відтінок причини'
        }
      ]
    },
    {
      question: 'У якому реченні пропущено кому при відокремленій обставині?',
      answers: [
        {
          text: 'Сагайдак напнувшись плащ-палаткою, сидів, не втручаючись у розмову (О. Гончар).',
          correct: true
        },
        {
          text: 'Дмитро, дужий, стікаючи живими струмками, вскакує в ріку (М. Стельмах).'
        },
        {
          text: 'Жінка заметушилася, наводячи порядок (М. Стельмах).'
        }
      ]
    },
    {
      question: 'Яким є подане речення?<span class="italic">Сірий, припорошений весняною пилюкою степ збігає на південь і стигне там голубим маревом (Г. Тютюнник).</span>',
      answers: [
        {
          text: 'простим, ускладненим однорідними членами речення',
          correct: true
        },
        {
          text: 'складносурядним'
        },
        {
          text: 'складнопідрядним'
        },
        {
          text: 'простим, ускладненим відокремленими членами речення'
        },
        {
          text: 'безсполучниковим складним'
        }
      ]
    },
    {
      question: 'Вкажіть речення, у якому немає порушень норм сучасної української літературної мови.',
      answers: [
        {
          text: 'Довідка видана Івану Костенко.'
        },
        {
          text: 'Потяг відходить о 7 годині 30 хвилин.',
          correct: true
        },
        {
          text: 'Слідуючого четверга відбудуться збори.'
        },
        {
          text: 'Тисяча екземплярів підручника з логіки.'
        },
        {
          text: 'Ефектний миючий засіб.'
        }
      ]
    },
    {
      question: 'У якому з наведених речень допущено стилістичну помилку?',
      answers: [
        {
          text: 'Приміром невдалого виступу є доповідь директора на щорічних зборах шкільного колективу.',
          correct: true
        },
        {
          text: 'У конгресі брали участь відомі науковці.'
        },
        {
          text: 'Після приїзду з відрядження він почувався погано.'
        }
      ]
    },
    {
      question: 'Яке із наведених словосполучень є неправильним?',
      answers: [
        {
          text: 'Нова авеню'
        },
        {
          text: 'Глибока Міссурі'
        },
        {
          text: 'Зелений Капрі'
        },
        {
          text: 'Гостра біль',
          correct: true
        },
        {
          text: 'Сучасний вагон-лабораторія'
        }
      ]
    },
    {
      question: 'Яким членом речення є виділене слово?<span class="italic">Я скликав раду в суботу не <strong>в таборі</strong>, не в гетьманському наметі, а на пасіці (П. Загребельний)</span>',
      answers: [
        {
          text: 'підметом'
        },
        {
          text: 'присудком'
        },
        {
          text: 'означенням'
        },
        {
          text: 'додатком'
        },
        {
          text: 'обставиною',
          correct: true
        }
      ]
    },
    {
      question: 'У якому варіанті правильно вжито прийменник з іменником?',
      answers: [
        {
          text: 'Десять праць по філології.'
        },
        {
          text: 'Через непорозуміння.',
          correct: true
        },
        {
          text: 'Залік по екології.'
        },
        {
          text: 'Бути відсутнім по незалежних від тебе причинах.'
        },
        {
          text: 'Пропуск у зал по запрошеннях.'
        }
      ]
    }
  ]);
