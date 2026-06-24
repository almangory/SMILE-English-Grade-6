import { SMILE_UNITS } from "./smileData";
import { UnitItem, Lesson, WordItem } from "./types";

export interface ConfiguredQuestion {
  question: string;
  answers: string[];
  correctAnswer: string;
  unitId: number;
  lessonId: number | null; // null means it's a general unit question
  type: "trivia" | "vocabulary" | "spelling" | "phonics";
}

// Handcrafted rich textbook trivia database strictly based on the Sudanese SMILE Grade 5/Book 3 curriculum
const HANDCRAFTED_TRIVIA: ConfiguredQuestion[] = [
  // --- UNIT 1 ---
  {
    question: "Complete the textbook poem line: 'Welcome back from holiday. Welcome back to school...'",
    answers: ["today.", "tomorrow.", "my friends.", "with mum and dad."],
    correctAnswer: "today.",
    unitId: 1,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "Where did Hassan go on holiday with his family in Unit 1?",
    answers: ["Khartoum", "Dubai", "El Obied", "Port Sudan"],
    correctAnswer: "Khartoum",
    unitId: 1,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "Where did Sara go on holiday with her brother according to Lesson 2?",
    answers: ["Port Sudan", "El Obied", "Dubai", "Khartoum"],
    correctAnswer: "Port Sudan",
    unitId: 1,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "What is the official emblem of Sudan according to the textbook?",
    answers: ["The secretary bird", "The falcon", "The Nile crocodile", "The camel"],
    correctAnswer: "The secretary bird",
    unitId: 1,
    lessonId: 4,
    type: "trivia"
  },
  {
    question: "Why can secretary birds run fast?",
    answers: ["They have got long legs.", "They have got short wings.", "They live in rivers.", "They have got red faces."],
    correctAnswer: "They have got long legs.",
    unitId: 1,
    lessonId: 4,
    type: "trivia"
  },
  {
    question: "What does Mrs Crocodile want to eat first from Sukkar the monkey?",
    answers: ["his heart", "his mangoes", "his head", "his tree"],
    correctAnswer: "his heart",
    unitId: 1,
    lessonId: 5,
    type: "trivia"
  },

  // --- UNIT 2 ---
  {
    question: "Light takes about how many minutes to travel to the Earth from the sun?",
    answers: ["eight minutes", "eight seconds", "one hour", "a week"],
    correctAnswer: "eight minutes",
    unitId: 2,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "Which of the nine planets is colder because it is a long way from the sun?",
    answers: ["Pluto", "Mercury", "Venus", "Mars"],
    correctAnswer: "Pluto",
    unitId: 2,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "In the Hisham story, which flower did the lonely star comfortably change into happily?",
    answers: ["a water lily", "a yellow flower", "a beautiful rose", "a cotton flower"],
    correctAnswer: "a water lily",
    unitId: 2,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "An eclipse is when which astronomical body comes between the Earth and the sun?",
    answers: ["the moon", "Mercury", "Saturn", "a rocket"],
    correctAnswer: "the moon",
    unitId: 2,
    lessonId: 4,
    type: "trivia"
  },
  {
    question: "On Neil and Buzz's moon landing, how many hours did they walk and stay on the moon's surface?",
    answers: ["twenty-one hours", "eight hours", "a week", "three days"],
    correctAnswer: "twenty-one hours",
    unitId: 2,
    lessonId: 5,
    type: "trivia"
  },

  // --- UNIT 3 ---
  {
    question: "Complete the fabric materials trivia: 'We get cotton from cotton plants and silk from...'",
    answers: ["silk worms.", "sheep.", "cows.", "spiders."],
    correctAnswer: "silk worms.",
    unitId: 3,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "Which animal provides us with leather for making bags and belts?",
    answers: ["cows", "sheep", "silk worms", "lions"],
    correctAnswer: "cows",
    unitId: 3,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "What did Majda help her dad pick in the fields during her school holiday?",
    answers: ["cotton", "peanuts", "dates", "mangos"],
    correctAnswer: "cotton",
    unitId: 3,
    lessonId: 4,
    type: "trivia"
  },
  {
    question: "How did the angry hat-seller make the monkeys throw their hats back down?",
    answers: ["He threw his own hat on the ground.", "He climbed up the tree.", "He yelled and pointed a stick.", "He gave them mangoes."],
    correctAnswer: "He threw his own hat on the ground.",
    unitId: 3,
    lessonId: 5,
    type: "trivia"
  },
  {
    question: "Which job wears heavy clothes, a helmet, gloves and boots to protect from heat?",
    answers: ["fireman", "policeman", "doctor", "mechanic"],
    correctAnswer: "fireman",
    unitId: 3,
    lessonId: 3,
    type: "trivia"
  },

  // --- UNIT 4 ---
  {
    question: "Which service/partner animal helps blind people find where they want to go?",
    answers: ["a guide dog", "a sheep dog", "an elephant", "a falcon"],
    correctAnswer: "a guide dog",
    unitId: 4,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "Idris rode Barood the camel. What did he do before taking the bride to the wedding ceremony?",
    answers: ["Washed Barood and painted pattern into his coat", "Bought a tractor", "Rested under a tree", "Gave him a clock"],
    correctAnswer: "Washed Barood and painted pattern into his coat",
    unitId: 4,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "Falcons are the fastest birds in the world. They can dive at about:",
    answers: ["300 kilometres an hour.", "100 kilometres an hour.", "50 kilometres an hour.", "600 kilometres an hour."],
    correctAnswer: "300 kilometres an hour.",
    unitId: 4,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "Why are cattle egrets helpful safety partners to cows, rhinos and zebras?",
    answers: ["They eat worms and insects off their skin.", "They plough the fields.", "They wake them up in the morning.", "They carry heavy loads."],
    correctAnswer: "They eat worms and insects off their skin.",
    unitId: 4,
    lessonId: 5,
    type: "trivia"
  },

  // --- UNIT 5 ---
  {
    question: "Ali was a poor boy in Lesson 2. What did he sell daily at the market to help his mother?",
    answers: ["water", "matches", "peanuts", "hats"],
    correctAnswer: "water",
    unitId: 5,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "What did poor Ali say happened to his father in the story?",
    answers: ["He died two years ago.", "He went to Egypt.", "He works in a hospital.", "He became a volunteer."],
    correctAnswer: "He died two years ago.",
    unitId: 5,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "In the little red hen story, what crop did she grows from the seeds she found?",
    answers: ["peanut plants", "cotton fields", "mango tree", "wheat"],
    correctAnswer: "peanut plants",
    unitId: 5,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "Why did the little red hen refuse to share her cooked peanuts with her friends?",
    answers: ["Because they did not help her plant, harvest or cook.", "Because peanuts are poisonous to cats.", "Because she was very greedy.", "Because they went to sleep."],
    correctAnswer: "Because they did not help her plant, harvest or cook.",
    unitId: 5,
    lessonId: 3,
    type: "trivia"
  },

  // --- UNIT 6 ---
  {
    question: "At the travel agency, how much did a flight ticket to Cairo cost Mr Rami?",
    answers: ["4,000 Sudanese Pounds", "1,000 Sudanese Pounds", "20,000 Pounds", "4,000 British Pounds"],
    correctAnswer: "4,000 Sudanese Pounds",
    unitId: 6,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "Who is the famous author who wrote the travel adventure story 'Around the World in 80 Days'?",
    answers: ["Jules Verne", "Stephen Thompson", "Buzz Aldrin", "Phileas Fogg"],
    correctAnswer: "Jules Verne",
    unitId: 6,
    lessonId: 4,
    type: "trivia"
  },
  {
    question: "How did Phileas Fogg and Passepartout travel around the world 150 years ago?",
    answers: ["by train and ship", "by airplane", "by motor pump", "by rocket"],
    correctAnswer: "by train and ship",
    unitId: 6,
    lessonId: 4,
    type: "trivia"
  },

  // --- UNIT 7 ---
  {
    question: "Who invented the symbol for zero two thousand years ago according to Lesson 2?",
    answers: ["The Indians", "The Egyptians", "The Arabs", "The Europeans"],
    correctAnswer: "The Indians",
    unitId: 7,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "Who invented mathematically symbols for plus (+) and minus (-) five hundred years ago?",
    answers: ["The Arabs", "The Europeans", "The Indians", "The Egyptians"],
    correctAnswer: "The Arabs",
    unitId: 7,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "How did the clever thirsty crow manage to reach the water in the deep jar?",
    answers: ["She dropped small stones in until the water rose.", "She broke the glass jar.", "She used a motor pump.", "She waited for heavy rain."],
    correctAnswer: "She dropped small stones in until the water rose.",
    unitId: 7,
    lessonId: 3,
    type: "trivia"
  },

  // --- UNIT 8 ---
  {
    question: "Which water lifter is slower than a saqia according to Granddad's description?",
    answers: ["shadoof", "motor pump", "tractor", "well"],
    correctAnswer: "shadoof",
    unitId: 8,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "What trick did the poor traveller use to make the villagers share onions, carrots and meat?",
    answers: ["He pretended to boil a delicious stone soup.", "He sold water from the Nile.", "He wore a policeman's uniform.", "He used a shadoof."],
    correctAnswer: "He pretended to boil a delicious stone soup.",
    unitId: 8,
    lessonId: 3,
    type: "trivia"
  },

  // --- UNIT 9 ---
  {
    question: "Sudan has many amazing pyramids in Meroe. How many pyramids does it have?",
    answers: ["about 220 pyramids", "118 pyramids", "1,100 pyramids", "40 pyramids"],
    correctAnswer: "about 220 pyramids",
    unitId: 9,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "Who was the European gold seeker who damaged forty pyramids in Sudan in 1834?",
    answers: ["Giuseppe Ferlini", "Michael Collins", "Jules Verne", "Passepartout"],
    correctAnswer: "Giuseppe Ferlini",
    unitId: 9,
    lessonId: 3,
    type: "trivia"
  },

  // --- UNIT 10 ---
  {
    question: "Why did the tiny wren win the flying competition in the birds' match?",
    answers: ["She sat on the falcon's back and flew higher when he got tired.", "She flew inside a rocket.", "She ran faster on her long legs.", "She hid inside Mrs Hen's body."],
    correctAnswer: "She sat on the falcon's back and flew higher when he got tired.",
    unitId: 10,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "How did the wren escape from the cat on the party day?",
    answers: ["She sang a song parameter for help so other birds saved her.", "She fought the cat with her beak.", "She climbed a tall tree.", "She stayed very quiet."],
    correctAnswer: "She sang a song parameter for help so other birds saved her.",
    unitId: 10,
    lessonId: 3,
    type: "trivia"
  },

  // --- UNIT 11 ---
  {
    question: "Complete the body part skeleton chant: 'We need legs to take our weight, and a...' to hold our head straight.",
    answers: ["backbone", "stomach", "shoulder", "elbow"],
    correctAnswer: "backbone",
    unitId: 11,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "Why did Murad lie four times to his mother about having a high fever?",
    answers: ["He wanted to make her laugh.", "He was afraid of matches.", "He wanted to stay in bed.", "He wanted to eat peanuts."],
    correctAnswer: "He wanted to make her laugh.",
    unitId: 11,
    lessonId: 3,
    type: "trivia"
  },

  // --- UNIT 12 ---
  {
    question: "What does the green environment poem tell us to do when leaving a room?",
    answers: ["remember to stop and turn out the light.", "leave rubbish behind.", "waste water and energy.", "close the window."],
    correctAnswer: "remember to stop and turn out the light.",
    unitId: 12,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "On the River Nile, what does Khalid the bricklayer mix to build houses?",
    answers: ["water and clay", "clay and stones", "cotton and silk", "sand and gold"],
    correctAnswer: "water and clay",
    unitId: 12,
    lessonId: 2,
    type: "trivia"
  }
];

/**
 * Generates a randomized, highly robust array of questions based on selected parameters.
 * Automatically guarantees up to 30 unique questions by dynamically manufacturing letters,
 * spelling, and matching questions from the standard words list if handcrafted trivias are exhausted.
 */
export function generateQuiz(
  scope: "all" | "unit" | "lesson",
  targetUnitId: number,
  targetLessonId: number,
  limit: number
): { question: string; answers: string[]; correctAnswer: string; badge: string }[] {
  
  let pool: ConfiguredQuestion[] = [];

  // 1. FILTER BY SCOPE
  if (scope === "all") {
    pool = HANDCRAFTED_TRIVIA.filter((t) => SMILE_UNITS.some(u => u.id === t.unitId));
  } else if (scope === "unit") {
    pool = HANDCRAFTED_TRIVIA.filter((t) => t.unitId === targetUnitId);
  } else if (scope === "lesson") {
    pool = HANDCRAFTED_TRIVIA.filter(
      (t) => t.unitId === targetUnitId && (t.lessonId === targetLessonId || t.lessonId === null)
    );
  }

  // Convert structured configured questions to active array
  const finalQuestions: { question: string; answers: string[]; correctAnswer: string; badge: string }[] = pool.map((item) => ({
    question: item.question,
    answers: item.answers,
    correctAnswer: item.correctAnswer,
    badge: `UNIT ${item.unitId} • LESSON ${item.lessonId || "Book"}`
  }));

  // 2. BACKUP CONSTRUCTORS (to fulfill up to 30 questions) - generate dynamic questions if pool is smaller than limit
  const activeUnitIds = scope === "all" 
    ? SMILE_UNITS.map(u => u.id) 
    : [targetUnitId];

  // Fetch words that fall into our scope
  const targetWords = SMILE_UNITS
    .filter(u => activeUnitIds.includes(u.id))
    .flatMap(u => u.words);

  // Dynamic Generator Type A: Image emoji matching
  targetWords.forEach((wordObj) => {
    if (finalQuestions.length >= 60) return; // Cap at a high margin to shuffle later
    
    // Choose distractor words
    const allDistractors = targetWords
      .filter((w) => w.word !== wordObj.word)
      .map((w) => w.word);
    
    const uniqueDistractors = Array.from(new Set(allDistractors));
    const randomDistractors = uniqueDistractors.sort(() => Math.random() - 0.5).slice(0, 3);
    
    const answers = [wordObj.word, ...randomDistractors].sort(() => Math.random() - 0.5);

    if (answers.length === 4) {
      finalQuestions.push({
        question: `Which English word matches the picture: ${wordObj.image}?`,
        answers,
        correctAnswer: wordObj.word,
        badge: `VOCAB • UNIT ${wordObj.unit}`
      });
    }
  });

  // Dynamic Generator Type B: First letter spelling match
  targetWords.forEach((wordObj) => {
    if (finalQuestions.length >= 100) return;

    const firstLetter = wordObj.word.charAt(0).toUpperCase();
    const otherWordsWithDifferentStarts = targetWords
      .filter((w) => w.word.charAt(0).toUpperCase() !== firstLetter)
      .map((w) => w.word);

    const uniqueOthers = Array.from(new Set(otherWordsWithDifferentStarts));
    const randomOthers = uniqueOthers.sort(() => Math.random() - 0.5).slice(0, 3);

    const answers = [wordObj.word, ...randomOthers].sort(() => Math.random() - 0.5);

    if (answers.length === 4) {
      finalQuestions.push({
        question: `Find the word that starts with the letter '${firstLetter}' sound (hint: ${wordObj.image}):`,
        answers,
        correctAnswer: wordObj.word,
        badge: `PHONICS • UNIT ${wordObj.unit}`
      });
    }
  });

  // Dynamic Generator Type C: Example sentence matching
  targetWords.forEach((wordObj) => {
    if (finalQuestions.length >= 140) return;

    // Convert e.g., "an apple" -> "an ___" or similar, or match example directly
    const sentenceHint = wordObj.example;
    const allOtherExamples = targetWords
      .filter((w) => w.word !== wordObj.word)
      .map((w) => w.word);

    const uniqueOthers = Array.from(new Set(allOtherExamples));
    const randomOthers = uniqueOthers.sort(() => Math.random() - 0.5).slice(0, 3);

    const answers = [wordObj.word, ...randomOthers].sort(() => Math.random() - 0.5);

    if (answers.length === 4) {
      finalQuestions.push({
        question: `Which textbook item goes with the book detail: "${sentenceHint}"?`,
        answers,
        correctAnswer: wordObj.word,
        badge: `EXAMPLE • UNIT ${wordObj.unit}`
      });
    }
  });

  // Shuffle the questions pool and slice to the custom requested limit (up to 30)
  const randomizedSubset = finalQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(limit, 30));

  return randomizedSubset;
}
