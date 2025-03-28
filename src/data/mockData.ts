
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  conditions: string[];
  dob: string;
  contactNumber: string;
  email: string;
  address: string;
  lastVisit: string;
  nextAppointment: string | null;
  medications: string[];
}

// Sample patient data
export const samplePatients: Patient[] = [
  {
    id: "p1",
    name: "John Smith",
    age: 45,
    gender: "Male",
    dob: "1978-05-12",
    contactNumber: "(555) 123-4567",
    email: "john.smith@email.com",
    address: "123 Main St, Boston, MA",
    conditions: ["Hypertension", "Diabetes Type 2"],
    lastVisit: "2023-10-15",
    nextAppointment: "2023-11-20",
    medications: ["Metformin 500mg", "Lisinopril 10mg"]
  },
  {
    id: "p2",
    name: "Sarah Johnson",
    age: 32,
    gender: "Female",
    dob: "1991-08-23",
    contactNumber: "(555) 987-6543",
    email: "sarah.j@email.com",
    address: "456 Oak Ave, Chicago, IL",
    conditions: ["Asthma", "Allergies"],
    lastVisit: "2023-10-05",
    nextAppointment: "2023-12-01",
    medications: ["Albuterol Inhaler", "Cetirizine 10mg"]
  },
  {
    id: "p3",
    name: "Robert Williams",
    age: 68,
    gender: "Male",
    dob: "1955-03-17",
    contactNumber: "(555) 456-7890",
    email: "rwilliams@email.com",
    address: "789 Pine Rd, Seattle, WA",
    conditions: ["Arthritis", "COPD"],
    lastVisit: "2023-09-28",
    nextAppointment: null,
    medications: ["Prednisone 5mg", "Albuterol Nebulizer"]
  }
];
