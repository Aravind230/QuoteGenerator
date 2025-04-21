const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Two things are infinite: the universe and human stupidity.",
    author: "Albert Einstein",
  },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    text: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    text: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    text: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde",
  },
  {
    text: "Life is what happens to us while we are making other plans.",
    author: "Allen Saunders",
  },
  {
    text: "We are all in the gutter, but some of us are looking at the stars.",
    author: "Oscar Wilde",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "The best way to predict your future is to create it.",
    author: "Abraham Lincoln",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  {
    text: "Life is short, and it's up to you to make it sweet.",
    author: "Sarah Louise Delany",
  },
  { text: "Try to be a rainbow in someone's cloud.", author: "Maya Angelou" },
  {
    text: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  {
    text: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Don’t count the days, make the days count.",
    author: "Muhammad Ali",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  {
    text: "Nothing is impossible, the word itself says 'I'm possible'!",
    author: "Audrey Hepburn",
  },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    text: "Believe in yourself and all that you are.",
    author: "Christian D. Larson",
  },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "It is our choices that show what we truly are, far more than our abilities.",
    author: "J.K. Rowling",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Be kind whenever possible. It is always possible.",
    author: "Dalai Lama",
  },
  { text: "Limit your 'always' and your 'nevers'.", author: "Amy Poehler" },
  {
    text: "You do not find the happy life. You make it.",
    author: "Camilla Eyring Kimball",
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  { text: "The best way out is always through.", author: "Robert Frost" },
  {
    text: "You must do the things you think you cannot do.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Turn your face to the sun and the shadows fall behind you.",
    author: "Maori Proverb",
  },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  {
    text: "To handle yourself, use your head; to handle others, use your heart.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
  },
  {
    text: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville",
  },
  {
    text: "Failure is another stepping stone to greatness.",
    author: "Oprah Winfrey",
  },
  {
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "You can’t use up creativity. The more you use, the more you have.",
    author: "Maya Angelou",
  },
  { text: "A goal is a dream with a deadline.", author: "Napoleon Hill" },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: "Anaïs Nin",
  },
  {
    text: "Do not wait to strike till the iron is hot, but make it hot by striking.",
    author: "William Butler Yeats",
  },
  {
    text: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  {
    text: "Don’t be pushed around by the fears in your mind.",
    author: "Roy T. Bennett",
  },
  {
    text: "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Anonymous",
  },
  {
    text: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem",
  },
  { text: "You are capable of amazing things.", author: "Unknown" },
  {
    text: "Keep going. Everything you need will come to you.",
    author: "Unknown",
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
  },
  {
    text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    author: "Unknown",
  },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  {
    text: "The struggle you're in today is developing the strength you need for tomorrow.",
    author: "Robert Tew",
  },
  {
    text: "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    author: "Marie Forleo",
  },
  {
    text: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    author: "Francis of Assisi",
  },
  {
    text: "Your time is limited, don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  { text: "Do what makes your soul shine.", author: "Anonymous" },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "If opportunity doesn’t knock, build a door.",
    author: "Milton Berle",
  },
  {
    text: "You get in life what you have the courage to ask for.",
    author: "Oprah Winfrey",
  },
  { text: "No pressure, no diamonds.", author: "Thomas Carlyle" },
  {
    text: "Your passion is waiting for your courage to catch up.",
    author: "Isabelle Lafleche",
  },
  {
    text: "If it scares you, it might be a good thing to try.",
    author: "Seth Godin",
  },
  {
    text: "Don't wait. The time will never be just right.",
    author: "Napoleon Hill",
  },
  {
    text: "Success is getting what you want. Happiness is wanting what you get.",
    author: "Dale Carnegie",
  },
  {
    text: "You don’t find the happy life. You make it.",
    author: "Camilla Eyring Kimball",
  },
  {
    text: "The man who moves a mountain begins by carrying away small stones.",
    author: "Confucius",
  },
  {
    text: "Only in the darkness can you see the stars.",
    author: "Martin Luther King Jr.",
  },
  { text: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
  {
    text: "There is nothing impossible to they who will try.",
    author: "Alexander the Great",
  },
  {
    text: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  { text: "Be so good they can’t ignore you.", author: "Steve Martin" },
  {
    text: "Energy and persistence conquer all things.",
    author: "Benjamin Franklin",
  },
  {
    text: "Magic is believing in yourself. If you can make that happen, you can make anything happen.",
    author: "Johann Wolfgang von Goethe",
  },
];
export default quotes;
