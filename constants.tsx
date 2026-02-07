
import { GymClass, Trainer, Plan } from './types';

export const CLASSES_DATA: GymClass[] = [
  { id: '1', name: 'HIIT', duration: '45 min', level: 'Medio/Avanzado', capacity: 20, currentBookings: 15, coachId: 'coach1', time: '08:00', day: 'Lunes' },
  { id: '2', name: 'Entrenamiento Funcional', duration: '50 min', level: 'Todos', capacity: 20, currentBookings: 10, coachId: 'coach3', time: '09:00', day: 'Martes' },
  { id: '3', name: 'Fuerza y Musculación', duration: '60 min', level: 'Intermedio', capacity: 15, currentBookings: 5, coachId: 'coach1', time: '18:00', day: 'Miércoles' },
  { id: '4', name: 'Yoga', duration: '60 min', level: 'Todos', capacity: 25, currentBookings: 22, coachId: 'coach2', time: '07:00', day: 'Jueves' },
  { id: '5', name: 'Pilates', duration: '50 min', level: 'Principiante/Intermedio', capacity: 20, currentBookings: 18, coachId: 'coach2', time: '10:00', day: 'Viernes' },
  { id: '6', name: 'Core Express', duration: '30 min', level: 'Todos', capacity: 20, currentBookings: 20, coachId: 'coach1', time: '12:00', day: 'Lunes' },
  { id: '7', name: 'Cardio Training', duration: '45 min', level: 'Medio', capacity: 20, currentBookings: 12, coachId: 'coach3', time: '19:00', day: 'Sábado' },
];

export const TRAINERS_DATA: Trainer[] = [
  { id: 'coach1', name: 'Carlos Martínez', specialty: 'Fuerza y HIIT', experience: 10, imageUrl: 'https://picsum.photos/seed/carlos/200' },
  { id: 'coach2', name: 'Laura Gómez', specialty: 'Yoga y Pilates', experience: 8, imageUrl: 'https://picsum.photos/seed/laura/200' },
  { id: 'coach3', name: 'David Ruiz', specialty: 'Funcional y Cardio', experience: 6, imageUrl: 'https://picsum.photos/seed/david/200' },
];

export const PLANS_DATA: Plan[] = [
  { id: 'Básico', price: 49, features: ['Acceso a gimnasio', '2 clases/semana', 'App básica'] },
  { id: 'Premium', price: 79, features: ['Acceso total 24/7', 'Clases ilimitadas', 'Seguimiento de peso', 'Logros'] },
  { id: 'Elite', price: 120, features: ['Todo lo de Premium', 'Entrenador personal 1 vez/mes', 'Plan nutricional', 'Toallas gratis'] },
];

export const ACHIEVEMENTS_LIST = [
  { id: '1', title: 'Madrugador', description: 'Asiste a 5 clases antes de las 8 AM', icon: 'Sun' },
  { id: '2', title: 'Guerrero HIIT', description: 'Completa 10 clases de HIIT', icon: 'Zap' },
  { id: '3', title: 'Constancia Pura', description: 'Asiste 4 semanas seguidas', icon: 'Calendar' },
  { id: '4', title: 'Meta Alcanzada', description: 'Llega a tu peso ideal', icon: 'Target' },
];
