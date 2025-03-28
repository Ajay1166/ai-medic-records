
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PatientCard from '../components/PatientCard';
import { Button } from '@/components/ui/button';
import { Stethoscope, Plus, Mic, Calendar, Users, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { samplePatients } from '@/data/mockData';

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
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-healthcare-primary to-healthcare-secondary-dark bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-600">Welcome to MediScribe AI, your medical records assistant</p>
          </div>
          
          {/* Stats overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard 
              icon={<Users className="text-blue-500" />} 
              title="Patients" 
              value="1,254" 
              change="+12%" 
              positive={true}
            />
            <StatCard 
              icon={<Calendar className="text-green-500" />} 
              title="Appointments" 
              value="28" 
              subtitle="Today" 
            />
            <StatCard 
              icon={<FileText className="text-amber-500" />} 
              title="Records" 
              value="87" 
              subtitle="This Week" 
            />
            <StatCard 
              icon={<Mic className="text-purple-500" />} 
              title="Voice Notes" 
              value="24" 
              change="+8%" 
              positive={true}
            />
          </div>
          
          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-healthcare-primary rounded-full"></span>
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button className="flex items-center gap-2 h-auto py-6 bg-white hover:bg-white border border-gray-200 shadow-sm text-healthcare-primary hover:text-healthcare-primary-dark hover:border-healthcare-primary-light hover:shadow">
                <div className="w-10 h-10 rounded-full bg-healthcare-primary/10 flex items-center justify-center text-healthcare-primary">
                  <Plus size={20} />
                </div>
                <div className="text-left">
                  <div className="font-medium">New Patient</div>
                  <div className="text-xs text-gray-500">Add a patient to the system</div>
                </div>
              </Button>
              
              <Button 
                className={`flex items-center gap-2 h-auto py-6 border shadow-sm 
                  ${recording 
                    ? 'bg-healthcare-alert text-white hover:bg-healthcare-alert/90' 
                    : 'bg-white hover:bg-white text-healthcare-secondary-dark hover:text-healthcare-secondary-dark border-gray-200 hover:border-healthcare-secondary hover:shadow'
                  }`}
                onClick={toggleRecording}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                  ${recording 
                    ? 'bg-white/20 text-white' 
                    : 'bg-healthcare-secondary/10 text-healthcare-secondary-dark'
                  }`}>
                  <Mic size={20} className={recording ? 'animate-pulse' : ''} />
                </div>
                <div className="text-left">
                  <div className="font-medium">{recording ? 'Stop Recording' : 'Voice Record'}</div>
                  <div className={`text-xs ${recording ? 'text-white/80' : 'text-gray-500'}`}>
                    {recording ? 'Recording in progress...' : 'Generate prescription by voice'}
                  </div>
                </div>
              </Button>
              
              <Button className="flex items-center gap-2 h-auto py-6 bg-white hover:bg-white border border-gray-200 shadow-sm text-healthcare-accent hover:text-healthcare-accent hover:border-healthcare-accent hover:shadow">
                <div className="w-10 h-10 rounded-full bg-healthcare-accent/10 flex items-center justify-center text-healthcare-accent">
                  <Stethoscope size={20} />
                </div>
                <div className="text-left">
                  <div className="font-medium">New Consultation</div>
                  <div className="text-xs text-gray-500">Start a new patient consultation</div>
                </div>
              </Button>
            </div>
          </div>
          
          {/* Recent Patients */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-healthcare-secondary rounded-full"></span>
              Recent Patients
            </h2>
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

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle?: string;
  change?: string;
  positive?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, subtitle, change, positive }) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <span className="text-gray-500 text-sm">{title}</span>
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-bold">{value}</h3>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
        {change && (
          <span className={`text-xs font-medium ${positive ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </span>
        )}
      </div>
    </div>
  );
};

export default Index;
