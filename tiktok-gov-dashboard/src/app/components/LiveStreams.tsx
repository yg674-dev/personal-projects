import {
  Radio,
  Eye,
  Clock,
  MoreVertical,
  AlertCircle,
  Play,
  StopCircle,
  Flag,
  MessageSquare,
  Users
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function LiveStreams() {
  const streams = [
    { id: '1', streamer: '@dancequeen', title: 'Late Night Dance Party 💃', category: 'Entertainment', viewers: '12.4K', duration: '2h 15m', riskLevel: 'low', comments: '2.1K', flags: 0, thumbnail: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=300&fit=crop' },
    { id: '2', streamer: '@gamerpro', title: 'Gaming Tournament Finals - Epic Battles', category: 'Gaming', viewers: '45.2K', duration: '1h 42m', riskLevel: 'medium', comments: '8.4K', flags: 3, thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop' },
    { id: '3', streamer: '@cookinglive', title: 'Cooking Italian Pasta From Scratch', category: 'Cooking', viewers: '8.1K', duration: '45m', riskLevel: 'low', comments: '1.2K', flags: 0, thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop' },
    { id: '4', streamer: '@musicjam', title: 'Live Music Session 🎸 Rock Covers', category: 'Music', viewers: '18.9K', duration: '3h 20m', riskLevel: 'high', comments: '5.6K', flags: 8, thumbnail: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=300&fit=crop' },
    { id: '5', streamer: '@fitnessguru', title: 'Morning Yoga Flow - Join Me!', category: 'Fitness', viewers: '6.3K', duration: '1h 05m', riskLevel: 'low', comments: '892', flags: 1, thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop' },
    { id: '6', streamer: '@artstudio', title: 'Digital Art Creation - Speed Paint', category: 'Art', viewers: '3.7K', duration: '2h 33m', riskLevel: 'low', comments: '654', flags: 0, thumbnail: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop' },
    { id: '7', streamer: '@talkshow', title: 'Late Night Talk & Q&A Session', category: 'Talk', viewers: '22.1K', duration: '1h 18m', riskLevel: 'medium', comments: '4.2K', flags: 5, thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop' },
    { id: '8', streamer: '@beautyzone', title: 'Makeup Tutorial - Evening Glam Look', category: 'Beauty', viewers: '15.8K', duration: '58m', riskLevel: 'low', comments: '2.8K', flags: 0, thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Live Streams</h1>
          <p className="text-gray-600 mt-1">Monitor and manage all active live streams</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="gaming">Gaming</SelectItem>
              <SelectItem value="music">Music</SelectItem>
              <SelectItem value="cooking">Cooking</SelectItem>
              <SelectItem value="entertainment">Entertainment</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="viewers">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="viewers">Most Viewers</SelectItem>
              <SelectItem value="duration">Longest Duration</SelectItem>
              <SelectItem value="risk">Risk Level</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Streams ({streams.length})</TabsTrigger>
          <TabsTrigger value="high-risk">High Risk (1)</TabsTrigger>
          <TabsTrigger value="flagged">Flagged (4)</TabsTrigger>
          <TabsTrigger value="popular">Popular (3)</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {streams.map((stream) => (
              <Card key={stream.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={stream.thumbnail}
                    alt={stream.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-red-600 text-white flex items-center gap-1">
                      <Radio className="w-3 h-3" />
                      LIVE
                    </Badge>
                  </div>
                  <div className="absolute top-2 right-2 flex gap-2">
                    {stream.flags > 0 && (
                      <Badge className="bg-orange-600 text-white flex items-center gap-1">
                        <Flag className="w-3 h-3" />
                        {stream.flags}
                      </Badge>
                    )}
                    <Badge variant="secondary" className="bg-black/70 text-white">
                      <Eye className="w-3 h-3 mr-1" />
                      {stream.viewers}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <Badge
                      variant="secondary"
                      className={
                        stream.riskLevel === 'high' ? 'bg-red-600 text-white' :
                        stream.riskLevel === 'medium' ? 'bg-orange-500 text-white' :
                        'bg-green-600 text-white'
                      }
                    >
                      {stream.riskLevel.toUpperCase()} RISK
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold line-clamp-2 mb-1">{stream.title}</h3>
                      <p className="text-sm text-gray-600">{stream.streamer}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {stream.category}
                        </Badge>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {stream.duration}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 pt-2 border-t">
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {stream.comments}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {stream.viewers}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1" variant="outline">
                        <Play className="w-4 h-4 mr-1" />
                        Watch
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="sm" variant="outline">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Flag className="w-4 h-4 mr-2" />
                            Flag Stream
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-orange-600">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            Send Warning
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <StopCircle className="w-4 h-4 mr-2" />
                            End Stream
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="high-risk" className="mt-6">
          <div className="text-center py-12">
            <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">High Risk Streams</h3>
            <p className="text-gray-600">Showing streams that require immediate attention</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
