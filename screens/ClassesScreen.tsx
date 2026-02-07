
import React from 'react';
import { useFitness } from '../context/FitnessContext';
import { useAuth } from '../context/AuthContext';
import { TRAINERS_DATA } from '../constants';
import { Clock, Users, ChevronRight, CheckCircle, Info } from 'lucide-react';

const ClassesScreen: React.FC = () => {
  const { classes, userBookings, bookClass, cancelBooking } = useFitness();
  const { user } = useAuth();

  const isBooked = (classId: string) => userBookings.some(b => b.classId === classId && b.status !== 'cancelled');
  const getBookingId = (classId: string) => userBookings.find(b => b.classId === classId)?.id;

  return (
    <div className="space-y-8 pb-10 animate-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-3xl font-black text-slate-900 mb-2">Reserva tu Clase</h1>
        <p className="text-slate-500 font-medium">Encuentra el entrenamiento perfecto para hoy.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {classes.map((cls) => {
          const coach = TRAINERS_DATA.find(t => t.id === cls.coachId);
          const booked = isBooked(cls.id);
          const bookingStatus = userBookings.find(b => b.classId === cls.id)?.status;
          const full = cls.currentBookings >= cls.capacity;

          return (
            <div key={cls.id} className={`group bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden transition-all hover:shadow-xl hover:shadow-zinc-200/50 hover:border-purple-200 ${booked ? 'ring-2 ring-purple-600/30 border-purple-200' : ''}`}>
              <div className="p-7">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    cls.level.includes('Avanzado') ? 'bg-pink-100 text-pink-600' : 'bg-purple-100 text-purple-600'
                  }`}>
                    {cls.level}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 font-bold text-xs">
                    <Users size={14} className="text-slate-300" />
                    <span>{cls.currentBookings}/{cls.capacity}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-2">{cls.name}</h3>
                
                <div className="flex items-center gap-4 text-slate-500 text-sm font-semibold mb-6">
                  <div className="flex items-center gap-1.5">
                    <Clock size={16} className="text-purple-500" />
                    <span>{cls.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-zinc-300">•</span>
                    <span>{cls.time}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl mb-6 border border-zinc-100">
                  <img src={coach?.imageUrl} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">{coach?.name}</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{coach?.specialty}</span>
                  </div>
                </div>

                {booked ? (
                  <div className="space-y-3">
                    <div className={`flex items-center justify-center gap-2 py-4 rounded-xl font-black text-sm shadow-sm ${
                      bookingStatus === 'confirmed' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-pink-50 text-pink-600 border border-pink-100'
                    }`}>
                      {bookingStatus === 'confirmed' ? <CheckCircle size={18} /> : <Info size={18} />}
                      {bookingStatus === 'confirmed' ? 'Reserva Confirmada' : 'En Lista de Espera'}
                    </div>
                    <button 
                      onClick={() => cancelBooking(getBookingId(cls.id)!)}
                      className="w-full text-slate-400 hover:text-pink-600 text-xs font-bold py-2 transition-colors"
                    >
                      Cancelar Reserva
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => bookClass(cls.id, user!.uid)}
                    disabled={full && !booked}
                    className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 ${
                      full 
                        ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-purple-200'
                    }`}
                  >
                    {full ? 'Lista de Espera' : 'Reservar Ahora'} <ChevronRight size={18} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassesScreen;
