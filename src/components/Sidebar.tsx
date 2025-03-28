
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Calendar, 
  MessageSquare, 
  Settings, 
  Menu, 
  X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [expanded, setExpanded] = useState(true);
  
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <aside 
      className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col h-[calc(100vh-64px)]",
        expanded ? "w-64" : "w-16",
        className
      )}
    >
      <div className="p-4 flex justify-end">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-gray-500">
          {expanded ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      
      <nav className="flex-1 p-2">
        <ul className="space-y-2">
          <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" to="/" expanded={expanded} active={true} />
          <SidebarItem icon={<Users size={20} />} label="Patients" to="/patients" expanded={expanded} />
          <SidebarItem icon={<FileText size={20} />} label="Records" to="/records" expanded={expanded} />
          <SidebarItem icon={<Calendar size={20} />} label="Appointments" to="/appointments" expanded={expanded} />
          <SidebarItem icon={<MessageSquare size={20} />} label="Messages" to="/messages" expanded={expanded} />
        </ul>
      </nav>
      
      <div className="mt-auto p-4">
        <SidebarItem icon={<Settings size={20} />} label="Settings" to="/settings" expanded={expanded} />
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  expanded: boolean;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, to, expanded, active }) => {
  return (
    <li>
      <Link
        to={to}
        className={cn(
          "flex items-center py-2 px-3 rounded-md transition-colors",
          active 
            ? "bg-healthcare-primary text-white" 
            : "text-gray-700 hover:bg-gray-100"
        )}
      >
        <span className="flex items-center justify-center">{icon}</span>
        {expanded && <span className="ml-3">{label}</span>}
      </Link>
    </li>
  );
};

export default Sidebar;
