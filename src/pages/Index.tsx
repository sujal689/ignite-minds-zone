import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import { QuizCard } from "@/components/ui/quiz-card";
import { Card } from "@/components/ui/card";
import { mockQuizzes } from "@/data/mockData";
import { BookOpen, Trophy, Users, Target, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Index = () => {
  const featuredQuizzes = mockQuizzes.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Learn, Quiz & 
                  <span className="block text-accent">Excel Together</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Master Math, Science, and Computer Science with interactive quizzes, 
                  compete with peers, and track your progress in our gamified learning platform.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="hero-button text-lg px-8 py-4"
                  onClick={() => window.location.href = '/quizzes'}
                >
                  Start Learning Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() => window.location.href = '/leaderboard'}
                >
                  View Leaderboard
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-white/80 text-sm">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-white/80 text-sm">Quizzes Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-white/80 text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Students learning together" 
                className="rounded-2xl shadow-elevated animate-float"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center animate-glow">
                <Star className="w-12 h-12 text-secondary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Students Love EduPlatform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines the best of education and gaming to make learning 
              fun, competitive, and rewarding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="accent-card text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-bounce">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Interactive Quizzes</h3>
              <p className="text-muted-foreground">
                Engaging multiple-choice questions with instant feedback and detailed explanations.
              </p>
            </Card>

            <Card className="accent-card text-center group">
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-bounce">
                <Trophy className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Competitive Learning</h3>
              <p className="text-muted-foreground">
                Climb the leaderboard, earn points, and compete with friends in real-time.
              </p>
            </Card>

            <Card className="accent-card text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-bounce">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Monitor your improvement with detailed analytics and personalized insights.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Quizzes */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Popular Quizzes
            </h2>
            <p className="text-xl text-muted-foreground">
              Start with these student-favorite quizzes and boost your knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredQuizzes.map((quiz) => (
              <QuizCard
                key={quiz.id}
                title={quiz.title}
                subject={quiz.subject}
                questionCount={quiz.questionCount}
                duration={quiz.duration}
                difficulty={quiz.difficulty}
                points={quiz.points}
              />
            ))}
          </div>

          <div className="text-center">
            <Button 
              className="hero-button text-lg px-8 py-4"
              onClick={() => window.location.href = '/quizzes'}
            >
              View All Quizzes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students who are already improving their grades and having fun while learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="hero-button text-lg px-8 py-4"
              onClick={() => alert("Please connect Supabase integration for authentication. Click the green Supabase button in the top right!")}
            >
              Create Free Account
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => window.location.href = '/quizzes'}
            >
              Try Sample Quiz
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
