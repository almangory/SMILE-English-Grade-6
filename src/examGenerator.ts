import { SMILE_UNITS } from "./smileData";
import { UnitItem, Lesson, WordItem } from "./types";

export interface ExamPassage {
  title: string;
  text: string;
  unitId: number;
  questions: Array<{
    question: string;
    answer: string;
    options?: string[];
    isTrueFalse?: boolean;
    correctTF?: "True" | "False";
  }>;
}

export interface SpellingQuestion {
  word: string;
  clue: string;
  gapped: string; // e.g. "n _ r s _"
  unitId: number;
}

export interface GrammarQuestion {
  question: string;
  options: string[];
  correct: string;
  unitId: number;
}

export interface WritingQuestion {
  jumbled: string;
  ordered: string;
  unitId: number;
}

export interface ExamPaper {
  id: string;
  passage: ExamPassage;
  spelling: SpellingQuestion[];
  vocabMatching: Array<{ word: string; definitionOrSentence: string }>;
  grammar: GrammarQuestion[];
  writing: WritingQuestion[];
}

// Pre-defined exam passages based strictly on SMILE Book 6 lessons
const PASSAGES: ExamPassage[] = [
  // --- UNIT 1 ---
  {
    title: "The Secretary Bird: Sudan's Emblem",
    text: "The secretary bird is the official emblem of Sudan, and Sudanese people like these birds. They are large and beautiful birds that live in Sudan and neighbouring countries. Some secretary birds are one metre and thirty centimetres tall. They have got very long legs, so they can run fast across the ground to catch snakes, rats, and other small animals. Young birds have got yellow faces, but adult secretary birds have got red faces.",
    unitId: 1,
    questions: [
      { question: "What is the official emblem of Sudan?", answer: "The secretary bird is the emblem of Sudan." },
      { question: "Why can secretary birds run fast across the ground?", answer: "Because they have got very long legs." },
      { question: "Young secretary birds have got red faces.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "Secretary birds eat snakes and small animals.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },
  {
    title: "Sudan Independence Day 1956",
    text: "On the first of January, 1956, Sudan became an independent country. It was a sunny and beautiful day for all Sudanese people. Prime Minister Ismail Al-Azhari raised the new Sudanese flag. Thousands of men, women and children filled the streets of Khartoum. People were clapping and smiling, and children were waving flags and cheering happily.",
    unitId: 1,
    questions: [
      { question: "When did Sudan become an independent country?", answer: "On the first of January, 1956." },
      { question: "Who raised the Sudanese flag on Independence Day?", answer: "Prime Minister Ismail Al-Azhari." },
      { question: "The weather in Khartoum was very cold and rainy.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "Children were waving flags and cheering in the streets.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },

  // --- UNIT 2 ---
  {
    title: "Our Strong Heart and Body Numbers",
    text: "An adult human heart weighs about 300 grams. It is very strong and vital for our life. Our heart makes about a hundred thousand beats every twenty-four hours. It pumps and sends blood all around our body and back to our heart in only 20 seconds. We also have 32 teeth in our mouth and 206 bones in our skeleton.",
    unitId: 2,
    questions: [
      { question: "How much does an adult heart weigh?", answer: "It weighs about 300 grams." },
      { question: "How many beats does our heart make every twenty-four hours?", answer: "About 100,000 beats." },
      { question: "We have got forty teeth in our mouth.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "The heart pumps blood around the body in twenty seconds.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },
  {
    title: "The Clever Thirsty Crow",
    text: "One hot summer day, a crow was very thirsty and flew looking for water. She saw a water jar in a field and landed next to it. There was a little water in the bottom of the jar, but her beak could not reach it. The clever crow looked around and saw small stones on the ground. She dropped the stones one by one into the jar. Little by little, the water rose to the top and the crow drank happily.",
    unitId: 2,
    questions: [
      { question: "Why did the crow land next to the jar?", answer: "Because she was thirsty and wanted some water." },
      { question: "What did the crow drop into the jar?", answer: "She dropped small stones one by one into the jar." },
      { question: "The crow was able to reach the water immediately.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "The water rose up when the crow dropped stones into the jar.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },

  // --- UNIT 3 ---
  {
    title: "Leonardo da Vinci: Artist and Inventor",
    text: "Leonardo da Vinci was born in Italy in 1452. When he was a boy, he was outside all the time studying birds, animals and plants carefully. As an adult, he was a world-famous artist who painted wonderful pictures. He was also a genius inventor who designed early ideas for planes, parachutes, and helicopters by watching how birds fly through the air.",
    unitId: 3,
    questions: [
      { question: "Where was Leonardo da Vinci born?", answer: "He was born in Italy in 1452." },
      { question: "How did Leonardo think of the idea of planes?", answer: "By watching how birds fly through the air." },
      { question: "Leonardo was only an artist and never designed machines.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "Leonardo studied birds, animals and plants carefully.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },
  {
    title: "Irrigation Along the River Nile",
    text: "Farmers near the River Nile water their fields in different ways. For thousands of years, Sudanese farmers used a shadoof or a saqia. A saqia is pulled by animals like donkeys or cows to lift water into canals. Today, many farmers use motor pumps. Motor pumps are much faster than saqias, but saqias are cleaner, quieter and cheaper to use.",
    unitId: 3,
    questions: [
      { question: "What animals pull a traditional saqia?", answer: "Animals like donkeys or cows pull the saqia." },
      { question: "What are the advantages of a saqia compared to a motor pump?", answer: "A saqia is cleaner, quieter and cheaper to use." },
      { question: "Motor pumps are slower than shadoofs.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "Sudanese farmers have used saqias for thousands of years.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },

  // --- UNIT 4 ---
  {
    title: "The Amazing Pyramids of Meroë",
    text: "Sudan has got amazing pyramids that were built as tombs for kings and queens of Kush. The Kingdom of Kush started about 2,700 years ago and became very rich from trade in iron. There are about 220 pyramids in Sudan, while Egypt has got 118. The pyramids of Meroë are located about 200 kilometres north of Khartoum on the River Nile.",
    unitId: 4,
    questions: [
      { question: "How many pyramids are there in Sudan?", answer: "There are about 220 pyramids in Sudan." },
      { question: "Where is the ancient city of Meroë located?", answer: "About 200 kilometres north of Khartoum on the River Nile." },
      { question: "Egypt has more pyramids than Sudan.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "Kush became rich from its trade in iron.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },
  {
    title: "The Stone City of Petra",
    text: "Petra is an ancient historical stone city in the desert of Jordan. Bedouin Arabs built Petra about 2,000 years ago as a rich centre of trade. Instead of building with bricks, they cut directly into the sides of sandstone mountains and carved over 800 buildings, tombs, and caves. Today, thousands of visitors explore this wonderful wonder on foot or by camel.",
    unitId: 4,
    questions: [
      { question: "Who built the ancient city of Petra in Jordan?", answer: "Bedouin Arabs built Petra about 2,000 years ago." },
      { question: "How did the Bedouin Arabs build houses and tombs in Petra?", answer: "They cut directly into the sides of the mountains." },
      { question: "Petra has got only two buildings.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "Tourists can ride camels to explore Petra.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },

  // --- UNIT 5 ---
  {
    title: "A School Trip to Sabaloka Cataract",
    text: "On January 10th, Fatma's class went on an exciting school trip to Sabaloka on the River Nile. The pupils met early at the school and boarded the bus before seven o'clock. They stopped on the way for breakfast, drank tea, and sang songs. In Sabaloka, they admired the majestic rocks, went on a boat tour on the river, and enjoyed a delicious picnic under the shade of trees.",
    unitId: 5,
    questions: [
      { question: "Where did Fatma's class go on their school trip?", answer: "They went to Sabaloka Cataract on the River Nile." },
      { question: "What did the pupils do in Sabaloka?", answer: "They saw the rocks, went on a boat tour, and had a picnic under trees." },
      { question: "The bus departed after twelve o'clock.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "The pupils had a boat tour on the River Nile.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },
  {
    title: "The Birds' Flying Competition",
    text: "One day the birds held a competition to determine the best flyer. The falcon was the strongest bird and flew high into the sky, confident of winning. But a clever little wren sat silently on the falcon's back. When the falcon grew tired, the wren flew off and flew even higher! Later, when a cat caught the wren, she sang a loud song for help, and all the forest birds rushed to save her.",
    unitId: 5,
    questions: [
      { question: "Why did the birds have a competition?", answer: "To find the best flyer of all the birds." },
      { question: "How did the wren defeat the falcon in the competition?", answer: "She sat on the falcon's back and flew higher when he was tired." },
      { question: "The falcon won the flying competition.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "The other birds heard the wren's song and rescued her from the cat.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },

  // --- UNIT 6 ---
  {
    title: "Healthy Habits and Balanced Food",
    text: "Our body needs good care and healthy food every single day. Protein from meat, fish, chicken, eggs and beans builds strong muscles and bones. Carbohydrate from rice, bread and potatoes provides us with necessary energy. Fresh fruit and vegetables protect us against illnesses. In addition, taking regular exercise helps us control body weight, lowers blood pressure, and keeps our heart strong.",
    unitId: 6,
    questions: [
      { question: "Why does our body need protein?", answer: "Protein builds strong muscles and bones." },
      { question: "What foods provide us with carbohydrate?", answer: "Rice, bread and potatoes provide us with carbohydrate." },
      { question: "Eating sweets and junk food protects us from illnesses.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "Regular exercise helps lower blood pressure and strengthens the heart.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },

  // --- UNIT 7 ---
  {
    title: "Being Green and Classroom Recycling",
    text: "Salah and Sara are learning how to take care of the Earth and be green. In their classroom, pupils placed four large boxes at the front, labelled: Glass, Metal, Plastic, and Paper. When we make new items from old items, we recycle. Recycling saves energy, natural resources, and money. We should always remember to turn out lights when leaving a room and never waste water.",
    unitId: 7,
    questions: [
      { question: "What four labels did the pupils put on their classroom recycling boxes?", answer: "Glass, Metal, Plastic, and Paper." },
      { question: "What does recycling mean?", answer: "Recycling means making new things from old things." },
      { question: "We should leave lights on when we go out of a room.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "Recycling saves energy, money and natural materials.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  }
];

const SPELLING_POOL: SpellingQuestion[] = [
  // Unit 1
  { word: "EMBLEM", clue: "The official national symbol of a country like the secretary bird", gapped: "e m b l _ m", unitId: 1 },
  { word: "TIMETABLE", clue: "A school chart showing subjects and class times", gapped: "t _ m _ t a b l _", unitId: 1 },
  { word: "CROCODILE", clue: "A large dangerous reptile that lives in the River Nile", gapped: "c r _ c _ d i l e", unitId: 1 },
  { word: "OSTRICH", clue: "A huge desert bird that weighs 60kg and runs fast", gapped: "o s t r _ c h", unitId: 1 },

  // Unit 2
  { word: "CALCULATE", clue: "To use maths and numbers to find an answer", gapped: "c a l c _ l _ t e", unitId: 2 },
  { word: "PYRAMID", clue: "An ancient triangular stone monument used as a royal tomb", gapped: "p y r _ m _ d", unitId: 2 },
  { word: "SYMBOL", clue: "A mark or sign like plus (+), minus (-), or zero (0)", gapped: "s y m b _ l", unitId: 2 },
  { word: "CARPENTER", clue: "A person who works with wood to make chairs and tables", gapped: "c _ r p e n t _ r", unitId: 2 },

  // Unit 3
  { word: "PUMP", clue: "A mechanical machine that lifts water from wells or rivers", gapped: "p _ m p", unitId: 3 },
  { word: "SHADOOF", clue: "An ancient traditional water-lifting tool used by farmers", gapped: "s h _ d _ _ f", unitId: 3 },
  { word: "VACCINATION", clue: "An injection that protects children from tetanus and measles", gapped: "v a c c _ n a t _ _ n", unitId: 3 },
  { word: "PARACHUTE", clue: "A cloth canopy designed to help people land safely from the air", gapped: "p a r _ c h _ t e", unitId: 3 },

  // Unit 4
  { word: "MARBLE", clue: "Hard white stone used to build the beautiful Taj Mahal", gapped: "m _ r b l _", unitId: 4 },
  { word: "WONDER", clue: "Something very extraordinary, old and beautiful", gapped: "w _ n d _ r", unitId: 4 },
  { word: "THEATRE", clue: "A large building for shows and performances like the Colosseum", gapped: "t h _ _ t r e", unitId: 4 },
  { word: "TREASURE", clue: "Gold and valuable jewels buried inside royal tombs", gapped: "t r _ _ s u r e", unitId: 4 },

  // Unit 5
  { word: "FESTIVAL", clue: "A joyful public celebration like the one in Port Sudan", gapped: "f e s t _ v _ l", unitId: 5 },
  { word: "WEDDING", clue: "A marriage ceremony between two people", gapped: "w e d d _ n g", unitId: 5 },
  { word: "FALCON", clue: "A strong bird of prey that flies very high in the sky", gapped: "f a l c _ n", unitId: 5 },
  { word: "INVITATION", clue: "A printed card asking someone to attend a special party", gapped: "i n v _ t a t _ _ n", unitId: 5 },

  // Unit 6
  { word: "STOMACH", clue: "The organ inside your body where food goes when you eat", gapped: "s t _ m _ c h", unitId: 6 },
  { word: "SHOULDER", clue: "The joint connecting the arm to the torso and neck", gapped: "s h _ u l d _ r", unitId: 6 },
  { word: "PROTEIN", clue: "A food group found in meat, fish, eggs and beans", gapped: "p r _ t _ _ n", unitId: 6 },
  { word: "ROUTINE", clue: "A regular sequence of actions followed each night before sleep", gapped: "r _ u t _ n e", unitId: 6 },

  // Unit 7
  { word: "RECYCLE", clue: "To process used materials into new useful products", gapped: "r e c _ c l _", unitId: 7 },
  { word: "METAL", clue: "A hard material used for cans, tins, and engines", gapped: "m _ t _ l", unitId: 7 },
  { word: "GLASS", clue: "A transparent material used for windows and bottles", gapped: "g l _ s s", unitId: 7 },
  { word: "BRICK", clue: "A rectangular block of clay dried in the sun for building", gapped: "b r _ c k", unitId: 7 }
];

const GRAMMAR_POOL: GrammarQuestion[] = [
  // Unit 1
  { question: "Where ________ you during the school holiday?", options: ["was", "were", "is"], correct: "were", unitId: 1 },
  { question: "Osama ________ in Port Sudan with his brother last week.", options: ["was", "were", "are"], correct: "was", unitId: 1 },
  { question: "Along the River Nile, dates ________ on tall palm trees.", options: ["grow", "grows", "growing"], correct: "grow", unitId: 1 },
  { question: "Sukkar is afraid, ________ he thinks fast and tricks the crocodile.", options: ["so", "because", "but"], correct: "but", unitId: 1 },
  { question: "Prime Minister Ismail Al-Azhari ________ the Sudanese flag in 1956.", options: ["raised", "raise", "raising"], correct: "raised", unitId: 1 },

  // Unit 2
  { question: "About 25,000 years ago, people ________ in caves.", options: ["lived", "live", "living"], correct: "lived", unitId: 2 },
  { question: "How ________ teeth do we have in our mouth?", options: ["many", "much", "any"], correct: "many", unitId: 2 },
  { question: "How ________ water do we need for the school trip?", options: ["much", "many", "a"], correct: "much", unitId: 2 },
  { question: "Hassan arrived late for school ________ he couldn't read the clock.", options: ["because", "so", "but"], correct: "because", unitId: 2 },
  { question: "A builder is someone ________ uses maths to calculate bricks.", options: ["who", "which", "where"], correct: "who", unitId: 2 },

  // Unit 3
  { question: "A motor pump is ________ than a traditional saqia.", options: ["faster", "fast", "fastest"], correct: "faster", unitId: 3 },
  { question: "We ________ clean our teeth after meals.", options: ["must", "mustn't", "shouldn't"], correct: "must", unitId: 3 },
  { question: "We ________ watch lots of TV all day.", options: ["mustn't", "must", "should"], correct: "mustn't", unitId: 3 },
  { question: "Have you got ________ onions and carrots for the soup?", options: ["any", "some", "a"], correct: "any", unitId: 3 },
  { question: "I've got ________ salt, but I haven't got any cabbage.", options: ["some", "any", "many"], correct: "some", unitId: 3 },

  // Unit 4
  { question: "The Great Pyramid is the ________ wonder of the world.", options: ["oldest", "older", "old"], correct: "oldest", unitId: 4 },
  { question: "The Great Wall of China is the ________ wall in the world.", options: ["longest", "longer", "long"], correct: "longest", unitId: 4 },
  { question: "Sudan has got ________ pyramids than Egypt.", options: ["more", "most", "many"], correct: "more", unitId: 4 },
  { question: "The Taj Mahal is made ________ white marble.", options: ["of", "by", "with"], correct: "of", unitId: 4 },
  { question: "They are crazy! They ________ blow up the ancient pyramids!", options: ["shouldn't", "should", "must"], correct: "shouldn't", unitId: 4 },

  // Unit 5
  { question: "Where ________ you like to go for your school trip?", options: ["would", "will", "did"], correct: "would", unitId: 5 },
  { question: "Whose bag is this? Is it Sara's? Yes, it's ________.", options: ["hers", "her", "his"], correct: "hers", unitId: 5 },
  { question: "Whose books are these? They belong to the boys; they are ________.", options: ["theirs", "their", "hers"], correct: "theirs", unitId: 5 },
  { question: "How about ________ a beautiful card for Mother's Day?", options: ["making", "make", "made"], correct: "making", unitId: 5 },
  { question: "The falcon flew high, but the wren flew ________.", options: ["higher", "highest", "high"], correct: "higher", unitId: 5 },

  // Unit 6
  { question: "We have two feet, and each foot has five ________.", options: ["toes", "teeth", "knees"], correct: "toes", unitId: 6 },
  { question: "Children ________ take regular exercise are healthier.", options: ["who", "which", "where"], correct: "who", unitId: 6 },
  { question: "You ________ leave shopping bags where a child can fall over them.", options: ["mustn't", "must", "should"], correct: "mustn't", unitId: 6 },
  { question: "You ________ always sit with your back straight in class.", options: ["should", "shouldn't", "mustn't"], correct: "should", unitId: 6 },
  { question: "One child, two ________ in the playground.", options: ["children", "childs", "childrens"], correct: "children", unitId: 6 },

  // Unit 7
  { question: "A window is ________ of glass.", options: ["made", "make", "making"], correct: "made", unitId: 7 },
  { question: "Remember to stop and ________ out the light when leaving a room.", options: ["turn", "turns", "turned"], correct: "turn", unitId: 7 },
  { question: "5,200 years ago, people in Iraq ________ symbols on clay.", options: ["wrote", "write", "written"], correct: "wrote", unitId: 7 },
  { question: "When the crow opened her beak, the cheese ________ to the ground.", options: ["fell", "fall", "falls"], correct: "fell", unitId: 7 },
  { question: "Gold is ________ dearest metal to buy.", options: ["the", "a", "than"], correct: "the", unitId: 7 }
];

const WRITING_POOL: WritingQuestion[] = [
  // Unit 1
  { jumbled: "secretary / is / The / emblem / bird / the / Sudan / of / .", ordered: "The secretary bird is the emblem of Sudan.", unitId: 1 },
  { jumbled: "trees / Dates / grow / tall / palm / on / .", ordered: "Dates grow on tall palm trees.", unitId: 1 },

  // Unit 2
  { jumbled: "have / teeth / thirty-two / We / our / in / mouth / .", ordered: "We have thirty-two teeth in our mouth.", unitId: 2 },
  { jumbled: "symbols / invented / Arabs / new / numbers / for / .", ordered: "Arabs invented new symbols for numbers.", unitId: 2 },

  // Unit 3
  { jumbled: "must / teeth / our / We / clean / meals / after / .", ordered: "We must clean our teeth after meals.", unitId: 3 },
  { jumbled: "cheaper / is / saqia / cleaner / to / and / use / A / .", ordered: "A saqia is cleaner and cheaper to use.", unitId: 3 },

  // Unit 4
  { jumbled: "longest / is / Great / The / Wall / in / world / the / .", ordered: "The Great Wall is the longest in the world.", unitId: 4 },
  { jumbled: "has / pyramids / about / Sudan / two / hundred / got / .", ordered: "Sudan has got about two hundred pyramids.", unitId: 4 },

  // Unit 5
  { jumbled: "picnic / had / River / a / by / Nile / We / the / .", ordered: "We had a picnic by the River Nile.", unitId: 5 },
  { jumbled: "mother / for / Alhamdulillah / Say / your / .", ordered: "Say Alhamdulillah for your mother.", unitId: 5 },

  // Unit 6
  { jumbled: "exercise / makes / Regular / stronger / bones / our / .", ordered: "Regular exercise makes our bones stronger.", unitId: 6 },
  { jumbled: "knives / mustn't / leave / You / sharp / tables / on / .", ordered: "You mustn't leave sharp knives on tables.", unitId: 6 },

  // Unit 7
  { jumbled: "light / out / turn / Remember / the / to / .", ordered: "Remember to turn out the light.", unitId: 7 },
  { jumbled: "recycle / can / glass / wood / We / and / metal / .", ordered: "We can recycle glass wood and metal.", unitId: 7 }
];

/**
 * Generates an array of non-overlapping A4 exam papers
 */
export function generateSudanExams(
  count: number,
  scope: "all" | "unit" | "lesson",
  targetUnitId?: number,
  targetLessonId?: number
): ExamPaper[] {
  const papers: ExamPaper[] = [];

  // Used trackers to avoid duplicates across sheets
  const usedPassageTitles = new Set<string>();
  const usedSpellingWords = new Set<string>();
  const usedVocabWords = new Set<string>();
  const usedGrammarQuestions = new Set<string>();
  const usedWritingJumbled = new Set<string>();

  for (let i = 0; i < count; i++) {
    // 1. FILTER PASSAGES
    let passagePool = [...PASSAGES];
    if (scope === "unit" && targetUnitId !== undefined) {
      passagePool = passagePool.filter((p) => p.unitId === targetUnitId);
    }
    // Filter out used ones if we have enough left, else reset
    let availablePassages = passagePool.filter((p) => !usedPassageTitles.has(p.title));
    if (availablePassages.length === 0) {
      availablePassages = passagePool.length > 0 ? passagePool : [...PASSAGES];
    }
    const passage = availablePassages[Math.floor(Math.random() * availablePassages.length)] || PASSAGES[0];
    usedPassageTitles.add(passage.title);

    // 2. FILTER SPELLING
    let spellingPool = [...SPELLING_POOL];
    if (scope === "unit" && targetUnitId !== undefined) {
      spellingPool = spellingPool.filter((s) => s.unitId === targetUnitId);
    }
    let availableSpelling = spellingPool.filter((s) => !usedSpellingWords.has(s.word));
    if (availableSpelling.length < 4) {
      availableSpelling = spellingPool.length >= 4 ? spellingPool : [...SPELLING_POOL];
    }
    const spellingShuffled = availableSpelling.sort(() => Math.random() - 0.5).slice(0, 4);
    spellingShuffled.forEach((s) => usedSpellingWords.add(s.word));

    // 3. FILTER VOCABULARY MATCHING
    // We dynamically draw vocabulary words from SMILE_UNITS under selected scope
    let vocabWordsPool: WordItem[] = [];
    if (scope === "unit" && targetUnitId !== undefined) {
      const selectedUnit = SMILE_UNITS.find((u) => u.id === targetUnitId);
      if (selectedUnit) {
        vocabWordsPool = [...selectedUnit.words];
      }
    } else {
      // "all" scope - combine words from all units
      SMILE_UNITS.forEach((unit) => {
        vocabWordsPool.push(...unit.words);
      });
    }

    // fallback if empty
    if (vocabWordsPool.length === 0) {
      SMILE_UNITS.forEach((unit) => {
        vocabWordsPool.push(...unit.words);
      });
    }

    let availableVocab = vocabWordsPool.filter((v) => !usedVocabWords.has(v.word));
    if (availableVocab.length < 5) {
      availableVocab = vocabWordsPool;
    }

    const vocabSelection = availableVocab.sort(() => Math.random() - 0.5).slice(0, 5);
    vocabSelection.forEach((v) => usedVocabWords.add(v.word));

    // Construct sentence matching pairs (100% English, blanking out the target word)
    const vocabMatching = vocabSelection.map((item) => {
      // Find the word in the example and replace it with underscores, case insensitive
      const regex = new RegExp(`\\b${item.word}\\b`, "gi");
      let sentence = item.example;
      if (regex.test(sentence)) {
        sentence = sentence.replace(regex, "________");
      } else {
        // Fallback replacement if regex failed to match boundary (e.g. plural)
        sentence = sentence.replace(item.word, "________");
        sentence = sentence.replace(item.word.toLowerCase(), "________");
      }
      return {
        word: item.word.toUpperCase(),
        definitionOrSentence: sentence
      };
    });

    // 4. FILTER GRAMMAR
    let grammarPool = [...GRAMMAR_POOL];
    if (scope === "unit" && targetUnitId !== undefined) {
      grammarPool = grammarPool.filter((g) => g.unitId === targetUnitId);
    }
    let availableGrammar = grammarPool.filter((g) => !usedGrammarQuestions.has(g.question));
    if (availableGrammar.length < 5) {
      availableGrammar = grammarPool.length >= 5 ? grammarPool : [...GRAMMAR_POOL];
    }
    const grammarShuffled = availableGrammar.sort(() => Math.random() - 0.5).slice(0, 5);
    grammarShuffled.forEach((g) => usedGrammarQuestions.add(g.question));

    // 5. FILTER WRITING
    let writingPool = [...WRITING_POOL];
    if (scope === "unit" && targetUnitId !== undefined) {
      writingPool = writingPool.filter((w) => w.unitId === targetUnitId);
    }
    let availableWriting = writingPool.filter((w) => !usedWritingJumbled.has(w.jumbled));
    if (availableWriting.length < 2) {
      availableWriting = writingPool.length >= 2 ? writingPool : [...WRITING_POOL];
    }
    const writingShuffled = availableWriting.sort(() => Math.random() - 0.5).slice(0, 2);
    writingShuffled.forEach((w) => usedWritingJumbled.add(w.jumbled));

    papers.push({
      id: `paper-${i}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      passage,
      spelling: spellingShuffled,
      vocabMatching,
      grammar: grammarShuffled,
      writing: writingShuffled
    });
  }

  return papers;
}
