import { Navigation } from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockUserProgress } from "@/data/mockData";
import { 
  Trophy, 
  TrendingUp, 
  Calendar, 
  Target, 
  BookOpen, 
  Clock,
  Award,
  Flame
} from "lucide-react";

const Dashboard = () => {
  const { totalPoints, rank, quizzesCompleted, streakDays, recentQuizzes, subjectProgress } = mockUserProgress;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Welcome back, Student! 👋</h1>
          <p className="text-xl text-muted-foreground">
            Here's how you're doing on your learning journey
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="accent-card text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-3xl font-bold text-secondary mb-2">{totalPoints.toLocaleString()}</div>
            <p className="text-muted-foreground">Total Points</p>
          </Card>

          <Card className="accent-card text-center">
            <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-secondary-foreground" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">#{rank}</div>
            <p className="text-muted-foreground">Global Rank</p>
          </Card>

          <Card className="accent-card text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">{quizzesCompleted}</div>
            <p className="text-muted-foreground">Quizzes Completed</p>
          </Card>

          <Card className="accent-card text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-orange-500 mb-2">{streakDays}</div>
            <p className="text-muted-foreground">Day Streak</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="quiz-card">
              <h3 className="text-xl font-bold text-card-foreground mb-6">Recent Quiz Performance</h3>
              <div className="space-y-4">
                {recentQuizzes.map((quiz, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{quiz.name}</h4>
                        <p className="text-sm text-muted-foreground">{quiz.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${quiz.score >= 80 ? 'text-secondary' : 'text-yellow-500'}`}>
                        {quiz.score}%
                      </div>
                      <div className="flex items-center space-x-1">
                        {quiz.score >= 90 && <Award className="w-4 h-4 text-yellow-500" />}
                        <span className="text-sm text-muted-foreground">
                          {quiz.score >= 90 ? 'Excellent!' : quiz.score >= 80 ? 'Great!' : 'Good!'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="quiz-card">
              <h3 className="text-xl font-bold text-card-foreground mb-6">Subject Progress</h3>
              <div className="space-y-6">
                {Object.entries(subjectProgress).map(([subject, progress]) => (
                  <div key={subject}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{subject}</span>
                      <span className="text-sm font-semibold text-muted-foreground">{progress}%</span>
                    </div>
                    <div className="progress-bar h-3">
                      <div 
                        className="progress-fill h-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="accent-card text-center">
              <h3 className="text-xl font-bold text-card-foreground mb-4">🎯 Daily Goal</h3>
              <div className="space-y-4">
                <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-10 h-10 text-secondary-foreground" />
                </div>
                <p className="text-muted-foreground">Complete 1 quiz today</p>
                <div className="progress-bar h-3">
                  <div className="progress-fill h-full" style={{ width: '0%' }}></div>
                </div>
                <p className="text-sm text-muted-foreground">0 of 1 completed</p>
                <Button 
                  className="success-button w-full"
                  onClick={() => window.location.href = '/quizzes'}
                >
                  Start Today's Quiz
                </Button>
              </div>
            </Card>

            <Card className="accent-card">
              <h3 className="text-xl font-bold text-card-foreground mb-4">🏆 Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Quiz Master</div>
                    <div className="text-xs text-muted-foreground">Complete 10 quizzes</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Flame className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Hot Streak</div>
                    <div className="text-xs text-muted-foreground">5 day learning streak</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg opacity-50">
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-muted-foreground">Rising Star</div>
                    <div className="text-xs text-muted-foreground">Reach top 5</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="accent-card text-center">
              <h3 className="text-lg font-bold text-card-foreground mb-3">📅 This Week</h3>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                      index < 5 
                        ? 'bg-secondary text-secondary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Keep your streak going!</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;