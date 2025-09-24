"use client";

import { userStore } from "@/stores/users/store";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  TrendingUp,
  Shield,
  Activity,
  Settings,
  UserCheck,
  UserX,
  MoreHorizontal,
  Search,
  Filter,
  Download,
  FolderSync,
} from "lucide-react";

const AdminPage = () => {
  const { user } = userStore();

  if (!user?.isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Shield className="size-12 mx-auto text-muted-foreground mb-4" />
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              You are not authorized to access this page. Admin privileges are
              required.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  // Mock data for demonstration
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: Users,
      description: "Active users this month",
    },
    {
      title: "Revenue",
      value: "$45,231",
      change: "+8.2%",
      changeType: "positive" as const,
      icon: TrendingUp,
      description: "Monthly revenue",
    },
    {
      title: "Admin Actions",
      value: "1,234",
      change: "+23.1%",
      changeType: "positive" as const,
      icon: Shield,
      description: "Actions this week",
    },
    {
      title: "System Health",
      value: "99.9%",
      change: "+0.1%",
      changeType: "positive" as const,
      icon: Activity,
      description: "Uptime this month",
    },
  ];

  const recentUsers = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "User",
      status: "active",
      avatar: null,
      joinedAt: "2024-01-15",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Admin",
      status: "active",
      avatar: null,
      joinedAt: "2024-01-10",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "User",
      status: "inactive",
      avatar: null,
      joinedAt: "2024-01-05",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage users, monitor system health, and oversee platform operations
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="size-4" />
            Export Data
          </Button>
          <Button size="sm">
            <FolderSync className="size-4" />
            Sync crypto data
          </Button>
          <Button size="sm">
            <Settings className="size-4" />
            Settings
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={`inline-flex items-center gap-1 ${
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>{" "}
                from last month
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* User Management */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Manage user accounts and permissions
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Search className="size-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="size-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="size-10">
                      <AvatarImage src={user.avatar || undefined} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={user.role === "Admin" ? "default" : "secondary"}
                    >
                      {user.role}
                    </Badge>
                    <Badge
                      variant={user.status === "active" ? "default" : "outline"}
                    >
                      {user.status}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm">
                        <UserCheck className="size-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <UserX className="size-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Users className="size-4 mr-2" />
              Add New User
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Shield className="size-4 mr-2" />
              Manage Permissions
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Activity className="size-4 mr-2" />
              System Logs
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Settings className="size-4 mr-2" />
              Platform Settings
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
          <CardDescription>
            Monitor platform health and performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="font-medium">Database</div>
                <div className="text-sm text-muted-foreground">PostgreSQL</div>
              </div>
              <Badge variant="default" className="bg-green-100 text-green-800">
                Healthy
              </Badge>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="font-medium">API Server</div>
                <div className="text-sm text-muted-foreground">
                  Response time: 45ms
                </div>
              </div>
              <Badge variant="default" className="bg-green-100 text-green-800">
                Online
              </Badge>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="font-medium">Authentication</div>
                <div className="text-sm text-muted-foreground">Clerk</div>
              </div>
              <Badge variant="default" className="bg-green-100 text-green-800">
                Active
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPage;
