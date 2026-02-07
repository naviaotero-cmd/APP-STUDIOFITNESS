
import { GymClass, Trainer, Plan, WorkoutRoutine } from './types';

export const CLASSES_DATA: GymClass[] = [
  { 
    id: '1', name: 'HIIT', 
    description: 'Intervalos de alta intensidad para quemar grasa y mejorar potencia.',
    duration: '45 min', level: 'Medio/Avanzado', capacity: 20, currentBookings: 15, coachId: 'coach1', time: '08:00', day: 'Lunes' 
  },
  { 
    id: '2', name: 'Entrenamiento Funcional', 
    description: 'Mejora tu movilidad y fuerza aplicada a la vida diaria.',
    duration: '50 min', level: 'Todos', capacity: 20, currentBookings: 10, coachId: 'coach3', time: '09:00', day: 'Martes' 
  },
  { 
    id: '3', name: 'Fuerza y Musculación', 
    description: 'Hipertrofia pura con pesos libres y máquinas de última generación.',
    duration: '60 min', level: 'Intermedio', capacity: 15, currentBookings: 5, coachId: 'coach1', time: '18:00', day: 'Miércoles' 
  },
  { 
    id: '4', name: 'Yoga', 
    description: 'Equilibrio mental y físico a través de posturas y respiración.',
    duration: '60 min', level: 'Todos', capacity: 25, currentBookings: 22, coachId: 'coach2', time: '07:00', day: 'Jueves' 
  },
  { 
    id: '5', name: 'Pilates', 
    description: 'Control central (core) y flexibilidad asistida.',
    duration: '50 min', level: 'Principiante/Intermedio', capacity: 20, currentBookings: 18, coachId: 'coach2', time: '10:00', day: 'Viernes' 
  },
  { 
    id: '6', name: 'Zumba', 
    description: 'Ritmos latinos y ejercicio aeróbico para una sesión divertida y energética.',
    duration: '45 min', level: 'Todos', capacity: 30, currentBookings: 12, coachId: 'coach3', time: '19:00', day: 'Lunes' 
  },
  { 
    id: '7', name: 'Step', 
    description: 'Coreografías sobre plataforma para fortalecer piernas y glúteos.',
    duration: '50 min', level: 'Medio', capacity: 20, currentBookings: 8, coachId: 'coach3', time: '17:00', day: 'Martes' 
  },
  { 
    id: '8', name: 'Boxeo', 
    description: 'Técnica de golpeo, saco y defensa personal con alta carga de cardio.',
    duration: '60 min', level: 'Todos', capacity: 15, currentBookings: 14, coachId: 'coach1', time: '20:00', day: 'Miércoles' 
  },
  { 
    id: '9', name: 'Spinning', 
    description: 'Ciclismo indoor de alta intensidad con perfiles de ruta variados.',
    duration: '45 min', level: 'Medio', capacity: 25, currentBookings: 20, coachId: 'coach3', time: '07:30', day: 'Jueves' 
  },
  { 
    id: '10', name: 'Body Pump', 
    description: 'La clase original con barra y discos que fortalece todo tu cuerpo.',
    duration: '60 min', level: 'Todos', capacity: 20, currentBookings: 19, coachId: 'coach1', time: '18:30', day: 'Viernes' 
  },
  { 
    id: '11', name: 'Core Express', 
    description: '30 minutos intensivos dedicados exclusivamente a tu sección media.',
    duration: '30 min', level: 'Todos', capacity: 20, currentBookings: 5, coachId: 'coach2', time: '13:00', day: 'Lunes' 
  },
];

export const PREDEFINED_WORKOUTS: WorkoutRoutine[] = [
  {
    id: 'w1', title: 'Fuerza: Empuje (Pecho/Tríceps)', description: 'Músculos de empuje horizontal y vertical.', category: 'Fuerza',
    exercises: [
      { id: 'e1', name: 'Press de Banca', explanation: 'Baja la barra al pecho y empuja extendiendo codos.', imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=200&h=200&auto=format&fit=crop', sets: '4', reps: '10' },
      { id: 'e2', name: 'Extensiones Tríceps', explanation: 'Baja la polea extendiendo los brazos por completo.', imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa209f9c?q=80&w=200&h=200&auto=format&fit=crop', sets: '3', reps: '15' }
    ]
  },
  {
    id: 'w2', title: 'Movilidad Total', description: 'Mejora el rango de movimiento articular.', category: 'Flexibilidad',
    exercises: [
      { id: 'e3', name: 'Postura del Niño', explanation: 'Siéntate sobre talones y estira brazos al frente.', imageUrl: 'https://images.unsplash.com/photo-1544126592-807daf21565c?q=80&w=200&h=200&auto=format&fit=crop', sets: '1', reps: '60s' },
      { id: 'e4', name: 'Gato-Camello', explanation: 'Arquea espalda rítmicamente en cuadrupedia.', imageUrl: 'https://images.unsplash.com/photo-1518611012118-296072bb5604?q=80&w=200&h=200&auto=format&fit=crop', sets: '3', reps: '12' }
    ]
  },
  {
    id: 'w3', title: 'Pierna Explosiva', description: 'Enfocado en cuádriceps y glúteos con cargas altas.', category: 'Fuerza',
    exercises: [
      { id: 'e5', name: 'Sentadilla Libre', explanation: 'Baja la cadera manteniendo espalda recta y rodillas hacia afuera.', imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2158?q=80&w=200&h=200&auto=format&fit=crop', sets: '4', reps: '8' },
      { id: 'e6', name: 'Prensa Inclinada', explanation: 'Empuja la plataforma con las piernas sin bloquear rodillas.', imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&h=200&auto=format&fit=crop', sets: '3', reps: '12' }
    ]
  },
  {
    id: 'w4', title: 'Tracción (Espalda/Bíceps)', description: 'Fortalecimiento de la cadena posterior y flexores de brazo.', category: 'Fuerza',
    exercises: [
      { id: 'e7', name: 'Dominadas Asistidas', explanation: 'Sube el pecho hacia la barra controlando el descenso.', imageUrl: 'https://images.unsplash.com/photo-1598971639058-aba7c18f9a22?q=80&w=200&h=200&auto=format&fit=crop', sets: '3', reps: 'Fall' },
      { id: 'e8', name: 'Curl con Barra', explanation: 'Flexiona codos subiendo la barra sin balancear el cuerpo.', imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef03a1965b?q=80&w=200&h=200&auto=format&fit=crop', sets: '3', reps: '12' }
    ]
  },
  {
    id: 'w5', title: 'Core de Hierro', description: 'Rutina intensiva de abdomen y lumbares.', category: 'Usuario',
    exercises: [
      { id: 'e9', name: 'Plancha Abdominal', explanation: 'Mantén el cuerpo recto apoyado en antebrazos.', imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=200&h=200&auto=format&fit=crop', sets: '4', reps: '45s' },
      { id: 'e10', name: 'Rueda Abdominal', explanation: 'Extiende el torso hacia adelante y regresa usando el core.', imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=200&h=200&auto=format&fit=crop', sets: '3', reps: '10' }
    ]
  },
  {
    id: 'w6', title: 'Cardio Quemagrasas', description: 'Circuito metabólico para máxima oxidación calórica.', category: 'Cardio',
    exercises: [
      { id: 'e11', name: 'Burpees', explanation: 'Baja a flexión, sube y realiza un salto explosivo.', imageUrl: 'https://images.unsplash.com/photo-1599058917233-35808df4b5e7?q=80&w=200&h=200&auto=format&fit=crop', sets: '5', reps: '15' },
      { id: 'e12', name: 'Saltos al Cajón', explanation: 'Salta sobre el cajón cayendo de forma amortiguada.', imageUrl: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=200&h=200&auto=format&fit=crop', sets: '4', reps: '12' }
    ]
  },
  {
    id: 'w7', title: 'Glúteo & Isquios Focus', description: 'Modelado y fuerza de la cadena posterior baja.', category: 'Fuerza',
    exercises: [
      { id: 'e13', name: 'Hip Thrust', explanation: 'Empuja la barra con la cadera apretando glúteos arriba.', imageUrl: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=200&h=200&auto=format&fit=crop', sets: '4', reps: '10' },
      { id: 'e14', name: 'Peso Muerto Rumano', explanation: 'Baja la barra rozando piernas con espalda neutra.', imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&h=200&auto=format&fit=crop', sets: '3', reps: '12' }
    ]
  },
  {
    id: 'w8', title: 'Powerlifting Básico', description: 'Los tres grandes movimientos para fuerza absoluta.', category: 'Fuerza',
    exercises: [
      { id: 'e15', name: 'Peso Muerto (Deadlift)', explanation: 'Levanta la carga desde el suelo usando piernas y espalda.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=200&h=200&auto=format&fit=crop', sets: '5', reps: '5' },
      { id: 'e16', name: 'Press Militar', explanation: 'Empuja la barra sobre la cabeza desde los hombros.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=200&h=200&auto=format&fit=crop', sets: '3', reps: '8' }
    ]
  },
  {
    id: 'w9', title: 'Estiramiento de Oficina', description: 'Alivia la tensión de cuello y espalda tras el trabajo.', category: 'Flexibilidad',
    exercises: [
      { id: 'e17', name: 'Estiramiento de Pectoral', explanation: 'Apoya el brazo en una pared y gira el tronco.', imageUrl: 'https://images.unsplash.com/photo-1552196564-97c02b9f848b?q=80&w=200&h=200&auto=format&fit=crop', sets: '2', reps: '30s' },
      { id: 'e18', name: 'Chin Tucks', explanation: 'Retrae la barbilla para corregir postura cervical.', imageUrl: 'https://images.unsplash.com/photo-1552196564-97c02b9f848b?q=80&w=200&h=200&auto=format&fit=crop', sets: '3', reps: '10' }
    ]
  },
  {
    id: 'w10', title: 'Full Body Principiantes', description: 'Un poco de todo para quienes están empezando.', category: 'Fuerza',
    exercises: [
      { id: 'e19', name: 'Zancadas (Lunges)', explanation: 'Da un paso largo y baja la rodilla posterior.', imageUrl: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?q=80&w=200&h=200&auto=format&fit=crop', sets: '3', reps: '12' },
      { id: 'e20', name: 'Remo con Mancuerna', explanation: 'Tira de la mancuerna hacia la cadera con el codo pegado.', imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef03a1965b?q=80&w=200&h=200&auto=format&fit=crop', sets: '3', reps: '12' }
    ]
  },
  {
    id: 'w11', title: 'Hombros 3D', description: 'Aísla las tres cabezas del deltoides.', category: 'Fuerza',
    exercises: [
      { id: 'e21', name: 'Elevaciones Laterales', explanation: 'Sube las mancuernas a los lados hasta altura de hombros.', imageUrl: 'https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?q=80&w=200&h=200&auto=format&fit=crop', sets: '4', reps: '15' },
      { id: 'e22', name: 'Face Pulls', explanation: 'Tira de la cuerda hacia tu frente abriendo codos.', imageUrl: 'https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?q=80&w=200&h=200&auto=format&fit=crop', sets: '3', reps: '12' }
    ]
  },
  {
    id: 'w12', title: 'Flexibilidad de Cadera', description: 'Ideal para mejorar la profundidad de sentadilla.', category: 'Flexibilidad',
    exercises: [
      { id: 'e23', name: 'Pigeon Pose', explanation: 'Dobla una pierna al frente y estira la otra atrás.', imageUrl: 'https://images.unsplash.com/photo-1544126592-807daf21565c?q=80&w=200&h=200&auto=format&fit=crop', sets: '2', reps: '45s' },
      { id: 'e24', name: '90/90 Stretch', explanation: 'Rotación de cadera sentado con piernas en 90 grados.', imageUrl: 'https://images.unsplash.com/photo-1544126592-807daf21565c?q=80&w=200&h=200&auto=format&fit=crop', sets: '3', reps: '10' }
    ]
  }
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
