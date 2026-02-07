
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingDown, Plus, History } from 'lucide-react';

const WeightTracker: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [newWeight, setNewWeight] = useState('');

  const handleAddWeight = () => {
    if (!newWeight || isNaN(Number(newWeight))) return;
    
    const weightNum = Number(newWeight);
    const date = new Date().toISOString().split('T')[0];
    
    const newHistory = [...(user?.weightHistory || []), { date, weight: weightNum }];
    updateUser({ 
      currentWeight: weightNum,
      weightHistory: newHistory
    });
    setNewWeight('');
  };

  const chartData = user?.weightHistory.map(h => ({
    name: h.date.split('-').slice(1).join('/'),
    weight: h.weight
  })) || [];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <header>
        <h1 className="text-3xl font-black text-slate-900 mb-2">Tu Progreso</h1>
        <p className="text-slate-500 font-medium">Mide tu evolución y alcanza tus objetivos.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col: Chart & Stats */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-zinc-200 p-8 rounded-[2.5rem] shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <TrendingDown className="text-purple-600" /> Evolución de Peso
            </h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} fontWeight="600" tickLine={false} axisLine={false} dy={10} />
                  <YAxis stroke="#94a3b8" fontSize={11} fontWeight="600" tickLine={false} axisLine={false} domain={['dataMin - 5', 'dataMax + 5']} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05)' }}
                    itemStyle={{ color: '#8b5cf6', fontWeight: 'bold' }}
                    labelStyle={{ fontWeight: '800', marginBottom: '4px' }}
                  />
                  <Area type="monotone" dataKey="weight" stroke="#8b5cf6" strokeWidth={4} fillOpacity={1} fill="url(#colorWeight)" animationDuration={1500} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 p-8 rounded-[2.5rem] shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <Plus className="text-pink-500" /> Nuevo Registro
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input 
                  type="number" 
                  value={newWeight}
                  onChange={(e) => setNewWeight(e.target.value)}
                  placeholder="Ej: 75.5"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl p-4 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <button 
                onClick={handleAddWeight}
                className="bg-purple-600 hover:bg-purple-700 text-white font-black px-10 py-4 rounded-2xl shadow-lg shadow-purple-200 active:scale-95 transition-all"
              >
                Registrar Peso
              </button>
            </div>
          </div>
        </div>

        {/* Right Col: Recent Logs */}
        <div className="bg-white border border-zinc-200 p-8 rounded-[2.5rem] shadow-sm h-fit">
          <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <History className="text-slate-400" /> Historial
          </h3>
          <div className="space-y-4">
            {[...(user?.weightHistory || [])].reverse().slice(0, 6).map((log, idx) => (
              <div key={idx} className="flex justify-between items-center p-4 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-purple-100 transition-colors">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-tight">{log.date}</span>
                <span className="text-xl font-black text-slate-900">{log.weight} <span className="text-xs text-slate-400 font-medium">kg</span></span>
              </div>
            ))}
            {(user?.weightHistory.length || 0) === 0 && (
              <p className="text-slate-400 text-center py-10 font-medium">Aún no hay registros.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeightTracker;
