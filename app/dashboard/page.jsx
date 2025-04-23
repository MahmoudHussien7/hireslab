// page.jsx
import Link from "next/link";
import {
  BarChart3,
  Users,
  FileText,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  ThumbsUp,
  MessageSquare,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data for dashboard
const stats = [
  {
    title: "Total Articles",
    value: "24",
    change: "+12%",
    trend: "up",
    icon: FileText,
  },
  {
    title: "Total Users",
    value: "573",
    change: "+18%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Page Views",
    value: "14,892",
    change: "+32%",
    trend: "up",
    icon: Eye,
  },
  {
    title: "Engagement Rate",
    value: "8.2%",
    change: "-3%",
    trend: "down",
    icon: TrendingUp,
  },
];

// Sample recent articles
const recentArticles = [
  {
    id: 1,
    title: "The Future of Remote Work in HR Management",
    status: "Published",
    date: "June 15, 2023",
    views: 1245,
    likes: 87,
    comments: 23,
  },
  {
    id: 2,
    title: "Building Inclusive Recruitment Strategies",
    status: "Published",
    date: "May 28, 2023",
    views: 982,
    likes: 64,
    comments: 18,
  },
  {
    id: 3,
    title: "Employee Retention: Beyond Compensation",
    status: "Draft",
    date: "In progress",
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 4,
    title: "The Impact of AI on HR Processes",
    status: "Published",
    date: "March 22, 2023",
    views: 1567,
    likes: 112,
    comments: 34,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your website performance.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/articles/new">Create New Article</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                )}
                <span
                  className={
                    stat.trend === "up" ? "text-green-500" : "text-red-500"
                  }
                >
                  {stat.change} from last month
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="articles">
        <TabsList>
          <TabsTrigger value="articles">Recent Articles</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="articles" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Articles</CardTitle>
              <CardDescription>
                Overview of your recently published and drafted articles.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-3 font-medium">Title</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Date</th>
                      <th className="pb-3 font-medium text-right">Views</th>
                      <th className="pb-3 font-medium text-right">
                        Engagement
                      </th>
                      <th className="pb-3 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentArticles.map((article) => (
                      <tr key={article.id} className="border-b">
                        <td className="py-3">{article.title}</td>
                        <td className="py-3">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              article.status === "Published"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            }`}
                          >
                            {article.status}
                          </span>
                        </td>
                        <td className="py-3 text-muted-foreground">
                          {article.date}
                        </td>
                        <td className="py-3 text-right">
                          {article.views.toLocaleString()}
                        </td>
                        <td className="py-3 text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <span className="flex items-center text-muted-foreground">
                              <ThumbsUp className="mr-1 h-3 w-3" />{" "}
                              {article.likes}
                            </span>
                            <span className="flex items-center text-muted-foreground">
                              <MessageSquare className="mr-1 h-3 w-3" />{" "}
                              {article.comments}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/dashboard/articles/${article.id}`}>
                              Edit
                            </Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" asChild>
                  <Link href="/dashboard/articles">View All Articles</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Website Analytics</CardTitle>
              <CardDescription>
                Traffic and engagement metrics for your website.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="mx-auto h-16 w-16 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">
                  Analytics Visualization
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Detailed analytics charts and graphs would be displayed here.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
