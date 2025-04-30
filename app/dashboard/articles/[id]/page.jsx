"use client";

import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { Save, X, ImageIcon, Link as LinkIcon, Palette } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import LinkExtension from "@tiptap/extension-link";
import ImageExtension from "@tiptap/extension-image";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import { fetchSingleArticle, updateArticle } from "@/redux/slices/blogSlice";

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

// Utility function to estimate reading time
const estimateReadingTime = (content) => {
  const wordsPerMinute = 200; // Average reading speed
  const text = content.replace(/<[^>]*>/g, ""); // Strip HTML tags
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

// Custom Toolbar Component for TipTap
const Toolbar = ({ editor }) => {
  const linkInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);

  if (!editor) return null;

  const setLink = () => {
    const url = prompt("Enter the URL:");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().unsetLink().run();
    } else {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const addImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Mock image upload (replace with actual upload logic)
      const imageUrl = "/images/uploaded-content-image.jpg"; // Replace with actual URL
      editor.chain().focus().setImage({ src: imageUrl }).run();
    }
  };

  const setColor = (color) => {
    editor.chain().focus().setColor(color).run();
    setColorPickerOpen(false);
  };

  return (
    <div className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 rounded-t-md">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold") ? "bg-gray-200 dark:bg-gray-600" : ""
        }
      >
        <span className="font-bold">B</span>
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic") ? "bg-gray-200 dark:bg-gray-600" : ""
        }
      >
        <span className="italic">I</span>
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 })
            ? "bg-gray-200 dark:bg-gray-600"
            : ""
        }
      >
        H1
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "bg-gray-200 dark:bg-gray-600"
            : ""
        }
      >
        H2
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive("bulletList") ? "bg-gray-200 dark:bg-gray-600" : ""
        }
      >
        <span className="text-sm">•</span>
      </Button>
      <Button type="button" variant="ghost" size="icon" onClick={setLink}>
        <LinkIcon className="h-4 w-4" />
      </Button>
      <Button type="button" variant="ghost" size="icon" as="label">
        <ImageIcon className="h-4 w-4" />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={imageInputRef}
          onChange={addImage}
        />
      </Button>
      <div className="relative">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setColorPickerOpen(!colorPickerOpen)}
        >
          <Palette className="h-4 w-4" />
        </Button>
        {colorPickerOpen && (
          <div className="absolute z-10 mt-2 p-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg">
            <div className="flex gap-2">
              {["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00"].map(
                (color) => (
                  <button
                    key={color}
                    onClick={() => setColor(color)}
                    className="w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                )
              )}
            </div>
          </div>
        )}
      </div>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() =>
          editor.chain().focus().unsetAllMarks().clearNodes().run()
        }
      >
        <span className="text-sm">Clear</span>
      </Button>
    </div>
  );
};

export default function EditArticlePage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("draft");
  const [excerpt, setExcerpt] = useState("");
  const [tags, setTags] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = useParams(); // Get article ID from URL params
  const { singleArticle, loading, error } = useSelector((state) => state.blog);

  // Initialize TipTap Editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      LinkExtension.configure({
        openOnClick: false,
        autolink: true,
      }),
      ImageExtension.configure({
        inline: true,
      }),
      TextStyle,
      Color,
    ],
    content: "", // Initial content will be set in useEffect
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      // Update content state (you can store it in Redux if needed)
    },
  });

  // Fetch article data when component mounts
  useEffect(() => {
    if (id) {
      dispatch(fetchSingleArticle(id));
    }
  }, [id, dispatch]);

  // Populate form fields with article data when singleArticle or editor changes
  useEffect(() => {
    if (singleArticle && editor) {
      setTitle(singleArticle.name || "");
      setCategory(singleArticle.category || "");
      setStatus(singleArticle.status || "draft");
      setExcerpt(singleArticle.excerpt || "");
      setTags(singleArticle.tags ? singleArticle.tags.join(", ") : "");
      setImagePreview(singleArticle.image || null);
      editor.commands.setContent(singleArticle.content || "");
    }
  }, [singleArticle, editor]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mock image upload (replace with actual upload logic)
    let imageUrl = singleArticle?.image; // Keep existing image if no new one is uploaded
    if (imageFile) {
      imageUrl = "/images/uploaded-image.jpg"; // Replace with actual uploaded URL
    }

    // Get content from TipTap editor
    const content = editor ? editor.getHTML() : singleArticle?.content || "";

    // Generate excerpt if not provided
    const generatedExcerpt =
      excerpt || content.replace(/<[^>]*>/g, "").substring(0, 100) + "...";

    // Prepare article data for the API
    const articleData = {
      name: title,
      content, // HTML content from TipTap
      writer: singleArticle?.writer || {
        name: "John Smith", // Keep existing or default
        image: "https://example.com/images/writers/john.jpg",
        about: "John is a technology journalist.",
      },
      date: new Date().toISOString(), // Update date
      readingTime: estimateReadingTime(content),
      image: imageUrl || "/placeholder.svg?height=400&width=600",
      category: category.toLowerCase(),
      status,
      excerpt: generatedExcerpt,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    };

    try {
      await dispatch(updateArticle({ id, articleData })).unwrap();
      router.push("/dashboard/articles");
    } catch (err) {
      console.error("Failed to update article:", err);
    }
  };

  // Show loading state while fetching article
  if (loading && !singleArticle) {
    return <div>Loading article...</div>;
  }

  // Show error if article fetch fails
  if (error && !singleArticle) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-md">
        Error: {error}
      </div>
    );
  }

  // Show message if article not found
  if (!singleArticle) {
    return <div>Article not found.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Edit Article</h2>
          <p className="text-muted-foreground">
            Update an existing blog article for your website.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild disabled={loading}>
            <Link href="/dashboard/articles">
              <X className="mr-2 h-4 w-4" /> Cancel
            </Link>
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            <Save className="mr-2 h-4 w-4" />{" "}
            {loading ? "Updating..." : "Update Article"}
          </Button>
        </div>
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-md">
          Error: {error}
        </div>
      )}

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
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Featured image preview"
                        className="h-full w-full object-cover rounded-md"
                      />
                    ) : (
                      <ImageIcon className="h-8 w-8 text-muted-foreground" />
                    )}
                  </div>
                  <Button type="button" variant="outline" as="label">
                    Upload New Image
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
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
                      <Toolbar editor={editor} />
                      <EditorContent
                        editor={editor}
                        className="prose dark:prose-invert max-w-none p-4 min-h-[300px] bg-white dark:bg-gray-800 text-black dark:text-white border-t-0"
                        placeholder="Edit your article content here..."
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="preview" className="mt-2">
                    <div className="rounded-md border p-4 min-h-[300px]">
                      {editor && editor.getHTML() !== "<p></p>" ? (
                        <div className="prose dark:prose-invert max-w-none">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: editor.getHTML(),
                            }}
                          />
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
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  This will be displayed on the blog listing page. If left
                  empty, it will be generated from the content.
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  placeholder="Enter tags separated by commas"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  Tags help users find related content.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-2">
          <Button variant="outline" asChild disabled={loading}>
            <Link href="/dashboard/articles">Cancel</Link>
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update Article"}
          </Button>
        </div>
      </form>
    </div>
  );
}
