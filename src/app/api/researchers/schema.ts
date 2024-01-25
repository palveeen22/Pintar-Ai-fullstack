import { z } from "zod";

const schema = z.object({
	firstname: z.string(),
	lastname: z.string(),
	education: z.string(),
	profileImage: z.string(),
	email: z.string().email(),
	password: z.string().min(5),
	phone_number: z.string(),
	background: z.string(),
	gender: z.string(),
	jabatan_akademik: z.string(),
	location: z.string(),
	investasi: z.string(),
});

export default schema;
