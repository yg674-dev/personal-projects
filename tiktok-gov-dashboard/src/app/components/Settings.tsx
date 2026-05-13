import {
  Bell,
  Shield,
  Users,
  FileText,
  Lock,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Configure platform governance and moderation settings</p>
      </div>

      <Tabs defaultValue="moderation" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="moderation">Moderation</TabsTrigger>
          <TabsTrigger value="policies">Policies</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="moderation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Auto-Moderation
              </CardTitle>
              <CardDescription>
                Configure automatic content moderation rules
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Inappropriate Content Detection</Label>
                  <p className="text-sm text-gray-600">Automatically detect and flag inappropriate content</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Copyright Detection</Label>
                  <p className="text-sm text-gray-600">Scan for copyrighted audio and video content</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Spam Filter</Label>
                  <p className="text-sm text-gray-600">Filter spam messages and comments</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Profanity Filter</Label>
                  <p className="text-sm text-gray-600">Automatically censor profane language</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="space-y-3">
                <Label>Auto-Action Threshold</Label>
                <Select defaultValue="high">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Flag all suspicious content</SelectItem>
                    <SelectItem value="medium">Medium - Flag moderate violations</SelectItem>
                    <SelectItem value="high">High - Only flag severe violations</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-600">Set sensitivity level for automatic content flagging</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stream Monitoring</CardTitle>
              <CardDescription>Configure live stream monitoring settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Real-time Content Analysis</Label>
                  <p className="text-sm text-gray-600">Analyze stream content in real-time</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Chat Monitoring</Label>
                  <p className="text-sm text-gray-600">Monitor chat messages for violations</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="space-y-3">
                <Label>Max Stream Duration</Label>
                <div className="flex items-center gap-3">
                  <Input type="number" defaultValue="8" className="w-24" />
                  <span className="text-sm text-gray-600">hours</span>
                </div>
                <p className="text-sm text-gray-600">Maximum allowed stream duration before automatic review</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policies" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Violation Policies
              </CardTitle>
              <CardDescription>
                Configure violation severity and automatic actions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium">Inappropriate Content</h4>
                      <p className="text-sm text-gray-600">Adult content, nudity, violence</p>
                    </div>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                      High Severity
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>First Violation:</span>
                      <Select defaultValue="end">
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="warning">Warning</SelectItem>
                          <SelectItem value="end">End Stream</SelectItem>
                          <SelectItem value="suspend">Suspend Account</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Second Violation:</span>
                      <Select defaultValue="suspend">
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="warning">Warning</SelectItem>
                          <SelectItem value="end">End Stream</SelectItem>
                          <SelectItem value="suspend">Suspend Account</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium">Copyright Infringement</h4>
                      <p className="text-sm text-gray-600">Unauthorized use of copyrighted material</p>
                    </div>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                      High Severity
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>First Violation:</span>
                      <Select defaultValue="end">
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="warning">Warning</SelectItem>
                          <SelectItem value="end">End Stream</SelectItem>
                          <SelectItem value="suspend">Suspend Account</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium">Spam & Misleading Content</h4>
                      <p className="text-sm text-gray-600">Spam messages, misleading titles</p>
                    </div>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                      Medium Severity
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>First Violation:</span>
                      <Select defaultValue="warning">
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="warning">Warning</SelectItem>
                          <SelectItem value="end">End Stream</SelectItem>
                          <SelectItem value="suspend">Suspend Account</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Alert Preferences
              </CardTitle>
              <CardDescription>
                Manage notification preferences for governance events
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>High Severity Violations</Label>
                  <p className="text-sm text-gray-600">Get notified immediately for critical violations</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Stream Monitoring Alerts</Label>
                  <p className="text-sm text-gray-600">Alerts for flagged content in live streams</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>User Reports</Label>
                  <p className="text-sm text-gray-600">Notifications for new user reports</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Daily Digest</Label>
                  <p className="text-sm text-gray-600">Daily summary of platform activity</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Weekly Reports</Label>
                  <p className="text-sm text-gray-600">Weekly governance and analytics reports</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Moderator Team
              </CardTitle>
              <CardDescription>
                Manage moderator accounts and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Sarah Mitchell', role: 'Senior Moderator', status: 'active', actions: 234 },
                  { name: 'John Davis', role: 'Moderator', status: 'active', actions: 189 },
                  { name: 'Emily Rodriguez', role: 'Moderator', status: 'active', actions: 156 },
                  { name: 'Michael Brown', role: 'Junior Moderator', status: 'active', actions: 98 }
                ].map((member) => (
                  <div key={member.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-gray-600">{member.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm font-medium">{member.actions} actions</div>
                        <div className="text-xs text-gray-600">This month</div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        <CheckCircle className="w-3 h-3 inline mr-1" />
                        Active
                      </span>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Add New Moderator
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Security & Access
              </CardTitle>
              <CardDescription>
                Configure security settings and access controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-600">Require 2FA for all moderators</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Session Timeout</Label>
                  <p className="text-sm text-gray-600">Automatic logout after inactivity</p>
                </div>
                <Select defaultValue="30">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>IP Whitelist</Label>
                  <p className="text-sm text-gray-600">Restrict access to specific IP addresses</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Activity Logging</Label>
                  <p className="text-sm text-gray-600">Log all moderator actions</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="space-y-3">
                <Label>Data Retention</Label>
                <Select defaultValue="90">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                    <SelectItem value="365">1 year</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-600">How long to retain violation and activity logs</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertTriangle className="w-5 h-5" />
                Danger Zone
              </CardTitle>
              <CardDescription>
                Irreversible and destructive actions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                <h4 className="font-medium text-red-900 mb-2">Clear All Violation Records</h4>
                <p className="text-sm text-red-700 mb-3">
                  Permanently delete all violation records from the system. This action cannot be undone.
                </p>
                <Button variant="destructive" size="sm">Clear Records</Button>
              </div>
              <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                <h4 className="font-medium text-red-900 mb-2">Reset All Moderation Settings</h4>
                <p className="text-sm text-red-700 mb-3">
                  Reset all moderation settings to factory defaults. This will affect all ongoing monitoring.
                </p>
                <Button variant="destructive" size="sm">Reset Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex items-center justify-end gap-3 pt-6 border-t">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
