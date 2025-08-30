import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award, Crown } from "lucide-react";

interface LeaderboardEntry {
  id: number;
  name: string;
  points: number;
  quizzesCompleted: number;
  avatar?: string;
  rank: number;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  currentUserId?: number;
}

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="w-6 h-6 text-yellow-500" />;
    case 2:
      return <Trophy className="w-6 h-6 text-gray-400" />;
    case 3:
      return <Medal className="w-6 h-6 text-amber-600" />;
    default:
      return <Award className="w-6 h-6 text-muted-foreground" />;
  }
};

const getRankStyle = (rank: number, isCurrentUser: boolean) => {
  const baseStyle = "transition-smooth hover:shadow-elevated";
  const currentUserStyle = isCurrentUser ? "ring-2 ring-primary" : "";
  
  switch (rank) {
    case 1:
      return `${baseStyle} ${currentUserStyle} bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200`;
    case 2:
      return `${baseStyle} ${currentUserStyle} bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200`;
    case 3:
      return `${baseStyle} ${currentUserStyle} bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200`;
    default:
      return `${baseStyle} ${currentUserStyle} accent-card`;
  }
};

export const Leaderboard = ({ entries, currentUserId }: LeaderboardProps) => {
  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">🏆 Leaderboard</h2>
        <p className="text-muted-foreground">See how you rank against other students</p>
      </div>

      <div className="space-y-3">
        {entries.map((entry, index) => (
          <Card
            key={entry.id}
            className={getRankStyle(entry.rank, entry.id === currentUserId)}
          >
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  {getRankIcon(entry.rank)}
                  <span className="font-bold text-lg text-foreground">#{entry.rank}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {entry.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{entry.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {entry.quizzesCompleted} quizzes completed
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-bold text-xl text-secondary">{entry.points.toLocaleString()}</div>
                <p className="text-sm text-muted-foreground">points</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};