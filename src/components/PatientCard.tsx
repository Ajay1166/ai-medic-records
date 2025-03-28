
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Patient } from '@/data/mockData';
import { ArrowRight } from 'lucide-react';

interface PatientCardProps {
  patient: Patient;
  onClick: (patientId: string) => void;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient, onClick }) => {
  const { id, name, age, gender, conditions } = patient;
  
  return (
    <Card 
      className="patient-card cursor-pointer" 
      onClick={() => onClick(id)}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{age} yrs • {gender}</p>
          </div>
          <ArrowRight size={16} className="text-healthcare-primary" />
        </div>
        
        {conditions.length > 0 && (
          <div className="mt-3">
            <p className="text-xs text-gray-500 mb-1">Key Conditions:</p>
            <div className="flex flex-wrap gap-1">
              {conditions.map((condition, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-healthcare-muted px-2 py-1 rounded-full text-healthcare-primary-dark"
                >
                  {condition}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PatientCard;
