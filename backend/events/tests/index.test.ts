import request from "supertest";
import app from "../src/index";
import { describe, expect } from "@jest/globals";

describe("GET /api/events endpoint", () => {
	it("responds with JSON containing approved events", async () => {
		const response = await request(app).get("/api/events");
		expect(response.status).toBe(200);
		expect(response.body).toEqual(
			expect.arrayContaining([
				{
					id: 4,
					title: "Maths Clinic",
					description: "This is a test event description.",
					startTime: "2024-08-19T05:30:00.000Z",
					endTime: "2024-08-19T07:00:00.000Z",
					location: "West Wood Secondary School Mail Hall",
					capacity: 150,
					thumbnail:
						"https://www.kdnuggets.com/wp-content/uploads/math-chalkboard-header-scaled.jpg",
					organizerId: 1,
					approved: true,
				},
			])
		); // Add expected data for events
	});

	it("handles errors gracefully", async () => {
		// Mock the Prisma error scenario
		jest.mock("prisma", () => ({
			eventList: {
				findMany: jest.fn().mockRejectedValue(new Error("Database error")),
			},
		}));

		const response = await request(app).get("/api/events");
		expect(response.status).toBe(500);
		expect(response.body).toEqual({
			status: 500,
			message: "Internal Server Error",
		});
	});
});

describe("GET /api/events/all", () => {});
