import { prisma } from "../../../../../helpers/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

type TProps = {
	params: { slug: string };
};

// GET order by title
export async function GET(req: NextRequest, { params }: TProps) {
	try {
		// console.log(params.slug);
		const project = await prisma.project.findFirst({
			where: { project_name: params.slug },
		});

		if (!project) {
			return NextResponse.json({ error: "Project not found" }, { status: 404 });
		}
		// console.log(project, "ini projectud");

		const researchers = await prisma.researcher.findMany({
			where: {background: project.keywords}
		})
		

		// console.log(researchers);

		const responseObj = {
            project,
            researchers
        };
		
		return NextResponse.json(responseObj);
	} catch (error) {
		console.error("Prisma error:", error);
		return NextResponse.json({ error: "An error occurred" }, { status: 500 });
	}
}


