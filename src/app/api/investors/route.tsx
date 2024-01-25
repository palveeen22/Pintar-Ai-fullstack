
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../helpers/lib/prisma";



// GET ALL JOURNALS
export async function GET(req: NextRequest) {
	const projects = await prisma.investor.findMany({
	  include: {
		Project: true,
	  },
	});
	return NextResponse.json(projects);
  }
