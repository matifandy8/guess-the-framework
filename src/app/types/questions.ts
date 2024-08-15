type Question = {
  id: number;
  type: "framework" | "css_library";
  question: string;
  options: string[];
  answer: string;
};

export type GameData = {
  questions: Question[];
};
