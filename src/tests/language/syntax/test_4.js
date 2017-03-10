angular.module('llt.app')
    .constant('LANGUAGE_SYNTAX_4', [
      {
        question: 'Визначте тип словосполучення за способом вираження головного слова.<br/><em>Далеко від дому, трохи жарко, мокро від дощу<br/><em>',
        answers: [
          {
            text: 'іменникове'
          },
          {
            text: 'прикметникове'
          },
          {
            text: 'дієслівне'
          },
          {
            text: 'займенникове'
          },
          {
            text: 'прислівникове',
            correct: true
          }
        ]
      },
      {
        question: 'Яким членом речення є виділене слово?<br/><em><strong>Визволені</strong> не можуть забути своїх визволителів (О. Гончар).<br/><em>',
        answers: [
          {
            text: 'підметом',
            correct: true
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
            text: 'обставиною'
          }
        ]
      },
      {
        question: 'З’ясуйте, у якому реченні невиправдано пропущено тире між підметом і присудком?',
        answers: [
          {
            text: 'Хліб всьому голова.',
            correct: true
          },
          {
            text: 'Від поганих утік, до гарних не пристав.'
          },
          {
            text: 'Від розкошів кудрі в’ються, а від журби січуться.'
          },
          {
            text: 'Вовк линяє, а натури не міняє.'
          },
          {
            text: 'Молодець проти овець, а проти молодця і сам вівця (З народної творчості).'
          }
        ]
      },
      {
        question: 'Визначте, чим ускладнене просте речення.<br/><em>І сміх і гріх було дивитися на цю недоладну постать, натоптану злобою і болем (М. Стельмах).<br/><em>',
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
        question: 'З’ясуйте умови відокремлення означення.<br/><em>Оповитий рожевим туманом, далекий острів немов зрушив з місця і поплив у морі мінливого сяйва (О. Донченко).<br/><em>',
        answers: [
          {
            text: 'стоїть після означуваного слова, вираженого іменником'
          },
          {
            text: 'пояснює особовий займенник',
            correct: true
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
            text: 'Місяць уже сідав, ховаючись за хатами й деревами (В. Козаченко).'
          },
          {
            text: 'Дивлячись на людей, усміхався і мій батько – великий добрий чоловік (О. Довженко).'
          },
          {
            text: 'Вода по весні, рвучи греблі та розносячи загати гуде та клекоче (Панас Мирний).',
            correct: true
          }
        ]
      },
      {
        question: 'Яким є подане речення?<br/><em>Підтягнувши щит ближче до світла, Ігор провів по ньому рукою (Ю. Щербак).<br/><em>',
        answers: [
          {
            text: 'простим, ускладненим однорідними членами речення'
          },
          {
            text: 'складносурядним'
          },
          {
            text: 'складнопідрядним'
          },
          {
            text: 'простим, ускладненим відокремленими членами речення',
            correct: true
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
            text: 'Об’єм капіталовкладень незначний.'
          },
          {
            text: 'Моя пропозиція є самою найкращою.'
          },
          {
            text: 'Ваш проект, я вважаю, більш вдалий.',
            correct: true
          },
          {
            text: 'Попасти в скрутне положення.'
          },
          {
            text: 'Сучасне фінансове положення – не з легких.'
          }
        ]
      },
      {
        question: 'У якому з наведених речень допущено стилістичну помилку?',
        answers: [
          {
            text: 'У цих змаганнях київські спортсмени зазнали поразки.'
          },
          {
            text: 'Строк повноважень директора закінчується в січні місяці наступного року.',
            correct: true
          },
          {
            text: 'Щоб частіше бувати в театрі, я придбав абонемент.'
          }
        ]
      },
      {
        question: 'Яке із наведених словосполучень є неправильним?',
        answers: [
          {
            text: 'Святкове Ріо-де-Жанейро'
          },
          {
            text: 'Стрімка Арагві'
          },
          {
            text: 'Далека Сибір',
            correct: true
          },
          {
            text: 'Актуальне інтерв’ю'
          },
          {
            text: 'Високий насип'
          }
        ]
      },
      {
        question: 'Яким членом речення є виділене слово?<br/><em>Пане Попель, <strong>розмовляти</strong> з вами – велика приємність (Ю. Андрухович).<br/><em>',
        answers: [
          {
            text: 'підметом',
            correct: true
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
            text: 'обставиною'
          }
        ]
      },
      {
        question: 'У якому варіанті правильно вжито прийменник з іменником?',
        answers: [
          {
            text: 'По єдиній формі.'
          },
          {
            text: 'По ініціативі колег.'
          },
          {
            text: 'По дорученню ректора.'
          },
          {
            text: 'Бігати по вулицям.'
          },
          {
            text: 'На замовлення клієнтів.',
            correct: true
          }
        ]
      }
    ]);
