import express, { Request, Response, Application, Router } from "express";
import dotenv from "dotenv";
import { prisma } from "../lib/prisma";
import cors from "cors";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3081;
const router: Router = express.Router();

app.use(express.json());

app.use(cors());

// get all approved events
router.get("/", async (req: Request, res: Response) => {
	try {
		const eventList = await prisma.event.findMany({
			where: {
				approved: true,
			},
			include: {
				Instructors: true,
			},
		});
		console.log(JSON.stringify(eventList));
		res.json(eventList);
	} catch (e) {
		console.log("error: " + e);
		res
			.json({
				status: 500,
				message: "Internal Server Error",
			})
			.status(500);
	}
});

// get all events
router.get("/all", async (req: Request, res: Response) => {
	try {
		const events = await prisma.event.findMany();

		res.json(events);
	} catch (e) {
		console.log("error: " + e);
		res.json({
			status: 404,
			message: "No",
		});
	}
});

// create event
router.post("/", async (req: Request, res: Response) => {
	try {
		await prisma.event.create({
			data: {
				organizerId: Number(req.body.organiser),
				description: req.body.description,
				endTime: new Date(req.body.endTime).toISOString(),
				location: req.body.location,
				startTime: new Date(req.body.startTime).toISOString(),
				title: req.body.title,
				capacity: req.body.capacity,
			},
		});

		res.json({
			status: 201,
			message: "Event created",
		});
	} catch (e) {
		res.json({
			status: 500,
			message: "Internal Server Error",
		});
	}
});

// get a specific event
router.get("/:event_id", async (req: Request, res: Response) => {
	try {
		const event = await prisma.event.findUnique({
			where: {
				id: Number(req.params.event_id),
			},
			include: {
				Instructors: true,
			},
		});

		res.json(event);
	} catch (e) {
		console.log("error: " + e);
		res.json({
			status: 500,
			message: "Internal Server Error.",
		});
	}
});

router.put("/:event_id", async (req: Request, res: Response) => {
	try {
		await prisma.event.update({
			where: {
				id: Number(req.params.event_id),
			},
			data: {
				...req.body,
			},
		});
	} catch (e) {
		console.log("error: " + e);
		res.json({
			status: 500,
			message: "Internal server error",
		});
	}
});

router.delete("/:event_id", async (req: Request, res: Response) => {
	try {
		await prisma.event.delete({
			where: {
				id: Number(req.params.event_id),
			},
		});

		res.json({
			status: 200,
			message: "Deleted",
		});
	} catch (e) {
		console.log("error: " + e);
		res.json({
			status: 500,
			message: "Internal server error",
		});
	}
});

router.post("/:event_id/register", async (req: Request, res: Response) => {
	try {
		await prisma.eventAttendee.create({
			data: {
				attendeeId: Number(req.body.user_id),
				eventId: Number(req.params.event_id),
			},
		});

		res.json({
			status: 201,
			message: "Created",
		});
	} catch (e) {
		console.log("error: " + e);
		res.json({
			staus: 500,
			message: "Internal server error",
		});
	}
});

router.get("/:event_id/registrations", async (req: Request, res: Response) => {
	try {
		const registrations = await prisma.eventAttendee.findMany({
			where: {
				eventId: Number(req.params.event_id),
			},
			include: {
				attendee: true,
			},
		});

		res.json(registrations);
	} catch (e) {
		console.log("error: " + e);
		res.json({
			status: 500,
			message: "Internal server error",
		});
	}
});

router.delete(
	"/:event_id/registrations/:registration_id",
	async (req: Request, res: Response) => {
		const { event_id, registration_id } = req.params;
		try {
			await prisma.eventAttendee.delete({
				where: {
					id: Number(registration_id),
					eventId: Number(event_id),
				},
			});

			res.json({
				message: "sucess",
				status: 200,
			});
		} catch {
			res.json({
				status: 500,
				message: "There was a problem deregistering the user",
			});
		}
	}
);

router.get("/:event_id/attendance", async (req: Request, res: Response) => {
	const eventId = req.params.event_id;
	try {
		const event = await prisma.event.findUnique({
			where: { id: Number(eventId) },
			include: { attendees: true },
		});
		if (!event) {
			return { status: 404, message: "Event not found" };
		}
		res.json(event.attendees);
	} catch (error) {
		res.json({
			status: 500,
			message: "An error occurred while retrieving event attendance",
		});
	}
});

router.put("/:event_id/attendance", async (req: Request, res: Response) => {
	const eventId = Number(req.params.event_id);
	const { attendeeId, attended } = req.body;

	try {
		const event = await prisma.event.findUnique({
			where: { id: eventId },
			include: { attendees: true },
		});
		if (!event) {
			res.json({
				message: "Event not found",
				status: 404,
			});
		} else {
			const attendeeIndex = event.attendees.findIndex(
				(a) => a.attendeeId === attendeeId
			);
			if (attendeeIndex === -1) {
				return { error: "Attendee not found for this event" };
			}
			event.attendees[attendeeIndex].attended = attended;
			await prisma.eventAttendee.update({
				where: { id: event.attendees[attendeeIndex].id },
				data: { attended },
			});
			res.json({ status: 200, message: "success" });
		}
	} catch (error) {
		res.json({
			status: 500,
			message: "An error occurred while updating event attendance",
		});
	}
});

app.use("/api/events", router);

app.listen(port as number, "0.0.0.0", () => {
	console.log(`Express app listening at http://0.0.0.0:${port}`);
});

export default app;
