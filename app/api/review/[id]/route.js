import { NextResponse } from "next/server"
import connectDB from "@/node-server/config/mongodb"
import Review from "@/node-server/models/reviews"
import { verifyToken } from "@/node-server/middleware/auth"

export async function GET(request, { params }) {
      await connectDB();
      try {
        const { id } = params;
        const review = await Review.findById(id);

        if (!review) {
          return NextResponse.json({ error: 'Review not found' }, { status: 404 });
        }

        return NextResponse.json(review);
      } catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
      }
    }

    export async function PUT(request, { params }) {
      await connectDB();
      try {
        await verifyToken(request); // Protect this route

        const { id } = params;
        const { name, review } = await request.json();

        if (!name || !review) {
          return NextResponse.json({ error: 'Name and review are required' }, { status: 400 });
        }

        const updatedReview = await Review.findByIdAndUpdate(
          id,
          { name, review },
          { new: true, runValidators: true }
        );

        if (!updatedReview) {
          return NextResponse.json({ error: 'Review not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Review updated', data: updatedReview });
      } catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
      }
    }

    export async function DELETE(request, { params }) {
      await connectDB();
      try {
        await verifyToken(request); // Protect this route

        const { id } = params;
        const deletedReview = await Review.findByIdAndDelete(id);

        if (!deletedReview) {
          return NextResponse.json({ error: 'Review not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Review deleted' });
      } catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
    
      }}
