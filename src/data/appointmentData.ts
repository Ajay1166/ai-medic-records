
export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  reason: string;
  notes?: string;
}

export const sampleAppointments: Appointment[] = [
  {
    id: "a1",
    patientId: "p1",
    patientName: "John Smith",
    date: "2023-11-20",
    time: "09:00 AM",
    status: "scheduled",
    reason: "Follow-up on medication"
  },
  {
    id: "a2",
    patientId: "p2",
    patientName: "Sarah Johnson",
    date: "2023-12-01",
    time: "10:30 AM",
    status: "scheduled",
    reason: "Asthma treatment review"
  },
  {
    id: "a3",
    patientId: "p3",
    patientName: "Robert Williams",
    date: "2023-11-15",
    time: "02:15 PM",
    status: "completed",
    reason: "Arthritis pain management",
    notes: "Prescribed increased dosage of anti-inflammatory medication"
  },
  {
    id: "a4",
    patientId: "p1",
    patientName: "John Smith",
    date: "2023-10-05",
    time: "11:00 AM",
    status: "completed",
    reason: "Diabetes checkup",
    notes: "Blood sugar levels stable, continue current medication"
  }
];
