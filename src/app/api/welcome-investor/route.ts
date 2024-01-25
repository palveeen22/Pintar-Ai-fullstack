"use server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../helpers/lib/prisma";
type TProps = {
  params: { id: string };
};

// GET portofolio by user id
export async function GET(req: Request, { params }: TProps) {
  try {
    // Get user id from headers
    const userId = req.headers.get("x-user-id");

    // console.log(userId, "<<<<>><><><><><><>><>><");

    // Check if user id exists
    if (!userId) {
      return NextResponse.json({ error: "User ID not found" }, { status: 400 });
    }

    // Find user with associated portofolio
    const userWithPortofolio = await prisma.investor.findUnique({
      where: { id: parseInt(userId) },
      include: {
        Project: true,
      },
    });
    // console.log(userId, "wkwkwkwkwkwkw");

    // Check if user exists
    if (!userWithPortofolio) {
      return NextResponse.json(
        { error: "Investor not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(userWithPortofolio);
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
