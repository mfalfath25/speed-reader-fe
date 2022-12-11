import { BiBookOpen, BiHistory, BiLogOut, BiUser } from 'react-icons/bi'
import { media_1, media_2, media_3 } from '../assets/guides'
import { Question, Questions } from '../types/model'

export const titles = [
  { path: '/', title: 'Home' },
  { path: '/login', title: 'Login' },
  { path: '/register', title: 'Register' },
  { path: '/guide', title: 'Reading Guides' },
  { path: '/history', title: 'Training History' },
  { path: '/profile', title: 'Profile' },
  // { path: '/profile/edit', title: 'Edit Profile' },
  // { path: '/profile/progress', title: 'My Progress' },
  { path: '/training', title: 'Training' },
  { path: '/training/settings', title: 'Visual Settings' },
  { path: '/training/normal', title: 'Normal Mode' },
  { path: '/training/normal/simulate', title: 'Normal Mode Training' },
  { path: '/training/normal/simulate/comprehension', title: 'Comprehension Test' },
  { path: '/training/normal/result', title: 'Training Result' },
  { path: '/training/blind', title: 'Blind Mode' },
  { path: '/training/blind/simulate', title: 'Blind Mode Training' },
  { path: '/training/blind/simulate/comprehension', title: 'Comprehension Test' },
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
  { label: 'Text 3', value: 'Text 3' },
]

export const textData = [
  {
    textLevel: 'A1',
    textChoice: 'Text 1',
    textValue: 'A1 T1 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    questionPairId: 1,
  },
  {
    textLevel: 'A1',
    textChoice: 'Text 2',
    textValue: 'A1 T2 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    questionPairId: 2,
  },
  {
    textLevel: 'A1',
    textChoice: 'Text 3',
    textValue: 'A1 T3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    questionPairId: 3,
  },
  {
    textLevel: 'A2',
    textChoice: 'Text 1',
    textValue: 'A2 T1 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    questionPairId: 4,
  },
  {
    textLevel: 'A2',
    textChoice: 'Text 2',
    textValue: 'A2 T2 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    questionPairId: 5,
  },
  {
    textLevel: 'A2',
    textChoice: 'Text 3',
    textValue: 'A2 T3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    questionPairId: 6,
  },
  {
    textLevel: 'B1',
    textChoice: 'Text 1',
    textValue: 'B1 T1 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    questionPairId: 7,
  },
  {
    textLevel: 'B1',
    textChoice: 'Text 2',
    textValue: 'B2 T2 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    questionPairId: 8,
  },
  {
    textLevel: 'B1',
    textChoice: 'Text 3',
    textValue: 'B3 T3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    questionPairId: 9,
  },
]

export const QuestionData: Questions[] = [
  {
    questionPairId: 1,
    allQuestions: [
      {
        questionText: 'What is the capital of France?',
        answerOptions: [
          { answerText: 'New York', isCorrect: false },
          { answerText: 'London', isCorrect: false },
          { answerText: 'Paris', isCorrect: true },
          { answerText: 'Dublin', isCorrect: false },
        ],
      },
      {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
          { answerText: 'Elon Musk', isCorrect: true },
          { answerText: 'Jeff Bezos', isCorrect: false },
          { answerText: 'Bill Gates', isCorrect: false },
          { answerText: 'Tony Stark', isCorrect: false },
        ],
      },
      {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
          { answerText: 'Apple', isCorrect: true },
          { answerText: 'Intel', isCorrect: false },
          { answerText: 'Amazon', isCorrect: false },
          { answerText: 'Microsoft', isCorrect: false },
        ],
      },
      {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
          { answerText: '1', isCorrect: false },
          { answerText: '4', isCorrect: false },
          { answerText: '6', isCorrect: false },
          { answerText: '7', isCorrect: true },
        ],
      },
    ],
  },
  {
    questionPairId: 2,
    allQuestions: [
      {
        questionText: 'What is the capital of France?',
        answerOptions: [
          { answerText: 'New York', isCorrect: false },
          { answerText: 'London', isCorrect: false },
          { answerText: 'Paris', isCorrect: true },
          { answerText: 'Dublin', isCorrect: false },
        ],
      },
      {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
          { answerText: 'Elon Musk', isCorrect: true },
          { answerText: 'Jeff Bezos', isCorrect: false },
          { answerText: 'Bill Gates', isCorrect: false },
          { answerText: 'Tony Stark', isCorrect: false },
        ],
      },
      {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
          { answerText: 'Apple', isCorrect: true },
          { answerText: 'Intel', isCorrect: false },
          { answerText: 'Amazon', isCorrect: false },
          { answerText: 'Microsoft', isCorrect: false },
        ],
      },
      {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
          { answerText: '1', isCorrect: false },
          { answerText: '4', isCorrect: false },
          { answerText: '6', isCorrect: false },
          { answerText: '7', isCorrect: true },
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
    optionName: 'Normal Test',
    description: 'Latih kecepatan membaca dengan dipandu penunjuk kata dan kecepatan WPM tetap',
    info: 'Training with assisted WPM speed',
    navigateTo: '/training/normal',
  },
  {
    id: 2,
    optionName: 'Blind Test',
    description: 'Latih kecepatan membaca dengan kecepatan WPM murni.',
    info: 'Training with pure WPM speed',
    navigateTo: '/training/blind',
  },
  {
    id: 3,
    optionName: 'Custom Test',
    description: 'Simulasi membaca cepat menggunakan input dan pengaturan teks kustom sendiri.',
    info: 'Training with custom text input',
    navigateTo: '/training/custom',
  },
]

export const guidesMenu = [
  {
    id: 1,
    optionName: 'Fiksasi dan Saccade',
    definition1: 'Fiksasi',
    definition2: 'Saccade',
    description1: 'Kemampuan mata dalam berhenti dan memfokuskan pandangan pada suatu titik',
    description2: 'Gerakan mata yang cepat di antara titik fiksasi.',
    tips: [
      {
        tip: 'Ekor mata kita dapat melihat lebih dari 1 kata setiap fiksasinya.',
      },
      {
        tip: 'Membaca dengan lebih dari 1 kata setiap kali fiksasi dengan memanfaatkan penglihatan tepi (peripheral vision).',
      },
      {
        tip: null,
      },
    ],
    image: media_1,
  },
  {
    id: 2,
    optionName: 'Regresi / Backtracking',
    definition1: 'Regresi',
    definition2: null,
    description1: 'Membaca kembali kata yang baru saja dibaca.',
    description2: null,
    tips: [
      {
        tip: 'Regresi dalam membaca sebaiknya dihindari dan hanya dilakukan bila sangat diperlukan saja untuk memahami suatu kalimat penting.',
      },
      {
        tip: 'Mengurangi regresi dapat dilakukan dengan bantuan sebuah pointer atau penunjuk (dengan jari, pena atau kursor).',
      },
      {
        tip: null,
      },
    ],
    image: media_2,
  },
  {
    id: 3,
    optionName: 'Subvokalisasi',
    definition1: 'Subvokalisasi',
    definition2: null,
    description1: 'Keadaan dimana pembaca membaca kembali kata atau frasa dalam pikiran. ',
    description2: null,
    tips: [
      {
        tip: 'Membaca dan memahami konteks bacaan dapat dilakukan tanpa bantuan subvokalisasi dengan menerapkan silent reading.',
      },
      {
        tip: 'Mendistraksikan diri dengan membaca sambil mendengarkan suara lain atau musik instrumental.',
      },
      {
        tip: 'Menggunakana teknik scan & read. Membaca dengan meringkas kalimat utuh dan mengambil kata intinya saja.',
      },
    ],
    image: media_3,
  },
]

export const ColorPreset = [
  {
    id: 1,
    name: 'B',
    hex: '#000000',
  },
  {
    id: 2,
    name: 'R',
    hex: '#EF3E35',
  },
  {
    id: 3,
    name: 'G',
    hex: '#55B949',
  },
  {
    id: 4,
    name: 'B',
    hex: '#057AFF',
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
