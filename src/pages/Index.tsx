
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PatientCard from '../components/PatientCard';
import { Button } from '@/components/ui/button';
import { Stethoscope, Plus, Mic } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Sample patient data - in a real app this would come from an API
const samplePatients = [
  {
    id: "p1",
    name: "John Smith",
    age: 45,
    gender: "Male",
    conditions: ["Hypertension", "Diabetes Type 2"]
  },
  {
    id: "p2",
    name: "Sarah Johnson",
    age: 32,
    gender: "Female",
    conditions: ["Asthma", "Allergies"]
  },
  {
    id: "p3",
    name: "Robert Williams",
    age: 68,
    gender: "Male",
    conditions: ["Arthritis", "COPD"]
  }
];

const Index = () => {
  const [recording, setRecording] = useState(false);
  const { toast } = useToast();

  const handlePatientClick = (patientId: string) => {
    toast({
      title: "Patient Selected",
      description: `Patient ID: ${patientId} - View full details coming soon`,
    });
  };

  const toggleRecording = () => {
    setRecording(!recording);
    toast({
      title: recording ? "Recording stopped" : "Recording started",
      description: recording 
        ? "Voice data is being processed" 
        : "Speak now to generate prescription",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome to MediScribe AI, your medical records assistant</p>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <Button className="flex items-center gap-2 h-auto py-6 bg-healthcare-primary">
              <Plus size={18} />
              <div className="text-left">
                <div className="font-medium">New Patient</div>
                <div className="text-xs opacity-90">Add a patient to the system</div>
              </div>
            </Button>
            
            <Button 
              className={`flex items-center gap-2 h-auto py-6 ${recording ? 'bg-healthcare-alert' : 'bg-healthcare-secondary'}`}
              onClick={toggleRecording}
            >
              <Mic size={18} className={recording ? 'animate-pulse' : ''} />
              <div className="text-left">
                <div className="font-medium">{recording ? 'Stop Recording' : 'Voice Record'}</div>
                <div className="text-xs opacity-90">{recording ? 'Recording in progress...' : 'Generate prescription by voice'}</div>
              </div>
            </Button>
            
            <Button className="flex items-center gap-2 h-auto py-6 bg-healthcare-accent">
              <Stethoscope size={18} />
              <div className="text-left">
                <div className="font-medium">New Consultation</div>
                <div className="text-xs opacity-90">Start a new patient consultation</div>
              </div>
            </Button>
          </div>
          
          {/* Recent Patients */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Recent Patients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {samplePatients.map((patient) => (
                <PatientCard 
                  key={patient.id} 
                  patient={patient} 
                  onClick={handlePatientClick} 
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
