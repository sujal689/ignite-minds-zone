export const mockQuizzes = [
  {
    id: 1,
    title: "Algebra Fundamentals",
    subject: "Math" as const,
    questionCount: 15,
    duration: "20 min",
    difficulty: "Easy" as const,
    points: 150,
  },
  {
    id: 2,
    title: "Chemical Reactions",
    subject: "Science" as const,
    questionCount: 12,
    duration: "15 min",
    difficulty: "Medium" as const,
    points: 200,
  },
  {
    id: 3,
    title: "Programming Basics",
    subject: "Computer Science" as const,
    questionCount: 20,
    duration: "25 min",
    difficulty: "Easy" as const,
    points: 180,
  },
  {
    id: 4,
    title: "Geometry Proofs",
    subject: "Math" as const,
    questionCount: 10,
    duration: "30 min",
    difficulty: "Hard" as const,
    points: 300,
  },
  {
    id: 5,
    title: "Physics Laws",
    subject: "Science" as const,
    questionCount: 18,
    duration: "22 min",
    difficulty: "Medium" as const,
    points: 220,
  },
  {
    id: 6,
    title: "Data Structures",
    subject: "Computer Science" as const,
    questionCount: 14,
    duration: "18 min",
    difficulty: "Hard" as const,
    points: 280,
  },
];

export const mockLeaderboard = [
  {
    id: 1,
    name: "Sarah Chen",
    points: 2850,
    quizzesCompleted: 15,
    rank: 1,
  },
  {
    id: 2,
    name: "Alex Rivera",
    points: 2720,
    quizzesCompleted: 14,
    rank: 2,
  },
  {
    id: 3,
    name: "Maya Patel",
    points: 2680,
    quizzesCompleted: 13,
    rank: 3,
  },
  {
    id: 4,
    name: "James Wilson",
    points: 2540,
    quizzesCompleted: 12,
    rank: 4,
  },
  {
    id: 5,
    name: "Emma Thompson",
    points: 2480,
    quizzesCompleted: 11,
    rank: 5,
  },
  {
    id: 6,
    name: "David Kim",
    points: 2350,
    quizzesCompleted: 10,
    rank: 6,
  },
  {
    id: 7,
    name: "You",
    points: 2280,
    quizzesCompleted: 9,
    rank: 7,
  },
];

export const mockQuestions = [
  {
    id: 1,
    question: "What is the value of x in the equation 2x + 5 = 15?",
    options: ["5", "10", "7.5", "12"],
    correctAnswer: 0,
    explanation: "To solve 2x + 5 = 15, subtract 5 from both sides to get 2x = 10, then divide by 2 to get x = 5.",
  },
  {
    id: 2,
    question: "Which of the following is a chemical change?",
    options: ["Melting ice", "Burning wood", "Cutting paper", "Dissolving salt"],
    correctAnswer: 1,
    explanation: "Burning wood is a chemical change because it creates new substances (ash, smoke, gases) and cannot be reversed.",
  },
  {
    id: 3,
    question: "What does HTML stand for?",
    options: ["High Tech Modern Language", "HyperText Markup Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
    correctAnswer: 1,
    explanation: "HTML stands for HyperText Markup Language, which is used to create the structure of web pages.",
  },
];

export const mockUserProgress = {
  totalPoints: 2280,
  rank: 7,
  quizzesCompleted: 9,
  streakDays: 5,
  recentQuizzes: [
    { name: "Algebra Fundamentals", score: 85, date: "2024-01-15" },
    { name: "Chemical Reactions", score: 92, date: "2024-01-14" },
    { name: "Programming Basics", score: 78, date: "2024-01-13" },
  ],
  subjectProgress: {
    Math: 75,
    Science: 85,
    "Computer Science": 68,
  },
};