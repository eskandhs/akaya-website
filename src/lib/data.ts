export const LAUNCH_DATE_EST = "2026-07-01T00:00:00-04:00"; // July 1, 2026 00:00 EST

export type Conversation = {
  id: string;
  label: string;
  question: string;
  answer: string[];
};

export const PRIMARY_CONVERSATION: Conversation = {
  id: "finance",
  label: "Finance",
  question: "When will I see financial growth?",
  answer: [
    "The first signs of loosening start now through July 2027. The most productive stretch for building wealth is between June and late July this year.",
    "A more permanent shift in your income and investment capacity solidifies between October 2027 and March 2028.",
    "These aren't random windows. They're the result of your persistence through the current obstacles. The skills you're building in your current role are exactly what gets monetized once the window fully opens.",
    "Focus on what you're learning right now. That's your leverage.",
  ],
};

export const SECONDARY_CONVERSATIONS: Conversation[] = [
  {
    id: "career",
    label: "Career decision",
    question: "Should I quit my job and start my own business?",
    answer: [
      "Yes, but not yet. Your chart strongly favors independent business over traditional employment. That's not a close call.",
      "But right now through late 2026, you're in a compressed phase that would carry the wrong energy into a new venture.",
      "A stronger launch position opens early 2027. The business should be in a knowledge-intensive, research-oriented domain. Your earning capacity peaks from 2030 onward.",
      "Stay. Build the skills. Launch when the ground is ready.",
    ],
  },
  {
    id: "relationship",
    label: "Relationship pattern",
    question: "Why do I keep attracting the same type of partner?",
    answer: [
      "You're drawn to people who match your intensity but not your depth. They show up strong, but they can't meet you where it actually matters.",
      "This repeats because the part of you that attracts partners is the same part that overwhelms them. Your strength draws them in, then the dynamic becomes a competition instead of a partnership.",
      "The pattern shifts when your need for a partner to validate you is replaced by your own certainty. That shift has a timeline — and it's closer than it feels.",
    ],
  },
];

export const QUESTIONS = [
  "Should I take this job?",
  "When will the financial pressure ease?",
  "Why do I keep ending up in the same kind of relationship?",
  "Am I actually on the right path?",
  "Is this person right for me?",
  "When is the best time to start my business?",
  "Why do I self-sabotage every time things start going well?",
  "What am I actually good at?",
];
