type Question = {
  id: number;
  type: "framework" | "css_library";
  question: string;
  options: string[];
  answer: string;
};

type GameData = {
  questions: Question[];
};
