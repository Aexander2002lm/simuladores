export interface Option {
  key: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswer: string;
  feedback: string;
}

export type QuizState = 'welcome' | 'playing' | 'results';

export interface UserAnswers {
  [questionId: number]: string;
}
