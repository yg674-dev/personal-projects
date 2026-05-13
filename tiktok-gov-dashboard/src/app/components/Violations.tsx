import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Ban,
  FileText
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function Violations() {
  const violations = [
    { id: 'VIO-2024-001', streamer: '@musicjam', streamerName: 'David Martinez', type: 'Copyright Infringement', severity: 'high', description: 'Streaming copyrighted music without proper licensing', reportedBy: 'Auto-Detection', timestamp: '2024-03-04 14:23', status: 'pending', action: 'Stream Ended', evidence: 'audio_match_detected.mp3' },
    { id: 'VIO-2024-002', streamer: '@talkshow', streamerName: 'Rachel Green', type: 'Inappropriate Content', severity: 'high', description: 'Displaying inappropriate content during live stream', reportedBy: 'User Reports (23)', timestamp: '2024-03-04 13:45', status: 'resolved', action: 'Warning Issued', evidence: 'screenshot_001.png' },
    { id: 'VIO-2024-003', streamer: '@gamerpro', streamerName: 'Mike Chen', type: 'Spam Comments', severity: 'medium', description: 'Multiple users spamming promotional links in chat', reportedBy: 'Moderator: Sarah M.', timestamp: '2024-03-04 12:10', status: 'resolved', action: 'Chat Restricted', evidence: 'chat_log_export.txt' },
    { id: 'VIO-2024-004', streamer: '@userviolation5', streamerName: 'Unknown User', type: 'Harassment', severity: 'high', description: 'Verbal harassment and bullying of other users', reportedBy: 'User Reports (45)', timestamp: '2024-03-04 11:30', status: 'under_review', action: 'Account Suspended', evidence: 'stream_recording.mp4' },
    { id: 'VIO-2024-005', streamer: '@cookingshow', streamerName: 'Tony Blake', type: 'Misleading Content', severity: 'low', description: 'Misleading title and thumbnail for stream', reportedBy: 'User Reports (8)', timestamp: '2024-03-04 10:15', status: 'pending', action: 'None', evidence: 'thumbnail_comparison.png' },
    { id: 'VIO-2024-006', streamer: '@fitnessguru', streamerName: 'Lisa Anderson', type: 'Dangerous Activity', severity: 'medium', description: 'Promoting unsafe fitness practices without proper warnings', reportedBy: 'Moderator: John D.', timestamp: '2024-03-04 09:42', status: 'dismissed', action: 'Warning Issued', evidence: 'stream_clip_001.mp4' }
  ];

  const stats = [
    { label: 'Total Violations', value: '234', icon: AlertTriangle, color: 'text-orange-600 bg-orange-100' },
    { label: 'Pending Review', value: '12', icon: Clock, color: 'text-blue-600 bg-blue-100' },
    { label: 'Resolved', value: '198', icon: CheckCircle, color: 'text-green-600 bg-green-100' },
    { label: 'Dismissed', value: '24', icon: XCircle, color: 'text-gray-600 bg-gray-100' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Violations</h1>
        <p className="text-gray-600 mt-1">Review and manage policy violations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
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

      <Card>
        <CardHeader>
          <CardTitle>Recent Violations</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">Pending ({violations.filter(v => v.status === 'pending').length})</TabsTrigger>
              <TabsTrigger value="review">Under Review ({violations.filter(v => v.status === 'under_review').length})</TabsTrigger>
              <TabsTrigger value="resolved">Resolved</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="space-y-4">
                {violations.map((violation) => (
                  <div key={violation.id} className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          violation.severity === 'high' ? 'bg-red-100 text-red-600' :
                          violation.severity === 'medium' ? 'bg-orange-100 text-orange-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          <AlertTriangle className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg">{violation.type}</h3>
                            <Badge
                              variant="outline"
                              className={
                                violation.severity === 'high' ? 'border-red-500 text-red-600' :
                                violation.severity === 'medium' ? 'border-orange-500 text-orange-600' :
                                'border-yellow-500 text-yellow-600'
                              }
                            >
                              {violation.severity.toUpperCase()}
                            </Badge>
                            <Badge
                              variant="outline"
                              className={
                                violation.status === 'pending' ? 'border-blue-500 text-blue-600' :
                                violation.status === 'under_review' ? 'border-purple-500 text-purple-600' :
                                violation.status === 'resolved' ? 'border-green-500 text-green-600' :
                                'border-gray-500 text-gray-600'
                              }
                            >
                              {violation.status === 'under_review' ? 'UNDER REVIEW' : violation.status.toUpperCase()}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-3">{violation.description}</p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">ID:</span>
                              <p className="font-medium">{violation.id}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Streamer:</span>
                              <p className="font-medium">{violation.streamer}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Reported By:</span>
                              <p className="font-medium">{violation.reportedBy}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Timestamp:</span>
                              <p className="font-medium">{violation.timestamp}</p>
                            </div>
                          </div>
                          <div className="mt-3 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">Evidence: {violation.evidence}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="text-sm">
                        <span className="text-gray-500">Action Taken: </span>
                        <span className="font-medium">{violation.action}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          Review
                        </Button>
                        {violation.status === 'pending' && (
                          <>
                            <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Resolve
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                              <Ban className="w-4 h-4 mr-2" />
                              Take Action
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pending" className="mt-6">
              <div className="text-center py-12">
                <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Pending Violations</h3>
                <p className="text-gray-600">Showing violations awaiting review</p>
              </div>
            </TabsContent>

            <TabsContent value="review" className="mt-6">
              <div className="text-center py-12">
                <Eye className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Under Review</h3>
                <p className="text-gray-600">Showing violations currently being reviewed</p>
              </div>
            </TabsContent>

            <TabsContent value="resolved" className="mt-6">
              <div className="text-center py-12">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Resolved Violations</h3>
                <p className="text-gray-600">Showing completed violation cases</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
