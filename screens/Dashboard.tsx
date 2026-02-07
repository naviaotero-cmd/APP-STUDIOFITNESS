
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useFitness } from '../context/FitnessContext';
import { Zap, Target, Award, Trophy, ArrowUpRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { userBookings } = useFitness();

  const activeBookings = userBookings.filter(b => b.status === 'confirmed');

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-slate-500 font-semibold uppercase tracking-wider text-xs mb-1">Panel de Control</h2>
          <h1 className="text-3xl font-black text-slate-900">¡Hola, {user?.displayName}! 👋</h1>
        </div>
        <div className="bg-purple-600/10 text-purple-600 px-4 py-1.5 rounded-full text-xs font-bold border border-purple-600/20 shadow-sm">
          Plan {user?.membership}
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-zinc-200 p-7 rounded-[2rem] relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
            <Zap size={80} className="text-purple-600" />
          </div>
          <p className="text-slate-500 font-bold text-sm uppercase tracking-tight">Sesiones este mes</p>
          <h3 className="text-4xl font-black mt-2 text-slate-900">{user?.attendanceCount}</h3>
          <p className="text-xs text-emerald-600 mt-2 font-bold flex items-center gap-1">
            <ArrowUpRight size={12} /> +12% vs mes anterior
          </p>
        </div>

        <div className="bg-white border border-zinc-200 p-7 rounded-[2rem] relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
            <Target size={80} className="text-pink-500" />
          </div>
          <p className="text-slate-500 font-bold text-sm uppercase tracking-tight">Peso Actual</p>
          <h3 className="text-4xl font-black mt-2 text-slate-900">{user?.currentWeight} kg</h3>
          <div className="w-full bg-zinc-100 h-2 mt-4 rounded-full overflow-hidden">
             <div className="bg-pink-500 h-full w-[85%] rounded-full"></div>
          </div>
        </div>

        <div className="bg-white border border-zinc-200 p-7 rounded-[2rem] relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
            <Award size={80} className="text-violet-500" />
          </div>
          <p className="text-slate-500 font-bold text-sm uppercase tracking-tight">Clases Reservadas</p>
          <h3 className="text-4xl font-black mt-2 text-slate-900">{activeBookings.length}</h3>
          <p className="text-xs text-purple-600 mt-2 font-bold">Próxima: Yoga mañana</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Achievements Section */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Trophy className="text-purple-600" /> Logros Recientes
            </h3>
            <button className="text-sm font-bold text-slate-400 hover:text-purple-600 transition-colors">Ver todos</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {user?.achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className={`p-5 rounded-[1.5rem] border transition-all ${
                  achievement.unlocked 
                    ? 'bg-white border-zinc-200 shadow-sm' 
                    : 'bg-zinc-50 border-zinc-100 opacity-60'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl shadow-sm ${achievement.unlocked ? 'bg-purple-600 text-white' : 'bg-zinc-200 text-zinc-400'}`}>
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{achievement.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{achievement.description}</p>
                    {achievement.unlocked && (
                      <span className="text-[10px] text-pink-600 font-black uppercase mt-2 block tracking-widest">Desbloqueado</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Card */}
        <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-8 rounded-[2.5rem] text-white shadow-xl shadow-purple-200 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-4 leading-tight text-white">¿Listo para subir el nivel?</h3>
            <p className="text-purple-50 mb-6 text-sm font-medium leading-relaxed italic opacity-90">"La disciplina es el puente entre las metas y los logros."</p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-bold shadow-lg shadow-black/10 active:scale-95 transition-transform">
              Reservar Clase
            </button>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-20 text-white">
            <DumbbellIcon size={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

const DumbbellIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M18 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M9 12h6"/><path d="M3 10v4"/><path d="M21 10v4"/><path d="M9 10v4"/><path d="M15 10v4"/>
  </svg>
);

export default Dashboard;
