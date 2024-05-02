export interface Event {
  id: number;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  capacity: number;
  price: number;
  thumbnail?: string;
  Instructors?: Instructor;
}

export interface Instructor {
  FirstName?: string;
  LastName?: string;
  InstructorDescription?: string;
}
