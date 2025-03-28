
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  dob: string;
  contactNumber: string;
  email: string;
  address: string;
  bloodType: string;
  allergies: string[];
  conditions: string[];
  medications: Medication[];
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
  prescribedBy: string;
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  date: string;
  doctorName: string;
  symptoms: string[];
  diagnosis: string[];
  treatment: string;
  notes: string;
  prescriptions: Prescription[];
}

export interface Prescription {
  id: string;
  patientId: string;
  doctorName: string;
  date: string;
  medications: PrescribedMedication[];
  instructions: string;
  status: 'Draft' | 'Sent' | 'Filled';
  pharmacy?: string;
}

export interface PrescribedMedication {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  quantity: string;
  refills: number;
}

// Mock Patients
export const patients: Patient[] = [
  {
    id: "P001",
    name: "John Smith",
    age: 45,
    gender: "Male",
    dob: "1979-03-15",
    contactNumber: "555-1234",
    email: "john.smith@email.com",
    address: "123 Main St, Anytown, USA",
    bloodType: "A+",
    allergies: ["Penicillin", "Peanuts"],
    conditions: ["Hypertension", "Type 2 Diabetes"],
    medications: [
      {
        name: "Lisinopril",
        dosage: "10mg",
        frequency: "Once daily",
        startDate: "2022-01-15",
        prescribedBy: "Dr. Emily Johnson",
      },
      {
        name: "Metformin",
        dosage: "500mg",
        frequency: "Twice daily",
        startDate: "2021-11-20",
        prescribedBy: "Dr. Robert Chen",
      }
    ]
  },
  {
    id: "P002",
    name: "Sarah Johnson",
    age: 32,
    gender: "Female",
    dob: "1992-07-23",
    contactNumber: "555-5678",
    email: "sarah.johnson@email.com",
    address: "456 Oak Ave, Sometown, USA",
    bloodType: "O-",
    allergies: ["Sulfa drugs", "Shellfish"],
    conditions: ["Asthma", "Migraine"],
    medications: [
      {
        name: "Albuterol",
        dosage: "90mcg",
        frequency: "As needed",
        startDate: "2020-05-10",
        prescribedBy: "Dr. Emily Johnson",
      },
      {
        name: "Sumatriptan",
        dosage: "50mg",
        frequency: "As needed for migraine",
        startDate: "2022-03-15",
        prescribedBy: "Dr. Emily Johnson",
      }
    ]
  },
  {
    id: "P003",
    name: "Michael Williams",
    age: 58,
    gender: "Male",
    dob: "1966-11-05",
    contactNumber: "555-9012",
    email: "michael.williams@email.com",
    address: "789 Pine Rd, Othertown, USA",
    bloodType: "B+",
    allergies: ["Codeine", "Latex"],
    conditions: ["Coronary Artery Disease", "Osteoarthritis"],
    medications: [
      {
        name: "Atorvastatin",
        dosage: "40mg",
        frequency: "Once daily",
        startDate: "2019-08-22",
        prescribedBy: "Dr. Robert Chen",
      },
      {
        name: "Aspirin",
        dosage: "81mg",
        frequency: "Once daily",
        startDate: "2019-08-22",
        prescribedBy: "Dr. Robert Chen",
      }
    ]
  }
];

// Mock Medical Records
export const medicalRecords: MedicalRecord[] = [
  {
    id: "MR001",
    patientId: "P001",
    date: "2023-05-10",
    doctorName: "Dr. Emily Johnson",
    symptoms: ["Headache", "Dizziness", "Elevated blood pressure"],
    diagnosis: ["Uncontrolled hypertension"],
    treatment: "Adjustment of antihypertensive medication",
    notes: "Patient reports stress at work. Recommend lifestyle modifications including reduced sodium intake and regular exercise.",
    prescriptions: [
      {
        id: "RX001",
        patientId: "P001",
        doctorName: "Dr. Emily Johnson",
        date: "2023-05-10",
        medications: [
          {
            name: "Lisinopril",
            dosage: "20mg",
            frequency: "Once daily",
            duration: "30 days",
            quantity: "30 tablets",
            refills: 2
          }
        ],
        instructions: "Take in the morning with food. Monitor blood pressure daily.",
        status: "Filled",
        pharmacy: "MedPlus Pharmacy"
      }
    ]
  },
  {
    id: "MR002",
    patientId: "P002",
    date: "2023-06-15",
    doctorName: "Dr. Emily Johnson",
    symptoms: ["Shortness of breath", "Wheezing", "Chest tightness"],
    diagnosis: ["Acute asthma exacerbation"],
    treatment: "Inhaled bronchodilators and oral corticosteroids",
    notes: "Triggered by recent pollen exposure. Recommend avoiding outdoor activities during high pollen count days.",
    prescriptions: [
      {
        id: "RX002",
        patientId: "P002",
        doctorName: "Dr. Emily Johnson",
        date: "2023-06-15",
        medications: [
          {
            name: "Prednisone",
            dosage: "20mg",
            frequency: "Once daily",
            duration: "5 days",
            quantity: "5 tablets",
            refills: 0
          },
          {
            name: "Albuterol",
            dosage: "90mcg",
            frequency: "Every 4-6 hours as needed",
            duration: "30 days",
            quantity: "1 inhaler",
            refills: 1
          }
        ],
        instructions: "Complete full course of Prednisone. Use Albuterol as needed for shortness of breath.",
        status: "Sent",
        pharmacy: "HealthWay Drugs"
      }
    ]
  },
  {
    id: "MR003",
    patientId: "P003",
    date: "2023-07-20",
    doctorName: "Dr. Robert Chen",
    symptoms: ["Chest pain", "Shortness of breath", "Fatigue"],
    diagnosis: ["Stable angina", "Controlled hypertension"],
    treatment: "Continuation of current medications, stress test scheduled",
    notes: "Patient reports chest pain primarily with exertion. ECG shows minor ST changes consistent with known CAD.",
    prescriptions: [
      {
        id: "RX003",
        patientId: "P003",
        doctorName: "Dr. Robert Chen",
        date: "2023-07-20",
        medications: [
          {
            name: "Nitroglycerin",
            dosage: "0.4mg",
            frequency: "As needed for chest pain",
            duration: "30 days",
            quantity: "30 tablets",
            refills: 1
          },
          {
            name: "Atorvastatin",
            dosage: "40mg",
            frequency: "Once daily at bedtime",
            duration: "90 days",
            quantity: "90 tablets",
            refills: 3
          }
        ],
        instructions: "Take Nitroglycerin at first sign of chest pain. If pain persists after 3 doses, seek emergency care.",
        status: "Filled",
        pharmacy: "MedPlus Pharmacy"
      }
    ]
  }
];

// Get Medical Records by Patient ID
export const getMedicalRecordsByPatientId = (patientId: string): MedicalRecord[] => {
  return medicalRecords.filter(record => record.patientId === patientId);
};

// Get Patient by ID
export const getPatientById = (patientId: string): Patient | undefined => {
  return patients.find(patient => patient.id === patientId);
};
