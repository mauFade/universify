"use client";

import { useState } from "react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
  CreditCard,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  Loader2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { redirect } from "next/navigation";

const AdminPage = () => {
  const { user } = userStore();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="size-16 animate-spin text-muted-foreground" />
          <p className="text-muted-foreground">Loading admin dashboard...</p>
        </div>
      </div>
    );
  } else if (!user.isAdmin) {
    redirect("/webapp/dashboard");
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
      title: "Active Subscriptions",
      value: "1,234",
      change: "+15.3%",
      changeType: "positive" as const,
      icon: CreditCard,
      description: "Paid subscriptions",
    },
    {
      title: "Monthly Revenue",
      value: "$45,231",
      change: "+8.2%",
      changeType: "positive" as const,
      icon: TrendingUp,
      description: "Recurring revenue",
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

  const allSubscriptions = [
    {
      id: "1",
      userId: "1",
      userName: "John Doe",
      userEmail: "john@example.com",
      plan: "Premium",
      status: "active",
      amount: 29.99,
      currency: "USD",
      billingCycle: "monthly",
      startDate: "2024-01-15",
      nextBilling: "2024-02-15",
      paymentMethod: "**** 4242",
    },
    {
      id: "2",
      userId: "2",
      userName: "Jane Smith",
      userEmail: "jane@example.com",
      plan: "Pro",
      status: "active",
      amount: 99.99,
      currency: "USD",
      billingCycle: "yearly",
      startDate: "2024-01-10",
      nextBilling: "2025-01-10",
      paymentMethod: "**** 1234",
    },
    {
      id: "3",
      userId: "3",
      userName: "Bob Johnson",
      userEmail: "bob@example.com",
      plan: "Basic",
      status: "cancelled",
      amount: 9.99,
      currency: "USD",
      billingCycle: "monthly",
      startDate: "2024-01-05",
      nextBilling: null,
      paymentMethod: "**** 5678",
    },
    {
      id: "4",
      userId: "4",
      userName: "Alice Brown",
      userEmail: "alice@example.com",
      plan: "Premium",
      status: "pending",
      amount: 29.99,
      currency: "USD",
      billingCycle: "monthly",
      startDate: "2024-01-20",
      nextBilling: "2024-02-20",
      paymentMethod: "**** 9012",
    },
    {
      id: "5",
      userId: "5",
      userName: "Charlie Wilson",
      userEmail: "charlie@example.com",
      plan: "Pro",
      status: "active",
      amount: 99.99,
      currency: "USD",
      billingCycle: "yearly",
      startDate: "2024-01-12",
      nextBilling: "2025-01-12",
      paymentMethod: "**** 3456",
    },
    {
      id: "6",
      userId: "6",
      userName: "Diana Prince",
      userEmail: "diana@example.com",
      plan: "Basic",
      status: "active",
      amount: 9.99,
      currency: "USD",
      billingCycle: "monthly",
      startDate: "2024-01-18",
      nextBilling: "2024-02-18",
      paymentMethod: "**** 7890",
    },
    {
      id: "7",
      userId: "7",
      userName: "Ethan Hunt",
      userEmail: "ethan@example.com",
      plan: "Premium",
      status: "cancelled",
      amount: 29.99,
      currency: "USD",
      billingCycle: "monthly",
      startDate: "2024-01-08",
      nextBilling: null,
      paymentMethod: "**** 2468",
    },
    {
      id: "8",
      userId: "8",
      userName: "Fiona Green",
      userEmail: "fiona@example.com",
      plan: "Pro",
      status: "pending",
      amount: 99.99,
      currency: "USD",
      billingCycle: "yearly",
      startDate: "2024-01-22",
      nextBilling: "2025-01-22",
      paymentMethod: "**** 1357",
    },
    {
      id: "9",
      userId: "9",
      userName: "George Lucas",
      userEmail: "george@example.com",
      plan: "Basic",
      status: "active",
      amount: 9.99,
      currency: "USD",
      billingCycle: "monthly",
      startDate: "2024-01-14",
      nextBilling: "2024-02-14",
      paymentMethod: "**** 9753",
    },
    {
      id: "10",
      userId: "10",
      userName: "Helen Troy",
      userEmail: "helen@example.com",
      plan: "Premium",
      status: "active",
      amount: 29.99,
      currency: "USD",
      billingCycle: "monthly",
      startDate: "2024-01-16",
      nextBilling: "2024-02-16",
      paymentMethod: "**** 8642",
    },
    {
      id: "11",
      userId: "11",
      userName: "Ivan Petrov",
      userEmail: "ivan@example.com",
      plan: "Pro",
      status: "cancelled",
      amount: 99.99,
      currency: "USD",
      billingCycle: "yearly",
      startDate: "2024-01-03",
      nextBilling: null,
      paymentMethod: "**** 7531",
    },
    {
      id: "12",
      userId: "12",
      userName: "Julia Roberts",
      userEmail: "julia@example.com",
      plan: "Basic",
      status: "pending",
      amount: 9.99,
      currency: "USD",
      billingCycle: "monthly",
      startDate: "2024-01-25",
      nextBilling: "2024-02-25",
      paymentMethod: "**** 6420",
    },
    {
      id: "13",
      userId: "13",
      userName: "Kevin Spacey",
      userEmail: "kevin@example.com",
      plan: "Premium",
      status: "active",
      amount: 29.99,
      currency: "USD",
      billingCycle: "monthly",
      startDate: "2024-01-11",
      nextBilling: "2024-02-11",
      paymentMethod: "**** 5319",
    },
    {
      id: "14",
      userId: "14",
      userName: "Lisa Simpson",
      userEmail: "lisa@example.com",
      plan: "Pro",
      status: "active",
      amount: 99.99,
      currency: "USD",
      billingCycle: "yearly",
      startDate: "2024-01-07",
      nextBilling: "2025-01-07",
      paymentMethod: "**** 4208",
    },
    {
      id: "15",
      userId: "15",
      userName: "Mike Tyson",
      userEmail: "mike@example.com",
      plan: "Basic",
      status: "cancelled",
      amount: 9.99,
      currency: "USD",
      billingCycle: "monthly",
      startDate: "2024-01-19",
      nextBilling: null,
      paymentMethod: "**** 3197",
    },
    {
      id: "16",
      userId: "16",
      userName: "Nancy Drew",
      userEmail: "nancy@example.com",
      plan: "Premium",
      status: "pending",
      amount: 29.99,
      currency: "USD",
      billingCycle: "monthly",
      startDate: "2024-01-24",
      nextBilling: "2024-02-24",
      paymentMethod: "**** 2086",
    },
    {
      id: "17",
      userId: "17",
      userName: "Oliver Twist",
      userEmail: "oliver@example.com",
      plan: "Pro",
      status: "active",
      amount: 99.99,
      currency: "USD",
      billingCycle: "yearly",
      startDate: "2024-01-13",
      nextBilling: "2025-01-13",
      paymentMethod: "**** 1975",
    },
    {
      id: "18",
      userId: "18",
      userName: "Penelope Cruz",
      userEmail: "penelope@example.com",
      plan: "Basic",
      status: "active",
      amount: 9.99,
      currency: "USD",
      billingCycle: "monthly",
      startDate: "2024-01-17",
      nextBilling: "2024-02-17",
      paymentMethod: "**** 0864",
    },
    {
      id: "19",
      userId: "19",
      userName: "Quentin Tarantino",
      userEmail: "quentin@example.com",
      plan: "Premium",
      status: "cancelled",
      amount: 29.99,
      currency: "USD",
      billingCycle: "monthly",
      startDate: "2024-01-09",
      nextBilling: null,
      paymentMethod: "**** 9753",
    },
    {
      id: "20",
      userId: "20",
      userName: "Rachel Green",
      userEmail: "rachel@example.com",
      plan: "Pro",
      status: "pending",
      amount: 99.99,
      currency: "USD",
      billingCycle: "yearly",
      startDate: "2024-01-21",
      nextBilling: "2025-01-21",
      paymentMethod: "**** 8642",
    },
  ];

  // Pagination calculations
  const totalRows = allSubscriptions.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentSubscriptions = allSubscriptions.slice(startIndex, endIndex);

  // Pagination handlers
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
  };

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
          <Button size="sm" variant="secondary">
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
              <CreditCard className="size-4 mr-2" />
              Manage Subscriptions
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

      {/* Subscriptions Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="size-5" />
                Subscription Management
              </CardTitle>
              <CardDescription>
                Manage user subscriptions and billing information
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Search className="size-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="size-4" />
              </Button>
              <Button size="sm">
                <CreditCard className="size-4" />
                New Subscription
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/20 hover:bg-muted/20">
                <TableHead className="w-[300px] pl-6">User</TableHead>
                <TableHead className="text-right w-[150px]">Amount</TableHead>
                <TableHead className="text-center w-[120px]">Plan</TableHead>
                <TableHead className="text-center w-[120px]">Payment</TableHead>
                <TableHead className="text-center w-[100px]">
                  Next Billing
                </TableHead>
                <TableHead className="text-center w-[100px]">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentSubscriptions.map((subscription) => (
                <TableRow
                  key={subscription.id}
                  className="hover:bg-muted/20 transition-colors"
                >
                  {/* User Column */}
                  <TableCell className="py-3 pl-6">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-8">
                        <AvatarFallback className="text-xs font-medium bg-muted/50">
                          {subscription.userName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-foreground text-sm">
                          {subscription.userName}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {subscription.userEmail}
                        </div>
                      </div>
                    </div>
                  </TableCell>

                  {/* Amount Column */}
                  <TableCell className="text-right py-3">
                    <div className="font-medium text-foreground text-sm">
                      ${subscription.amount} {subscription.currency}
                    </div>
                    <div className="text-xs text-muted-foreground capitalize">
                      {subscription.billingCycle}
                    </div>
                  </TableCell>

                  {/* Plan Column */}
                  <TableCell className="text-center py-3">
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-muted/50 text-foreground">
                      {subscription.plan}
                    </div>
                  </TableCell>

                  {/* Payment Column */}
                  <TableCell className="text-center py-3">
                    <div className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-muted/30 text-muted-foreground">
                      {subscription.paymentMethod}
                    </div>
                  </TableCell>

                  {/* Next Billing Column */}
                  <TableCell className="text-center py-3">
                    <div className="text-xs text-muted-foreground">
                      {subscription.nextBilling ? (
                        <div className="flex items-center justify-center gap-1">
                          <Calendar className="size-3" />
                          <span>{subscription.nextBilling}</span>
                        </div>
                      ) : (
                        "N/A"
                      )}
                    </div>
                  </TableCell>

                  {/* Status Column */}
                  <TableCell className="text-center py-3">
                    <div className="flex items-center justify-center gap-1.5">
                      {subscription.status === "active" && (
                        <CheckCircle className="size-3 text-green-500" />
                      )}
                      {subscription.status === "cancelled" && (
                        <XCircle className="size-3 text-red-500" />
                      )}
                      {subscription.status === "pending" && (
                        <Clock className="size-3 text-yellow-500" />
                      )}
                      <span className="text-xs font-medium text-foreground capitalize">
                        {subscription.status}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between px-6 py-4 bg-muted/10 border-t">
            {/* Rows per page */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                Rows per page
              </span>
              <Select
                value={rowsPerPage.toString()}
                onValueChange={(value) =>
                  handleRowsPerPageChange(Number(value))
                }
              >
                <SelectTrigger className="w-16 h-7 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Page info and Navigation */}
            <div className="flex items-center gap-4">
              <div className="text-xs text-muted-foreground">
                Page {currentPage} of {totalPages}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                  className="size-7 p-0 hover:bg-muted/50"
                >
                  <ChevronsLeft className="size-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="size-7 p-0 hover:bg-muted/50"
                >
                  <ChevronLeft className="size-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="size-7 p-0 hover:bg-muted/50"
                >
                  <ChevronRight className="size-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                  className="size-7 p-0 hover:bg-muted/50"
                >
                  <ChevronsRight className="size-3" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

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
