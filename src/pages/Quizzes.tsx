import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { QuizCard } from "@/components/ui/quiz-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { mockQuizzes } from "@/data/mockData";
import { Search, Filter, BookOpen, Beaker, Code } from "lucide-react";

const Quizzes = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const subjects = ["All", "Math", "Science", "Computer Science"];
  
  const subjectIcons = {
    "Math": BookOpen,
    "Science": Beaker,
    "Computer Science": Code,
  };

  const filteredQuizzes = mockQuizzes.filter((quiz) => {
    const matchesSubject = selectedSubject === "All" || quiz.subject === selectedSubject;
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Quiz Library</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our extensive collection of quizzes covering Math, Science, and Computer Science
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="accent-card mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search quizzes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Subject Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <div className="flex space-x-2">
                {subjects.map((subject) => (
                  <Button
                    key={subject}
                    variant={selectedSubject === subject ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSubject(subject)}
                    className={selectedSubject === subject ? "hero-button" : ""}
                  >
                    {subject}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Quiz Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredQuizzes.map((quiz) => {
            const IconComponent = subjectIcons[quiz.subject as keyof typeof subjectIcons];
            return (
              <QuizCard
                key={quiz.id}
                title={quiz.title}
                subject={quiz.subject}
                questionCount={quiz.questionCount}
                duration={quiz.duration}
                difficulty={quiz.difficulty}
                points={quiz.points}
                icon={IconComponent && <IconComponent className="w-6 h-6" />}
                onClick={() => {
                  // For now, we'll show an alert. This would navigate to the quiz page in a real app
                  alert(`Starting quiz: ${quiz.title}`);
                }}
              />
            );
          })}
        </div>

        {/* No Results */}
        {filteredQuizzes.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No quizzes found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedSubject("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Stats Section */}
        <Card className="accent-card text-center">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">Quiz Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{mockQuizzes.length}</div>
              <div className="text-muted-foreground">Total Quizzes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">3</div>
              <div className="text-muted-foreground">Subjects Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-500 mb-2">
                {mockQuizzes.reduce((total, quiz) => total + quiz.points, 0)}
              </div>
              <div className="text-muted-foreground">Total Points Available</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Quizzes;