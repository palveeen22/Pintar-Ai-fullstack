import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../helpers/lib/prisma";


type TProps = {
    params: { id: string };
  };
  
  // GET order by id
  export async function GET(req: NextRequest, { params }: TProps) {
    const project = await prisma.investor.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        Project: true,
        // admin: true,
        // user: true,
      },
    });
  
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
  
    return NextResponse.json(project);
  }