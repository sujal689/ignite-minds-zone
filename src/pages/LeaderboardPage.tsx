import { Navigation } from "@/components/ui/navigation";
import { Leaderboard } from "@/components/ui/leaderboard";
import { Card } from "@/components/ui/card";
import { mockLeaderboard } from "@/data/mockData";
import { Trophy, TrendingUp, Users, Target } from "lucide-react";

const LeaderboardPage = () => {
  const currentUser = mockLeaderboard.find(entry => entry.name === "You");
  const topPerformers = mockLeaderboard.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">🏆 Leaderboard</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how you stack up against other students and climb to the top!
          </p>
        </div>

        {/* Top 3 Showcase */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {topPerformers.map((performer, index) => (
            <Card
              key={performer.id}
              className={`text-center p-8 ${
                index === 0 
                  ? "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 transform scale-105" 
                  : index === 1
                  ? "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200"
                  : "bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200"
              }`}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-primary-foreground">
                  {performer.name.charAt(0)}
                </div>
                <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                  index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : "bg-amber-600"
                }`}>
                  {index + 1}
                </div>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{performer.name}</h3>
              <div className="text-2xl font-bold text-secondary mb-1">{performer.points.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground">{performer.quizzesCompleted} quizzes completed</p>
            </Card>
          ))}
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="accent-card text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">{mockLeaderboard.length}</div>
            <p className="text-sm text-muted-foreground">Active Students</p>
          </Card>

          <Card className="accent-card text-center">
            <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {Math.max(...mockLeaderboard.map(e => e.points)).toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground">Highest Score</p>
          </Card>

          <Card className="accent-card text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {Math.round(mockLeaderboard.reduce((sum, e) => sum + e.points, 0) / mockLeaderboard.length).toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground">Average Score</p>
          </Card>

          <Card className="accent-card text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {currentUser?.rank || "N/A"}
            </div>
            <p className="text-sm text-muted-foreground">Your Rank</p>
          </Card>
        </div>

        {/* Full Leaderboard */}
        <Leaderboard entries={mockLeaderboard} currentUserId={7} />

        {/* Achievement Section */}
        <Card className="accent-card mt-12 text-center">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">🎯 Weekly Challenge</h3>
          <p className="text-muted-foreground mb-6">
            Complete 5 quizzes this week to earn bonus points and climb the leaderboard!
          </p>
          <div className="w-full bg-muted rounded-full h-4 mb-4">
            <div 
              className="progress-fill h-4 rounded-full" 
              style={{ width: `${(3 / 5) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground">3 of 5 quizzes completed</p>
        </Card>
      </div>
    </div>
  );
};

export default LeaderboardPage;