
import React from 'react';
import { Button } from '@/components/ui/button';
import { Bell, User, LogOut, Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-10 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-healthcare-primary text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="text-healthcare-primary font-bold text-2xl">MediScribe AI</div>
        </div>

        <div className="hidden md:flex items-center relative max-w-xs w-full mx-4">
          <Search size={16} className="absolute left-2.5 text-gray-400" />
          <Input placeholder="Search patients, records..." className="pl-8 bg-gray-50 border-gray-200" />
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-healthcare-alert rounded-full"></span>
          </Button>
          <div className="flex items-center gap-3 border-l pl-4 border-gray-200">
            <Avatar className="border-2 border-healthcare-primary/20">
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-to-r from-healthcare-secondary to-healthcare-primary text-white">DR</AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <div className="text-sm font-medium">Dr. Emily Johnson</div>
              <div className="text-xs text-gray-500">Cardiologist</div>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <LogOut size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
