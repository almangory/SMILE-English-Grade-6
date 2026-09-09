import { UnitItem } from "./types";

export const SMILE_UNITS: UnitItem[] = [
  {
    id: 1,
    title: "Back to School",
    arabicTitle: "العودة إلى المدرسة",
    color: "bg-blue-400 text-blue-950 border-blue-600",
    icon: "🎒",
    illustration: "/illustrations/unit1_back_to_school.jpg",
    words: [
      { id: "w1-1", word: "Secretary Bird", arabic: "طائر الكاتب / صقر الجديان", image: "🦅", example: "The secretary bird is the emblem of Sudan.", soundText: "The secretary bird is the emblem of Sudan.", unit: 1 },
      { id: "w1-2", word: "Emblem", arabic: "شعار رسمي", image: "🇸🇩", example: "The secretary bird is the emblem of our country.", soundText: "The secretary bird is the emblem of our country.", unit: 1 },
      { id: "w1-3", word: "Timetable", arabic: "جدول دراسي", image: "📅", example: "We have got Science at half past nine on our timetable.", soundText: "We have got Science at half past nine on our timetable.", unit: 1 },
      { id: "w1-4", word: "Independent", arabic: "مستقل", image: "🚩", example: "On 1st January 1956 Sudan became an independent country.", soundText: "On the first of January 1956 Sudan became an independent country.", unit: 1 },
      { id: "w1-5", word: "Crocodile", arabic: "تمساح النيل", image: "🐊", example: "Nile crocodiles are big and live in the river.", soundText: "Nile crocodiles are big and live in the river.", unit: 1 },
      { id: "w1-6", word: "Ostrich", arabic: "نعامة", image: "🦤", example: "An ostrich is a big bird that lives in deserts.", soundText: "An ostrich is a big bird that lives in deserts.", unit: 1 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: Welcome Back & Timetable",
        type: "conversation",
        illustration: "/illustrations/unit1_back_to_school.jpg",
        content: {
          songText: "Welcome back from holiday! Welcome back to school today!\nIt was nice with your family, with your mum and dad.\nBut you're with your friends, so don't be sad!\nThere's science and maths, lots of subjects are new.\nThere's geography and history, and English too!\nSmile! Be happy! Be happy you are here,\nTo learn lots of new things in school this year!",
          dialogue: [
            { speaker: "Sara", text: "When is Science on Sunday?", voice: "Zephyr" },
            { speaker: "Osama", text: "It's at half past nine.", voice: "Kore" },
            { speaker: "Sara", text: "Which days have got History?", voice: "Zephyr" },
            { speaker: "Osama", text: "We've got History on Monday and Tuesday.", voice: "Kore" },
            { speaker: "Sara", text: "What do we study first on Sunday?", voice: "Zephyr" },
            { speaker: "Osama", text: "We study Arabic at eight o'clock.", voice: "Kore" }
          ]
        }
      },
      {
        id: 2,
        title: "Lesson 2: Children's Holidays",
        type: "conversation",
        illustration: "/illustrations/unit1_lesson2_holiday.jpg",
        content: {
          dialogue: [
            { speaker: "Osama", text: "I was in Port Sudan with my brother. My beach holiday was great!", voice: "Kore" },
            { speaker: "Sara", text: "I was in the country at my uncle's farm. We were very busy.", voice: "Zephyr" },
            { speaker: "Mona", text: "I was in Dubai with my aunt and her family. It was very hot!", voice: "Puck" },
            { speaker: "Hassan", text: "I was with my family in Khartoum. It was boring without school.", voice: "Charon" }
          ]
        }
      },
      {
        id: 3,
        title: "Lesson 3: Along the River Nile",
        type: "song",
        illustration: "/illustrations/unit1_lesson3_nile.jpg",
        content: {
          songText: "Along the River Nile, dates grow on tall palm trees,\nAnd sharks swim in the warm waters of the Red Sea.\nCamels walk on the sand through the desert heat,\nAnd birds fly over the mountains of the west and east.\nHerders look after their cattle in the evening dark,\nElephants and ibexes sleep in Dinder Park.\nEvery man, woman and child across our great land,\nStand up and say: 'This is our Sudan!'"
        }
      },
      {
        id: 4,
        title: "Lesson 4: The Secretary Bird",
        type: "conversation",
        illustration: "/illustrations/unit1_secretary_bird.jpg",
        content: {
          dialogue: [
            { speaker: "Amna", text: "What is the official emblem of Sudan?", voice: "Zephyr" },
            { speaker: "Hassan", text: "The secretary bird is the emblem of Sudan. Sudanese people like these birds.", voice: "Kore" },
            { speaker: "Amna", text: "What colour are their faces?", voice: "Zephyr" },
            { speaker: "Hassan", text: "Young birds have got yellow faces, but adult secretary birds have got red faces.", voice: "Kore" },
            { speaker: "Amna", text: "Why can secretary birds run so fast?", voice: "Zephyr" },
            { speaker: "Hassan", text: "Because they have got long legs! They are 1m 30cm tall and eat snakes and small animals.", voice: "Kore" }
          ]
        }
      },
      {
        id: 5,
        title: "Lesson 5: Sukkar and the Crocodile (Part 1)",
        type: "conversation",
        illustration: "/illustrations/unit1_sukkar_monkey.jpg",
        content: {
          dialogue: [
            { speaker: "Sukkar", text: "Hello Mr Crocodile! These delicious mangoes are for your wife.", voice: "Puck" },
            { speaker: "Mr Crocodile", text: "Thank you Sukkar! You always give us mangoes. Come to lunch with us today.", voice: "Charon" },
            { speaker: "Mrs Crocodile", text: "I want meat, not mangoes! Bring me the heart of the monkey!", voice: "Zephyr" },
            { speaker: "Mr Crocodile", text: "Never mind, Sukkar. Mrs Crocodile wants to eat your heart today, not mangoes!", voice: "Charon" }
          ]
        }
      },
      {
        id: 6,
        title: "Lesson 6: Sukkar's Escape (Part 2)",
        type: "conversation",
        illustration: "/illustrations/unit1_lesson6_sukkar_escape.jpg",
        content: {
          dialogue: [
            { speaker: "Sukkar", text: "My heart is in my house in the tree! Can we go back and get it for Mrs Crocodile?", voice: "Puck" },
            { speaker: "Mr Crocodile", text: "Yes, let's swim back to your tree quickly.", voice: "Charon" },
            { speaker: "Sukkar", text: "Haha! I don't want lunch. I'm not hungry! Bye Mr Crocodile!", voice: "Puck" },
            { speaker: "Mr Crocodile", text: "Mrs Crocodile, Sukkar isn't coming to lunch. He says he isn't hungry.", voice: "Charon" },
            { speaker: "Mrs Crocodile", text: "Sukkar isn't hungry, but I am! And I am very angry!", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 7,
        title: "Lesson 7: Sudan Independence Day",
        type: "song",
        illustration: "/illustrations/unit1_lesson7_independence.jpg",
        content: {
          songText: "It is the first of January, 1956. It is a sunny and hot day here in Khartoum, and a beautiful day for Sudan! Prime Minister Ismail Al-Azhari is raising the Sudanese flag. There are thousands of people in the streets. Men, women and children are standing and watching. People are clapping, children are waving flags and cheering. Sudan is now an independent country! Everyone is happy and smiling."
        }
      },
      {
        id: 8,
        title: "Lesson 8: Unit 1 Revision & Ostrich",
        type: "song",
        illustration: "/illustrations/unit1_ostrich_desert.jpg",
        content: {
          songText: "An ostrich lives usually in deserts. It weighs about 60 kilograms. Its colour is black and white. Its wings are sometimes 2 metres long! It cannot fly, but it can run very fast across the desert sand. Review words: adult, child, daughter, history, geography, timetable, emblem, crocodile."
        }
      }
    ]
  },
  {
    id: 2,
    title: "Maths in our Life",
    arabicTitle: "الرياضيات في حياتنا",
    color: "bg-orange-400 text-orange-950 border-orange-600",
    icon: "🧮",
    illustration: "/illustrations/unit2_maths_life.jpg",
    words: [
      { id: "w2-1", word: "Calculate", arabic: "يحسب", image: "💻", example: "We use numbers when we need to calculate.", soundText: "We use numbers when we need to calculate things.", unit: 2 },
      { id: "w2-2", word: "Symbol", arabic: "رمز", image: "➕", example: "Arabs invented new symbols for the numbers one to nine.", soundText: "Arabs invented new symbols for the numbers one to nine.", unit: 2 },
      { id: "w2-3", word: "Pyramid", arabic: "هرم", image: "🔺", example: "Sudanese people used numbers when they built pyramids.", soundText: "Sudanese people used numbers when they built pyramids.", unit: 2 },
      { id: "w2-4", word: "Thirsty", arabic: "عطشان", image: "🥵", example: "One day a crow was thirsty and wanted some water.", soundText: "One day a crow was thirsty and wanted some water.", unit: 2 },
      { id: "w2-5", word: "Stones", arabic: "أحجار", image: "🪨", example: "She dropped stones into the jar to make the water rise.", soundText: "She dropped stones into the jar to make the water rise.", unit: 2 },
      { id: "w2-6", word: "Heart", arabic: "قلب", image: "❤️", example: "Our heart makes about a hundred thousand beats every 24 hours.", soundText: "Our heart makes about a hundred thousand beats every twenty-four hours.", unit: 2 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: Numbers Everywhere & Dates",
        type: "song",
        illustration: "/illustrations/unit2_maths_life.jpg",
        content: {
          songText: "Look to the left and look to the right,\nAnd look up and down.\nWhich numbers can we see,\nWhen we look around?\nNumbers, numbers everywhere,\nNumbers when we look\nAt prices, computers and mobile phones,\nOr on the pages of our book.\nNumbers on coins, numbers on money,\nNumbers to give the time or date,\nNumbers on watches, numbers on clocks,\nNumbers to count or calculate!\n\nDates Practice:\n- 23rd March 2020: The twenty-third of March, two thousand and twenty.\n- 5th December 1868: The fifth of December, eighteen sixty-eight.\n- 30th April 1968: The thirtieth of April, nineteen sixty-eight.\n- 2nd July 2013: The second of July, two thousand and thirteen."
        }
      },
      {
        id: 2,
        title: "Lesson 2: History of Numbers",
        type: "conversation",
        illustration: "/illustrations/unit2_lesson2_history_numbers.jpg",
        content: {
          dialogue: [
            { speaker: "Salah", text: "When did people first start to count?", voice: "Kore" },
            { speaker: "Elham", text: "25,000 years ago, people lived in caves. They drew symbols on cave walls to count.", voice: "Zephyr" },
            { speaker: "Salah", text: "When were the pyramids built?", voice: "Kore" },
            { speaker: "Elham", text: "5,000 years ago, Sudanese and Egyptian people built pyramids using maths and numbers.", voice: "Zephyr" },
            { speaker: "Salah", text: "Who invented zero and modern number symbols?", voice: "Kore" },
            { speaker: "Elham", text: "2,000 years ago Indians invented zero, and 1,000 years ago Arabs invented symbols 1 to 9!", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 3,
        title: "Lesson 3: Amazing Body Numbers",
        type: "song",
        illustration: "/illustrations/unit2_lesson3_body_numbers.jpg",
        content: {
          songText: "Our body is full of amazing numbers!\n- 32: The number of teeth in our mouth.\n- 206: The number of bones in our body.\n- 100,000: The average number of hairs on a human head.\n- 100,000: The average number of beats our heart makes in 24 hours.\n- 5,000: The average number of steps we take in one day.\n- 1095: The number of days in three years.\n- Our heart weighs about 300 grams and pumps blood in only 20 seconds."
        }
      },
      {
        id: 4,
        title: "Lesson 4: The Thirsty Crow",
        type: "conversation",
        illustration: "/illustrations/unit2_thirsty_crow.jpg",
        content: {
          dialogue: [
            { speaker: "Hassan", text: "One hot day, a thirsty crow flew over the fields looking for water.", voice: "Puck" },
            { speaker: "Ahmed", text: "She saw a water jar, but the water inside was too low for her beak!", voice: "Kore" },
            { speaker: "Hassan", text: "What did the clever crow do?", voice: "Puck" },
            { speaker: "Ahmed", text: "She looked around and saw small stones. She dropped them one by one into the jar.", voice: "Kore" },
            { speaker: "Hassan", text: "Did the water rise up?", voice: "Puck" },
            { speaker: "Ahmed", text: "Yes! Little by little the water rose to the top and the crow could drink happily.", voice: "Kore" }
          ]
        }
      },
      {
        id: 5,
        title: "Lesson 5: Pyramids Trip (Quantities)",
        type: "conversation",
        illustration: "/illustrations/unit2_lesson5_pyramids_trip.jpg",
        content: {
          dialogue: [
            { speaker: "Teacher", text: "How much fruit and food do we need for the bus trip?", voice: "Charon" },
            { speaker: "Sara", text: "We need 40 oranges, 4 kilograms of grapes, and 40 sandwiches.", voice: "Zephyr" },
            { speaker: "Teacher", text: "How many bottles of water do we have?", voice: "Charon" },
            { speaker: "Elham", text: "We have got 50 bottles of water and 30 cartons of juice.", voice: "Puck" },
            { speaker: "Teacher", text: "How many seats are there on the bus?", voice: "Charon" },
            { speaker: "Mona", text: "There are 35 seats for pupils and 4 seats for teachers.", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 6,
        title: "Lesson 6: Hassan's Bad Dream",
        type: "song",
        content: {
          songText: "Hassan didn't sleep well last night. He had a bad dream about a day without numbers!\nHe couldn't read his clock, so he got up late.\nHe couldn't watch TV because there were no channel numbers.\nHe couldn't catch the bus because there were no bus numbers.\nHe couldn't phone his friends, buy anything, or find his page in his book!\nWhen he woke up and saw numbers on his phone and clock, he was very happy!"
        }
      },
      {
        id: 7,
        title: "Lesson 7: Maths in Different Jobs",
        type: "song",
        illustration: "/illustrations/unit2_lesson7_maths_jobs.jpg",
        content: {
          songText: "Maths is important in many jobs:\n- A nurse uses maths to take temperatures and check blood pressure.\n- A builder uses maths to calculate the number of bricks and materials for a house.\n- A shopkeeper uses maths to weigh food and calculate prices.\n- A teacher uses numbers to help young people learn.\n- A carpenter uses maths to calculate how much wood to use for chairs and tables.\n- An astronaut uses maths to control rockets in space."
        }
      },
      {
        id: 8,
        title: "Lesson 8: Unit 2 Revision",
        type: "song",
        content: {
          songText: "Reviewing numbers and grammar: We use 'how much' for uncountable things like water, money and fruit. We use 'how many' for countable things like oranges, bottles and teeth. Remember: People started to count 25,000 years ago. Indians invented zero, and Arabs gave the world numbers 1 to 9."
        }
      }
    ]
  },
  {
    id: 3,
    title: "Inventions and New Things",
    arabicTitle: "الاختراعات والأشياء الجديدة",
    color: "bg-purple-400 text-purple-950 border-purple-600",
    icon: "💡",
    illustration: "/illustrations/unit3_inventions.jpg",
    words: [
      { id: "w3-1", word: "Shadoof", arabic: "شادوف", image: "🪵", example: "A shadoof is smaller than a saqia.", soundText: "A shadoof is smaller than a saqia.", unit: 3 },
      { id: "w3-2", word: "Saqia", arabic: "ساقية", image: "🎡", example: "Animals like donkeys or cows pull the saqia.", soundText: "Animals like donkeys or cows pull the saqia.", unit: 3 },
      { id: "w3-3", word: "Pump", arabic: "مضخة ميكانيكية", image: "⛽", example: "Pumps are faster than shadoofs or saqias.", soundText: "Pumps are faster than shadoofs or saqias.", unit: 3 },
      { id: "w3-4", word: "Vaccination", arabic: "تطعيم / لقاح", image: "💉", example: "Vaccinations protect children against tetanus and measles.", soundText: "Vaccinations protect children against tetanus and measles.", unit: 3 },
      { id: "w3-5", word: "Parachute", arabic: "مظلة هبوط", image: "🪂", example: "Leonardo da Vinci drew ideas for a parachute.", soundText: "Leonardo da Vinci drew ideas for a parachute.", unit: 3 },
      { id: "w3-6", word: "Dear", arabic: "غالٍ في السعر", image: "💰", example: "Motor pumps are faster, but they are dearer and dirtier.", soundText: "Motor pumps are faster, but they are dearer and dirtier.", unit: 3 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: Ways to Travel & Communicate",
        type: "conversation",
        illustration: "/illustrations/unit3_lesson1_travel.jpg",
        content: {
          dialogue: [
            { speaker: "Ali", text: "Which is the newest of these ways to travel?", voice: "Kore" },
            { speaker: "Omar", text: "I think a rocket is the newest way to travel, and a bike is the cheapest.", voice: "Zephyr" },
            { speaker: "Ali", text: "Is a text message a better way to communicate than a letter?", voice: "Kore" },
            { speaker: "Omar", text: "Yes, sending a text is much faster and easier than writing a letter.", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 2,
        title: "Lesson 2: Irrigation Inventions",
        type: "conversation",
        illustration: "/illustrations/unit3_inventions.jpg",
        content: {
          dialogue: [
            { speaker: "Ahmed", text: "Granddad, how do you get water from the River Nile to the fields?", voice: "Kore" },
            { speaker: "Granddad", text: "Look Ahmed. This saqia lifts water from the river into the canals.", voice: "Charon" },
            { speaker: "Ahmed", text: "I saw motor pumps from the bus. Aren't pumps faster?", voice: "Kore" },
            { speaker: "Granddad", text: "Yes, motor pumps are faster, but a saqia is cleaner, quieter, and cheaper to use!", voice: "Charon" },
            { speaker: "Ahmed", text: "And what about the shadoof?", voice: "Kore" },
            { speaker: "Granddad", text: "A shadoof is older and slower than a saqia, but farmers used it for thousands of years.", voice: "Charon" }
          ]
        }
      },
      {
        id: 3,
        title: "Lesson 3: Staying Healthy & Vaccinations",
        type: "song",
        illustration: "/illustrations/unit3_lesson3_vaccines.jpg",
        content: {
          songText: "Rules to stay healthy:\n- We must clean our teeth after we eat.\n- We must wash our hands before meals.\n- We must drink clean water when we exercise.\n- We mustn't watch lots of TV all day.\n- We mustn't eat lots of junk food and sweets.\n- Health Facts: Vaccinations are important inventions! Doctors and nurses give vaccinations to protect children and adults against dangerous diseases like tetanus and measles."
        }
      },
      {
        id: 4,
        title: "Lesson 4: Leonardo da Vinci",
        type: "song",
        illustration: "/illustrations/unit3_da_vinci.jpg",
        content: {
          songText: "Leonardo da Vinci was born in Italy in 1452. When he was a boy, he was always outside studying birds, animals and plants carefully. When he was an adult, he was a famous artist who painted wonderful pictures. He was also a brilliant inventor who thought of ideas for rockets, planes, helicopters and parachutes hundreds of years before they were built!"
        }
      },
      {
        id: 5,
        title: "Lesson 5: The Winter Traveller",
        type: "song",
        content: {
          songText: "A poor traveller arrived in a village late on a cold night in winter. The moon and stars were in the sky. The traveller didn't have any food or money. He went from house to house asking: 'Can you help me?' But no one gave him food. The answer was always: 'I can't help, ask my neighbour.' The traveller was cold and hungry, so he thought of a clever new 'invention'!"
        }
      },
      {
        id: 6,
        title: "Lesson 6: Making Stone Soup",
        type: "conversation",
        illustration: "/illustrations/unit3_lesson6_stone_soup.jpg",
        content: {
          dialogue: [
            { speaker: "Villager 1", text: "What are you doing over that fire?", voice: "Zephyr" },
            { speaker: "Traveller", text: "I'm making stone soup! It is almost ready, but it needs some salt.", voice: "Kore" },
            { speaker: "Villager 1", text: "I have got some salt! Here, put it in.", voice: "Zephyr" },
            { speaker: "Villager 2", text: "Are you cooking soup? Have you got any onions and carrots?", voice: "Puck" },
            { speaker: "Traveller", text: "No, onions and carrots would make stone soup delicious!", voice: "Kore" },
            { speaker: "Villager 3", text: "I have got cabbage and meat for the soup. Let's all eat together!", voice: "Charon" }
          ]
        }
      },
      {
        id: 7,
        title: "Lesson 7: Using Computers and the Internet",
        type: "song",
        content: {
          songText: "Computers and the Internet are wonderful modern inventions!\n- We can use the Internet to look for important information.\n- We can use the Internet to shop online.\n- We can use the Internet to write and send emails.\n- We can use the Internet to chat to friends online and send photos.\n- We can use digital maps on the Internet to help know where we are."
        }
      },
      {
        id: 8,
        title: "Lesson 8: Unit 3 Revision",
        type: "song",
        content: {
          songText: "There are air conditioners and computers in many of our homes.\nThere are many new inventions and lots of new machines.\nBut the best invention when you're hot is a cold ice cream!\nReview vocabulary: artist, clever, fresh, internet, motor pump, shadoof, saqia, vaccination, parachute."
        }
      }
    ]
  },
  {
    id: 4,
    title: "Wonders of the World",
    arabicTitle: "عجائب العالم",
    color: "bg-cyan-400 text-cyan-950 border-cyan-600",
    icon: "🏛️",
    illustration: "/illustrations/unit4_meroe_pyramids.jpg",
    words: [
      { id: "w4-1", word: "Wonder", arabic: "أعجوبة", image: "🏛️", example: "Machu Picchu is an amazing old stone wonder.", soundText: "Machu Picchu is an amazing old stone wonder.", unit: 4 },
      { id: "w4-2", word: "Tomb", arabic: "ضريح / قبر ملكي", image: "🪦", example: "The Taj Mahal is a beautiful white marble tomb.", soundText: "The Taj Mahal is a beautiful white marble tomb.", unit: 4 },
      { id: "w4-3", word: "Marble", arabic: "رخام", image: "🏛️", example: "The Taj Mahal is made of white marble.", soundText: "The Taj Mahal is made of white marble.", unit: 4 },
      { id: "w4-4", word: "Iron", arabic: "حديد", image: "🔗", example: "The Kingdom of Kush was very rich from iron trade.", soundText: "The Kingdom of Kush was very rich from iron trade.", unit: 4 },
      { id: "w4-5", word: "Theatre", arabic: "مسرح", image: "🎭", example: "The Colosseum in Rome was the biggest theatre in Europe.", soundText: "The Colosseum in Rome was the biggest theatre in Europe.", unit: 4 },
      { id: "w4-6", word: "Treasure", arabic: "كنز", image: "💎", example: "Ferlini damaged pyramids looking for gold treasure.", soundText: "Ferlini damaged pyramids looking for gold treasure.", unit: 4 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: Wonders of the World Chant",
        type: "song",
        illustration: "/illustrations/unit4_colosseum.jpg",
        content: {
          songText: "There are many wonders in the world for us all to see:\nThe Taj Mahal in India, the Colosseum in Italy.\nThe city of Petra in Jordan is old, but looks very new.\nThe city of Machu Picchu in the mountains of Peru.\nThe Great Wall of China and the Great Pyramid in Egypt too!\nWalls, mosques, palaces, cities: many wonders to see,\nIf you go and visit them, can you also pay for me?"
        }
      },
      {
        id: 2,
        title: "Lesson 2: Comparing the Wonders",
        type: "song",
        content: {
          songText: "Comparing the great wonders of the world:\n- Oldest: The Great Pyramid in Egypt is the oldest wonder of the world (about 4,800 years old).\n- Prettiest: In India, the Taj Mahal is called one of the prettiest buildings in the world.\n- Longest: The Great Wall of China is the longest wall in the world (over 6,000 km).\n- Biggest Theatre: The Colosseum in Italy was the biggest theatre in the ancient world.\n- Highest: Machu Picchu in Peru is one of the highest wonders, built high up in the mountains."
        }
      },
      {
        id: 3,
        title: "Lesson 3: The Story of Taj Mahal",
        type: "song",
        illustration: "/illustrations/unit4_taj_mahal.jpg",
        content: {
          songText: "Shah Jahan was born in 1592. He was the Muslim emperor of India from 1628 to 1658. He married Mumtaz Mahal in 1612. She died in 1631. Shah Jahan built the Taj Mahal in Agra to bury her in. Workers started to build it in 1632. 1,000 elephants carried materials and 20,000 workers worked there. It took 20 years to finish. It is made of white marble, and when Shah Jahan died in 1666, it was his tomb too."
        }
      },
      {
        id: 4,
        title: "Lesson 4: The Stone City of Petra",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Guide", text: "Welcome to Petra! Do you like exploring old stone cities?", voice: "Charon" },
            { speaker: "Tourist", text: "Yes! Who built this incredible city in the desert?", voice: "Zephyr" },
            { speaker: "Guide", text: "Bedouin Arabs built Petra about 2,000 years ago. It was a rich centre of trade.", voice: "Charon" },
            { speaker: "Tourist", text: "How did they build these huge buildings?", voice: "Zephyr" },
            { speaker: "Guide", text: "They cut directly into the sides of the sandstone mountains and carved over 800 buildings, tombs and caves!", voice: "Charon" }
          ]
        }
      },
      {
        id: 5,
        title: "Lesson 5: Pyramids of Meroë (Kush)",
        type: "song",
        illustration: "/illustrations/unit4_meroe_pyramids.jpg",
        content: {
          songText: "For 1,100 years, Kush was an important kingdom in Sudan. It started about 2,700 years ago in Napata and then moved to Meroë. Kush was very rich from its trade in iron. Sudan has got amazing pyramids: there are about 220 pyramids in Sudan, while Egypt has got 118! Sudanese pyramids are smaller than Egyptian pyramids, but they are steeper and more numerous. In 1834, an Italian named Giuseppe Ferlini damaged about 40 pyramids searching for gold."
        }
      },
      {
        id: 6,
        title: "Lesson 6: The Camels at Meroë",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Camel 1", text: "Where are we going through the desert?", voice: "Puck" },
            { speaker: "Camel 2", text: "The place is called Meroë. We are carrying an Italian doctor named Giuseppe Ferlini.", voice: "Charon" },
            { speaker: "Camel 1", text: "Why aren't the men sleeping tonight? What's that loud noise?", voice: "Puck" },
            { speaker: "Camel 2", text: "They are blowing up the top of the pyramid! They are looking for treasure.", voice: "Charon" },
            { speaker: "Camel 1", text: "They're crazy! They shouldn't do that! The pyramids of Meroë are old and important!", voice: "Puck" }
          ]
        }
      },
      {
        id: 7,
        title: "Lesson 7: The Great Wall of China",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Salah", text: "Hello Lee! How are you?", voice: "Kore" },
            { speaker: "Lee", text: "Hello Salah! I'm standing on the Great Wall in the north of China.", voice: "Zephyr" },
            { speaker: "Salah", text: "How long is the Great Wall?", voice: "Kore" },
            { speaker: "Lee", text: "It is more than 6,000 kilometres long! The oldest parts are 2,500 years old.", voice: "Zephyr" },
            { speaker: "Salah", text: "What is it made of, and why did the Chinese build it?", voice: "Kore" },
            { speaker: "Lee", text: "It is made of stone and bricks. The Chinese built it to protect China from enemies.", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 8,
        title: "Lesson 8: Unit 4 Review & The Colosseum",
        type: "song",
        content: {
          songText: "2,000 years ago, Rome in Italy was one of the biggest cities in the world. The Colosseum was a huge theatre in the centre of Rome where thousands of people watched events. Review materials: The Taj Mahal is made of marble, the Great Wall is made of stone and bricks, and our school books are made of paper."
        }
      }
    ]
  },
  {
    id: 5,
    title: "Special Days",
    arabicTitle: "الأيام والمناسبات الخاصة",
    color: "bg-red-400 text-red-950 border-red-600",
    icon: "🎉",
    illustration: "/illustrations/unit5_special_days.jpg",
    words: [
      { id: "w5-1", word: "Festival", arabic: "مهرجان", image: "🎡", example: "Port Sudan holds a great tourism and shopping festival.", soundText: "Port Sudan holds a great tourism and shopping festival.", unit: 5 },
      { id: "w5-2", word: "Wedding", arabic: "حفل زفاف", image: "💍", example: "We received an invitation to Ali and Moussa's wedding.", soundText: "We received an invitation to Ali and Moussa's wedding.", unit: 5 },
      { id: "w5-3", word: "Invitation", arabic: "بطاقة دعوة", image: "✉️", example: "Would you like to come to my sister's wedding?", soundText: "Would you like to come to my sister's wedding?", unit: 5 },
      { id: "w5-4", word: "Wren", arabic: "طائر الصعو الصغير", image: "🐦", example: "The clever little wren sat on the falcon's back.", soundText: "The clever little wren sat on the falcon's back.", unit: 5 },
      { id: "w5-5", word: "Falcon", arabic: "صقر", image: "🦅", example: "The falcon flew high, but he didn't win the race.", soundText: "The falcon flew high, but he didn't win the race.", unit: 5 },
      { id: "w5-6", word: "Graduation", arabic: "حفل تخرج", image: "🎓", example: "We celebrated my sister's university graduation party.", soundText: "We celebrated my sister's university graduation party.", unit: 5 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: Celebrate Special Days Chant",
        type: "song",
        illustration: "/illustrations/unit5_special_days.jpg",
        content: {
          songText: "Celebrate, celebrate, special days:\nEid al-Fitr, wedding invitations, school graduations,\nFestivals, Mother's Day.\nWe can smile and keep clapping,\nWhen nice things happen!\nWe can have fun and cheer,\nWhen nice things are here!\nSmile! Laugh! Take a photograph!\nCelebrate, celebrate, special days!"
        }
      },
      {
        id: 2,
        title: "Lesson 2: Sabaloka School Trip",
        type: "song",
        content: {
          songText: "January 10th - Dear Diary:\nYesterday our class went on a special school trip to Sabaloka Cataract on the River Nile! We all met early at the school and got on the bus before seven o'clock in the morning. We stopped on the way and drank tea and ate cakes. During the bus trip, we sang songs and played games. After 3 hours in the bus, we arrived in Sabaloka. We saw the rocks and had a boat tour on the River Nile. In the afternoon, we had a picnic, ate lunch and played by the river. We had a great time!"
        }
      },
      {
        id: 3,
        title: "Lesson 3: Invitations & Possessives",
        type: "conversation",
        illustration: "/illustrations/unit5_sudanese_wedding.jpg",
        content: {
          dialogue: [
            { speaker: "Hala", text: "Dear Ibtisam, would you like to come to my sister's wedding at al-Warda Hotel?", voice: "Zephyr" },
            { speaker: "Ibtisam", text: "I would love to! When is the date and time?", voice: "Kore" },
            { speaker: "Hala", text: "It's on Saturday 22nd April at 14:30. Here is your invitation.", voice: "Zephyr" },
            { speaker: "Mounir", text: "And please come to my 12th birthday party at al-Ahly Sports Club on Friday!", voice: "Puck" },
            { speaker: "Ahmed", text: "Whose bag is this on the chair? Is it Sara's?", voice: "Charon" },
            { speaker: "Hala", text: "Yes, it's hers. And these pens are theirs.", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 4,
        title: "Lesson 4: Port Sudan Festival",
        type: "song",
        content: {
          songText: "Welcome to the Port Sudan Tourism and Shopping Festival! Enjoy different activities at this great festival. Have a wonderful holiday in Port Sudan. See the interesting port with its ships from around the world. Swim in the warm waters of the Red Sea. Relax with your family on the beautiful beaches. Take a boat tour, dive in the Red Sea, and watch the amazing colourful fish and coral reefs!"
        }
      },
      {
        id: 5,
        title: "Lesson 5: Honouring Your Mother",
        type: "song",
        content: {
          songText: "Who should I honour and give my love to, after Allah and Rasulullah?\nYour mother! Your mother! Your mother!\nAnd after my mother?\nYour father!\nWho listened to you when you started to talk? Who watched you when you started to walk?\nWhen you fell down, who picked you up? Who washed your face and cleaned your cut?\nWhen you were ill, who helped you to be well? When you were afraid, who stayed up at night?\nSo say: Thank you Allah for your mother!\nSay: Alhamdulillah for your mother!\nOn Mother's Day, let's make a card for mum and say thank you."
        }
      },
      {
        id: 6,
        title: "Lesson 6: The Flying Competition & The Wren",
        type: "conversation",
        illustration: "/illustrations/unit5_falcon_wren.jpg",
        content: {
          dialogue: [
            { speaker: "Falcon", text: "I am the strongest and fastest bird! I flew higher than anyone!", voice: "Charon" },
            { speaker: "Wren", text: "Look above you! I sat quietly on your back, and when you were tired, I flew higher!", voice: "Zephyr" },
            { speaker: "Cat", text: "Aha, little wren! I caught you in the forest. Why are you singing so happily?", voice: "Puck" },
            { speaker: "Wren", text: "It's my song for help! Listen closely!", voice: "Zephyr" },
            { speaker: "Cat", text: "Oh no! All the birds of the forest are flying here to protect her! I must run away!", voice: "Puck" }
          ]
        }
      },
      {
        id: 7,
        title: "Lesson 7: Eid al-Fitr in Sudan",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Salah", text: "On Eid day, I get up very early in the morning and put on my best clean clothes.", voice: "Kore" },
            { speaker: "Father", text: "Come Salah, let's walk together to the mosque for Eid prayers.", voice: "Charon" },
            { speaker: "Salah", text: "Eid Mubarak, Dad! After prayers, everyone greets each other in the street.", voice: "Kore" },
            { speaker: "Father", text: "Eid Mubarak, son. Then we visit relatives and neighbours, eat delicious sweets, and give presents.", voice: "Charon" },
            { speaker: "Salah", text: "In the evening, our whole family goes to the park and we play games!", voice: "Kore" }
          ]
        }
      },
      {
        id: 8,
        title: "Lesson 8: Unit 5 Revision",
        type: "song",
        content: {
          songText: "Special days bring joy and unity. In Sudan we celebrate Eid al-Fitr, Eid al-Adha, weddings, school graduations, and Mother's Day. We write invitation cards, take photographs, eat special food like sweets and cakes, and spend time with beloved family and friends."
        }
      }
    ]
  },
  {
    id: 6,
    title: "Health",
    arabicTitle: "الصحة ورعاية الجسم",
    color: "bg-emerald-400 text-emerald-950 border-emerald-600",
    icon: "🩺",
    illustration: "/illustrations/unit6_health.jpg",
    words: [
      { id: "w6-1", word: "Stomach", arabic: "معدة", image: "🥗", example: "We need a stomach when we eat food.", soundText: "We need a stomach when we eat food.", unit: 6 },
      { id: "w6-2", word: "Shoulder", arabic: "كتف", image: "💪", example: "We need shoulders and elbows so our arms can bend.", soundText: "We need shoulders and elbows so our arms can bend.", unit: 6 },
      { id: "w6-3", word: "Protein", arabic: "بروتين", image: "🥩", example: "Meat, chicken, eggs and fish give us protein.", soundText: "Meat, chicken, eggs and fish give us protein.", unit: 6 },
      { id: "w6-4", word: "Carbohydrate", arabic: "كربوهيدرات", image: "🍞", example: "Bread, rice and potatoes give us carbohydrate.", soundText: "Bread, rice and potatoes give us carbohydrate.", unit: 6 },
      { id: "w6-5", word: "Knee", arabic: "ركبة", image: "🦵", example: "We need knees and legs to walk and run.", soundText: "We need knees and legs to walk and run.", unit: 6 },
      { id: "w6-6", word: "Routine", arabic: "روتين منتظم", image: "⏰", example: "Keep the same bedtime routine every night.", soundText: "Keep the same bedtime routine every night.", unit: 6 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: Parts of the Body Chant",
        type: "song",
        illustration: "/illustrations/unit6_health.jpg",
        content: {
          songText: "We need a mouth to talk with, and two eyes to see.\nWe need a face, two ears, teeth and two knees.\nWe need fingers in our gloves where our two hands end.\nWe need shoulders and elbows so our arms can bend.\nWe need a back and a body and a head on the top.\nWe need our toes in our shoes where our two feet stop.\nWe need legs on the ground to take all our weight,\nA backbone and a neck to hold our head straight!\nWe need a nose to smell with and a stomach when we eat,\nWe need a heart in our body to pump and to beat!\n\nSingular & Plural Rules:\n- one knee -> two knees\n- one elbow -> two elbows\n- one foot -> two feet\n- one tooth -> thirty-two teeth\n- one child -> many children\n- one woman -> women / one man -> men"
        }
      },
      {
        id: 2,
        title: "Lesson 2: Staying Safe at Home",
        type: "song",
        content: {
          songText: "Safety rules in our homes:\n- You mustn't leave shopping bags on the floor where a child can fall over them.\n- You mustn't leave sharp knives where a child can reach them and cut his hand.\n- You mustn't leave medicine where a child can find it and eat it.\n- You mustn't leave hot water where a child can touch it and burn himself.\n- We shouldn't play with matches or candles.\n- We should always wash our hands before eating."
        }
      },
      {
        id: 3,
        title: "Lesson 3: Food Groups & Nutrition",
        type: "song",
        content: {
          songText: "Every day we need healthy foods from different groups:\n1. Protein (about 30g): Meat, chicken, fish, eggs and beans build strong muscles.\n2. Carbohydrate (about 200g): Bread, rice, sugar and potatoes give us energy.\n3. Fat (about 70g): Cheese, butter and oil.\n4. Fruit and Vegetables: Apples, grapes, carrots, tomatoes and onions keep us healthy and protect us from diseases.\nDrink lots of clean water and eat balanced meals!"
        }
      },
      {
        id: 4,
        title: "Lesson 4: Exercise & Keeping Fit",
        type: "song",
        content: {
          songText: "Regular exercise is good for us, and more exercise is better! Exercise builds our muscles and bones and makes us strong. Exercise keeps our hearts and bodies healthy. Children who take regular exercise:\n- Have better control of their body weight.\n- Have stronger muscles and bones.\n- Have lower blood pressure than children who don't exercise.\n- Are fitter, faster, and healthier.\n- Are usually calmer and happier!"
        }
      },
      {
        id: 5,
        title: "Lesson 5: Murad - The Boy Who Told Lies",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Murad", text: "Mum, I'm very ill with a high temperature! I need a doctor immediately!", voice: "Puck" },
            { speaker: "Doctor", text: "I examined Murad carefully. There is nothing wrong with him. He is fine.", voice: "Charon" },
            { speaker: "Mother", text: "Murad, why did you say you were sick when you were fine?", voice: "Zephyr" },
            { speaker: "Murad", text: "Don't be angry mum, I did it four times to make you laugh!", voice: "Puck" },
            { speaker: "Murad", text: "Mum! Tonight I am really ill! Can I see the doctor? I'm not lying!", voice: "Puck" },
            { speaker: "Mother", text: "No Murad, go to bed. We don't believe you anymore.", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 6,
        title: "Lesson 6: Good Sleep & Posture Habits",
        type: "song",
        content: {
          songText: "Healthy habits for your body and back:\n- Always sit with your back straight in your chair when you are in class.\n- Don't change your habits before bedtime; keep the same routine.\n- Eat a small meal 2 hours before sleep, and don't eat lots of sweets or junk food.\n- Drink some warm milk and read a book for 10 minutes.\n- Never play exciting or noisy games right before bed.\n- Always wear a helmet when you ride your bike!"
        }
      },
      {
        id: 7,
        title: "Lesson 7: Street Safety Rules",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Teacher", text: "Don't cross the street until you're sure! What should you do first?", voice: "Charon" },
            { speaker: "Pupil", text: "You listen and look and look some more! Be careful, be calm, be clever, be wise.", voice: "Zephyr" },
            { speaker: "Teacher", text: "How do you check traffic before crossing?", voice: "Charon" },
            { speaker: "Pupil", text: "Look left, look right, look left and then check again! Cross busy roads at a traffic light.", voice: "Zephyr" },
            { speaker: "Teacher", text: "And what should you wear at night?", voice: "Charon" },
            { speaker: "Pupil", text: "Wear bright clothes when out at night so drivers can see you clearly!", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 8,
        title: "Lesson 8: Unit 6 Revision",
        type: "song",
        content: {
          songText: "Reviewing body and health: We need a mouth to talk with and two eyes to see. We need shoulders, elbows, knees and feet. Regular exercise keeps our heart pumping strong. Eat balanced food from the protein, carbohydrate and vegetable groups, and always be truthful and safe!"
        }
      }
    ]
  },
  {
    id: 7,
    title: "One More Time",
    arabicTitle: "مراجعة شاملة وحماية البيئة",
    color: "bg-rose-400 text-rose-950 border-rose-600",
    icon: "♻️",
    illustration: "/illustrations/unit7_green_earth.jpg",
    words: [
      { id: "w7-1", word: "Recycle", arabic: "إعادة تدوير", image: "♻️", example: "We can recycle glass, wood, metal and paper.", soundText: "We can recycle glass, wood, metal and paper.", unit: 7 },
      { id: "w7-2", word: "Metal", arabic: "معدن", image: "📎", example: "Cans and car engines are made of metal.", soundText: "Cans and car engines are made of metal.", unit: 7 },
      { id: "w7-3", word: "Glass", arabic: "زجاج", image: "🥛", example: "Bottles and windows are made of glass.", soundText: "Bottles and windows are made of glass.", unit: 7 },
      { id: "w7-4", word: "Brick Maker", arabic: "صانع الطوب", image: "🧱", example: "The brick maker mixes clay and water near the river.", soundText: "The brick maker mixes clay and water near the river.", unit: 7 },
      { id: "w7-5", word: "Wood", arabic: "خشب", image: "🪵", example: "Desks and tables are made of wood.", soundText: "Desks and tables are made of wood.", unit: 7 },
      { id: "w7-6", word: "Clay", arabic: "طين / فخار", image: "🏺", example: "People in ancient Iraq wrote symbols on clay.", soundText: "People in ancient Iraq wrote symbols on clay.", unit: 7 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: Be Green & Materials",
        type: "song",
        illustration: "/illustrations/unit7_green_earth.jpg",
        content: {
          songText: "Take care of the Earth and try to be green!\nKeep the Earth healthy and keep it clean!\nWhen you leave a room or go out at night,\nRemember to stop and turn out the light!\nDon't throw down rubbish and leave it behind,\nDon't waste paper or money, don't waste food or time!\nDon't waste water or energy, and try to be green,\nKeep the Earth healthy and keep it clean!\n\nMaterials in English:\n- A window is made of glass.\n- A ruler is made of plastic.\n- A desk is made of wood.\n- A can is made of metal."
        }
      },
      {
        id: 2,
        title: "Lesson 2: How to Recycle in Class",
        type: "song",
        content: {
          songText: "How to set up recycling in class:\n1. First, find four large boxes at home and bring them to school.\n2. Second, at school, write four labels: Glass, Metal, Plastic, and Paper.\n3. Third, put one label on each box.\n4. Fourth, put the four boxes with their labels at the front of the classroom.\n5. Fifth, collect items at home and bring them to school.\n6. Finally, put each item into the correct box (for example, jars in the Glass box, cans in the Metal box). Recycling saves energy, money and natural materials!"
        }
      },
      {
        id: 3,
        title: "Lesson 3: Jobs Along the River Nile",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Khaled", text: "I work near the river. I mix clay, water and straw to make bricks and leave them to dry in the sun.", voice: "Charon" },
            { speaker: "Salim", text: "I am a fisherman. I have a boat on the River Nile. I catch fish and go to the market to sell them.", voice: "Kore" },
            { speaker: "Ali", text: "I am a river guide. I take tourists on my boat to visit interesting historical places.", voice: "Puck" },
            { speaker: "Yasir", text: "I am a farmer. I use a pump to take water from the River Nile to grow dates and vegetables.", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 4,
        title: "Lesson 4: The History of Writing",
        type: "song",
        illustration: "/illustrations/unit7_history_writing.jpg",
        content: {
          songText: "Writing has a fascinating history:\n- 5,200 years ago: People in Iraq wrote symbols for words on wet clay tablets.\n- 5,000 years ago: Egyptians began to write on stone and on a kind of paper called papyrus.\n- 3,500 years ago: Chinese people began to paint characters with ink brushes.\n- 2,500 years ago: Romans started writing their language using Roman letters (the alphabet used for English today).\n- 1,600 to 1,700 years ago: Arabs began writing in the beautiful Arabic script, now used by over 30 languages.\n- Today, people around the world use digital symbols and texting on mobile phones!"
        }
      },
      {
        id: 5,
        title: "Lesson 5: The Fox and the Crow",
        type: "conversation",
        illustration: "/illustrations/unit7_fox_crow.jpg",
        content: {
          dialogue: [
            { speaker: "Narrator", text: "A family had a picnic in the forest and dropped some cheese. A crow flew down and picked up the cheese in her beak.", voice: "Puck" },
            { speaker: "Fox", text: "Good morning, Mrs Crow! How beautiful your feathers are! What a lovely bird you are!", voice: "Charon" },
            { speaker: "Narrator", text: "The crow was delighted to hear this praise from the fox.", voice: "Puck" },
            { speaker: "Fox", text: "Surely someone as beautiful as you must have the sweetest voice in the forest. Please sing me a song!", voice: "Charon" },
            { speaker: "Crow", text: "Caw! Caw! Caw!", voice: "Zephyr" },
            { speaker: "Narrator", text: "As soon as the crow opened her beak, the cheese fell straight to the ground. The fox snapped it up and ran away laughing!", voice: "Puck" }
          ]
        }
      },
      {
        id: 6,
        title: "Lesson 6: Machu Picchu & Comparison",
        type: "song",
        content: {
          songText: "Machu Picchu is an ancient stone city in Peru, South America. The Incas built it high in the mountains around 1450. They cut large stones and fitted them together without cement. It was lost for hundreds of years and rediscovered in 1911.\n\nComparison of Wonders:\n- The Great Pyramid: Egypt, ~4,800 years old, 137m high.\n- Petra: Jordan, ~2,300 years old, carved stone city.\n- Machu Picchu: Peru, ~600 years old, 2,400m high in the Andes mountains."
        }
      },
      {
        id: 7,
        title: "Lesson 7: School Graduation & Farewell",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Headmaster", text: "Dear pupils, parents and teachers, welcome to our Grade 6 graduation ceremony!", voice: "Charon" },
            { speaker: "Student Speaker", text: "We would like to thank our teachers for teaching us and helping us work hard all year.", voice: "Zephyr" },
            { speaker: "Student Speaker", text: "We also thank our parents who supported us every single day.", voice: "Zephyr" },
            { speaker: "Headmaster", text: "Congratulations to all pupils receiving prizes today. We wish you success in your new schools!", voice: "Charon" }
          ]
        }
      },
      {
        id: 8,
        title: "Lesson 8: Sudan - Our Beloved Homeland",
        type: "song",
        content: {
          songText: "Sudan is a great country with a rich and proud history. The magnificent River Nile runs through the heart of our land. Sudan has vast plains, golden deserts, lush forests, lakes, and high mountains. To all Sudanese pupils: study hard, learn well, and protect our beloved nation. You are the bright future of Sudan!"
        }
      }
    ]
  }
];
