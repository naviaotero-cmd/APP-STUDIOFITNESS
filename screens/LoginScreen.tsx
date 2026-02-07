
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, ArrowRight } from 'lucide-react';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      await login(email);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-zinc-50">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl mb-4 shadow-xl shadow-purple-200">
            <Dumbbell className="text-white" size={40} />
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-2">StudioFitness</h1>
          <p className="text-slate-500 font-medium">Transforma tu vida con un entrenamiento a tu medida</p>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-200 shadow-xl shadow-zinc-200/50">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="tu@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="••••••••"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-200 active:scale-95"
            >
              Iniciar Sesión <ArrowRight size={20} />
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-zinc-100 text-center">
            <p className="text-slate-500 text-sm font-medium">¿No tienes cuenta? <span className="text-purple-600 font-bold cursor-pointer hover:text-pink-600">Regístrate gratis</span></p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center mt-8">
          <div>
            <p className="text-xl font-black text-slate-900">15</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Años</p>
          </div>
          <div>
            <p className="text-xl font-black text-slate-900">2.5k</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Miembros</p>
          </div>
          <div>
            <p className="text-xl font-black text-slate-900">4.9</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
