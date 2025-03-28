
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Calendar, 
  MessageSquare, 
  Settings, 
  Menu, 
  X,
  ChevronRight
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
        "bg-gradient-to-b from-healthcare-primary-light/10 to-healthcare-secondary/10 border-r border-gray-200 transition-all duration-300 flex flex-col h-[calc(100vh-64px)]",
        expanded ? "w-64" : "w-16",
        className
      )}
    >
      <div className="p-4 flex justify-end">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-healthcare-primary">
          {expanded ? <X size={18} /> : <Menu size={18} />}
        </Button>
      </div>
      
      <nav className="flex-1 p-2">
        <ul className="space-y-1.5">
          <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" to="/" expanded={expanded} active={false} />
          <SidebarItem icon={<Users size={18} />} label="Patients" to="/patients" expanded={expanded} />
          <SidebarItem icon={<FileText size={18} />} label="Records" to="/records" expanded={expanded} />
          <SidebarItem icon={<Calendar size={18} />} label="Appointments" to="/appointments" expanded={expanded} active={true} />
          <SidebarItem icon={<MessageSquare size={18} />} label="Messages" to="/messages" expanded={expanded} />
        </ul>
      </nav>
      
      <div className="mt-auto p-4">
        <SidebarItem icon={<Settings size={18} />} label="Settings" to="/settings" expanded={expanded} />
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
          "flex items-center py-2.5 px-3 rounded-md transition-all relative group",
          active 
            ? "bg-gradient-to-r from-healthcare-primary to-healthcare-primary-dark text-white shadow-md" 
            : "text-healthcare-primary-dark hover:bg-healthcare-primary/10"
        )}
      >
        <span className="flex items-center justify-center">{icon}</span>
        {expanded && <span className="ml-3 font-medium">{label}</span>}
        {!expanded && !active && (
          <div className="absolute left-full ml-2 px-2 py-1 bg-healthcare-primary text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
            {label}
          </div>
        )}
        {active && expanded && (
          <ChevronRight size={14} className="absolute right-2 text-white/70" />
        )}
      </Link>
    </li>
  );
};

export default Sidebar;
