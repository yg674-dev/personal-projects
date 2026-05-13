import {
  Search,
  Filter,
  MoreVertical,
  UserCheck,
  UserX,
  AlertTriangle,
  Eye,
  Ban,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function UserManagement() {
  const users = [
    { id: '1', username: '@dancequeen', name: 'Sarah Johnson', followers: '2.4M', totalStreams: 342, violations: 0, status: 'active', joinDate: 'Jan 2024', lastStream: '2 hours ago', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    { id: '2', username: '@gamerpro', name: 'Mike Chen', followers: '5.8M', totalStreams: 891, violations: 2, status: 'warning', joinDate: 'Mar 2023', lastStream: '1 hour ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    { id: '3', username: '@cookinglive', name: 'Emma Rodriguez', followers: '1.2M', totalStreams: 456, violations: 0, status: 'active', joinDate: 'Aug 2023', lastStream: '30 minutes ago', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
    { id: '4', username: '@musicjam', name: 'David Martinez', followers: '3.1M', totalStreams: 678, violations: 5, status: 'suspended', joinDate: 'Dec 2022', lastStream: '2 days ago', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
    { id: '5', username: '@fitnessguru', name: 'Lisa Anderson', followers: '890K', totalStreams: 234, violations: 0, status: 'active', joinDate: 'Feb 2024', lastStream: '5 hours ago', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
    { id: '6', username: '@artstudio', name: 'Alex Kim', followers: '567K', totalStreams: 189, violations: 1, status: 'review', joinDate: 'May 2024', lastStream: '3 hours ago', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' },
    { id: '7', username: '@talkshow', name: 'Rachel Green', followers: '4.2M', totalStreams: 523, violations: 3, status: 'warning', joinDate: 'Jul 2023', lastStream: '1 hour ago', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop' },
    { id: '8', username: '@beautyzone', name: 'Nina Patel', followers: '2.8M', totalStreams: 412, violations: 0, status: 'active', joinDate: 'Nov 2023', lastStream: '4 hours ago', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop' }
  ];

  const stats = [
    { label: 'Total Users', value: '2.4M', icon: UserCheck, color: 'text-blue-600 bg-blue-100' },
    { label: 'Active Streamers', value: '47K', icon: UserCheck, color: 'text-green-600 bg-green-100' },
    { label: 'Under Review', value: '234', icon: AlertTriangle, color: 'text-orange-600 bg-orange-100' },
    { label: 'Suspended', value: '89', icon: UserX, color: 'text-red-600 bg-red-100' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        <p className="text-gray-600 mt-1">Manage streamers and monitor account status</p>
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
          <div className="flex items-center justify-between">
            <CardTitle>Streamer Accounts</CardTitle>
            <div className="flex items-center gap-3">
              <div className="relative w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search by username, name, or ID..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All Users</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="warning">Warnings</TabsTrigger>
              <TabsTrigger value="suspended">Suspended</TabsTrigger>
              <TabsTrigger value="review">Under Review</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Followers</TableHead>
                    <TableHead>Total Streams</TableHead>
                    <TableHead>Violations</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Stream</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-gray-600">{user.username}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{user.followers}</TableCell>
                      <TableCell>{user.totalStreams}</TableCell>
                      <TableCell>
                        {user.violations > 0 ? (
                          <Badge variant="destructive">{user.violations}</Badge>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            user.status === 'active' ? 'border-green-500 text-green-600 bg-green-50' :
                            user.status === 'warning' ? 'border-orange-500 text-orange-600 bg-orange-50' :
                            user.status === 'suspended' ? 'border-red-500 text-red-600 bg-red-50' :
                            'border-blue-500 text-blue-600 bg-blue-50'
                          }
                        >
                          {user.status === 'active' && <CheckCircle className="w-3 h-3 mr-1" />}
                          {user.status === 'warning' && <AlertTriangle className="w-3 h-3 mr-1" />}
                          {user.status === 'suspended' && <XCircle className="w-3 h-3 mr-1" />}
                          {user.status === 'review' && <Eye className="w-3 h-3 mr-1" />}
                          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">{user.lastStream}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="w-4 h-4 mr-2" />
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <AlertTriangle className="w-4 h-4 mr-2" />
                              View Violations
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-orange-600">
                              <AlertTriangle className="w-4 h-4 mr-2" />
                              Issue Warning
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Ban className="w-4 h-4 mr-2" />
                              Suspend Account
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="active" className="mt-6">
              <div className="text-center py-12">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Active Users</h3>
                <p className="text-gray-600">Showing users in good standing</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
