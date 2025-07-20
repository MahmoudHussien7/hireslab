import { NextResponse } from "next/server"
import Article from "@/node-server/models/article"
import { verifyToken } from "@/node-server/middleware/auth"
import connectDB from "@/node-server/config/mongodb";

export async function GET(request, { params }) {
      await connectDB();
      try {
        const { id } = params;
        const article = await Article.findById(id);
        if (!article) {
          return NextResponse.json({ success: false, message: "Article not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: article });
      } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
      }
    }

    export async function PUT(request, { params }) {
      await connectDB();
      try {
        await verifyToken(request); // Protect this route

        const { id } = params;
        const body = await request.json();
        const { name, date, readingTime, image, content, writer, tags, category } = body;

        const updatedArticle = await Article.findByIdAndUpdate(
          id,
          { name, date, readingTime, image, content, writer, tags, category },
          { new: true, runValidators: true }
        );

        if (!updatedArticle) {
          return NextResponse.json({ success: false, message: "Article not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: updatedArticle });
      } catch (error) {
        console.error("Error updating article:", error.message);
        return NextResponse.json({ success: false, message: error.message || "Server Error" }, { status: 500 });
      }
    }

    export async function DELETE(request, { params }) {
      await connectDB();
      try {
        await verifyToken(request); // Protect this route

        const { id } = params;
        const deletedArticle = await Article.findByIdAndDelete(id);
        if (!deletedArticle) {
          return NextResponse.json({ success: false, message: "Article not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "Article deleted successfully" });
      } catch (error) {
        console.error("Error deleting article:", error);
        return NextResponse.json({ success: false, message: error.message || "Server Error" }, { status: 500 });
      }
    }
