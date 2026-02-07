
import React, { useState } from 'react';
import { useFitness } from '../context/FitnessContext';
import { Zap, Plus, Trash2, ArrowRight, BookOpen, Dumbbell, Move } from 'lucide-react';
import { WorkoutRoutine } from '../types';

const WorkoutsScreen: React.FC = () => {
  const { predefinedWorkouts, customWorkouts, addCustomWorkout, deleteCustomWorkout } = useFitness();
  const [activeTab, setActiveTab] = useState<'official' | 'custom'>('official');
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutRoutine | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  const handleAdd = () => {
    if (newTitle) {
      addCustomWorkout({
        title: newTitle,
        description: 'Mi rutina personalizada',
        category: 'Usuario',
        exercises: []
      });
      setNewTitle('');
      setShowAddModal(false);
    }
  };

  return (
    <div className="space-y-8 pb-10 animate-in fade-in duration-500">
      <header className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Entrenamientos</h1>
          <p className="text-slate-500 font-medium">Rutinas creadas por expertos y tus propias creaciones.</p>
        </div>
        {activeTab === 'custom' && (
          <button 
            onClick={() => setShowAddModal(true)}
            className="p-3 bg-purple-600 text-white rounded-2xl shadow-lg shadow-purple-200 hover:bg-purple-700 transition-colors"
          >
            <Plus size={24} />
          </button>
        )}
      </header>

      {/* Tabs */}
      <div className="flex gap-2 p-1.5 bg-zinc-100 rounded-2xl w-fit">
        <button 
          onClick={() => { setActiveTab('official'); setSelectedWorkout(null); }}
          className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'official' ? 'bg-white text-purple-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
        >
          StudioFitness Pro
        </button>
        <button 
          onClick={() => { setActiveTab('custom'); setSelectedWorkout(null); }}
          className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'custom' ? 'bg-white text-purple-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
        >
          Mis Rutinas
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Workouts List */}
        <div className="space-y-4">
          {(activeTab === 'official' ? predefinedWorkouts : customWorkouts).map((workout) => (
            <div 
              key={workout.id}
              onClick={() => setSelectedWorkout(workout)}
              className={`p-6 rounded-[2rem] border transition-all cursor-pointer flex justify-between items-center group ${
                selectedWorkout?.id === workout.id ? 'bg-purple-600 border-purple-600 text-white' : 'bg-white border-zinc-200 hover:border-purple-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl ${selectedWorkout?.id === workout.id ? 'bg-white/20' : 'bg-purple-50 text-purple-600'}`}>
                  {workout.category === 'Fuerza' ? <Dumbbell size={24} /> : workout.category === 'Flexibilidad' ? <Move size={24} /> : <Zap size={24} />}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{workout.title}</h3>
                  <p className={`text-sm ${selectedWorkout?.id === workout.id ? 'text-white/70' : 'text-slate-500'}`}>{workout.exercises.length} ejercicios</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {workout.isCustom && (
                  <button 
                    onClick={(e) => { e.stopPropagation(); deleteCustomWorkout(workout.id); }}
                    className={`p-2 rounded-lg hover:bg-red-50 hover:text-red-500 transition-colors ${selectedWorkout?.id === workout.id ? 'text-white/50' : 'text-slate-300'}`}
                  >
                    <Trash2 size={18} />
                  </button>
                )}
                <ArrowRight size={20} className={selectedWorkout?.id === workout.id ? 'text-white' : 'text-slate-300'} />
              </div>
            </div>
          ))}

          {activeTab === 'custom' && customWorkouts.length === 0 && (
            <div className="text-center py-16 bg-white border border-dashed border-zinc-200 rounded-[2.5rem]">
              <div className="p-4 bg-zinc-50 inline-block rounded-full mb-4">
                <Zap size={32} className="text-zinc-300" />
              </div>
              <p className="text-slate-400 font-medium">No has creado rutinas propias aún.</p>
            </div>
          )}
        </div>

        {/* Workout Detail View */}
        <div className="lg:sticky lg:top-8">
          {selectedWorkout ? (
            <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-purple-600">
                <BookOpen size={20} />
                <span className="font-bold uppercase tracking-widest text-xs">Plan de Ejecución</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-2">{selectedWorkout.title}</h2>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">{selectedWorkout.description}</p>

              <div className="space-y-6">
                {selectedWorkout.exercises.map((exercise) => (
                  <div key={exercise.id} className="group">
                    <div className="flex gap-4 items-start mb-3">
                      <img src={exercise.imageUrl} className="w-20 h-20 rounded-2xl object-cover shadow-sm border border-zinc-100" />
                      <div>
                        <h4 className="font-bold text-slate-900">{exercise.name}</h4>
                        <div className="flex gap-2 mt-1">
                          <span className="bg-purple-50 text-purple-600 px-2 py-0.5 rounded-lg text-[10px] font-black">{exercise.sets} SERIES</span>
                          <span className="bg-pink-50 text-pink-600 px-2 py-0.5 rounded-lg text-[10px] font-black">{exercise.reps} REPS</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 group-hover:border-purple-100 transition-colors">
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        <span className="text-purple-600 font-bold block mb-1">CÓMO REALIZARLO:</span>
                        {exercise.explanation}
                      </p>
                    </div>
                  </div>
                ))}

                {selectedWorkout.exercises.length === 0 && (
                  <p className="text-slate-400 text-sm text-center py-10">Esta rutina no tiene ejercicios añadidos aún.</p>
                )}
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex flex-col items-center justify-center py-32 bg-zinc-50/50 border border-dashed border-zinc-200 rounded-[2.5rem]">
              <div className="p-6 bg-white rounded-full shadow-sm mb-6">
                <Dumbbell size={48} className="text-zinc-200" />
              </div>
              <p className="text-slate-400 font-bold">Selecciona una rutina para ver el detalle</p>
            </div>
          )}
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] p-8 w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200">
            <h3 className="text-xl font-black text-slate-900 mb-6">Nueva Rutina</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-black uppercase text-slate-400 mb-2 tracking-widest">Nombre de la Rutina</label>
                <input 
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Ej: Pierna Intensa"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-3 bg-zinc-100 text-slate-500 font-bold rounded-xl hover:bg-zinc-200 transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  onClick={handleAdd}
                  className="flex-1 py-3 bg-purple-600 text-white font-bold rounded-xl shadow-lg shadow-purple-200 hover:bg-purple-700 transition-colors"
                >
                  Crear
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutsScreen;
