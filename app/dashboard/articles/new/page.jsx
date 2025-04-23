// page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Save, X, ImageIcon, LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample categories
const categories = [
  "Trends",
  "Recruitment",
  "Talent Management",
  "Technology",
  "Training",
  "Compliance",
  "Culture",
];

export default function NewArticlePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("draft");

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would save the article to your database
    console.log({ title, content, category, status });
    alert("Article saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">New Article</h2>
          <p className="text-muted-foreground">
            Create a new blog article for your website.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard/articles">
              <X className="mr-2 h-4 w-4" /> Cancel
            </Link>
          </Button>
          <Button onClick={handleSubmit}>
            <Save className="mr-2 h-4 w-4" /> Save Article
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter article title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="featured-image">Featured Image</Label>
                <div className="flex items-center gap-4">
                  <div className="h-32 w-32 rounded-md border border-dashed border-border flex items-center justify-center bg-muted">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <Button type="button" variant="outline">
                    Upload Image
                  </Button>
                </div>
              </div>

              <div className="grid gap-2">
                <Label>Content</Label>
                <Tabs defaultValue="write">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="write">Write</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                  </TabsList>
                  <TabsContent value="write" className="mt-2">
                    <div className="border rounded-md">
                      <div className="flex items-center gap-1 border-b p-2">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <LinkIcon className="h-4 w-4" />
                          <span className="sr-only">Insert link</span>
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <ImageIcon className="h-4 w-4" />
                          <span className="sr-only">Insert image</span>
                        </Button>
                      </div>
                      <Textarea
                        placeholder="Write your article content here..."
                        className="min-h-[300px] border-0 focus-visible:ring-0"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="preview" className="mt-2">
                    <div className="rounded-md border p-4 min-h-[300px]">
                      {content ? (
                        <div className="prose dark:prose-invert max-w-none">
                          {content}
                        </div>
                      ) : (
                        <div className="flex h-full items-center justify-center text-muted-foreground">
                          Write some content to see a preview
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Write a short excerpt for your article"
                  className="h-24"
                />
                <p className="text-sm text-muted-foreground">
                  This will be displayed on the blog listing page. If left
                  empty, it will be generated from the content.
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" placeholder="Enter tags separated by commas" />
                <p className="text-sm text-muted-foreground">
                  Tags help users find related content.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard/articles">Cancel</Link>
          </Button>
          <Button type="submit">Save Article</Button>
        </div>
      </form>
    </div>
  );
}
