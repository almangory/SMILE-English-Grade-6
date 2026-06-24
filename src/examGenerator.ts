import { SMILE_UNITS } from "./smileData";
import { UnitItem, Lesson, WordItem } from "./types";

export interface ExamPassage {
  title: string;
  text: string;
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
}

export interface GrammarQuestion {
  question: string;
  options: string[];
  correct: string;
}

export interface WritingQuestion {
  jumbled: string;
  ordered: string;
}

export interface ExamPaper {
  passage: ExamPassage;
  spelling: SpellingQuestion[];
  vocabMatching: Array<{ word: string; arabic: string }>;
  grammar: GrammarQuestion[];
  writing: WritingQuestion[];
}

// Pre-defined exam passages based on Book 3 lessons
const PASSAGES: ExamPassage[] = [
  {
    title: "Our Strong Heart",
    text: "An heart weighs about 300 grams. It is very strong. Our heart makes about a hundred thousand beats every twenty-four hours. It sends the blood around our body and back to our heart in only 20 seconds. We must look after our body and take regular exercise to make our muscles and bones stronger.",
    questions: [
      { question: "How much does a heart weigh?", answer: "It weighs about 300 grams." },
      { question: "How many beats does the heart make every 24 hours?", answer: "It makes about a hundred thousand (100,000) beats." },
      { question: "The heart is very weak.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "The heart sends blood around our body.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },
  {
    title: "The Thirsty Crow",
    text: "One day a crow was thirsty and wanted some water. She saw some water in a water jar and landed next to it. She put her beak in the jar but couldn't reach the water because it was too low. The clever crow dropped stones into the jar little by little. The water rose up and the crow could drink.",
    questions: [
      { question: "Why did the crow land next to the jar?", answer: "Because she was thirsty and wanted some water." },
      { question: "What did the crow drop into the jar?", answer: "She dropped stones into the jar." },
      { question: "The crow could not reach the water at first.", answer: "", isTrueFalse: true, correctTF: "True" },
      { question: "The crow was very silly.", answer: "", isTrueFalse: true, correctTF: "False" }
    ]
  },
  {
    title: "Leonardo da Vinci",
    text: "Leonardo da Vinci was a famous inventor and artist. When he was a boy in Italy he was outside all the time. He studied and drew animals and plants. He thought of the idea of planes when he watched birds flying in the air. He is one of the most famous people in history.",
    questions: [
      { question: "Who was Leonardo da Vinci?", answer: "He was a famous inventor and artist." },
      { question: "Where did he get the idea of planes from?", answer: "By watching birds flying in the air." },
      { question: "Leonardo was born in Sudan.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "He studied and drew animals and plants.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },
  {
    title: "The Great Pyramids of Sudan",
    text: "Sudan has got beautiful and amazing pyramids. They were built as tombs for kings and queens who lived about 2,000 years ago. The pyramids of Meroë are about 100km north of Khartoum. The pyramids in Sudan are smaller but more numerous than the pyramids in Egypt.",
    questions: [
      { question: "What were the pyramids used for?", answer: "They were tombs for kings and queens." },
      { question: "Where are the pyramids of Meroë located?", answer: "About 100km north of Khartoum." },
      { question: "The Sudanese pyramids were built 500 years ago.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "Pyramids in Sudan are bigger than those in Egypt.", answer: "", isTrueFalse: true, correctTF: "False" }
    ]
  },
  {
    title: "Nafisa's Mother's Day",
    text: "Hello, my name is Nafisa. It's Mother's day today. On Mother's Day, I think about my mum's hard work and I thank her for her help. In the morning, I made her a beautiful card and gave her a flower. I am helping my mother today so she can relax and have fun.",
    questions: [
      { question: "What special day is it in Nafisa's story?", answer: "It is Mother's Day." },
      { question: "What did Nafisa give her mother in the morning?", answer: "She gave her a card and a flower." },
      { question: "Nafisa is helping her mother today.", answer: "", isTrueFalse: true, correctTF: "True" },
      { question: "Nafisa bought her mother a computer.", answer: "", isTrueFalse: true, correctTF: "False" }
    ]
  },
  {
    title: "Being Green and Recycling",
    text: "Salah and Sara are trying to be green. They take care of the earth. When we make new things from old things, we recycle. For example, we use old newspapers to make new paper. We can re-use or recycle many things like glass, wood, and metal so we don't waste energy and materials.",
    questions: [
      { question: "What does recycling mean?", answer: "Making new things from old things." },
      { question: "What materials can we re-use or recycle?", answer: "Glass, wood, and metals." },
      { question: "Salah and Sara waste a lot of water.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "Newspapers can be recycled to make new paper.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  }
];

const SPELLING_POOL: SpellingQuestion[] = [
  { word: "NURSE", clue: "Someone who helps doctors look after sick people", gapped: "n _ r s _" },
  { word: "DOCTOR", clue: "A professional who examines patients and gives medicine", gapped: "d _ c t _ r" },
  { word: "PUMP", clue: "A machine used by farmers to lift water from a well or river", gapped: "p _ m p" },
  { word: "WONDER", clue: "Something very beautiful, old or important like the pyramids", gapped: "w _ n d _ r" },
  { word: "STOMACH", clue: "An organ in our body that helps digest healthy food", gapped: "s t _ m _ c h" },
  { word: "CARROT", clue: "An orange vegetable that is good for the eyes", gapped: "c _ r r _ t" },
  { word: "SHOULDER", clue: "The part of your body where your arm joins your neck", gapped: "s h _ u l d _ r" },
  { word: "FESTIVAL", clue: "A special public celebration with activities like in Port Sudan", gapped: "f e s t _ v _ l" },
  { word: "WEDDING", clue: "A happy day when two people get married", gapped: "w e d d _ n g" },
  { word: "BRICK", clue: "A block of clay used to build houses near the Nile", gapped: "b r _ c k" },
  { word: "CLAY", clue: "Soft wet earth used by brick makers to make houses", gapped: "c l _ y" },
  { word: "FALCON", clue: "The strongest and fastest bird in the sky", gapped: "f a l c _ n" }
];

const GRAMMAR_POOL: GrammarQuestion[] = [
  { question: "The tortoise is ________ than the rabbit.", options: ["slow", "slower", "slowest"], correct: "slower" },
  { question: "The Great Pyramid is the ________ tomb in Meroë.", options: ["big", "bigger", "biggest"], correct: "biggest" },
  { question: "Sara was thirsty, ________ she drank some water.", options: ["so", "because", "but"], correct: "so" },
  { question: "Mona wanted to watch TV, ________ she didn't go to see Sara.", options: ["so", "because", "and"], correct: "because" },
  { question: "You ________ drink a lot of water during hot weather.", options: ["should", "shouldn't", "mustn't"], correct: "should" },
  { question: "You ________ play with sharp knives.", options: ["should", "mustn't", "must"], correct: "mustn't" },
  { question: "Last Monday, Mona ________ a bad dream.", options: ["has", "have", "had"], correct: "had" },
  { question: "They ________ to the pyramids near Bejerawiya yesterday.", options: ["go", "went", "going"], correct: "went" },
  { question: "How ________ money has Osama got?", options: ["many", "much", "lot"], correct: "much" },
  { question: "How ________ sandwiches does Elham need?", options: ["many", "much", "any"], correct: "many" },
  { question: "Have you got ________ apples and bananas?", options: ["a", "an", "any"], correct: "any" },
  { question: "These ________ are smiling in the picture.", options: ["person", "people", "child"], correct: "people" }
];

const WRITING_POOL: WritingQuestion[] = [
  { jumbled: "slowest / tortoise / is / The / the / .", ordered: "The tortoise is the slowest." },
  { jumbled: "pray / We / five / must / times / day / a / .", ordered: "We must pray five times a day." },
  { jumbled: "invented / symbols / Arabs / for / numbers / .", ordered: "Arabs invented symbols for numbers." },
  { jumbled: "water / of / We / must / drink / lots / .", ordered: "We must drink lots of water." },
  { jumbled: "recycling / glass / is / wood / Important / and / .", ordered: "Important is recycling glass and wood." },
  { jumbled: "heart / is / very / Our / strong / .", ordered: "Our heart is very strong." }
];

export function generateSudanExam(index?: number): ExamPaper {
  // Select a passage
  const selectedIndex = index !== undefined ? index % PASSAGES.length : Math.floor(Math.random() * PASSAGES.length);
  const passage = PASSAGES[selectedIndex];

  // Pick 4 unique spelling questions
  const shuffledSpelling = [...SPELLING_POOL].sort(() => Math.random() - 0.5);
  const spelling = shuffledSpelling.slice(0, 4);

  // Pick 4 vocabulary matching pairs from Units dynamically
  const vocabList: Array<{ word: string; arabic: string }> = [];
  const seenWords = new Set<string>();
  
  // Pick random words with arabic definitions
  for (const unit of SMILE_UNITS) {
    for (const w of unit.words) {
      if (!seenWords.has(w.word)) {
        vocabList.push({ word: w.word, arabic: w.arabic });
        seenWords.add(w.word);
      }
    }
  }
  const shuffledVocab = vocabList.sort(() => Math.random() - 0.5).slice(0, 5);

  // Pick 5 grammar questions
  const shuffledGrammar = [...GRAMMAR_POOL].sort(() => Math.random() - 0.5);
  const grammar = shuffledGrammar.slice(0, 5);

  // Pick 2 writing questions
  const shuffledWriting = [...WRITING_POOL].sort(() => Math.random() - 0.5);
  const writing = shuffledWriting.slice(0, 2);

  return {
    passage,
    spelling,
    vocabMatching: shuffledVocab,
    grammar,
    writing
  };
}
