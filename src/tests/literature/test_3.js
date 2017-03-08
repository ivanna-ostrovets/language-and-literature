angular.module('llt.app')
    .constant('LITERATURE_3', [
      {
        question: 'Видатним твором полемічної літератури є',
        answers: [
          {
            text: '"Ісаія. Глава 35"'
          },
          {
            text: '"Послання до єпископів"',
            correct: true
          },
          {
            text: '"До Основ’яненка"'
          },
          {
            text: '"Бджола та Шершень"'
          },
          {
            text: '"Хіба ревуть воли, як ясла повні?"'
          }
        ]
      },
      {
        question: 'П’єса Івана Котляревського "Наталка Полтавка" починається піснею',
        answers: [
          {
            text: '"Віють вітри, віють буйні..."',
            correct: true
          },
          {
            text: '"Ой під вишнею, під черешнею..."'
          },
          {
            text: '"Всякому городу нрав і права..."'
          },
          {
            text: '"Де згода в сімействі..."'
          },
          {
            text: '"Віє вітер горою..."'
          }
        ]
      },
      {
        question: 'На картині зображено головну героїню твору',
        img: 'src/img/kate.png',
        answers: [
          {
            text: 'Івана Котляревського'
          },
          {
            text: 'Григорія Квітки-Основ’яненка'
          },
          {
            text: 'Тараса Шевченка',
            correct: true
          },
          {
            text: 'Пантелеймона Куліша'
          },
          {
            text: 'Панаса Мирного'
          }
        ]
      },
      {
        question: 'Датан, Авірон, Азазель є персонажами твору',
        answers: [
          {
            text: '"Кавказ"'
          },
          {
            text: '"Лісова пісня"'
          },
          {
            text: '"Intermezzo"'
          },
          {
            text: '"Гайдамаки"'
          },
          {
            text: '"Мойсей"',
            correct: true
          }
        ]
      },
      {
        question: '<span class="italic-inline">"Ні! Я жива! Я буду вічно жити! Я в серці маю те, що не вмирає!"</span> – слова',
        answers: [
          {
            text: 'Марусі ("Маруся Чурай" Ліни Костенко)'
          },
          {
            text: 'Мавки ("Лісова пісня" Лесі Українки)',
            correct: true
          },
          {
            text: 'Наталки ("Наталка Полтавка" Івана Котляревського)'
          },
          {
            text: 'Катерини ("Катерина" Тараса Шевченка)'
          },
          {
            text: 'Оксани ("Бояриня" Лесі Українки)'
          }
        ]
      },
      {
        question: '<span class="italic-inline">"Шумить, гуде Тополівка. До Лавріна Запорожця приїхали гості"</span> – так починається оповідь про події твору',
        answers: [
          {
            text: 'Валер’яна Підмогильного'
          },
          {
            text: 'Володимира Винниченка'
          },
          {
            text: 'Олександра Довженка',
            correct: true
          },
          {
            text: 'Остапа Вишні'
          },
          {
            text: 'Олеся Гончара'
          }
        ]
      },
      {
        question: 'До одного літературного жанру належать обидва твори в рядку',
        answers: [
          {
            text: '"Мартин Боруля", "Енеїда"'
          },
          {
            text: '"Наталка Полтавка", "Камінний хрест"'
          },
          {
            text: '"Intermezzo", "Гімн"'
          },
          {
            text: '"Чорна рада", "Хіба ревуть воли, як ясла повні?"',
            correct: true
          },
          {
            text: '"Лісова пісня", "Тіні забутих предків"'
          }
        ]
      },
      {
        question: 'Рядки <span class="italic-inline"><br/>Ніч у сніговій завії<br/>крутиться довкола стріх.<br/>У долоні у Марії<br/>місяць – золотий горіх<br/></span> написав',
        answers: [
          {
            text: 'Богдан-Ігор Антонич',
            correct: true
          },
          {
            text: 'Максим Рильський'
          },
          {
            text: 'Олександр Олесь'
          },
          {
            text: 'Микола Вороний'
          },
          {
            text: 'Павло Тичина'
          }
        ]
      },
      {
        question: 'Рядки <span class="italic-inline"><br/>Йде весна<br/>Запашна,<br/>Квітами-перлами<br/>Закосичена<br/></span> узяті з твору',
        answers: [
          {
            text: '"Contra spem spero"'
          },
          {
            text: '"На колимськім морозі калина"'
          },
          {
            text: '"Так ніхто не кохав"'
          },
          {
            text: '"Арфами, арфами"',
            correct: true
          },
          {
            text: '"Пісня про рушник"'
          }
        ]
      },
      {
        question: 'Фітільов є справжнім прізвищем',
        answers: [
          {
            text: 'Павла Тичини'
          },
          {
            text: 'Івана Багряного<'
          },
          {
            text: 'Юрія Яновського'
          },
          {
            text: 'Євгена Маланюка'
          },
          {
            text: 'Миколи Хвильового',
            correct: true
          }
        ]
      },
      {
        question: 'Установіть відповідність.',
        table: true,
        table_titles: [
          {
            title_1: 'Літературний псевдонім',
          },
          {
            title_2: 'Справжнє прізвище'
          }
        ],
        variants_1: [
          {
            text: 'Микола Хвильовий'
          },
          {
            text: 'Остап Вишня'
          },
          {
            text: 'Панас Мирний'
          },
          {
            text: 'Іван Багряний'
          },
          {
            text: ''
          }
        ],
        variants_2: [
          {
            text: 'Рудченко'
          },
          {
            text: 'Маланюк'
          },
          {
            text: 'Лозов’ягін'
          },
          {
            text: 'Губенко'
          },
          {
            text: 'Фітільов'
          }
        ],
        answers: [
          {
            text: '1',
            correct: 'e'
          },
          {
            text: '2',
            correct: 'd'
          },
          {
            text: '3',
            correct: 'a'
          },
          {
            text: '4',
            correct: 'c'
          }
        ]
      },
      {
        question: 'Людина із села, яка прийшла "завоювати" місто, а разом з тим принесла до міста всі свої страхи, комплекси і застереження – таким є головний герой твору',
        answers: [
          {
            text: 'Олеся Гончара'
          },
          {
            text: 'Григора Тютюнника'
          },
          {
            text: 'Ольги Кобилянської'
          },
          {
            text: 'Володимира Винниченка'
          },
          {
            text: 'Валер’яна Підмогильного',
            correct: true
          }
        ]
      }
    ]);