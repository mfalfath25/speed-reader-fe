import { BiBookOpen, BiHistory, BiLogOut, BiUser } from 'react-icons/bi'
import { media_1, media_2, media_3 } from '../assets/guides'
import { Questions } from '../types/model'

export const titles = [
  { path: '/auth', title: '' },
  { path: '/home', title: 'Home' },
  { path: '/login', title: 'Login' },
  { path: '/register', title: 'Register' },
  { path: '/guide', title: 'Reading Guides' },
  { path: '/history', title: 'Training History' },
  { path: '/profile', title: 'Profile' },
  { path: '/profile/edit/:userId', title: 'Edit Profile' },
  { path: '/profile/progress/:userId', title: 'My Progress' },
  { path: '/training', title: 'Training' },
  { path: '/training/settings', title: 'Visual Settings' },
  { path: '/training/normal', title: 'Normal Mode' },
  { path: '/training/normal/simulate', title: 'Normal Mode Training' },
  {
    path: '/training/normal/simulate/comprehension',
    title: 'Comprehension Test',
  },
  { path: '/training/normal/result', title: 'Training Result' },
  { path: '/training/blind', title: 'Blind Mode' },
  { path: '/training/blind/simulate', title: 'Blind Mode Training' },
  {
    path: '/training/blind/simulate/comprehension',
    title: 'Comprehension Test',
  },
  { path: '/training/blind/result', title: 'Training Result' },
  { path: '/training/custom', title: 'Custom Mode' },
  { path: '/training/custom/simulate', title: 'Custom Mode Training' },
  { path: '/training/custom/result', title: 'Training Result' },
]

export const textLevelData = [
  { label: 'A1', value: 'A1' },
  { label: 'A2', value: 'A2' },
  { label: 'B1', value: 'B1' },
  { label: 'B2', value: 'B2' },
  { label: 'C1', value: 'C1' },
]

export const textChoiceData = [
  { label: 'Text 1', value: 'Text 1' },
  { label: 'Text 2', value: 'Text 2' },
]

export const textData = [
  {
    textLevel: 'A1',
    textChoice: 'Text 1',
    textValue:
      'My name is John\nHi! Nice to meet you! My name is John Smith. I am 19 and a student in college. I go to college in New York. My favorite courses are Geometry, French, and History. English is my hardest course. My professors are very friendly and smart. It’s my second year in college now. I love it!\n\nI live in a big house on Ivy Street. It’s near the college campus. I share the house with three other students. Their names are Bill, Tony, and Paul. We help each other with homework. On the weekend, we play football together.\n\nI have a younger brother. He just started high school. He is 14 and lives with my parents. They live on Mulberry Street in Boston. Sometimes they visit me in New York. I am happy when they visit. My Mom always brings me sweets and candy when they come. I really miss them, too!',
    questionPairId: 1,
  },
  {
    textLevel: 'A1',
    textChoice: 'Text 2',
    textValue:
      'Preparing food\nJack was hungry. He walked to the kitchen. He got out some eggs. He took out some oil. He placed a skillet on the stove. Next, he turned on the heat. He poured the oil into the skillet. He cracked the eggs into a bowl. He stirred the eggs. Then, he poured them into the hot skillet. He waited while the eggs cooked. They cooked for two minutes. He heard them cooking. They popped in the oil.\n\nNext, Jack put the eggs on a plate. He placed the plate on the dining room table. Jack loved looking at his eggs. They looked pretty on the white plate. He sat down in the large wooden chair. He thought about the day ahead. He ate the eggs with a spoon. They were good.\n\nHe washed the plate with dishwashing soap. Then, he washed the pan. He got a sponge damp. Finally, he wiped down the table. Next, Jack watched TV.',
    questionPairId: 2,
  },
  {
    textLevel: 'A2',
    textChoice: 'Text 1',
    textValue:
      'Days of the week\r\nThere are seven days of the week, or uniquely named 24-hour periods designed to provide scheduling context and make time more easily measureable. Each of these days is identifiable by specific plans, moods, and tones.\r\n\r\nMonday is viewed by many to be the "worst" day of the week, as it marks the return to work following the weekend, when most full-time employees are given two days off. Most students attend school in the morning and return home in the afternoon (usually from about eight until three or seven until two), and most workers go to work in the morning and return home in the evening (usually from nine to five or eight to four).\r\n\r\nTuesday is the second day of the week, and is in many ways similar to Monday. Not a whole lot of changes, schedule-wise, between Tuesday and Monday; most individuals go to school or work and return home to watch television, play video games, make plans with friends, spend time with family, read, or engage in a similar leisure-related activity.\r\n\r\nWednesday is the third day of the week, and serves as the "middle" of the work week; some individuals refer to Wednesday as "hump day," as once its workday is complete, employees will have passed the work-week "hump," and will be on the downturn, as only two days on the job will remain in the week.\r\n\r\nThursday is the fourth day of the week, and is viewed favorably by many, as it\'s rather close to the end of the work week.\r\n\r\nFriday is the fifth day of the week, and marks the end of the workweek and school-week for the vast majority of employees and students. By Friday afternoon/evening, most students/workers cannot wait to leave and go home, as they won\'t have to report back to school/work until Monday.\r\n\r\nSaturday is perhaps the most highly regarded day of the week. Because Sunday follows it (and there is presumably no work or school to attend, for most individuals), everyone is free to stay out (or awake) until late at night, having fun with plans or other leisure-related activities. To be sure, Saturday is generally thought of as a day to partake in hobbies that couldn\'t otherwise be enjoyed during the regular week.\r\n\r\nSunday is the final day of the week, and is used by most as a day of rest. Fewer late-night plans are made on Sundays, compared to Saturdays, as most individuals have to wake up for work or school on Monday morning.',
    questionPairId: 3,
  },
  {
    textLevel: 'A2',
    textChoice: 'Text 2',
    textValue:
      "Letter to a Friend\r\nHi, Fred!\r\n\r\nIt's been a while since we have been in touch. How has your semester been?\r\n\r\nI wanted to send an email update to you let you know how things have been going during my semester abroad here in M\u00E1laga, Spain. I've already been here for six weeks, and I feel like I am finally adapting to the culture. I'm also speaking the language more fluently.\r\n\r\nI arrived during the first week of September. The weather has been very nice. Even though it's October, it's still rather sunny and warm. In fact, I went to the beach and swam in the Mediterranean Sea earlier today.\r\n\r\nI am living with a very welcoming host family. I have my own private bedroom, but we eat breakfast, lunch, and dinner together. On Sundays, we eat a big home-cooked paella for lunch. In Spain, lunch is usually the biggest meal of the day. It's also very common for the people to take a midday nap right after a big meal. I am actually just waking up from my nap right now!\r\n\r\nOn weekdays, I take classes at the local university. There, I met several native Spanish speakers. They have been very kind and patient with me. At first, I struggled to comprehend their Spanish, but now I understand most of our conversations. They have commented that my Spanish has improved a lot since we first met. Now, I am more confident to use the language in other places like stores and restaurants.\r\n\r\nI am so glad that I decided to spend the semester here in Spain. We have an extended weekend coming up, so a group of my friends and I are going to travel to France for four days. It's so easy and inexpensive to travel internationally in Europe. I love it!\r\n\r\nI look forward to hearing from you soon. Like I said, don't hesitate to stay in touch more often. Perhaps you could even come to visit! What do you think?\r\n\r\nBest wishes,\r\nPatrick",
    questionPairId: 4,
  },
  {
    textLevel: 'B1',
    textChoice: 'Text 1',
    textValue:
      'The Statue of Liberty\r\nThe Statue of Liberty, arguably one of New York City\u2019s most iconic symbols, is a popular tourist attraction for first-time visitors to the city. This 150-foot monument was gifted to the United States from France in order to celebrate 100 years of America\u2019s independence. The statue is located on Liberty Island, and it is accessible by taking a ferry from either Battery Park in New York City or Liberty State Park in Jersey City.\r\n\r\nWhen Claire visited the Statue of Liberty for the first time, she instantly admired it as a symbol of freedom. Claire made sure to make reservations before her visit because only 240 people are permitted to climb the staircase to the top of the statue every day. After climbing almost 400 stairs, Claire received spectacular views of the city from the statue\u2019s crown.\r\n\r\nDuring her visit, Claire learned that the Statue of Liberty was not always the color that it is now. She found out that because the statue\u2019s exterior is made of copper, the statue oxidized over time, giving it the greenish appearance it has in present day. When it was first constructed, the statue was the same color as a shiny penny!\r\n\r\nAfter touring the Statue of Liberty, Claire spent the rest of the day in New York City visiting other important monuments and historic landmarks. Claire left New York hoping to have had the time to explore more sites, but she can\u2019t wait to return to the city in the future.',
    questionPairId: 5,
  },
  {
    textLevel: 'B1',
    textChoice: 'Text 2',
    textValue:
      'Jobs and Professions\r\nAs has been the case for many years, jobs, or forms of employment wherein employees perform a service or duty in exchange for financial compensation, play a prominent role in society. Furthermore, all jobs\u2014even those of seemingly little significance\u2014are important, as they simply wouldn\'t exist if their specific responsibilities weren\'t of value to employers (companies or persons that pay others for their work), customers (individuals who pay money for a product or service), and the economy generally.\r\n\r\nTeachers, or educational professionals tasked with helping students understand certain subjects and topics, are especially crucial today. In short, teachers help their students to become qualified for their future careers.\r\n\r\nDoctors, or medical professionals who specialize in providing health-related assistance to patients, are some of the most respected individuals in America and the world. It\'s the responsibility of doctors to help those who feel less-than-stellar to determine the underlying health issue(s) and recommend an effective treatment (or remedy to a disease, disorder, or condition).\r\n\r\nThere are quite a few types of specialty doctors in America (besides MD, which simply means "medical doctor"), all of whom can be referred to simply as "Doctor (Name)." Dentists (mouth/teeth doctors), dermatologists (skin doctors), and psychiatrists (mental-health doctors) are just a few examples of the many different types of doctors.\r\n\r\nAdditionally, nurses are medical professionals who help to administer doctor-ordered treatments to patients.\r\n\r\nPolice officers are law enforcement professionals whose job it is to protect citizens, solve crimes, and assure that rules and regulations are followed. Similarly, firefighters serve the public by responding to fires (and other emergency situations) and using high-tech equipment to extinguish these fires, while bringing any individuals who\'re in danger to safety.\r\n\r\nFarmers maintain fields of crops (or vegetable/fruit plants) and/or collections of animals with the intention of selling these products as food.\r\n\r\nChefs/cooks prepare meals in professional settings, including restaurants, cafeterias, and other venues wherein food and drink are sold, for customers. Chefs are generally experienced in cooking and managing kitchens.\r\n\r\nWaiters bring menus, beverages, meals, and ultimately, the check (or a bill of the foods and drinks purchased in a transaction) to tables in restaurants and other establishments that serve food.\r\n\r\nArtists produce art, or works of creative significance, including music, paintings, drawings, poetry, writing, and more.',
    questionPairId: 6,
  },
  {
    textLevel: 'B2',
    textChoice: 'Text 1',
    textValue:
      'Las Vegas\r\nLast April, John took a trip to Las Vegas, Nevada. Las Vegas is a popular destination in the western portion of the United States. The town is most popular for its casinos, hotels, and exciting nightlife.\r\n\r\nIn downtown Las Vegas, John spent a lot of time on The Strip, which is a 2.5 mile stretch of shopping, entertainment venues, luxury hotels, and fine dining experiences. This is probably the most commonly visited tourist area in the city. The Strip at night looks especially beautiful. All of the buildings light up with bright, neon, eye-catching signs to attract visitor attention.\r\n\r\nA stay in Las Vegas can feel similar to a visit to many popular cities worldwide. Many of the hotels have miniature versions of important international sites and monuments. These famous landmarks include the Eiffel Tower, Venice, and even ancient Rome.\r\n\r\nOne day, John took a side trip outside of the city to visit the Grand Canyon, one of the Seven Wonders of the Natural World. The canyon offers a breathtaking view of Nevada\u2019s ridges and natural landscape. John especially liked the canyon because it was removed from all of the noise and movement in downtown Las Vegas.\r\n\r\nJohn had a great time during his trip to Las Vegas. He did not win a lot of money in the casinos. However, he managed to see a lot of amazing sites during his visit to this city that never sleeps.',
    questionPairId: 7,
  },
  {
    textLevel: 'B2',
    textChoice: 'Text 2',
    textValue:
      "Human body parts and organs\r\nIt goes without saying that humans (mammals identifiable as those that stand upright and are comparatively advanced and capable of detailed thought) have pretty remarkable bodies, given all that they've accomplished. (Furthermore, an especially intelligent human brain produced this text!) To be sure, humans have overcome predators, disease, and all sorts of other obstacles over thousands of years.\r\n\r\nTo fully understand and appreciate these accomplishments, let's take at some of the most well-known parts of the human body!\r\n\r\nThe head, or the spherical body part that contains the brain and rests at the top of the human body, has quite a few individual organs and body parts on it. (It should quickly be mentioned that hair occupies the space on top of the head, and the ears, the organs responsible for hearing, are located on either side of the head.) From top to bottom, the eyebrows, or horizontal strips of hair that can be found above the eye, are the first components of the head. The eyes are below them, and are round, orb-like organs that allow humans to see.\r\n\r\nThe eyes make way for the nose, or an external (sticking-out) organ that plays an important part in the breathing and bacteria-elimination processes. Below that is the mouth, or a wide, cavernous organ that chews food, removes bacteria, helps with breathing, and more. The mouth contains teeth, or small, white-colored, pointed body parts used to chew food, and the tongue, or a red-colored, boneless organ used to chew food and speak.\r\n\r\nThe neck is the long body part that connects the head to the chest (the muscular body part that protects the heart and lungs), and the stomach, or the part of the body that contains food and liquid-processing organs, comes below that.\r\n\r\nThe legs are the long, muscular body parts that allow humans to move from one spot to another and perform a variety of actions. Each leg contains a thigh (a thick, especially muscular body part used to perform strenuous motions; the upper part of the leg) and a calf (thinner, more flexible body part that absorbs the shock associated with movement; the lower part of the leg). Feet can be found at the bottom of legs, and each foot is comprised of five toes, or small appendages that help balance.\r\n\r\nArms are long, powerful body parts that are located on either side of chest, below the shoulders;arms are comprised of biceps (the thicker, more powerful upper portion), and forearms (the thinner, more flexible lower portion). Hands, or small, gripping body parts used for a tremendous number of actions, are at the end of arms. Each hand contains five fingers, or small appendages used to grip objects.\r\n\r\nThe aforementioned shoulders are rounded body parts that aid arms' flexibility. One's back is found on the opposite side of the stomach, and is a flat section of the body that contains important muscles that're intended to protect the lungs and other internal organs, in addition to helping humans perform certain motions and actions.",
    questionPairId: 8,
  },
  {
    textLevel: 'C1',
    textChoice: 'Text 1',
    textValue:
      'The Environment\r\nIn our modern world, there are many factors that place the wellbeing of the planet in jeopardy. While some people have the opinion that environmental problems are just a natural occurrence, others believe that human beings have a huge impact on the environment. Regardless of your viewpoint, take into consideration the following factors that place our environment as well as the planet Earth in danger.\r\n\r\nGlobal warming or climate change is a major contributing factor to environmental damage. Because of global warming, we have seen an increase in melting ice caps, a rise in sea levels, and the formation of new weather patterns. These weather patterns have caused stronger storms, droughts, and flooding in places that they formerly did not occur.\r\n\r\nAir pollution is primarily caused as a result of excessive and unregulated emissions of carbon dioxide into the air. Pollutants mostly emerge from the burning of fossil fuels in addition to chemicals, toxic substances, and improper waste disposal. Air pollutants are absorbed into the atmosphere, and they can cause smog, a combination of smoke and fog, in valleys as well as produce acidic precipitation in areas far away from the pollution source.\r\n\r\nIn many areas, people and local governments do not sustainably use their natural resources. Mining for natural gases, deforestation, and even improper use of water resources can have tremendous effects on the environment. While these strategies often attempt to boost local economies, their effects can lead to oil spills, interrupted animal habitats, and droughts.\r\n\r\nUltimately, the effects of the modern world on the environment can lead to many problems. Human beings need to consider the repercussions of their actions, trying to reduce, reuse, and recycle materials while establishing environmentally sustainable habits. If measures are not taken to protect the environment, we can potentially witness the extinction of more endangered species, worldwide pollution, and a completely uninhabitable planet.',
    questionPairId: 9,
  },
  {
    textLevel: 'C1',
    textChoice: 'Text 2',
    textValue:
      'Spanish Flu Pandemic of 1918\r\nThe deadliest virus in modern history, perhaps of all time, was the 1918 Spanish Flu. It killed about 20 to 50 million people worldwide, perhaps more. The total death toll is unknown because medical records were not kept in many areas.\r\n\r\nThe pandemic hit during World War I and devastated military troops. In the United States, for instance, more servicemen were killed from the flu than from the war itself. The Spanish flu was fatal to a higher proportion of young adults than most flu viruses.\r\n\r\nThe pandemic started mildly, in the spring of 1918, but was followed by a much more severe wave in the fall of 1918. The war likely contributed to the devastating mortality numbers, as large outbreaks occurred in military forces living in close quarters. Poor nutrition and the unsanitary conditions of war camps had an effect.\r\n\r\nA third wave occurred in the winter and spring of 1919, and a fourth, smaller wave occurred in a few areas in spring 1920. Initial symptoms of the flu were typical: sore throat, headache, and fever. The flu often progressed rapidly to cause severe pneumonia and sometimes hemorrhage in the lungs and mucus membranes. A characteristic feature of severe cases of the Spanish Flu was heliotrope cyanosis, where the patient\u2019s face turned blue from lack of oxygen in the cells. Death usually followed within hours or days.\r\n\r\nModern medicine such as vaccines, antivirals, and antibiotics for secondary infections were not available at that time, so medical personnel couldn\u2019t do much more than try to relieve symptoms.\r\n\r\nThe flu ended when it had infected enough people that those who were susceptible had either died or developed immunity.',
    questionPairId: 10,
  },
]

export const QuestionData: Questions[] = [
  {
    questionPairId: 1,
    allQuestions: [
      {
        questionText: 'Where does John Smith go to college?',
        answerOptions: [
          { answerText: 'Berlin', isCorrect: false },
          { answerText: 'Paris', isCorrect: false },
          { answerText: 'New York', isCorrect: true },
          { answerText: 'Boston', isCorrect: false },
        ],
      },
      {
        questionText: "What is John Smith's hardest course?",
        answerOptions: [
          { answerText: 'French', isCorrect: false },
          { answerText: 'English', isCorrect: true },
          { answerText: 'Math', isCorrect: false },
          { answerText: 'Art', isCorrect: false },
        ],
      },
      {
        questionText: 'Who shares a house with John Smith?',
        answerOptions: [
          { answerText: 'Bill, John, and Tom', isCorrect: false },
          { answerText: 'Frank, Tony, and Mike', isCorrect: false },
          { answerText: 'Anna, Margaret, and Tanya', isCorrect: false },
          { answerText: 'Bill, Tony, and Paul', isCorrect: true },
        ],
      },
      {
        questionText: "How old is John Smith's younger brother?",
        answerOptions: [
          { answerText: 'seven', isCorrect: false },
          { answerText: 'eleven', isCorrect: false },
          { answerText: 'thirteen', isCorrect: false },
          { answerText: 'fourteen', isCorrect: true },
        ],
      },
      {
        questionText: "What does John Smith's Mom bring him when they visit?",
        answerOptions: [
          { answerText: 'Candy and ice cream', isCorrect: false },
          { answerText: 'Sweets and candy', isCorrect: true },
          { answerText: 'Fruits and vegetables', isCorrect: false },
          { answerText: 'Flowers and coffee', isCorrect: false },
        ],
      },
    ],
  },
  {
    questionPairId: 2,
    allQuestions: [
      {
        questionText: 'What food was cooked?',
        answerOptions: [
          { answerText: 'Pork', isCorrect: false },
          { answerText: 'Rice', isCorrect: false },
          { answerText: 'Fish', isCorrect: false },
          { answerText: 'Eggs', isCorrect: true },
        ],
      },
      {
        questionText: 'Where did Jack eat the eggs?',
        answerOptions: [
          { answerText: 'In front of the TV', isCorrect: false },
          { answerText: 'At the dining room table', isCorrect: true },
          { answerText: 'In the kitchen', isCorrect: false },
          { answerText: 'In his room', isCorrect: false },
        ],
      },
      {
        questionText: 'How long did the eggs cook?',
        answerOptions: [
          { answerText: '2 minutes', isCorrect: true },
          { answerText: '3 minutes', isCorrect: false },
          { answerText: '5 minutes', isCorrect: false },
          { answerText: '10 minutes', isCorrect: false },
        ],
      },
      {
        questionText: 'What was the chair made of?',
        answerOptions: [
          { answerText: 'Wood', isCorrect: true },
          { answerText: 'Metal', isCorrect: false },
          { answerText: 'Stone', isCorrect: false },
          { answerText: 'We do not know', isCorrect: false },
        ],
      },
      {
        questionText:
          'Jack cooked in a skillet. What is another word for skillet?',
        answerOptions: [
          { answerText: 'Slow cooker', isCorrect: false },
          { answerText: 'Pan', isCorrect: true },
          { answerText: 'Oven', isCorrect: false },
          { answerText: 'Microwave', isCorrect: false },
        ],
      },
    ],
  },
  {
    questionPairId: 3,
    allQuestions: [
      {
        questionText: 'How many days of the week are there?',
        answerOptions: [
          { answerText: 'six', isCorrect: false },
          { answerText: 'three', isCorrect: false },
          { answerText: 'seven', isCorrect: true },
          { answerText: 'five', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the weekend?',
        answerOptions: [
          { answerText: 'Saturday and Sunday', isCorrect: true },
          { answerText: 'Wednesday and Friday', isCorrect: false },
          { answerText: 'Thursday and Sunday', isCorrect: false },
          { answerText: 'Friday and Saturday', isCorrect: false },
        ],
      },
      {
        questionText:
          'Which day of the week is sometimes referred to as "hump day"?',
        answerOptions: [
          { answerText: 'Saturday', isCorrect: false },
          { answerText: 'Thursday', isCorrect: false },
          { answerText: 'Wednesday', isCorrect: true },
          { answerText: 'Tuesday', isCorrect: false },
        ],
      },
      {
        questionText:
          'Which day of the week is perhaps the most exciting, in terms of plans and activities?',
        answerOptions: [
          { answerText: 'Monday', isCorrect: false },
          { answerText: 'Saturday', isCorrect: true },
          { answerText: 'Sunday', isCorrect: false },
          { answerText: 'Wednesday', isCorrect: false },
        ],
      },
      {
        questionText: 'A regular work week begins on which day?',
        answerOptions: [
          { answerText: 'Thursday', isCorrect: false },
          { answerText: 'Sunday', isCorrect: false },
          { answerText: 'Friday', isCorrect: false },
          { answerText: 'Monday', isCorrect: true },
        ],
      },
    ],
  },
  {
    questionPairId: 4,
    allQuestions: [
      {
        questionText: 'Why is Patrick writing to Fred?',
        answerOptions: [
          { answerText: 'To give Fred travel advice', isCorrect: false },
          { answerText: 'To update Fred about life abroad', isCorrect: true },
          { answerText: 'To wish Fred a happy birthday', isCorrect: false },
          { answerText: 'To offer Fred a job in Spain', isCorrect: false },
        ],
      },
      {
        questionText: 'How long has Patrick been out of the country?',
        answerOptions: [
          { answerText: 'One week', isCorrect: false },
          { answerText: 'One month', isCorrect: false },
          { answerText: 'Six weeks', isCorrect: true },
          { answerText: 'Six months', isCorrect: false },
        ],
      },
      {
        questionText: 'Based on the letter, Málaga is most likely located:',
        answerOptions: [
          { answerText: 'On the coast', isCorrect: true },
          { answerText: 'In the mountains', isCorrect: false },
          { answerText: 'In a valley', isCorrect: false },
          { answerText: 'In Madrid, the capital', isCorrect: false },
        ],
      },
      {
        questionText: 'The best definition of "paella” is:',
        answerOptions: [
          { answerText: 'A frozen beverage', isCorrect: false },
          { answerText: 'A common meal', isCorrect: true },
          { answerText: 'A sweet dessert', isCorrect: false },
          { answerText: 'A small snack', isCorrect: false },
        ],
      },
      {
        questionText: 'What does Patrick do from Monday to Friday?',
        answerOptions: [
          { answerText: 'Offer English lessons', isCorrect: false },
          { answerText: 'Go out with friends', isCorrect: false },
          { answerText: 'Travel internationally', isCorrect: false },
          { answerText: 'Take college classes', isCorrect: true },
        ],
      },
      {
        questionText:
          'Where does Patrick plan on traveling during the extended weekend?',
        answerOptions: [
          { answerText: 'Spain', isCorrect: false },
          { answerText: 'France', isCorrect: true },
          { answerText: 'England', isCorrect: false },
          { answerText: 'Germany', isCorrect: false },
        ],
      },
    ],
  },
  {
    questionPairId: 5,
    allQuestions: [
      {
        questionText: 'Who gifted the Statue of Liberty to the United States?',
        answerOptions: [
          { answerText: 'The British', isCorrect: false },
          { answerText: 'The French', isCorrect: true },
          { answerText: 'The Spanish', isCorrect: false },
          { answerText: 'The Dutch', isCorrect: false },
        ],
      },
      {
        questionText: 'What was the Statue of Liberty intended to celebrate?',
        answerOptions: [
          {
            answerText: 'Open immigration to the United States',
            isCorrect: false,
          },
          { answerText: 'The end of the Civil War', isCorrect: false },
          {
            answerText: 'Economic recovery from the Great Depression',
            isCorrect: false,
          },
          { answerText: 'A century of American independence', isCorrect: true },
        ],
      },
      {
        questionText:
          "How many people are permitted to climb the statue's stairs per day?",
        answerOptions: [
          { answerText: '100', isCorrect: false },
          { answerText: '150', isCorrect: false },
          { answerText: '240', isCorrect: true },
          { answerText: '400', isCorrect: false },
        ],
      },
      {
        questionText:
          'From which part of the statue did Claire receive spectacular views of the city?',
        answerOptions: [
          { answerText: 'The mouth', isCorrect: false },
          { answerText: 'The nose', isCorrect: false },
          { answerText: 'The eyes', isCorrect: false },
          { answerText: 'The crown', isCorrect: true },
        ],
      },
      {
        questionText: 'Why has the Statue of Liberty changed color over time?',
        answerOptions: [
          { answerText: 'Its copper exterior oxidized.', isCorrect: true },
          {
            answerText: 'It was painted green during restorations.',
            isCorrect: false,
          },
          {
            answerText: 'The statue is poorly maintained by the city.',
            isCorrect: false,
          },
          {
            answerText: "New York's poor air quality has eroded the statue.",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    questionPairId: 6,
    allQuestions: [
      {
        questionText: 'Jobs are best defined as which of the following?',
        answerOptions: [
          { answerText: 'Activities used to pass the time', isCorrect: false },
          { answerText: 'Activities used to have fun', isCorrect: false },
          {
            answerText:
              'Forms of employment wherein employees perform a service or duty in exchange for financial compensation',
            isCorrect: true,
          },
          {
            answerText: 'There is no exact definition of jobs',
            isCorrect: false,
          },
        ],
      },
      {
        questionText: 'Which of the following are types of doctors?',
        answerOptions: [
          { answerText: 'Dermatologist', isCorrect: false },
          { answerText: 'Nurse', isCorrect: false },
          { answerText: 'Dentist', isCorrect: false },
          { answerText: 'A and C', isCorrect: true },
        ],
      },
      {
        questionText: 'Chefs are culinary professionals who:',
        answerOptions: [
          {
            answerText: 'Prepare foods in commercial settings',
            isCorrect: false,
          },
          {
            answerText: 'Respond to the preferences of diners',
            isCorrect: false,
          },
          { answerText: 'A and B', isCorrect: true },
          { answerText: 'Serve food to diners', isCorrect: false },
        ],
      },
      {
        questionText: 'Which of the following is not a type of art?',
        answerOptions: [
          { answerText: 'Scientific reports', isCorrect: true },
          { answerText: 'Writing', isCorrect: false },
          { answerText: 'Paintings', isCorrect: false },
          { answerText: 'Music', isCorrect: false },
        ],
      },
      {
        questionText:
          'Which of the following professionals are responsible for helping individuals to learn specific information?',
        answerOptions: [
          { answerText: 'Police officers', isCorrect: false },
          { answerText: 'Teachers/professors', isCorrect: true },
          { answerText: 'Doctors', isCorrect: false },
          { answerText: 'Farmers', isCorrect: false },
        ],
      },
    ],
  },
  {
    questionPairId: 7,
    allQuestions: [
      {
        questionText: 'When did John travel to Las Vegas?',
        answerOptions: [
          { answerText: 'Yesterday', isCorrect: false },
          { answerText: 'Last weekend', isCorrect: false },
          { answerText: 'Last spring', isCorrect: true },
          { answerText: 'Last summer', isCorrect: false },
        ],
      },
      {
        questionText:
          'What is an activity that a tourist cannot do on The Strip?',
        answerOptions: [
          { answerText: 'Eat', isCorrect: false },
          { answerText: 'Stay overnight', isCorrect: false },
          { answerText: 'Shop', isCorrect: false },
          { answerText: 'Visit the Grand Canyon', isCorrect: true },
        ],
      },
      {
        questionText:
          'Which best describes the purpose of the Las Vegas Strip?',
        answerOptions: [
          { answerText: 'It is a 2.5 mile stretch.', isCorrect: false },
          {
            answerText: 'It offers a lot of activities for tourists.',
            isCorrect: true,
          },
          { answerText: 'There are too many neon lights.', isCorrect: false },
          { answerText: 'It keeps tourists safe.', isCorrect: false },
        ],
      },
      {
        questionText: 'Explain why John liked his visit to the Grand Canyon.',
        answerOptions: [
          {
            answerText:
              'The setting was very different from downtown Las Vegas.',
            isCorrect: true,
          },
          {
            answerText: 'It is one of the Seven Natural Wonders of the World.',
            isCorrect: false,
          },
          {
            answerText: 'John does not enjoy spending time in cities.',
            isCorrect: false,
          },
          {
            answerText: 'The Grand Canyon offers a breathtaking view.',
            isCorrect: false,
          },
        ],
      },
      {
        questionText:
          'What does it mean that Las Vegas is a "city that never sleeps?\u201D',
        answerOptions: [
          {
            answerText: 'A lot of people here have sleep disorders.',
            isCorrect: false,
          },
          {
            answerText: 'There is too much noise here for people to sleep.',
            isCorrect: false,
          },
          {
            answerText: 'Las Vegas offers exciting activities at all hours.',
            isCorrect: true,
          },
          {
            answerText: 'The neon lights keep people awake at night.',
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    questionPairId: 8,
    allQuestions: [
      {
        questionText:
          'Which of the following body parts is not located on the head or face?',
        answerOptions: [
          { answerText: 'Eye', isCorrect: false },
          { answerText: 'Nose', isCorrect: false },
          { answerText: 'Mouth', isCorrect: false },
          { answerText: 'Leg', isCorrect: true },
        ],
      },
      {
        questionText: 'Legs are comprised of which of the following?',
        answerOptions: [
          { answerText: 'Feet', isCorrect: false },
          { answerText: 'Calves', isCorrect: false },
          { answerText: 'Thighs', isCorrect: false },
          { answerText: 'All of the above', isCorrect: true },
        ],
      },
      {
        questionText: 'How many toes and fingers are on each foot/hand?',
        answerOptions: [
          { answerText: 'Ten', isCorrect: false },
          { answerText: 'Five', isCorrect: true },
          { answerText: 'Four', isCorrect: false },
          { answerText: 'Two', isCorrect: false },
        ],
      },
      {
        questionText:
          'The part of the body that contains important organs that aid digestion is:',
        answerOptions: [
          { answerText: 'The back', isCorrect: false },
          { answerText: 'The head', isCorrect: false },
          { answerText: 'The stomach', isCorrect: true },
          { answerText: 'The neck', isCorrect: false },
        ],
      },
      {
        questionText:
          'Which of the following is not a body part/organ on the human body?',
        answerOptions: [
          { answerText: 'Quilt', isCorrect: true },
          { answerText: 'Neck', isCorrect: false },
          { answerText: 'Head', isCorrect: false },
          { answerText: 'Arm', isCorrect: false },
        ],
      },
    ],
  },
  {
    questionPairId: 9,
    allQuestions: [
      {
        questionText: "The text's introduction presents:",
        answerOptions: [
          {
            answerText: 'All of the factors that damage the environment',
            isCorrect: false,
          },
          {
            answerText: 'Scientific support regarding global warming',
            isCorrect: false,
          },
          {
            answerText: 'Questions about the effects of environmental problems',
            isCorrect: false,
          },
          {
            answerText: 'Two opinions about environmental problems',
            isCorrect: true,
          },
        ],
      },
      {
        questionText:
          'Which term means the same thing as "global warming?\u201D',
        answerOptions: [
          { answerText: 'Air pollution', isCorrect: false },
          { answerText: 'Biodiversity', isCorrect: false },
          { answerText: 'Climate change', isCorrect: true },
          { answerText: 'Deforestation', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the primary cause of air pollution?',
        answerOptions: [
          { answerText: 'Uncontrollable forest fires', isCorrect: false },
          { answerText: 'Smog formation in valleys', isCorrect: false },
          {
            answerText: 'Heavy amounts of acid precipitation',
            isCorrect: true,
          },
          {
            answerText: 'Excessive carbon dioxide emissions',
            isCorrect: false,
          },
        ],
      },
      {
        questionText:
          'Which is a logical effect of overusing the natural water supply?',
        answerOptions: [
          { answerText: 'Deforestation', isCorrect: false },
          { answerText: 'Droughts', isCorrect: true },
          { answerText: 'Oil spills', isCorrect: false },
          { answerText: 'Flooding', isCorrect: false },
        ],
      },
      {
        questionText:
          'All of the following are effects of environmental problems except:',
        answerOptions: [
          { answerText: 'Space travel', isCorrect: true },
          { answerText: 'Animal extinction', isCorrect: false },
          { answerText: 'Worldwide pollution', isCorrect: false },
          { answerText: 'An uninhabitable planet', isCorrect: false },
        ],
      },
      {
        questionText: 'Which is the best title for the article?',
        answerOptions: [
          { answerText: 'How to Prevent Global Warming', isCorrect: false },
          { answerText: 'Top Environmental Concerns', isCorrect: true },
          { answerText: 'Water Conservation Strategies', isCorrect: false },
          { answerText: 'Protecting Endangered Species', isCorrect: false },
        ],
      },
    ],
  },
  {
    questionPairId: 10,
    allQuestions: [
      {
        questionText: 'Which pandemic is the deadliest in modern history?',
        answerOptions: [
          {
            answerText: 'The bubonic plague in the 14th century',
            isCorrect: false,
          },
          {
            answerText: 'The Philadelphia yellow fever epidemic in 1793',
            isCorrect: false,
          },
          { answerText: 'The Spanish Flu in 1918', isCorrect: true },
          { answerText: 'The Covid-19 coronavirus in 2020', isCorrect: false },
        ],
      },
      {
        questionText: 'The Spanish Flu pandemic occurred during which war?',
        answerOptions: [
          { answerText: 'The French Revolution', isCorrect: false },
          { answerText: 'The Spanish-American War', isCorrect: false },
          { answerText: 'World War I', isCorrect: true },
          { answerText: 'World War II', isCorrect: false },
        ],
      },
      {
        questionText: 'Where did the Spanish flu originate?',
        answerOptions: [
          { answerText: 'Spain', isCorrect: false },
          { answerText: 'United States', isCorrect: false },
          { answerText: 'Italy', isCorrect: false },
          { answerText: 'That information is not provided', isCorrect: true },
        ],
      },
      {
        questionText: 'Why are total deaths for the Spanish Flu not known?',
        answerOptions: [
          { answerText: 'No one cared because of the war', isCorrect: false },
          {
            answerText: 'Many areas did not keep medical records',
            isCorrect: true,
          },
          {
            answerText: 'Most medical records were destroyed in the war',
            isCorrect: false,
          },
          {
            answerText: 'No one wants to know how bad it was',
            isCorrect: false,
          },
        ],
      },
      {
        questionText: 'When was the first wave of the Spanish Flu pandemic?',
        answerOptions: [
          { answerText: 'Spring 1918', isCorrect: true },
          { answerText: 'Summer 1918', isCorrect: false },
          { answerText: 'Fall 1918', isCorrect: false },
          { answerText: 'Winter 1918', isCorrect: false },
        ],
      },
      {
        questionText:
          'What contributed to deaths from the flu in military personnel?',
        answerOptions: [
          { answerText: 'Close quarters', isCorrect: false },
          { answerText: 'Poor nutrition', isCorrect: false },
          { answerText: 'Unsanitary conditions', isCorrect: false },
          { answerText: 'All of the above', isCorrect: true },
        ],
      },
      {
        questionText:
          'What is a characteristic feature of serious cases of the Spanish Flu?',
        answerOptions: [
          { answerText: 'Coma', isCorrect: false },
          { answerText: 'Face turning blue', isCorrect: true },
          { answerText: 'Liver failure', isCorrect: false },
          { answerText: 'Extremely high fever', isCorrect: false },
        ],
      },
      {
        questionText: 'What caused the Spanish Flu pandemic to end?',
        answerOptions: [
          { answerText: 'They created a vaccine for it', isCorrect: false },
          { answerText: 'Improved medical care', isCorrect: false },
          {
            answerText: 'The end of the war caused better conditions',
            isCorrect: false,
          },
          {
            answerText:
              'Those who were susceptible had either died or were immune',
            isCorrect: true,
          },
        ],
      },
    ],
  },
]

export const navMenu = [
  {
    id: 1,
    name: 'Train',
    link: '/training',
  },
  {
    id: 2,
    name: 'Guide',
    link: '/guide',
  },
  {
    id: 3,
    name: 'Profile',
    link: '/profile',
  },
]

export const homeMenu = [
  {
    id: 1,
    optionName: 'Reading Guides',
    description: 'Lihat panduan membaca cepat',
    navitgateTo: '/guide',
    buttonIcon: <BiBookOpen size={24} className="ml-2" />,
  },
  {
    id: 2,
    optionName: 'Profile',
    description: 'Lihat profile dan progres latihan',
    navitgateTo: '/profile',
    buttonIcon: <BiUser size={24} className="ml-2" />,
  },
  {
    id: 3,
    optionName: 'Training History',
    description: 'Lihat riwayat latihan',
    navitgateTo: '/history',
    buttonIcon: <BiHistory size={24} className="ml-2" />,
  },
  {
    id: 4,
    optionName: 'Logout',
    description: 'Keluar dari akun',
    navitgateTo: '/',
    buttonIcon: <BiLogOut size={24} className="ml-2" />,
  },
]

export const trainingMenu = [
  {
    id: 1,
    optionName: 'Normal Mode',
    description:
      'Berlatih membaca cepat dengan panduan highlight kata dan kecepatan WPM tetap',
    info: 'Training with assisted WPM speed',
    navigateTo: '/training/normal',
  },
  {
    id: 2,
    optionName: 'Blind Mode',
    description: 'Berlatih membaca cepat dengan kecepatan WPM murni',
    info: 'Training with pure WPM speed',
    navigateTo: '/training/blind',
  },
  {
    id: 3,
    optionName: 'Custom Mode',
    description: 'Berlatih membaca cepat menggunakan teks bebas',
    info: 'Training with custom text input',
    navigateTo: '/training/custom',
  },
]

export const guidesMenu = [
  {
    id: '1',
    optionName: 'Fiksasi dan Saccade',
    definition1: 'Fiksasi',
    definition2: 'Saccade',
    description1:
      'Kemampuan mata dalam berhenti dan memfokuskan pandangan pada suatu titik.',
    description2:
      'Gerakan mata yang cepat yang menggeser pusat pandangan dari satu area ke area lainnya.',
    tips: [
      {
        tip: 'Ekor mata kita dapat melihat lebih dari 1 kata setiap fiksasinya.',
      },
      {
        tip: 'Berlatih menambah jumlah kata yang dibaca sekaligus dengan memanfaatkan penglihatan tepi (peripheral vision).',
      },
      {
        tip: 'Mengontrol pola saccade dapat membantu mengurangi gerakan mata yang tidak efisien.',
      },
    ],
    image: media_1,
    referensi: [
      'https://eyewiki.aao.org/Saccade#:~:text=A%20saccade%20is%20a%20rapid,horizontal%2C%20vertical%2C%20or%20oblique.',
    ],
  },
  {
    id: '2',
    optionName: 'Regresi / Backtracking',
    definition1: 'Regresi',
    definition2: null,
    description1:
      'Membaca kembali kata yang baru saja dibaca. Biasanya dilakukan ketika pembaca memastikan bahwa apa yang baru saja dibaca itu benar. Regresi dapat menyebabkan pembaca untuk kehilangan "flow" atau ritme saat membaca.',
    description2: null,
    tips: [
      {
        tip: 'Regresi dalam membaca sebaiknya dihindari dan hanya dilakukan bila sangat diperlukan saja untuk memahami suatu kalimat yang rumit. (contoh: teks ilmiah yang memperlihatkan penggunaan rumus matematis)',
      },
      {
        tip: 'Mengurangi regresi dapat dilakukan dengan bantuan sebuah pointer atau penunjuk (dengan jari, pena atau kursor).',
      },
      {
        tip: null,
      },
    ],
    image: media_2,
    referensi: [
      'https://www.aje.com/en/arc/tips-for-reading-more-quickly/#:~:text=Regression%20is%20the%20unnecessary%20re,that%20you%20read%20something%20right.',
      'https://forcesofhabit.com/speed-reading/',
    ],
  },
  {
    id: '3',
    optionName: 'Subvokalisasi',
    definition1: 'Subvokalisasi',
    definition2: null,
    description1:
      'Keadaan dimana pembaca mengartikulasikan/mengucapkan kata dalam pikiran, memberikan gambaran terkait bunyi dari kata saat sedang dibaca. Biasanya, subvokalisasi adalah bagian yang tidak terpisahkan dari kegiatan membaca dan memahami sebuah kata.',
    description2: null,
    tips: [
      {
        tip: 'Membaca dan memahami konteks bacaan dengan kompeten dan menghemat penggunaan subvokalisasi.',
      },
      {
        tip: 'Mendistraksikan diri dengan membaca sambil mendengarkan suara lain atau musik instrumental.',
      },
      {
        tip: 'Menggunakana teknik scan & read. Membaca dengan meringkas kalimat utuh dan mengambil kata intinya saja. (mempermudah pemahaman konteks kalimat)',
      },
    ],
    image: media_3,
    referensi: [
      'https://irisreading.com/speed-reading-tips-5-ways-to-minimize-subvocalization',
      'https://www.myharvardclassics.com/articles/20131231',
    ],
  },
]

export const loremPlaceholder = [
  {
    loremLong:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    loremShort:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,'",
  },
]
