angular.module('llt.app')
    .constant('LANGUAGE_SYNTAX_3', [
      {
        question: 'Визначте тип словосполучення за способом вираження головного слова.<em>Мокрий від дощу, дуже холодний, слизький від льоду<em>',
        answers: [
          {
            text: 'іменникове'
          },
          {
            text: 'прикметникове',
            correct: true
          },
          {
            text: 'дієслівне'
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
        question: 'Яким членом речення є виділене слово?<em>Приємно бродити по теплих калюжах після грому й дощу, чи ловити щучок руками, скаламутивши воду, або дивитись, як тягнуть <strong>волок</strong> (О. Донченко).<em>',
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
            text: 'додатком',
            correct: true
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
            text: 'Діла на копійку, а балачок на карбованець.'
          },
          {
            text: 'Дім повна чаша.',
            correct: true
          },
          {
            text: 'Ще вовка не вбили, а шкуру продають.'
          },
          {
            text: 'До біди доріг багато, а од біди і стежки нема.'
          },
          {
            text: 'Добра слава лежить, а погана біжить (З народної творчості).'
          }
        ]
      },
      {
        question: 'Визначте, чим ускладнене просте речення.<em>Серед степу, серед налитої зеленим хлібом долини, течуть тепер мої дні (М. Коцюбинський).<em>',
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
        question: 'З’ясуйте умови відокремлення означення.<em>Акації стояли саме в цвіту, заквітчані безліччю білих китиць (І. Нечуй-Левицький).<em>',
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
            text: 'Безлюдна вуличка причаїлась у сутінках, дрімала мигаючи тьмяними вогниками (С. Журахович).',
            correct: true
          },
          {
            text: 'Дуб стояв, не скинувши ще сухого торішнього листя (Ю. Смолич).'
          },
          {
            text: 'Чіпляючись за дерева і дахи, повзли над селом розкошлані, непроглядні хмари (В. Козаченко)'
          }
        ]
      },
      {
        question: 'Яким є подане речення?<em>Щоб не пломеніти горобині самотньо, посадив я поблизу нашу українську калину (І. Цюпа).<em>',
        answers: [
          {
            text: 'простим, ускладненим однорідними членами речення'
          },
          {
            text: 'складносурядним'
          },
          {
            text: 'складнопідрядним',
            correct: true
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
            text: 'Актриса вперше дебютувала і мала успіх.'
          },
          {
            text: 'Зловживання штрафними санкціями.'
          },
          {
            text: 'Дощ зупинився – в квартирах повідкривали вікна.'
          },
          {
            text: 'В обговоренні взяли участь усі учасники наради.',
            correct: true
          },
          {
            text: 'Головний лейтмотив твору.'
          }
        ]
      },
      {
        question: 'У якому з наведених речень допущено стилістичну помилку?',
        answers: [
          {
            text: 'Акт являється документом, який ґрунтується на незаперечних доказах.',
            correct: true
          },
          {
            text: 'Нова п’єса привернула увагу критиків оригінальним сюжетом.'
          },
          {
            text: 'До під’їзду наближалася вантажна машина, кузов якої був вкритий брезентом.'
          }
        ]
      },
      {
        question: 'Яке із наведених словосполучень є неправильним?',
        answers: [
          {
            text: 'Відома дівчина-чемпіон'
          },
          {
            text: 'Новий шампунь'
          },
          {
            text: 'Нове меню'
          },
          {
            text: 'Новий бра',
            correct: true
          },
          {
            text: 'Смачне пюре'
          }
        ]
      },
      {
        question: 'Яким членом речення є виділене слово?<em>Бути людиною – <strong>дертись</strong> по вертикальній стіні. Сизифова робота (В. Стус).<em>',
        answers: [
          {
            text: 'підметом'
          },
          {
            text: 'присудком',
            correct: true
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
            text: 'Низка заходів по підвищенню культури мови.'
          },
          {
            text: 'Отримав п’ятірку по хімії.'
          },
          {
            text: 'Добродушний по своєму характеру.'
          },
          {
            text: 'Пальто пошито по старому зразку.'
          },
          {
            text: 'Заходи для усунення недоліків.',
            correct: true
          }
        ]
      }
    ]);
