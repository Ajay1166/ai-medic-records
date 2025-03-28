
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Patient } from '@/data/mockData';
import { ArrowRight, Calendar, Activity } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PatientCardProps {
  patient: Patient;
  onClick: (patientId: string) => void;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient, onClick }) => {
  const { id, name, age, gender, conditions, nextAppointment, lastVisit } = patient;
  
  return (
    <Card 
      className="patient-card overflow-hidden border-l-4 border-l-healthcare-primary cursor-pointer transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]" 
      onClick={() => onClick(id)}
    >
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-healthcare-primary/15 to-healthcare-secondary/10 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-healthcare-primary">{name}</h3>
              <p className="text-sm text-gray-500">{age} yrs • {gender}</p>
            </div>
            <ArrowRight size={16} className="text-healthcare-primary mt-1" />
          </div>
        </div>
        
        <div className="px-4 py-3">
          {conditions.length > 0 && (
            <div className="mb-3">
              <div className="flex items-center gap-1 mb-2">
                <Activity size={14} className="text-healthcare-accent" />
                <p className="text-xs font-medium text-gray-500">Key Conditions:</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {conditions.map((condition, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="text-xs bg-healthcare-muted border-healthcare-secondary text-healthcare-primary"
                  >
                    {condition}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex items-center text-xs text-gray-500 mt-2">
            <Calendar size={12} className="mr-1 text-healthcare-secondary-dark" />
            {nextAppointment ? (
              <span>Next appointment: <span className="font-medium text-healthcare-accent-dark">{nextAppointment}</span></span>
            ) : (
              <span>Last visit: <span className="font-medium text-healthcare-primary-dark">{lastVisit}</span></span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientCard;
