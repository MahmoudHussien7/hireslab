// page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Sample articles data
const articles = [
  {
    id: 1,
    title: "The Future of Remote Work in HR Management",
    status: "Published",
    category: "Trends",
    date: "June 15, 2023",
    views: 1245,
  },
  {
    id: 2,
    title: "Building Inclusive Recruitment Strategies",
    status: "Published",
    category: "Recruitment",
    date: "May 28, 2023",
    views: 982,
  },
  {
    id: 3,
    title: "Employee Retention: Beyond Compensation",
    status: "Draft",
    category: "Talent Management",
    date: "In progress",
    views: 0,
  },
  {
    id: 4,
    title: "The Impact of AI on HR Processes",
    status: "Published",
    category: "Technology",
    date: "March 22, 2023",
    views: 1567,
  },
  {
    id: 5,
    title: "Creating Effective Employee Development Programs",
    status: "Published",
    category: "Training",
    date: "February 18, 2023",
    views: 1089,
  },
  {
    id: 6,
    title: "Navigating HR Compliance in 2023",
    status: "Draft",
    category: "Compliance",
    date: "In progress",
    views: 0,
  },
  {
    id: 7,
    title: "The Role of HR in Company Culture",
    status: "Published",
    category: "Culture",
    date: "January 10, 2023",
    views: 1356,
  },
  {
    id: 8,
    title: "Effective Onboarding Strategies for Remote Teams",
    status: "Published",
    category: "Recruitment",
    date: "December 5, 2022",
    views: 1678,
  },
];

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Filter articles based on search term and filters
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      article.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesCategory =
      categoryFilter === "all" ||
      article.category.toLowerCase() === categoryFilter.toLowerCase();

    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Get unique categories for filter
  const categories = [
    "all",
    ...new Set(articles.map((article) => article.category.toLowerCase())),
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Articles</h2>
          <p className="text-muted-foreground">
            Manage your blog articles and content.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/articles/new">
            <Plus className="mr-2 h-4 w-4" /> New Article
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Articles</CardTitle>
          <CardDescription>
            View, edit, and manage your blog articles.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row md:items-center mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories
                    .filter((c) => c !== "all")
                    .map((category) => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <FileText className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No articles found</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-3 font-medium">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="font-medium -ml-3"
                      >
                        Title <ArrowUpDown className="ml-1 h-4 w-4" />
                      </Button>
                    </th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Category</th>
                    <th className="pb-3 font-medium">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="font-medium -ml-3"
                      >
                        Date <ArrowUpDown className="ml-1 h-4 w-4" />
                      </Button>
                    </th>
                    <th className="pb-3 font-medium text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="font-medium -mr-3"
                      >
                        Views <ArrowUpDown className="ml-1 h-4 w-4" />
                      </Button>
                    </th>
                    <th className="pb-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredArticles.map((article) => (
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
                      <td className="py-3">{article.category}</td>
                      <td className="py-3 text-muted-foreground">
                        {article.date}
                      </td>
                      <td className="py-3 text-right">
                        {article.views.toLocaleString()}
                      </td>
                      <td className="py-3 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/blog/${article.id}`}
                                className="flex items-center"
                              >
                                <Eye className="mr-2 h-4 w-4" /> View
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/dashboard/articles/${article.id}`}
                                className="flex items-center"
                              >
                                <Edit className="mr-2 h-4 w-4" /> Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600 focus:text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing <strong>{filteredArticles.length}</strong> of{" "}
              <strong>{articles.length}</strong> articles
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
