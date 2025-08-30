import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockQuestions } from "@/data/mockData";
import { ArrowLeft, Clock, CheckCircle, XCircle } from "lucide-react";

const QuizInterface = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  const question = mockQuestions[currentQuestion];
  const isLastQuestion = currentQuestion === mockQuestions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);

      if (isLastQuestion) {
        setShowResult(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      }
    }
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === mockQuestions[index].correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / mockQuestions.length) * 100);
  };

  if (showResult) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="quiz-card text-center">
            <div className="space-y-6">
              <div className="w-24 h-24 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-12 h-12 text-secondary-foreground" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Quiz Complete!</h1>
              <div className="text-6xl font-bold text-secondary">{score}%</div>
              <p className="text-xl text-muted-foreground">
                You got {answers.filter((answer, index) => answer === mockQuestions[index].correctAnswer).length} out of {mockQuestions.length} questions correct!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="hero-button"
                  onClick={() => window.location.href = '/quizzes'}
                >
                  Take Another Quiz
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = '/dashboard'}
                >
                  View Dashboard
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quiz Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="outline" 
            onClick={() => window.location.href = '/quizzes'}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Quizzes</span>
          </Button>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
            </div>
            <div className="text-muted-foreground">
              {currentQuestion + 1} of {mockQuestions.length}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar h-2 mb-8">
          <div 
            className="progress-fill h-full"
            style={{ width: `${((currentQuestion + 1) / mockQuestions.length) * 100}%` }}
          ></div>
        </div>

        {/* Question */}
        <Card className="quiz-card mb-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-6">
            {question.question}
          </h2>
          
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-smooth ${
                  selectedAnswer === index
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === index ? 'border-primary bg-primary' : 'border-muted-foreground'
                  }`}>
                    {selectedAnswer === index && (
                      <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button 
            variant="outline"
            disabled={currentQuestion === 0}
            onClick={() => {
              setCurrentQuestion(currentQuestion - 1);
              setSelectedAnswer(answers[currentQuestion - 1] || null);
            }}
          >
            Previous
          </Button>
          
          <Button 
            className="success-button"
            disabled={selectedAnswer === null}
            onClick={handleNext}
          >
            {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizInterface;