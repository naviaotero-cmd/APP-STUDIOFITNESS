
import React, { createContext, useContext, useState } from 'react';
import { GymClass, Booking } from '../types';
import { CLASSES_DATA } from '../constants';

interface FitnessContextType {
  classes: GymClass[];
  userBookings: Booking[];
  bookClass: (classId: string, userId: string) => void;
  cancelBooking: (bookingId: string) => void;
}

const FitnessContext = createContext<FitnessContextType | undefined>(undefined);

export const FitnessProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [classes, setClasses] = useState<GymClass[]>(CLASSES_DATA);
  const [userBookings, setUserBookings] = useState<Booking[]>([]);

  const bookClass = (classId: string, userId: string) => {
    const targetClass = classes.find(c => c.id === classId);
    if (!targetClass) return;

    if (targetClass.currentBookings < targetClass.capacity) {
      const newBooking: Booking = {
        id: Math.random().toString(36).substr(2, 9),
        userId,
        classId,
        date: new Date().toISOString(),
        status: 'confirmed',
      };
      
      setUserBookings([...userBookings, newBooking]);
      setClasses(prev => prev.map(c => 
        c.id === classId ? { ...c, currentBookings: c.currentBookings + 1 } : c
      ));
    } else {
      alert("Clase llena. Te hemos añadido a la lista de espera.");
      const waitlistBooking: Booking = {
        id: Math.random().toString(36).substr(2, 9),
        userId,
        classId,
        date: new Date().toISOString(),
        status: 'waitlist',
      };
      setUserBookings([...userBookings, waitlistBooking]);
    }
  };

  const cancelBooking = (bookingId: string) => {
    const booking = userBookings.find(b => b.id === bookingId);
    if (!booking) return;

    setUserBookings(prev => prev.filter(b => b.id !== bookingId));
    setClasses(prev => prev.map(c => 
      c.id === booking.classId ? { ...c, currentBookings: Math.max(0, c.currentBookings - 1) } : c
    ));
  };

  return (
    <FitnessContext.Provider value={{ classes, userBookings, bookClass, cancelBooking }}>
      {children}
    </FitnessContext.Provider>
  );
};

export const useFitness = () => {
  const context = useContext(FitnessContext);
  if (!context) throw new Error('useFitness must be used within FitnessProvider');
  return context;
};
