
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, MoreVertical, Plus, Search, Check, X } from 'lucide-react';
import { sampleAppointments, Appointment } from '@/data/appointmentData';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Appointments = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredAppointments = sampleAppointments.filter(appointment => 
    appointment.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appointment.reason.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const upcomingAppointments = filteredAppointments.filter(
    (appointment) => appointment.status === 'scheduled'
  );
  
  const pastAppointments = filteredAppointments.filter(
    (appointment) => appointment.status === 'completed' || appointment.status === 'cancelled'
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-healthcare-primary to-healthcare-secondary-dark bg-clip-text text-transparent">
              Appointments
            </h1>
            <p className="text-gray-600">Manage and schedule patient appointments</p>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="relative max-w-xs w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search appointments..."
                className="pl-8 bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2">
                    <Plus size={16} />
                    <span>New Appointment</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Schedule New Appointment</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <p className="text-sm text-gray-500">
                      Appointment scheduling form would go here.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              <div className="grid gap-4">
                {upcomingAppointments.length === 0 ? (
                  <div className="text-center py-8 bg-white rounded-lg border">
                    <p className="text-gray-500">No upcoming appointments found</p>
                  </div>
                ) : (
                  upcomingAppointments.map((appointment) => (
                    <AppointmentCard key={appointment.id} appointment={appointment} />
                  ))
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <div className="grid gap-4">
                {pastAppointments.length === 0 ? (
                  <div className="text-center py-8 bg-white rounded-lg border">
                    <p className="text-gray-500">No past appointments found</p>
                  </div>
                ) : (
                  pastAppointments.map((appointment) => (
                    <AppointmentCard key={appointment.id} appointment={appointment} />
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

const AppointmentCard = ({ appointment }: { appointment: Appointment }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-lg">{appointment.patientName}</h3>
          <div className="mt-1 text-gray-500 flex items-center gap-2">
            <Calendar size={14} className="text-healthcare-primary" />
            <span>{appointment.date}</span>
            <Clock size={14} className="ml-2 text-healthcare-primary" />
            <span>{appointment.time}</span>
          </div>
          <p className="mt-2 text-sm text-gray-700">
            <span className="font-medium">Reason:</span> {appointment.reason}
          </p>
          {appointment.notes && (
            <p className="mt-1 text-sm text-gray-600">
              <span className="font-medium">Notes:</span> {appointment.notes}
            </p>
          )}
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <Badge className={
            appointment.status === 'scheduled' ? 'bg-healthcare-secondary' :
            appointment.status === 'completed' ? 'bg-green-500' :
            'bg-red-500'
          }>
            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
          </Badge>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Reschedule</DropdownMenuItem>
              {appointment.status === 'scheduled' && (
                <>
                  <DropdownMenuItem className="text-green-600">
                    <Check className="mr-2 h-4 w-4" /> Mark as Completed
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    <X className="mr-2 h-4 w-4" /> Cancel Appointment
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
