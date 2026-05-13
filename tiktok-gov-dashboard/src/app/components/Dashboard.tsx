import {
  Radio,
  Users,
  AlertTriangle,
  Eye,
  TrendingUp,
  TrendingDown,
  Activity,
  Clock,
  Flag,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

export function Dashboard() {
  const stats = [
    {
      name: 'Active Live Streams',
      value: '47',
      change: '+12%',
      trending: 'up',
      icon: Radio,
      color: 'text-pink-600 bg-pink-100'
    },
    {
      name: 'Total Viewers',
      value: '156.3K',
      change: '+8.2%',
      trending: 'up',
      icon: Eye,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      name: 'Active Violations',
      value: '12',
      change: '-23%',
      trending: 'down',
      icon: AlertTriangle,
      color: 'text-orange-600 bg-orange-100'
    },
    {
      name: 'Moderated Today',
      value: '234',
      change: '+5%',
      trending: 'up',
      icon: Flag,
      color: 'text-blue-600 bg-blue-100'
    }
  ];

  const liveStreams = [
    {
      id: '1',
      streamer: '@dancequeen',
      title: 'Late Night Dance Party 💃',
      viewers: '12.4K',
      duration: '2h 15m',
      status: 'active',
      riskLevel: 'low',
      thumbnail: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=300&fit=crop'
    },
    {
      id: '2',
      streamer: '@gamerpro',
      title: 'Gaming Tournament Finals',
      viewers: '45.2K',
      duration: '1h 42m',
      status: 'active',
      riskLevel: 'medium',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop'
    },
    {
      id: '3',
      streamer: '@cookinglive',
      title: 'Cooking Italian Pasta From Scratch',
      viewers: '8.1K',
      duration: '45m',
      status: 'active',
      riskLevel: 'low',
      thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop'
    },
    {
      id: '4',
      streamer: '@musicjam',
      title: 'Live Music Session 🎸',
      viewers: '18.9K',
      duration: '3h 20m',
      status: 'review',
      riskLevel: 'high',
      thumbnail: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=300&fit=crop'
    }
  ];

  const recentViolations = [
    { id: '1', streamer: '@userviolation1', type: 'Inappropriate Content', time: '5 minutes ago', severity: 'high', action: 'Stream Ended' },
    { id: '2', streamer: '@userviolation2', type: 'Spam Comments', time: '12 minutes ago', severity: 'medium', action: 'Warning Issued' },
    { id: '3', streamer: '@userviolation3', type: 'Copyright Infringement', time: '25 minutes ago', severity: 'high', action: 'Under Review' },
    { id: '4', streamer: '@userviolation4', type: 'Harassment', time: '1 hour ago', severity: 'medium', action: 'User Suspended' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Governance Dashboard</h1>
        <p className="text-gray-600 mt-1">Monitor and manage TikTok Live streams in real-time</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trending === 'up' ? TrendingUp : TrendingDown;

          return (
            <Card key={stat.name}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.name}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <div className={`flex items-center gap-1 mt-2 text-sm ${
                      stat.trending === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <TrendIcon className="w-4 h-4" />
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Server Load</span>
                <span className="font-medium">67%</span>
              </div>
              <Progress value={67} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Moderation Queue</span>
                <span className="font-medium">34%</span>
              </div>
              <Progress value={34} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">API Response Time</span>
                <span className="font-medium text-green-600">Fast (89ms)</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start" variant="outline">
              <Radio className="w-4 h-4 mr-2" />
              Monitor All Streams
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <AlertTriangle className="w-4 h-4 mr-2" />
              View Pending Violations
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="w-4 h-4 mr-2" />
              Review Suspended Users
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Flag className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Moderator Activity</CardTitle>
            <CardDescription>Active in last hour</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['Sarah M.', 'John D.', 'Emily R.', 'Michael B.'].map((name, i) => (
                <div key={name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                      {name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{name}</div>
                      <div className="text-xs text-gray-500">{12 + i * 3} actions</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Active
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Live Streams Monitor</CardTitle>
              <CardDescription>Currently active streams requiring attention</CardDescription>
            </div>
            <Button variant="outline">View All</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {liveStreams.map((stream) => (
              <div key={stream.id} className="border border-gray-200 rounded-lg overflow-hidden hover:border-pink-300 transition-colors">
                <div className="relative">
                  <img
                    src={stream.thumbnail}
                    alt={stream.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-red-600 text-white flex items-center gap-1">
                      <Radio className="w-3 h-3" />
                      LIVE
                    </Badge>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-black/70 text-white">
                      {stream.viewers}
                    </Badge>
                  </div>
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm mb-1 line-clamp-1">{stream.title}</p>
                  <p className="text-xs text-gray-600 mb-2">{stream.streamer}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {stream.duration}
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        stream.riskLevel === 'high' ? 'border-red-500 text-red-600' :
                        stream.riskLevel === 'medium' ? 'border-orange-500 text-orange-600' :
                        'border-green-500 text-green-600'
                      }
                    >
                      {stream.riskLevel}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Violations</CardTitle>
              <CardDescription>Latest policy violations and actions taken</CardDescription>
            </div>
            <Button variant="outline">View All</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentViolations.map((violation) => (
              <div key={violation.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${
                    violation.severity === 'high' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                  }`}>
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">{violation.type}</div>
                    <div className="text-sm text-gray-600">
                      {violation.streamer} • {violation.time}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className={
                      violation.severity === 'high'
                        ? 'border-red-500 text-red-600'
                        : 'border-orange-500 text-orange-600'
                    }
                  >
                    {violation.severity}
                  </Badge>
                  <div className="text-sm text-gray-600 min-w-[120px] text-right">
                    {violation.action}
                  </div>
                  <Button variant="ghost" size="sm">Review</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
