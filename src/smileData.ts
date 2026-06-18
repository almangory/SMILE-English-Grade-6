import { UnitItem } from "./types";

export const SMILE_UNITS: UnitItem[] = [
  {
    id: 1,
    title: "Back to School",
    arabicTitle: "العودة إلى المدرسة",
    color: "bg-amber-400 text-amber-950 border-amber-600",
    icon: "🎒",
    words: [
      { id: "w1-1", word: "Holiday", arabic: "إجازة", image: "🏖️", example: "Welcome back from holiday.", soundText: "Welcome back from holiday today.", unit: 1 },
      { id: "w1-2", word: "Subject", arabic: "مادة دراسية", image: "🧪", example: "There's Science and Maths.", soundText: "Lots of subjects are new.", unit: 1 },
      { id: "w1-3", word: "Emblem", arabic: "شعار", image: "🦅", example: "The secretary bird is our emblem.", soundText: "The secretary bird is the emblem of Sudan.", unit: 1 },
      { id: "w1-4", word: "Cattle", arabic: "ماشية", image: "🐄", example: "Farmers look after their cattle.", soundText: "Farmers look after their cattle in the evening dark.", unit: 1 },
      { id: "w1-5", word: "Heart", arabic: "قلب", image: "❤️", example: "I want the monkey's heart.", soundText: "Bring me the heart of the monkey.", unit: 1 },
      { id: "w1-6", word: "Holiday", arabic: "إجازة", image: "✈️", example: "My holiday was nice.", soundText: "Where were you on holiday?", unit: 1 }
    ],
    lessons: [
      {
        id: 1,
        title: "Welcome Back to School Today!",
        type: "song",
        content: {
          songText: "Welcome back from holiday. Welcome back to school today. It was nice with your family, with your mum and dad. But you're with your friends, so don't be sad. There's Science and Maths. Lots of subjects are new. There's Geography and History and English, too. Smile! Be happy! Be happy you are here, to learn lots of new things in school this year."
        }
      },
      {
        id: 2,
        title: "Where Were You?",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Hassan", text: "I was with my family in Khartoum. It was fun.", voice: "Puck" },
            { speaker: "Osama", text: "I was at my uncle's farm in El Obied. We were busy.", voice: "Kore" },
            { speaker: "Sara", text: "I was in Port Sudan with my brother. My holiday was nice.", voice: "Zephyr" },
            { speaker: "Mona", text: "I was in Dubai with my aunt and her family. It was very hot.", voice: "Kore" }
          ]
        }
      },
      {
        id: 3,
        title: "This is Our Sudan!",
        type: "song",
        content: {
          songText: "Along the River Nile, dates grow on tall palm trees. Sharks swim in the warm waters of the Red Sea. Camels walk on the sand through the desert heat, and birds fly over the mountains of the west and the east. Farmers look after their cattle in the evening dark... and deer live in Dinder Park. Every man, woman and child across our great land, stand up and say: This is our country. This is our Sudan."
        }
      },
      {
        id: 4,
        title: "Emblem of Sudan",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Hassan", text: "What is the emblem of Sudan?", voice: "Puck" },
            { speaker: "Osama", text: "The secretary bird is the emblem of Sudan. Sudanese people like these birds.", voice: "Kore" },
            { speaker: "Hassan", text: "How tall are secretarial birds?", voice: "Puck" },
            { speaker: "Osama", text: "They are sometimes one metre thirty tall and the length of their wings is two metres long.", voice: "Kore" }
          ]
        }
      },
      {
        id: 5,
        title: "Sukkar and Mrs Crocodile",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Sukkar", text: "Hello, Mr Crocodile. These are mangoes for your wife.", voice: "Puck" },
            { speaker: "Mr Crocodile", text: "You always give us mangoes, Sukkar. Come to lunch with us today.", voice: "Charon" },
            { speaker: "Mrs Crocodile", text: "I want meat, not mangoes. Bring me the heart of the monkey.", voice: "Zephyr" },
            { speaker: "Mr Crocodile", text: "Never mind, Sukkar. Mrs Crocodile wants to eat your heart today, not your mangoes.", voice: "Charon" }
          ]
        }
      },
      {
        id: 6,
        title: "Sukkar's Clever Escape",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Sukkar", text: "My heart is in my tree. Can we go back and get it for Mrs Crocodile?", voice: "Puck" },
            { speaker: "Mr Crocodile", text: "Okay, let's swim back to Sukkar's tree.", voice: "Charon" },
            { speaker: "Sukkar", text: "Sukkar isn't coming. He isn't hungry! Bye, Mr Crocodile!", voice: "Puck" },
            { speaker: "Mrs Crocodile", text: "Sukkar isn't hungry but I am! And I am angry!", voice: "Zephyr" }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    title: "The Earth, the Sun and Space",
    arabicTitle: "الأرض والشمس والفضاء",
    color: "bg-sky-400 text-sky-950 border-sky-600",
    icon: "🪐",
    words: [
      { id: "w2-1", word: "Earth", arabic: "الأرض", image: "🌍", example: "We live on the Earth.", soundText: "The Earth is the third planet from the sun.", unit: 2 },
      { id: "w2-2", word: "Planet", arabic: "كوكب", image: "🪐", example: "There are nine planets.", soundText: "The nine planets move around the sun.", unit: 2 },
      { id: "w2-3", word: "Star", arabic: "نجم", image: "⭐", example: "The sun is a star.", soundText: "The sun is a star in space.", unit: 2 },
      { id: "w2-4", word: "Eclipse", arabic: "خسوف / كسوف", image: "🌑", example: "The moon blocks the light.", soundText: "An eclipse is when the moon comes between the Earth and the sun.", unit: 2 },
      { id: "w2-5", word: "Astronaut", arabic: "رائد فضاء", image: "👨‍🚀", example: "Two astronauts landed on the moon.", soundText: "Neil Armstrong and Buzz Aldrin walked on the moon.", unit: 2 },
      { id: "w2-6", word: "Rocket", arabic: "صاروخ", image: "🚀", example: "A rocket blasted off.", soundText: "A rocket blasted off from the Earth on 17th July.", unit: 2 }
    ],
    lessons: [
      {
        id: 1,
        title: "The Sun is a Star",
        type: "song",
        content: {
          songText: "The sun is a star and it's very, very old. It helps plants grow and keeps away cold. It shines all day, very hot and bright. It gives us heat and gives us light. In summer, when the sun is strong, we mustn't stay in the sun too long. And when the sun is shining in the sky, we mustn't look straight at it with our eyes."
        }
      },
      {
        id: 2,
        title: "Facts about the Earth",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Hiba", text: "The sun is a star in space. We live on the Earth.", voice: "Puck" },
            { speaker: "Amna", text: "Light takes about eight minutes to travel here from the sun.", voice: "Zephyr" },
            { speaker: "Hiba", text: "Which planet is colder, Pluto or Neptune?", voice: "Puck" },
            { speaker: "Amna", text: "Pluto is colder because it is a long way from the sun. Mercury is the hottest.", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 3,
        title: "Hisham and the Lonely Star",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Star", text: "I'm a lonely star. I want to live on the Earth. Can you help?", voice: "Puck" },
            { speaker: "Hisham", text: "I must ask the wise people. You must change into a yellow flower.", voice: "Kore" },
            { speaker: "Star", text: "No, animals walk on me. I want to change into a rose.", voice: "Puck" },
            { speaker: "Star", text: "Now I'm happy as a water lily. I can see my friends in the water and the sky.", voice: "Puck" }
          ]
        }
      },
      {
        id: 4,
        title: "Solar Eclipse Science",
        type: "song",
        content: {
          songText: "An eclipse is when the moon comes between the Earth and the sun. The moon can block the light of the sun. For a short time, the moon can stop the light from coming to some places on the Earth. We can use three coins of different sizes (biggest, middle, smallest) to show an eclipse."
        }
      },
      {
        id: 5,
        title: "Apollo 11 Moon Mission",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Osama", text: "On the 17th of July 1969, a rocket blasted off from the Earth.", voice: "Kore" },
            { speaker: "Mona", text: "Neil Armstrong and Buzz Aldrin landed on the moon's surface.", voice: "Zephyr" },
            { speaker: "Osama", text: "They collected rocks and stayed on the moon for twenty-one hours.", voice: "Kore" },
            { speaker: "Mona", text: "Then they returned to Apollo eleven and landed back on the Earth after a week.", voice: "Zephyr" }
          ]
        }
      }
    ]
  },
  {
    id: 3,
    title: "Clothes",
    arabicTitle: "الملابس",
    color: "bg-emerald-400 text-emerald-950 border-emerald-600",
    icon: "👕",
    words: [
      { id: "w3-1", word: "Trousers", arabic: "بنطال", image: "👖", example: "These are my trousers.", soundText: "The trousers are blue.", unit: 3 },
      { id: "w3-2", word: "Cotton", arabic: "قطن", image: "☁️", example: "Shirts are made of cotton.", soundText: "We get cotton from cotton plants.", unit: 3 },
      { id: "w3-3", word: "Leather", arabic: "جلد", image: "👞", example: "Bags are made of leather.", soundText: "Leather comes from cows.", unit: 3 },
      { id: "w3-4", word: "Wool", arabic: "صوف", image: "🧶", example: "Sweaters are made of wool.", soundText: "Wool comes from sheep.", unit: 3 },
      { id: "w3-5", word: "Silk", arabic: "حرير", image: "🧣", example: "Scarves are made of silk.", soundText: "We get silk from silk worms.", unit: 3 },
      { id: "w3-6", word: "Uniform", arabic: "زي رسمي", image: "👩‍⚕️", example: "The doctor wears a white coat.", soundText: "A doctor wears a clean white coat.", unit: 3 }
    ],
    lessons: [
      {
        id: 1,
        title: "My Clothes Poem",
        type: "song",
        content: {
          songText: "This is my dress, my coat and my hat. These are my trousers and this is my cap. These are my blouses and these are my skirts. These are my shorts and these are my shirts. These are my black shoes. My scarf is green. These are my T-shirts and these are my jeans. This is my sweater with a big red rose. These are my socks. These are all my clothes."
        }
      },
      {
        id: 2,
        title: "Whose Shirt is This?",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Osama", text: "Whose is this football shirt? It is yours, Salah?", voice: "Kore" },
            { speaker: "Salah", text: "Mine? No, it's not my shirt. It's Hassan's shirt. And those shorts are his, too.", voice: "Zephyr" },
            { speaker: "Mona", text: "OK, these books are mine. Is that book yours, Elham?", voice: "Puck" },
            { speaker: "Elham", text: "No, it isn't mine. It's Sara's book. That pencil case is hers, too.", voice: "Kore" }
          ]
        }
      },
      {
        id: 3,
        title: "Materials of Clothes",
        type: "song",
        content: {
          songText: "We get cotton from cotton plants. We get silk from silk worms. Leather and wool are from animals. Wool comes from sheep and leather comes from cows. Many shirts and blouses are made of cotton. Some sweaters and socks are made of wool. Many bags, belts and shoes are made of leather. Some dresses and scarves are made of silk."
        }
      },
      {
        id: 4,
        title: "Majda Picking Cotton",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Majda", text: "Hello, I'm Majda. During my school holiday, I helped my dad to pick cotton.", voice: "Puck" },
            { speaker: "Ali", text: "Where did you walk and what did you use?", voice: "Kore" },
            { speaker: "Majda", text: "We walked to the fields early in the morning and put it in a big sack using two hands.", voice: "Puck" },
            { speaker: "Ali", text: "When did you finish, Majda?", voice: "Kore" },
            { speaker: "Majda", text: "We worked until it was dark and then emptied the heavy cotton. It was very hard work.", voice: "Puck" }
          ]
        }
      },
      {
        id: 5,
        title: "The Hat-Seller and Monkeys",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Hassan", text: "The hat-seller rested under a tree. When he woke up, there were no hats!", voice: "Puck" },
            { speaker: "Badr", text: "Where were they?", voice: "Kore" },
            { speaker: "Hassan", text: "Six monkeys in the tree had hats on. The seller threw his hat in anger, and they did too!", voice: "Puck" },
            { speaker: "Badr", text: "That is funny! He put them back in his sack and said thank you.", voice: "Kore" }
          ]
        }
      }
    ]
  },
  {
    id: 4,
    title: "Animals Partners",
    arabicTitle: "شركاء من الحيوانات",
    color: "bg-indigo-400 text-indigo-950 border-indigo-600",
    icon: "🦊",
    words: [
      { id: "w4-1", word: "Falcon", arabic: "صقر", image: "🦅", example: "The falcon hunts in the desert.", soundText: "The falcon is the fastest bird in the desert.", unit: 4 },
      { id: "w4-2", word: "Guide dog", arabic: "كلب مرشد", image: "🐕", example: "A guide dog helps blind people.", soundText: "A guide dog helps people find where they want to go.", unit: 4 },
      { id: "w4-3", word: "Egret", arabic: "أبو قردان / بلشون", image: "🐦", example: "Cattle egrets look after cattle.", soundText: "A cattle egret eats insects off rhinos and zebras.", unit: 4 },
      { id: "w4-4", word: "Tractor", arabic: "جرار", image: "🚜", example: "A tractor is better than animals.", soundText: "You can buy a tractor to plough fields.", unit: 4 },
      { id: "w4-5", word: "Camel", arabic: "جمل", image: "🐪", example: "Idris rode on Barood the camel.", soundText: "The camel is decorated with beautiful patterns.", unit: 4 },
      { id: "w4-6", word: "Hospital", arabic: "مستشفى", image: "🏥", example: "Falcons have a special hospital.", soundText: "The Abu Dhabi Falcon Hospital looks after thousands of birds.", unit: 4 }
    ],
    lessons: [
      {
        id: 1,
        title: "How Animals Help Us",
        type: "song",
        content: {
          songText: "A camel helps people to go from place to place. A donkey helps people to carry heavy loads. An elephant helps people to carry heavy logs. A falcon helps people to hunt and catch other animals. A guide dog helps blind people to find where they want to go. A sheep dog helps people to look after other animals. All animals are our helpful partners!"
        }
      },
      {
        id: 2,
        title: "Idris and Barood",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Idris", text: "Hello, I'm Idris and this is Barood my camel.", voice: "Kore" },
            { speaker: "Ali", text: "Why is Barood painted with patterns?", voice: "Puck" },
            { speaker: "Idris", text: "I decorated him to take the bride to the ceremony. She rode on him.", voice: "Kore" },
            { speaker: "Ali", text: "Did he move his head and body to the music?", voice: "Puck" },
            { speaker: "Idris", text: "Yes, we had a wonderful day and I gave Barood food and water.", voice: "Kore" }
          ]
        }
      },
      {
        id: 3,
        title: "Hunting Falcons Facts",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Hassan", text: "The falcon is the fastest bird. It can dive at three hundred kilometres an hour.", voice: "Puck" },
            { speaker: "Sara", text: "How does the owner look after the falcon?", voice: "Zephyr" },
            { speaker: "Hassan", text: "He covers its eyes when it is not hunting and wears a heavy leather glove.", voice: "Puck" },
            { speaker: "Sara", text: "Falcons are beautiful, strong birds.", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 4,
        title: "Hamid and His Old Animals",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Ali", text: "Why do you keep these old animals, brother Hamid?", voice: "Kore" },
            { speaker: "Hamid", text: "The ox ploughs my fields. The horse takes me to town. The dog protects us.", voice: "Zephyr" },
            { speaker: "Ali", text: "But you are old now. You should buy a tractor instead!", voice: "Kore" },
            { speaker: "Hamid", text: "Animals are better than machines, they wake us up and give us love.", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 5,
        title: "Cattle Egrets helpers",
        type: "song",
        content: {
          songText: "Can you eat nearby to a rhino's eye? Can you have a snack on a zebra's back? Can you stand and look near an elephant's foot? Can you walk on the ground with a buffalo around? We can't do these things but a cattle egret can, because it's safe for the bird but not safe for a man. Egrets find insects on the skin of rhinos and zebras to help keep them clean!"
        }
      }
    ]
  },
  {
    id: 5,
    title: "Helping Hands",
    arabicTitle: "الأيدي المساعدة",
    color: "bg-teal-400 text-teal-950 border-teal-600",
    icon: "🤝",
    words: [
      { id: "w5-1", word: "Future", arabic: "مستقبل", image: "🌅", example: "We can build the future of Sudan.", soundText: "We block dark days to make our future brighter.", unit: 5 },
      { id: "w5-2", word: "Volunteer", arabic: "متطوع", image: "👷", example: "Volunteers work for no money.", soundText: "Green Hands volunteers help poor schools.", unit: 5 },
      { id: "w5-3", word: "Charity", arabic: "صدقة / عمل خيري", image: "🪙", example: "Put money in the charity box.", soundText: "Volunteers distribute Ramadan charity packages.", unit: 5 },
      { id: "w5-4", word: "Poor", arabic: "فقير", image: "🏚️", example: "Ali was poor and sold water.", soundText: "Ali helped his poor mother and sister.", unit: 5 },
      { id: "w5-5", word: "Seeds", arabic: "بذور", image: "🌱", example: "The little red hen found seeds.", soundText: "She planted peanut seeds without help.", unit: 5 },
      { id: "w5-6", word: "Harvest", arabic: "حصاد", image: "🌾", example: "The hen harvested the peanuts.", soundText: "The lazy friends refused to harvest peanuts.", unit: 5 }
    ],
    lessons: [
      {
        id: 1,
        title: "Build Our Future Chant",
        type: "song",
        content: {
          songText: "We're boys and girls from all Sudan. We can build the future of our land. Boys and girls can make things better. We can help in any weather. We can help and work together. We can make dark days lighter. We can make our future brighter. We're boys and girls from all Sudan. We can give a helping hand."
        }
      },
      {
        id: 2,
        title: "Ali and the Shopkeeper",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Shopkeeper", text: "Ali, why aren't you at school? Why do you sell water?", voice: "Kore" },
            { speaker: "Ali", text: "I'm working to help my mother. We are very poor.", voice: "Puck" },
            { speaker: "Shopkeeper", text: "Where is your father?", voice: "Kore" },
            { speaker: "Ali", text: "He died two years ago. Ali works hard to buy food.", voice: "Puck" }
          ]
        }
      },
      {
        id: 3,
        title: "The Lazy Friends",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Hen", text: "Can you help me plant or harvest these peanuts?", voice: "Zephyr" },
            { speaker: "Cat", text: "No! I want to sleep under the warm sun.", voice: "Puck" },
            { speaker: "Dog", text: "No! I am too busy chasing frogs. Ask again later.", voice: "Kore" },
            { speaker: "Hen", text: "No help? Then I will eat all these peanuts myself!", voice: "Zephyr" }
          ]
        }
      }
    ]
  },
  {
    id: 6,
    title: "Travel and Holidays",
    arabicTitle: "السفر والإجازات",
    color: "bg-pink-400 text-pink-950 border-pink-600",
    icon: "✈️",
    words: [
      { id: "w6-1", word: "Trip", arabic: "رحلة", image: "🗺️", example: "I'd like to take a trip.", soundText: "I'd like to take a bus or sail a ship.", unit: 6 },
      { id: "w6-2", word: "Ticket", arabic: "تذكرة", image: "🎫", example: "The ticket costs 4000 Pounds.", soundText: "Mr Rami bought a flight ticket to Cairo.", unit: 6 },
      { id: "w6-3", word: "Flight", arabic: "رحلة طيران", image: "✈️", example: "There's a flight tomorrow.", soundText: "Osama booked a flight with a travel agent.", unit: 6 },
      { id: "w6-4", word: "Prize", arabic: "جائزة", image: "🏆", example: "They won a prize of £20,000.", soundText: "Phileas Fogg won a big prize.", unit: 6 },
      { id: "w6-5", word: "Adventure", arabic: "مغامرة", image: "🧭", example: "They had many adventures.", soundText: "Traveling around the world brings lots of adventure.", unit: 6 },
      { id: "w6-6", word: "Control", arabic: "مراقبة الحدود", image: "🛂", example: "He showed his passport.", soundText: "Move through security check and passport control at the airport.", unit: 6 }
    ],
    lessons: [
      {
        id: 1,
        title: "I'd Like to See the World",
        type: "song",
        content: {
          songText: "I'd like to see the world. I'd like to take a trip. I'd like to take a bus. I'd like to sail a ship. I'd like to drive a car. I'd like to catch a train. I'd like to ride a motorbike or fly up a plane. I'd like to make new friends. I'd like to see new faces. I'd like to leave my town and travel to new places. Of course I love my family. Of course I love my home. But I want to travel to Cairo, visit Paris and see Rome."
        }
      },
      {
        id: 2,
        title: "Arriving at Port Sudan",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Osama", text: "Hi Hassan! Why are you in Port Sudan?", voice: "Kore" },
            { speaker: "Hassan", text: "We're here to visit my uncle and see the beach. We arrived by bus.", voice: "Puck" },
            { speaker: "Osama", text: "Did the bus stop on the way, Hassan?", voice: "Kore" },
            { speaker: "Hassan", text: "Yes, it stopped for two hours to eat and pray.", voice: "Puck" }
          ]
        }
      },
      {
        id: 3,
        title: "Booking a Flight to Cairo",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Agent", text: "Yes, how can I help you today, Mr Rami?", voice: "Kore" },
            { speaker: "Mr Rami", text: "I need a flight ticket to Cairo this week, please.", voice: "Puck" },
            { speaker: "Agent", text: "There's a flight tomorrow at six o'clock. It costs four thousand Sudanese Pounds.", voice: "Kore" },
            { speaker: "Mr Rami", text: "Okay, I would like to buy the ticket now. Thank you.", voice: "Puck" }
          ]
        }
      },
      {
        id: 4,
        title: "Around the World in 80 Days",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Hala", text: "Jules Verne wrote 'Around the World in 80 Days' in 1873.", voice: "Zephyr" },
            { speaker: "Badr", text: "How did Phileas Fogg travel long ago?", voice: "Puck" },
            { speaker: "Hala", text: "He travelled by train and ship, and had many adventures.", voice: "Zephyr" },
            { speaker: "Badr", text: "Did he arrive back on time to win the prize?", voice: "Puck" },
            { speaker: "Hala", text: "Yes! Fogg won a big prize of twenty thousand pounds!", voice: "Zephyr" }
          ]
        }
      }
    ]
  },
  {
    id: 7,
    title: "Maths in our Life",
    arabicTitle: "الرياضيات في حياتنا",
    color: "bg-orange-400 text-orange-950 border-orange-600",
    icon: "🧮",
    words: [
      { id: "w7-1", word: "Calculate", arabic: "يحسب", image: "💻", example: "Numbers help us calculate.", soundText: "We need numbers to count and calculate.", unit: 7 },
      { id: "w7-2", word: "Zero", arabic: "صفر", image: "0️⃣", example: "Arabs created zero.", soundText: "The Indians invented a symbol for zero.", unit: 7 },
      { id: "w7-3", word: "Symbol", arabic: "رمز", image: "➕", example: "We have plus and minus symbols.", soundText: "Indians invented symbols for mathematics.", unit: 7 },
      { id: "w7-4", word: "Beak", arabic: "منقار", image: "🐦", example: "Her beak could not reach the water.", soundText: "The crow can put her beak in the jar.", unit: 7 },
      { id: "w7-5", word: "Stones", arabic: "أحجار", image: "🪨", example: "The crow dropped small stones.", soundText: "The crow dropped stones one by one.", unit: 7 },
      { id: "w7-6", word: "Thirsty", arabic: "عطشان", image: "🥵", example: "The crow was very thirsty.", soundText: "The crow flew over a farm on a hot summer day.", unit: 7 }
    ],
    lessons: [
      {
        id: 1,
        title: "Numbers, Numbers Everywhere!",
        type: "song",
        content: {
          songText: "Look to the left and look to the right, and look up and down. Which numbers can we see when we look around? Numbers, numbers everywhere! Numbers when we look at prices, computers and mobile phones, or on the pages of our book. Numbers on coins, numbers on money. Numbers to give the time or date. Numbers on watches, numbers on clocks. Numbers to count or calculate."
        }
      },
      {
        id: 2,
        title: "History of Mathematics",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Salah", text: "People started to count twenty-five thousand years ago.", voice: "Kore" },
            { speaker: "Elham", text: "Wow! Egyptians built pyramids five thousand years ago using Maths.", voice: "Zephyr" },
            { speaker: "Salah", text: "Indians invented zero two thousand years ago.", voice: "Kore" },
            { speaker: "Elham", text: "And Arabs invented symbols for plus and minus five hundred years ago.", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 3,
        title: "The Clever Crow story",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Hassan", text: "The thirsty crow saw a water jar but could not reach the water.", voice: "Puck" },
            { speaker: "Ahmed", text: "What was her clever idea?", voice: "Kore" },
            { speaker: "Hassan", text: "She dropped stones one by one into the jar.", voice: "Puck" },
            { speaker: "Ahmed", text: "Excellent! The water rose up and she drank some.", voice: "Kore" }
          ]
        }
      }
    ]
  },
  {
    id: 8,
    title: "Inventions and New Things",
    arabicTitle: "الاختراعات والأشياء الجديدة",
    color: "bg-purple-400 text-purple-950 border-purple-600",
    icon: "💡",
    words: [
      { id: "w8-1", word: "Shadoof", arabic: "شادوف", image: "🪵", example: "A shadoof is slower than a saqia.", soundText: "It is slower to use a shadoof.", unit: 8 },
      { id: "w8-2", word: "Saqia", arabic: "ساقية", image: "🎡", example: "A saqia lifts river water.", soundText: "This saqia lifts water from the river.", unit: 8 },
      { id: "w8-3", word: "Pump", arabic: "مضخة", image: "⛽", example: "Diesel pumps support farmers.", soundText: "Modern motor pumps are cleaner and faster.", unit: 8 },
      { id: "w8-4", word: "Internet", arabic: "إنترنت", image: "🌐", example: "We use the internet to find places.", soundText: "We can use the internet to look for information.", unit: 8 },
      { id: "w8-5", word: "Carrot", arabic: "جزر", image: "🥕", example: "Have you got carrots for the soup?", soundText: "Onions and carrots.", unit: 8 },
      { id: "w8-6", word: "Helicopter", arabic: "مروحية", image: "🚁", example: "A helicopter flies fast.", soundText: "A helicopter is a modern way to fly.", unit: 8 }
    ],
    lessons: [
      {
        id: 1,
        title: "The Car Wheels Song",
        type: "song",
        content: {
          songText: "The wheels on the car go round and round! The windows on the car go up and down! The doors on the car open and close! The wipers on the windshield go swish swish swish! All these inventions help us move and travel easily!"
        }
      },
      {
        id: 2,
        title: "Irrigation Inventions",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Ahmed", text: "How can we lift river water, Granddad?", voice: "Kore" },
            { speaker: "Granddad", text: "We can use a shadoof, but a saqia is better.", voice: "Zephyr" },
            { speaker: "Ahmed", text: "Is a modern motor pump cleaner and faster, Granddad?", voice: "Kore" },
            { speaker: "Granddad", text: "Yes, modern pumps are very clean and fast, they help grow vegetables.", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 3,
        title: "The Stone Soup Trick",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Traveller", text: "I am hungry and poor. I will make a clever stone soup!", voice: "Charon" },
            { speaker: "Villager", text: "Stone soup? Is it ready? Can I try it?", voice: "Puck" },
            { speaker: "Traveller", text: "Yes, but it needs salt, onions, carrots and cabbage.", voice: "Charon" },
            { speaker: "Villager", text: "No problem, here are the carrots and some fresh meat!", voice: "Puck" }
          ]
        }
      }
    ]
  },
  {
    id: 9,
    title: "Wonders of the World",
    arabicTitle: "عجائب العالم",
    color: "bg-cyan-400 text-cyan-950 border-cyan-600",
    icon: "🏛️",
    words: [
      { id: "w9-1", word: "Wonder", arabic: "أعجوبة", image: "🏛️", example: "Machu Picchu is a wonder.", soundText: "There are many wonders in the world for us all to see.", unit: 9 },
      { id: "w9-2", word: "Tomb", arabic: "ضريح / قبر", image: "🪦", example: "The Great Pyramid was a tomb.", soundText: "The Taj Mahal is a beautiful marble tomb.", unit: 9 },
      { id: "w9-3", word: "Pyramid", arabic: "هرم", image: "🔺", example: "Sudan has many amazing pyramids.", soundText: "Sudan has got more pyramids than Egypt.", unit: 9 },
      { id: "w9-4", word: "Treasure", arabic: "كنز", image: "👑", example: "Ferlini searched for gold and treasure.", soundText: "He found gold treasure in the queen's pyramid.", unit: 9 },
      { id: "w9-5", word: "Statue", arabic: "تمثال", image: "🗿", example: "Petra has amazing stone temples.", soundText: "Bedouin Arabs cut tombs into stone walls.", unit: 9 },
      { id: "w9-6", word: "Theater", arabic: "مسرح", image: "🎭", example: "The Colosseum is a big theater.", soundText: "The Colosseum was the biggest theater in Europe.", unit: 9 }
    ],
    lessons: [
      {
        id: 1,
        title: "Wonders of the World Chant",
        type: "song",
        content: {
          songText: "There are many wonders in the world for us all to see. The Taj Mahal in India, the Colosseum in Italy. The city of Petra in Jordan is old - but looks very new. The city of Machu Picchu in the mountains of Peru. The Great Wall of China and the Great Pyramid in Egypt, too. Walls, mosques, palaces, cities: many wonders to see. If you go and visit them, can you also pay for me?"
        }
      },
      {
        id: 2,
        title: "Ancient Monuments",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Lee", text: "The Great Pyramid of Egypt is the oldest wonder of the world.", voice: "Zephyr" },
            { speaker: "Salah", text: "Is the Great Wall of China very long?", voice: "Kore" },
            { speaker: "Lee", text: "Yes! The wall is about six thousand kilometres long.", voice: "Zephyr" },
            { speaker: "Salah", text: "Machu Picchu is a city built high in the mountains in Peru.", voice: "Kore" }
          ]
        }
      },
      {
        id: 3,
        title: "Pyramids of Meroe in Sudan",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Rayan", text: "Sudan has got amazing pyramids! There are about two hundred and twenty.", voice: "Puck" },
            { speaker: "Alia", text: "Yes, and the Kingdom of Kush was very rich from iron trade.", voice: "Zephyr" },
            { speaker: "Rayan", text: "Giuseppe Ferlini arrived in Khartoum in 1834.", voice: "Puck" },
            { speaker: "Alia", text: "He damaged forty pyramids and took the queen's gold to Europe.", voice: "Zephyr" }
          ]
        }
      }
    ]
  },
  {
    id: 10,
    title: "Special Days",
    arabicTitle: "الأيام والـمناسبات الخاصة",
    color: "bg-red-400 text-red-950 border-red-600",
    icon: "🎉",
    words: [
      { id: "w10-1", word: "Festival", arabic: "مهرجان", image: "🎡", example: "We celebrated the shopping festival.", soundText: "Come to Port Sudan shopping festival.", unit: 10 },
      { id: "w10-2", word: "Graduation", arabic: "تخرج", image: "🎓", example: "We had a school graduation.", soundText: "I can see girls at a school graduation.", unit: 10 },
      { id: "w10-3", word: "Wren", arabic: "طائر الصعو", image: "🐦", example: "The wren won the flying match.", soundText: "The wren won because she was the cleverest bird.", unit: 10 },
      { id: "w10-4", word: "Competition", arabic: "المنافسة / مسابقة", image: "🏁", example: "They had a flying competition.", soundText: "The birds had a competition to find the best flyer.", unit: 10 },
      { id: "w10-5", word: "Lied", arabic: "كذب", image: "🤐", example: "Murad lied about his fever.", soundText: "He lied to make his mum laugh.", unit: 10 },
      { id: "w10-6", word: "Mother", arabic: "أم", image: "👩", example: "Celebrate Mother's Day.", soundText: "Say Alhamdulillah for your kind mother.", unit: 10 }
    ],
    lessons: [
      {
        id: 1,
        title: "Special Days Celebration Chant",
        type: "song",
        content: {
          songText: "Celebrate, celebrate, special days: Eid El Fitr, weddings and festivals, Mother's Day and school graduations. We can smile and keep clapping, when nice things happen. We can have fun and cheer, when nice things are here. Smile! Laugh! Take a photograph! Celebrate, celebrate, special days."
        }
      },
      {
        id: 2,
        title: "Tribute to Mothers",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Badr", text: "Who should I honour and love after Allah and His Prophet?", voice: "Kore" },
            { speaker: "Hiba", text: "Your mother. Then your mother, then your mother, then your father.", voice: "Zephyr" },
            { speaker: "Badr", text: "Who helped you when you were ill or felt afraid?", voice: "Kore" },
            { speaker: "Hiba", text: "Our mother. So say Alhamdulillah for your mother!", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 3,
        title: "The Flying Competition",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Hassan", text: "Did the strong falcon win the flying competition?", voice: "Puck" },
            { speaker: "Mona", text: "No! The wren sat on the falcon's back and flew higher when he got tired.", voice: "Zephyr" },
            { speaker: "Hassan", text: "Haha! She won because she was the cleverest bird.", voice: "Puck" },
            { speaker: "Mona", text: "Yes, and the birds promised to protect the wren from enemies.", voice: "Zephyr" }
          ]
        }
      }
    ]
  },
  {
    id: 11,
    title: "Health",
    arabicTitle: "الصحة",
    color: "bg-emerald-400 text-emerald-950 border-emerald-600",
    icon: "🩺",
    words: [
      { id: "w11-1", word: "Shoulders", arabic: "أكتاف", image: "💪", example: "We need shoulders to carry things.", soundText: "We need shoulders and elbows so our arms can bend.", unit: 11 },
      { id: "w11-2", word: "Backbone", arabic: "عمود فقري", image: "🦴", example: "A backbone holds you straight.", soundText: "We need a backbone to hold our head straight.", unit: 11 },
      { id: "w11-3", word: "Stomach", arabic: "معدة", image: "🥗", example: "Eat healthy food for your stomach.", soundText: "We need a stomach when we eat.", unit: 11 },
      { id: "w11-4", word: "Protein", arabic: "بروتين", image: "🥩", example: "Meat and eggs have protein.", soundText: "Protein helps build muscles.", unit: 11 },
      { id: "w11-5", word: "Carbohydrate", arabic: "كربوهيدرات", image: "🍞", example: "Bread has carbohydrate.", soundText: "Bread and rice are rich in carbohydrate.", unit: 11 },
      { id: "w11-6", word: "Murad", arabic: "مراد", image: "👦", example: "Murad lied four times.", soundText: "The doctor found nothing wrong with Murad.", unit: 11 }
    ],
    lessons: [
      {
        id: 1,
        title: "Our Body Parts",
        type: "song",
        content: {
          songText: "We need a mouth to talk with and two eyes to see. We need a face, two ears, teeth and two knees. We need fingers in our gloves where our two hands end. We need shoulders and elbows so our arms can bend. We need a back and a body and a head on the top. We need our toes in our shoes where our two feet stop. We need legs on the ground to take all our weight. We need a backbone and a neck to hold our head straight."
        }
      },
      {
        id: 2,
        title: "Staying Safe at Home",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Mother", text: "What is that boy doing in the kitchen?", voice: "Kore" },
            { speaker: "Mona", text: "He is playing with matches! We shouldn't leave matches here.", voice: "Zephyr" },
            { speaker: "Mother", text: "Yes, and we shouldn't leave medicine where kids can reach it.", voice: "Kore" },
            { speaker: "Mona", text: "We must follow the safety list.", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 3,
        title: "The boy who lied",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Murad", text: "Mum, I'm very ill with a high temperature! I need a doctor.", voice: "Puck" },
            { speaker: "Doctor", text: "I examined Murad. There is nothing wrong with him. He is fine.", voice: "Charon" },
            { speaker: "Mother", text: "Why did you lie about being sick, Murad?", voice: "Kore" },
            { speaker: "Murad", text: "Don't be angry, Mum. I did it to make you laugh.", voice: "Puck" }
          ]
        }
      }
    ]
  },
  {
    id: 12,
    title: "One More Time",
    arabicTitle: "مراجعة وحماية البيئة",
    color: "bg-rose-400 text-rose-950 border-rose-600",
    icon: "♻️",
    words: [
      { id: "w12-1", word: "Recycle", arabic: "إعادة تدوير", image: "♻️", example: "We can recycle and reuse paper.", soundText: "What can we re-use and recycle?", unit: 12 },
      { id: "w12-2", word: "Rubbish", arabic: "نفايات", image: "🗑️", example: "Don't drop rubbish on the grass.", soundText: "Don't throw down rubbish and leave it behind.", unit: 12 },
      { id: "w12-3", word: "Energy", arabic: "طاقة", image: "💡", example: "Turn out lights to save energy.", soundText: "Don't waste water or energy.", unit: 12 },
      { id: "w12-4", word: "Clay", arabic: "صلصال", image: "🧱", example: "People long ago wrote on clay.", soundText: "People in Iraq wrote symbols on clay.", unit: 12 },
      { id: "w12-5", word: "Sailor", arabic: "بحار", image: "⚓", example: "Khalifa is a sailor.", soundText: "He takes tourists on boat trips down the river.", unit: 12 },
      { id: "w12-6", word: "Herder", arabic: "راعى", image: "🐑", example: "Musa is a herder.", soundText: "He takes his animals to eat grass near the river.", unit: 12 }
    ],
    lessons: [
      {
        id: 1,
        title: "Take Care of the Earth!",
        type: "song",
        content: {
          songText: "Take care of the Earth and try to be green. Keep the Earth healthy and keep it clean. When you leave a room or go out at night, remember to stop and turn out the light. Don't throw down rubbish and leave it behind. Don't waste paper or money. Don't waste food or time. Don't waste water or energy and try to be green. Keep the Earth healthy and keep it clean."
        }
      },
      {
        id: 2,
        title: "Nile River Jobs",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Yasir", text: "I am Yasir, a farmer. I use a pump to water my dates.", voice: "Zephyr" },
            { speaker: "Khalid", text: "I am Khalid, a bricklayer. I mix water and clay to build houses.", voice: "Kore" },
            { speaker: "Khalifa", text: "I am Khalifa, a sailor. I take tourists on interesting boat trips.", voice: "Puck" },
            { speaker: "Salim", text: "I am Salim, a fisherman. I catch fish to sell in the market.", voice: "Zephyr" }
          ]
        }
      },
      {
        id: 3,
        title: "The sly Fox and Crow",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Fox", text: "Mrs Crow, you are so beautiful. Please sing a song to let me hear your sweet voice!", voice: "Charon" },
            { speaker: "Crow", text: "Oh, thank you! Caw! Caw! Caw!", voice: "Puck" },
            { speaker: "Narrator", text: "When she opened her mouth, the cheese fell out to the ground!", voice: "Kore" },
            { speaker: "Fox", text: "Haha! Thank you for the delicious cheese, Mrs Crow! Goodbye!", voice: "Charon" }
          ]
        }
      }
    ]
  }
];
