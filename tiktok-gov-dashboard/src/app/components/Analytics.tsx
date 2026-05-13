import {
  TrendingUp,
  Radio,
  AlertTriangle,
  Eye,
  Clock,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export function Analytics() {
  const viewerData = [
    { time: '00:00', viewers: 45000 },
    { time: '04:00', viewers: 32000 },
    { time: '08:00', viewers: 58000 },
    { time: '12:00', viewers: 89000 },
    { time: '16:00', viewers: 125000 },
    { time: '20:00', viewers: 156000 },
    { time: '23:59', viewers: 98000 }
  ];

  const streamData = [
    { day: 'Mon', streams: 42, violations: 5 },
    { day: 'Tue', streams: 38, violations: 3 },
    { day: 'Wed', streams: 51, violations: 7 },
    { day: 'Thu', streams: 47, violations: 4 },
    { day: 'Fri', streams: 65, violations: 8 },
    { day: 'Sat', streams: 78, violations: 12 },
    { day: 'Sun', streams: 71, violations: 9 }
  ];

  const categoryData = [
    { name: 'Gaming', value: 35, color: '#8b5cf6' },
    { name: 'Music', value: 25, color: '#ec4899' },
    { name: 'Entertainment', value: 20, color: '#f59e0b' },
    { name: 'Cooking', value: 12, color: '#10b981' },
    { name: 'Other', value: 8, color: '#6b7280' }
  ];

  const violationTypes = [
    { type: 'Inappropriate Content', count: 45, percentage: 38 },
    { type: 'Copyright', count: 32, percentage: 27 },
    { type: 'Spam', count: 23, percentage: 19 },
    { type: 'Harassment', count: 15, percentage: 13 },
    { type: 'Other', count: 4, percentage: 3 }
  ];

  const stats = [
    { label: 'Total Views Today', value: '2.4M', change: '+12.5%', trend: 'up', icon: Eye, color: 'text-blue-600 bg-blue-100' },
    { label: 'Active Streams', value: '47', change: '+8.2%', trend: 'up', icon: Radio, color: 'text-pink-600 bg-pink-100' },
    { label: 'Avg. Watch Time', value: '42m', change: '+5.1%', trend: 'up', icon: Clock, color: 'text-purple-600 bg-purple-100' },
    { label: 'Violations Rate', value: '2.3%', change: '-15%', trend: 'down', icon: AlertTriangle, color: 'text-orange-600 bg-orange-100' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Platform performance and insights</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>Last 7 days</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    <div className={`text-sm flex items-center gap-1 ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <TrendingUp className={`w-4 h-4 ${stat.trend === 'down' && 'rotate-180'}`} />
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Viewer Traffic - Last 24 Hours</CardTitle>
            <CardDescription>Concurrent viewers throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={viewerData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="viewers"
                  stroke="#ec4899"
                  strokeWidth={3}
                  dot={{ fill: '#ec4899', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Stream Activity</CardTitle>
            <CardDescription>Streams vs violations by day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={streamData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Legend />
                <Bar dataKey="streams" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                <Bar dataKey="violations" fill="#f59e0b" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Categories</CardTitle>
            <CardDescription>Stream distribution by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Violation Analysis</CardTitle>
          <CardDescription>Breakdown of policy violations by type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {violationTypes.map((violation) => (
              <div key={violation.type} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{violation.type}</span>
                  <span className="text-gray-600">{violation.count} violations ({violation.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all"
                    style={{ width: `${violation.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Streams</CardTitle>
          <CardDescription>Highest viewer engagement this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { rank: 1, streamer: '@gamerpro', title: 'Gaming Tournament Finals', viewers: '245K', engagement: 94 },
              { rank: 2, streamer: '@musicjam', title: 'Live Concert Special', viewers: '189K', engagement: 89 },
              { rank: 3, streamer: '@talkshow', title: 'Celebrity Interview', viewers: '167K', engagement: 87 },
              { rank: 4, streamer: '@beautyzone', title: 'Makeup Masterclass', viewers: '142K', engagement: 85 },
              { rank: 5, streamer: '@dancequeen', title: 'Dance Battle Championship', viewers: '128K', engagement: 82 }
            ].map((stream) => (
              <div key={stream.rank} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    #{stream.rank}
                  </div>
                  <div>
                    <div className="font-medium">{stream.title}</div>
                    <div className="text-sm text-gray-600">{stream.streamer}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="font-medium">{stream.viewers}</div>
                    <div className="text-sm text-gray-600">viewers</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600">{stream.engagement}%</div>
                    <div className="text-sm text-gray-600">engagement</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
