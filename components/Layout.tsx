
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, Weight, CreditCard, LogOut, Dumbbell, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Layout: React.FC = () => {
  const location = useLocation();
  const { logout, user } = useAuth();

  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Inicio' },
    { path: '/classes', icon: Calendar, label: 'Clases' },
    { path: '/workouts', icon: Zap, label: 'Entrenamientos' },
    { path: '/weight', icon: Weight, label: 'Progreso' },
    { path: '/membership', icon: CreditCard, label: 'Plan' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 text-slate-900">
      {/* Sidebar for Desktop */}
      <div className="hidden md:flex flex-col w-64 fixed h-full border-r border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl shadow-lg shadow-purple-200">
            <Dumbbell className="text-white" size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">StudioFitness</span>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                location.pathname === item.path 
                  ? 'bg-purple-50 text-purple-600' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-zinc-100'
              }`}
            >
              <item.icon size={20} className={location.pathname === item.path ? 'text-purple-600' : 'text-slate-400'} />
              <span className="font-semibold">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-zinc-100">
          <div className="flex items-center gap-3 mb-6 p-2">
            <img src={`https://ui-avatars.com/api/?name=${user?.displayName}&background=8b5cf6&color=fff`} className="w-10 h-10 rounded-full border border-zinc-100" />
            <div className="flex flex-col overflow-hidden">
              <span className="font-bold text-sm truncate text-slate-800">{user?.displayName}</span>
              <span className="text-xs text-slate-500">{user?.membership}</span>
            </div>
          </div>
          <button 
            onClick={logout}
            className="flex items-center gap-3 w-full p-3 text-slate-400 hover:text-pink-600 transition-colors rounded-xl hover:bg-pink-50"
          >
            <LogOut size={20} />
            <span className="font-semibold">Cerrar sesión</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 pb-20 md:pb-0">
        <div className="max-w-6xl mx-auto p-4 md:p-8">
          <Outlet />
        </div>
      </main>

      {/* Bottom Nav for Mobile */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-zinc-200 flex justify-around py-3 px-2 z-50">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center gap-1 transition-colors ${
              location.pathname === item.path ? 'text-purple-600' : 'text-slate-400'
            }`}
          >
            <item.icon size={24} />
            <span className="text-[10px] font-bold">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
