import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Trophy } from "lucide-react";

interface QuizCardProps {
  title: string;
  subject: "Math" | "Science" | "Computer Science";
  questionCount: number;
  duration: string;
  difficulty: "Easy" | "Medium" | "Hard";
  points: number;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const subjectColors = {
  "Math": "bg-blue-500",
  "Science": "bg-green-500",
  "Computer Science": "bg-purple-500",
};

const difficultyColors = {
  "Easy": "bg-secondary text-secondary-foreground",
  "Medium": "bg-yellow-500 text-white",
  "Hard": "bg-red-500 text-white",
};

export const QuizCard = ({
  title,
  subject,
  questionCount,
  duration,
  difficulty,
  points,
  icon,
  onClick,
}: QuizCardProps) => {
  return (
    <Card className="quiz-card group cursor-pointer" onClick={onClick}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${subjectColors[subject]} rounded-xl flex items-center justify-center text-white`}>
          {icon || <BookOpen className="w-6 h-6" />}
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>
          {difficulty}
        </div>
      </div>

      <h3 className="font-bold text-lg text-card-foreground mb-2 group-hover:text-primary transition-smooth">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4">{subject}</p>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <BookOpen className="w-4 h-4" />
            <span>{questionCount} questions</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-secondary">
            <Trophy className="w-4 h-4" />
            <span className="font-semibold text-sm">{points} points</span>
          </div>
          <Button 
            className="success-button" 
            size="sm"
            onClick={onClick}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </Card>
  );
};