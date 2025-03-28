
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Plus, UserPlus } from 'lucide-react';
import { samplePatients, Patient } from '@/data/mockData';
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Link } from 'react-router-dom';

const Patients = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPatients = samplePatients.filter(patient => 
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.conditions.some(condition => condition.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-healthcare-primary to-healthcare-secondary-dark bg-clip-text text-transparent">
              Patients
            </h1>
            <p className="text-gray-600">View and manage patient records</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search patients..."
                className="pl-8 bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button className="flex items-center gap-2">
              <UserPlus size={16} />
              <span>Add New Patient</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient) => (
                <PatientListCard key={patient.id} patient={patient} />
              ))
            ) : (
              <div className="col-span-full text-center py-8 bg-white rounded-lg border">
                <p className="text-gray-500">No patients found matching your search</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

const PatientListCard = ({ patient }: { patient: Patient }) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-healthcare-primary to-healthcare-secondary flex items-center justify-center text-white font-bold text-lg">
            {patient.name.split(' ').map(name => name[0]).join('')}
          </div>
          <div className="flex-1">
            <h3 className="font-medium">{patient.name}</h3>
            <div className="text-sm text-gray-500">
              {patient.age} years • {patient.gender}
            </div>
            <div className="mt-1 flex flex-wrap gap-1">
              {patient.conditions.map((condition, i) => (
                <span 
                  key={i} 
                  className="inline-block px-2 py-0.5 bg-healthcare-primary/10 text-healthcare-primary rounded text-xs"
                >
                  {condition}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
          <div className="text-xs text-gray-500">
            Last visit: {patient.lastVisit}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to={`/diagnosis?patient=${patient.id}`}>
                Diagnose
              </Link>
            </Button>
            <Button size="sm" variant="outline">View</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Patients;
