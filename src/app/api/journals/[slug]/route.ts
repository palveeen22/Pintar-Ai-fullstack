import { prisma } from "../../../../../helpers/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

type TProps = {
  params: { slug: string };
};

// GET journal by title
export async function GET(req: NextRequest, { params }: TProps) {
  try {
    console.log(params.slug);
    const project = await prisma.jurnal.findFirst({
      where: { title: params.slug },
      include: {
        portofolio: true,
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Journal not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
