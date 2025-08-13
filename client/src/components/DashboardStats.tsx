import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Shield, TrendingUp, DollarSign, Activity } from "lucide-react";

interface DashboardStatsProps {
  stats: {
    securityScore: number;
    activeServices: number;
    totalMonthlyCost: number;
    recentEvents: number;
    subscriptions: any[];
    events: any[];
  };
}

export default function DashboardStats({ stats }: DashboardStatsProps) {
  if (!stats) return null;

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-secondary-600";
    if (score >= 60) return "text-yellow-600";
    return "text-accent-600";
  };

  const getScoreDescription = (score: number) => {
    if (score >= 80) return "Excellent protection";
    if (score >= 60) return "Good protection";
    return "Needs improvement";
  };

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {/* Security Score */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-sm font-medium text-slate-600">
            <Shield className="h-4 w-4 mr-2" />
            Security Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-200"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  d="m 18,3 a 15,15 0 1,1 0,30 a 15,15 0 1,1 0,-30"
                />
                <path
                  className={getScoreColor(stats.securityScore)}
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={`${stats.securityScore}, 100`}
                  d="m 18,3 a 15,15 0 1,1 0,30 a 15,15 0 1,1 0,-30"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-900">{stats.securityScore}</span>
              </div>
            </div>
          </div>
          <p className={`text-center text-sm ${getScoreColor(stats.securityScore)}`}>
            {getScoreDescription(stats.securityScore)}
          </p>
        </CardContent>
      </Card>

      {/* Active Services */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-sm font-medium text-slate-600">
            <Activity className="h-4 w-4 mr-2" />
            Active Services
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-slate-900 mb-1">{stats.activeServices}</div>
          <p className="text-sm text-slate-600">
            {stats.activeServices === 0 ? 'No services active' : `${stats.activeServices} service${stats.activeServices > 1 ? 's' : ''} protecting you`}
          </p>
        </CardContent>
      </Card>

      {/* Monthly Cost */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-sm font-medium text-slate-600">
            <DollarSign className="h-4 w-4 mr-2" />
            Monthly Cost
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-slate-900 mb-1">
            ${stats.totalMonthlyCost.toFixed(0)}
          </div>
          <p className="text-sm text-slate-600">Current subscription total</p>
        </CardContent>
      </Card>

      {/* Recent Events */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-sm font-medium text-slate-600">
            <TrendingUp className="h-4 w-4 mr-2" />
            Recent Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-slate-900 mb-1">{stats.recentEvents}</div>
          <p className="text-sm text-slate-600">
            {stats.recentEvents === 0 ? 'All quiet' : 'Security events today'}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
