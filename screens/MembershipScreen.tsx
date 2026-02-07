
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { PLANS_DATA } from '../constants';
import { Check, ShieldCheck, CreditCard, Sparkles } from 'lucide-react';
import { MembershipLevel } from '../types';

const MembershipScreen: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleUpgrade = (planId: MembershipLevel) => {
    setLoadingPlan(planId);
    // Simulate Stripe Checkout
    setTimeout(() => {
      updateUser({ membership: planId });
      setLoadingPlan(null);
      alert(`¡Felicidades! Ahora eres miembro ${planId}.`);
    }, 1500);
  };

  return (
    <div className="space-y-10 pb-10 animate-in fade-in duration-500">
      <header className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-black uppercase tracking-widest mb-4 border border-purple-100">
          <Sparkles size={16} className="text-pink-500" /> Planes Premium
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Eleva tu Potencial</h1>
        <p className="text-slate-500 font-medium leading-relaxed">Únete a nuestra comunidad exclusiva y accede a instalaciones de élite con el plan que mejor se adapte a ti.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        {PLANS_DATA.map((plan) => {
          const isCurrent = user?.membership === plan.id;
          const isElite = plan.id === 'Elite';

          return (
            <div 
              key={plan.id} 
              className={`relative bg-white border flex flex-col p-10 rounded-[3rem] transition-all overflow-hidden ${
                isCurrent ? 'border-purple-500 ring-4 ring-purple-100' : 'border-zinc-200'
              } ${isElite ? 'scale-105 shadow-2xl shadow-purple-200/50 z-10' : 'shadow-sm shadow-zinc-200/50'}`}
            >
              {isElite && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-pink-500 to-purple-600 text-white text-[10px] font-black uppercase px-6 py-2 rounded-bl-3xl tracking-widest">
                  VIP Choice
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.id}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-slate-900">${plan.price}</span>
                  <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">/mes</span>
                </div>
              </div>

              <ul className="space-y-5 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-600">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center mt-0.5">
                      <Check className="text-purple-600" size={14} strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleUpgrade(plan.id)}
                disabled={isCurrent || !!loadingPlan}
                className={`w-full py-4 rounded-2xl font-black text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 ${
                  isCurrent 
                    ? 'bg-zinc-100 text-zinc-400 cursor-default shadow-none border border-zinc-200' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-purple-200 hover:shadow-purple-300'
                }`}
              >
                {loadingPlan === plan.id ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : isCurrent ? (
                  'Plan Actual'
                ) : (
                  <>
                    <CreditCard size={18} /> Seleccionar Plan
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      <div className="bg-white border border-zinc-200 rounded-[3rem] p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
        <div className="flex items-center gap-6">
          <div className="p-5 bg-emerald-50 rounded-3xl shadow-inner border border-emerald-100">
            <ShieldCheck className="text-emerald-500" size={32} />
          </div>
          <div>
            <h4 className="font-black text-xl text-slate-900">Seguridad Garantizada</h4>
            <p className="text-slate-500 font-medium">Pagos procesados por Stripe con encriptación de grado militar.</p>
          </div>
        </div>
        <div className="flex gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" className="h-8" alt="Stripe" />
        </div>
      </div>
    </div>
  );
};

export default MembershipScreen;
