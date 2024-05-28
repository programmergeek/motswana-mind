import { PrismaClient } from "@prisma/client";

// create a singleton class to return the prisma client object
const globalForPrisma = globalThis as unknown as {
	primsa: PrismaClient | undefined;
};

export const prisma =
	globalForPrisma.primsa ??
	new PrismaClient({
		log:
			process.env.NODE_ENV === "development"
				? ["query", "error", "warn"]
				: ["error"],
	});

if (process.env.NODE_ENV !== "production") globalForPrisma.primsa = prisma;
