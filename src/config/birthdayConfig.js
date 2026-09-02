export const birthdayConfig = {
  // Friend's Name
  name: "Mohit",

  // Birthday Date (Format: YYYY-MM-DD)
  // Edit this date to Mohit's actual birthday!
  birthDate: "2005-09-03",

  // Music Configuration
  music: {
    path: "public/music/mohit.mp3",
    title: "Birthday Special Tune",
    artist: "For Mohit"
  },

  // Interactive Story Steps
  steps: [
    { id: "welcome", label: "Welcome" },
    { id: "gift", label: "Gift Box" },
    { id: "reveal", label: "Birthday Reveal" },
    { id: "memories", label: "Memories" },
    { id: "letter", label: "Special Letter" },
    { id: "final", label: "Final Surprise" }
  ],

  // Welcome Screen Details
  welcome: {
    teaser: "Hey Mohit... 👀",
    subtitle: "I have something special for you.",
    buttonText: "Open Your Surprise 🎁"
  },

  // Gift Box Screen Details
  giftBox: {
    title: "Something is waiting for you...",
    subtitle: "Click the gift box or button to unlock your surprise!",
    buttonText: "Open the Gift 🎁"
  },

  // Birthday Reveal Section
  reveal: {
    headline: "HAPPY BIRTHDAY MOHIT! 🎂🎉",
    subheading: "Today is your special day, Mohit ❤️",
    quote: "Another trip around the sun, another year of being completely awesome!"
  },

  // Photo Gallery / Memories
  // Note: Place your own photos in public/photos/ memory1.jpg, memory2.jpg, etc.
  // The app will gracefully fall back to high quality placeholder images if local photos are missing.
  photos: [
    {
      id: 1,
      src: "public/photos/1 (2).jpeg",
      fallbackSrc: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
      title: "Unforgettable Laughs",
      caption: "Every moment with you is a core memory! 😃"
    },
    {
      id: 2,
      src: "public/photos/2 (2).jpeg",
      fallbackSrc: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      title: "un expected meetups",
      caption: "To more fun! 💨"
    },
    {
      id: 3,
      src: "public/photos/3 (2).jpeg",
      fallbackSrc: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
      title: "Celebration Vibe",
      caption: "Cheers to another year of pure greatness! 🥂✨"
    },
    {
      id: 4,
      src: "public/photos/4 (2).jpeg",
      fallbackSrc: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
      title: "Good Times",
      caption: "Brothers for life through thick and thin! 🤝🔥"
    },
    
  ],

  // Special Letter
  letter: {
    title: "A Little Message For You !",
    greeting: "Dear Gandu Mohit,",
    paragraphs: [
      "Some people come into our lives and make ordinary moments unforgettable.",
      "Thank you for all the memories, laughs, crazy moments, and true friendship we've shared.",
      "On your special day, I just want to say...",
      "Happy Birthday,  Mohit! ❤️"
    ],
    closing: "Wish you all the success & happiness in the world!"
  },

  // Final Surprise Climax
  finalSurprise: {
    tease: "Wait... there's one last thing.",
    headline: "🎉 HAPPY BIRTHDAY MOHIT 🎉",
    quote: "Keep smiling. Keep shining. And keep being you. ❤️",
    wishes: [
      "✨ May all your dreams come true this year!",
      "🚀 Stay unstoppable and keep soaring high!",
      "🎂 Wishing you endless joy, peace, and health!"
    ]
  }
};
