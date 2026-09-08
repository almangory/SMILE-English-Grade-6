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

// Handcrafted rich textbook trivia database strictly based on the Sudanese SMILE Grade 6 curriculum
const HANDCRAFTED_TRIVIA: ConfiguredQuestion[] = [
  // ==================== UNIT 1: Back to School ====================
  {
    question: "Complete the textbook poem: 'Welcome back from holiday. Welcome back to school...'",
    answers: ["today!", "tomorrow!", "my friends!", "next week!"],
    correctAnswer: "today!",
    unitId: 1,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "According to Lesson 1 timetable, which days have got History class?",
    answers: ["Monday and Tuesday", "Sunday and Monday", "Wednesday and Thursday", "Sunday and Thursday"],
    correctAnswer: "Monday and Tuesday",
    unitId: 1,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "Where was Osama during the school holiday according to Lesson 2?",
    answers: ["in Port Sudan with his brother", "in Dubai with his aunt", "in Khartoum with family", "at uncle's farm"],
    correctAnswer: "in Port Sudan with his brother",
    unitId: 1,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "Where was Mona during the holiday, and what was the weather like?",
    answers: ["in Dubai, and it was very hot", "in Port Sudan, and it was cold", "in Khartoum, and it was rainy", "in London"],
    correctAnswer: "in Dubai, and it was very hot",
    unitId: 1,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "Complete the nature line: 'Along the River Nile, dates grow on tall palm trees and sharks swim in the warm waters of the...'",
    answers: ["Red Sea", "River Nile", "Dinder Park", "Lake Victoria"],
    correctAnswer: "Red Sea",
    unitId: 1,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "What is the official national emblem of Sudan in Book 6?",
    answers: ["The secretary bird", "The falcon", "The Nile crocodile", "The desert camel"],
    correctAnswer: "The secretary bird",
    unitId: 1,
    lessonId: 4,
    type: "trivia"
  },
  {
    question: "What colour are the faces of young and adult secretary birds?",
    answers: ["Young have yellow faces, adults have red faces", "Young have green faces, adults have blue", "Both have black faces", "Young have red, adults have yellow"],
    correctAnswer: "Young have yellow faces, adults have red faces",
    unitId: 1,
    lessonId: 4,
    type: "trivia"
  },
  {
    question: "What does Mrs Crocodile want Mr Crocodile to bring her instead of mangoes?",
    answers: ["the heart of the monkey", "fish from the river", "meat from the farm", "dates from palm trees"],
    correctAnswer: "the heart of the monkey",
    unitId: 1,
    lessonId: 5,
    type: "trivia"
  },
  {
    question: "How did Sukkar the monkey escape from Mr Crocodile in the river?",
    answers: ["He said his heart was back in his house in the tree", "He threw stones at him", "He called other monkeys", "He swam to the beach"],
    correctAnswer: "He said his heart was back in his house in the tree",
    unitId: 1,
    lessonId: 6,
    type: "trivia"
  },
  {
    question: "On 1st January 1956, who raised the Sudanese flag when Sudan became independent?",
    answers: ["Prime Minister Ismail Al-Azhari", "Giuseppe Ferlini", "Shah Jahan", "Herodotus"],
    correctAnswer: "Prime Minister Ismail Al-Azhari",
    unitId: 1,
    lessonId: 7,
    type: "trivia"
  },
  {
    question: "How much does an adult ostrich weigh according to the textbook?",
    answers: ["about 60 kilograms", "about 200 kilograms", "about 10 kilograms", "about 1,000 kilograms"],
    correctAnswer: "about 60 kilograms",
    unitId: 1,
    lessonId: 8,
    type: "trivia"
  },

  // ==================== UNIT 2: Maths in our Life ====================
  {
    question: "When did early humans start counting and drawing symbols on cave walls?",
    answers: ["25,000 years ago", "5,000 years ago", "1,000 years ago", "80 years ago"],
    correctAnswer: "25,000 years ago",
    unitId: 2,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "Who invented the mathematical symbol for zero about 2,000 years ago?",
    answers: ["The Indians", "The Arabs", "The Europeans", "The Americans"],
    correctAnswer: "The Indians",
    unitId: 2,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "Who invented the number symbols 1 to 9 used worldwide today about 1,000 years ago?",
    answers: ["The Arabs", "The Indians", "The Chinese", "The Romans"],
    correctAnswer: "The Arabs",
    unitId: 2,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "How many teeth are there in an adult human mouth?",
    answers: ["32 teeth", "24 teeth", "206 teeth", "40 teeth"],
    correctAnswer: "32 teeth",
    unitId: 2,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "How many bones are there in the adult human body?",
    answers: ["206 bones", "32 bones", "100 bones", "500 bones"],
    correctAnswer: "206 bones",
    unitId: 2,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "How many beats does our heart make on average every twenty-four hours?",
    answers: ["about 100,000 beats", "about 1,000 beats", "about 5,000 beats", "about 10,000 beats"],
    correctAnswer: "about 100,000 beats",
    unitId: 2,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "How did the clever thirsty crow get the water to rise in the jar?",
    answers: ["She dropped small stones one by one into the jar", "She pushed the jar over", "She waited for heavy rain", "She used a straw"],
    correctAnswer: "She dropped small stones one by one into the jar",
    unitId: 2,
    lessonId: 4,
    type: "trivia"
  },
  {
    question: "Why was Hassan late for school in his dream about a day without numbers?",
    answers: ["There were no numbers on his clock or on the buses", "His bicycle had a flat tyre", "He lost his shoes", "It rained heavily"],
    correctAnswer: "There were no numbers on his clock or on the buses",
    unitId: 2,
    lessonId: 6,
    type: "trivia"
  },
  {
    question: "Which professional uses maths to calculate how much wood to use for tables and chairs?",
    answers: ["A carpenter", "An astronaut", "A nurse", "A shopkeeper"],
    correctAnswer: "A carpenter",
    unitId: 2,
    lessonId: 7,
    type: "trivia"
  },
  {
    question: "How many days are there in three normal years?",
    answers: ["1095 days", "365 days", "1200 days", "500 days"],
    correctAnswer: "1095 days",
    unitId: 2,
    lessonId: 3,
    type: "trivia"
  },

  // ==================== UNIT 3: Inventions and New Things ====================
  {
    question: "Which of these ways to travel is the newest?",
    answers: ["A rocket", "A bicycle", "A car", "A horse"],
    correctAnswer: "A rocket",
    unitId: 3,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "Granddad told Ahmed that motor pumps are faster, but a traditional saqia is:",
    answers: ["cleaner, quieter and cheaper to use", "dirtier and dearer", "made of plastic", "pulled by rockets"],
    correctAnswer: "cleaner, quieter and cheaper to use",
    unitId: 3,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "Which animals typically pull a saqia to lift water into irrigation canals?",
    answers: ["donkeys or cows", "sharks or crocodiles", "birds", "falcons"],
    correctAnswer: "donkeys or cows",
    unitId: 3,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "Why do doctors and nurses give vaccinations to children?",
    answers: ["To protect them against diseases like tetanus and measles", "To make them run faster", "To help them sleep", "To teach them maths"],
    correctAnswer: "To protect them against diseases like tetanus and measles",
    unitId: 3,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "Where and when was Leonardo da Vinci born?",
    answers: ["In Italy in 1452", "In Sudan in 1834", "In India in 1592", "In Egypt in 1956"],
    correctAnswer: "In Italy in 1452",
    unitId: 3,
    lessonId: 4,
    type: "trivia"
  },
  {
    question: "What did Leonardo da Vinci study carefully to think of ideas for flying machines?",
    answers: ["birds, animals and plants", "steam trains and ships", "mobile phones", "pyramids"],
    correctAnswer: "birds, animals and plants",
    unitId: 3,
    lessonId: 4,
    type: "trivia"
  },
  {
    question: "What did the poor traveller put in his pot on a cold winter night to trick the villagers?",
    answers: ["water and a clean stone", "gold coins", "hot milk", "dates and mangoes"],
    correctAnswer: "water and a clean stone",
    unitId: 3,
    lessonId: 5,
    type: "trivia"
  },
  {
    question: "What ingredients did the villagers add to make the stone soup complete?",
    answers: ["salt, onions, carrots, cabbage and meat", "sugar, honey and tea", "stones, wood and clay", "oranges and bananas"],
    correctAnswer: "salt, onions, carrots, cabbage and meat",
    unitId: 3,
    lessonId: 6,
    type: "trivia"
  },
  {
    question: "According to the unit review poem, what is the best invention when you are hot?",
    answers: ["a cold ice cream", "an air conditioner", "a fan", "a motor pump"],
    correctAnswer: "a cold ice cream",
    unitId: 3,
    lessonId: 8,
    type: "trivia"
  },

  // ==================== UNIT 4: Wonders of the World ====================
  {
    question: "Which wonder is considered the oldest wonder of the world (about 4,800 years old)?",
    answers: ["The Great Pyramid in Egypt", "The Colosseum in Rome", "The Taj Mahal in India", "The Great Wall of China"],
    correctAnswer: "The Great Pyramid in Egypt",
    unitId: 4,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "In which city and country is the beautiful white marble Taj Mahal located?",
    answers: ["In Agra, India", "In Rome, Italy", "In Cairo, Egypt", "In Lima, Peru"],
    correctAnswer: "In Agra, India",
    unitId: 4,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "How long did it take to build the Taj Mahal, and how many workers worked there?",
    answers: ["It took 20 years with 20,000 workers", "It took 5 years with 1,000 workers", "It took 50 years with 500 workers", "It took 100 years"],
    correctAnswer: "It took 20 years with 20,000 workers",
    unitId: 4,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "Who built the ancient stone city of Petra in Jordan about 2,000 years ago?",
    answers: ["Bedouin Arabs", "The Incas", "Giuseppe Ferlini", "The Romans"],
    correctAnswer: "Bedouin Arabs",
    unitId: 4,
    lessonId: 4,
    type: "trivia"
  },
  {
    question: "How many ancient pyramids has Sudan got in places like Meroe?",
    answers: ["about 220 pyramids", "118 pyramids", "40 pyramids", "12 pyramids"],
    correctAnswer: "about 220 pyramids",
    unitId: 4,
    lessonId: 5,
    type: "trivia"
  },
  {
    question: "What trade made the ancient Sudanese Kingdom of Kush very rich?",
    answers: ["trade in iron", "trade in silk", "trade in ice cream", "trade in plastic"],
    correctAnswer: "trade in iron",
    unitId: 4,
    lessonId: 5,
    type: "trivia"
  },
  {
    question: "Who was Giuseppe Ferlini, and what did he do in Sudan in 1834?",
    answers: ["An Italian who damaged about 40 pyramids looking for gold treasure", "A doctor who built the pyramids", "An Indian emperor", "A Chinese architect"],
    correctAnswer: "An Italian who damaged about 40 pyramids looking for gold treasure",
    unitId: 4,
    lessonId: 5,
    type: "trivia"
  },
  {
    question: "How long is the Great Wall of China according to Lee and Salah's dialogue?",
    answers: ["more than 6,000 kilometres long", "600 kilometres long", "60 kilometres long", "2,500 kilometres long"],
    correctAnswer: "more than 6,000 kilometres long",
    unitId: 4,
    lessonId: 7,
    type: "trivia"
  },
  {
    question: "What ancient wonder was the biggest theatre in the world, located in Rome, Italy?",
    answers: ["The Colosseum", "Petra", "Machu Picchu", "The Pyramids of Meroe"],
    correctAnswer: "The Colosseum",
    unitId: 4,
    lessonId: 8,
    type: "trivia"
  },

  // ==================== UNIT 5: Special Days ====================
  {
    question: "Where did Fatma's class go on their school trip, leaving before seven in the morning?",
    answers: ["Sabaloka Cataract on the River Nile", "Dinder Park", "Port Sudan beach", "The Great Wall"],
    correctAnswer: "Sabaloka Cataract on the River Nile",
    unitId: 5,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "What activities can tourists enjoy at the Tourism and Shopping Festival in Port Sudan?",
    answers: ["Relaxing on beaches, boat tours, and diving in the Red Sea", "Climbing the pyramids", "Building a saqia", "Making stone soup"],
    correctAnswer: "Relaxing on beaches, boat tours, and diving in the Red Sea",
    unitId: 5,
    lessonId: 4,
    type: "trivia"
  },
  {
    question: "Complete the Hadith lesson: 'Who should I honour and give my love to, after Allah and Rasulullah?'",
    answers: ["Your mother! Your mother! Your mother! And after my mother? Your father!", "Your teacher! Your teacher!", "Your brother!", "Your friend!"],
    correctAnswer: "Your mother! Your mother! Your mother! And after my mother? Your father!",
    unitId: 5,
    lessonId: 5,
    type: "trivia"
  },
  {
    question: "How did the clever little wren win the flying competition against the strong falcon?",
    answers: ["She sat on the falcon's back and flew higher when he was tired", "She flew inside an airplane", "She ran along the ground", "She sang loudly"],
    correctAnswer: "She sat on the falcon's back and flew higher when he was tired",
    unitId: 5,
    lessonId: 6,
    type: "trivia"
  },
  {
    question: "When the cat caught the wren, what did the wren do to escape?",
    answers: ["She sang a song for help so the other birds flew to rescue her", "She gave the cat cheese", "She bit the cat's nose", "She played dead"],
    correctAnswer: "She sang a song for help so the other birds flew to rescue her",
    unitId: 5,
    lessonId: 6,
    type: "trivia"
  },
  {
    question: "What do Salah and his father do first on the morning of Eid al-Fitr?",
    answers: ["Put on best clean clothes and walk to the mosque for Eid prayers", "Play football in the street", "Go to Port Sudan", "Sleep all day"],
    correctAnswer: "Put on best clean clothes and walk to the mosque for Eid prayers",
    unitId: 5,
    lessonId: 7,
    type: "trivia"
  },

  // ==================== UNIT 6: Health ====================
  {
    question: "Complete the body chant: 'We need legs to take our weight, a backbone and a neck to hold our head...'",
    answers: ["straight", "down", "round", "fast"],
    correctAnswer: "straight",
    unitId: 6,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "What is the irregular plural form of 'one tooth' and 'one foot' in English?",
    answers: ["teeth and feet", "tooths and foots", "toothes and feets", "teeths and feet"],
    correctAnswer: "teeth and feet",
    unitId: 6,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "Which home safety rule is correct according to Lesson 2?",
    answers: ["You mustn't leave shopping bags on the floor where a child can fall over them", "You should play with matches", "You should leave sharp knives on low tables", "You must leave medicine near children"],
    correctAnswer: "You mustn't leave shopping bags on the floor where a child can fall over them",
    unitId: 6,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "Which food group build our muscles and includes meat, chicken, fish, eggs and beans?",
    answers: ["Protein", "Carbohydrate", "Fat", "Sugars"],
    correctAnswer: "Protein",
    unitId: 6,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "How does regular exercise benefit children according to Lesson 4?",
    answers: ["Builds muscles and bones, keeps heart healthy, and lowers blood pressure", "Makes them sleep in class", "Makes bones weaker", "Gives them high fever"],
    correctAnswer: "Builds muscles and bones, keeps heart healthy, and lowers blood pressure",
    unitId: 6,
    lessonId: 4,
    type: "trivia"
  },
  {
    question: "Why did Murad's parents not believe him when he was really ill in Lesson 5?",
    answers: ["Because he had lied four times before claiming he had a high fever", "Because the clinic was closed", "Because he had no fever", "Because he ran away"],
    correctAnswer: "Because he had lied four times before claiming he had a high fever",
    unitId: 6,
    lessonId: 5,
    type: "trivia"
  },
  {
    question: "What should you do before crossing a street according to the road safety rules?",
    answers: ["Look left, look right, look left again and check", "Run across as fast as possible", "Close your eyes", "Walk in the middle of cars"],
    correctAnswer: "Look left, look right, look left again and check",
    unitId: 6,
    lessonId: 7,
    type: "trivia"
  },
  {
    question: "What should you wear when out on roads at night so drivers see you clearly?",
    answers: ["bright clothes", "black clothes", "sunglasses", "swimwear"],
    correctAnswer: "bright clothes",
    unitId: 6,
    lessonId: 7,
    type: "trivia"
  },

  // ==================== UNIT 7: One More Time ====================
  {
    question: "What does the green Earth poem tell us to remember when leaving a room?",
    answers: ["Remember to stop and turn out the light", "Leave the tap running", "Throw rubbish on the floor", "Open all doors"],
    correctAnswer: "Remember to stop and turn out the light",
    unitId: 7,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "What four boxes do pupils set up in class for recycling materials?",
    answers: ["Glass, Metal, Plastic, and Paper", "Gold, Silver, Iron, and Bronze", "Apples, Oranges, Bananas, and Grapes", "Clothes, Shoes, Hats, and Bags"],
    correctAnswer: "Glass, Metal, Plastic, and Paper",
    unitId: 7,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "Near the River Nile, what does Khaled the brick maker mix to make building bricks?",
    answers: ["clay, water and straw", "metal and glass", "plastic and paper", "sand and cement"],
    correctAnswer: "clay, water and straw",
    unitId: 7,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "Where and on what material did people first write symbols for words 5,200 years ago?",
    answers: ["In Iraq, on wet clay tablets", "In China, on mobile phones", "In Rome, on glass", "In Peru, on wood"],
    correctAnswer: "In Iraq, on wet clay tablets",
    unitId: 7,
    lessonId: 4,
    type: "trivia"
  },
  {
    question: "How did the clever fox get the cheese from the crow in the forest?",
    answers: ["He flattered her beautiful voice so she opened her beak to sing", "He climbed the tree", "He threw a stone at her", "He waited until night"],
    correctAnswer: "He flattered her beautiful voice so she opened her beak to sing",
    unitId: 7,
    lessonId: 5,
    type: "trivia"
  },
  {
    question: "Who built the ancient lost city of Machu Picchu high in the Andes mountains around 1450?",
    answers: ["The Incas in Peru", "The Pharaohs in Egypt", "The Bedouin Arabs", "The Romans"],
    correctAnswer: "The Incas in Peru",
    unitId: 7,
    lessonId: 6,
    type: "trivia"
  },
  {
    question: "At the school graduation ceremony, who do the pupils thank for their success?",
    answers: ["Their principal, teachers, and parents", "The bus driver and shopkeeper", "The tourists", "The doctor and nurse"],
    correctAnswer: "Their principal, teachers, and parents",
    unitId: 7,
    lessonId: 7,
    type: "trivia"
  }
];

/**
 * Generates a randomized array of questions based on selected parameters.
 * Automatically guarantees up to 30 unique questions by dynamically manufacturing
 * vocabulary, spelling, and sentence matching questions from the standard units words list.
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

  // 2. BACKUP CONSTRUCTORS - fulfill questions if pool is smaller than limit
  const activeUnitIds = scope === "all" 
    ? SMILE_UNITS.map(u => u.id) 
    : [targetUnitId];

  // Fetch words that fall into our scope
  const targetWords = SMILE_UNITS
    .filter(u => activeUnitIds.includes(u.id))
    .flatMap(u => u.words);

  // Dynamic Generator Type A: Image emoji matching
  targetWords.forEach((wordObj) => {
    if (finalQuestions.length >= 60) return;
    
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

  // Shuffle and slice to the custom requested limit (up to 30)
  const randomizedSubset = finalQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(limit, 30));

  return randomizedSubset;
}
