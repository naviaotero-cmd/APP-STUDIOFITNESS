
export type MembershipLevel = 'Básico' | 'Premium' | 'Elite';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  membership: MembershipLevel;
  currentWeight: number;
  weightHistory: { date: string; weight: number }[];
  achievements: Achievement[];
  attendanceCount: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
  icon: string;
}

export interface GymClass {
  id: string;
  name: string;
  duration: string;
  level: string;
  capacity: number;
  currentBookings: number;
  coachId: string;
  time: string;
  day: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  imageUrl: string;
}

export interface Booking {
  id: string;
  userId: string;
  classId: string;
  date: string;
  status: 'confirmed' | 'waitlist' | 'cancelled';
}

export interface Plan {
  id: MembershipLevel;
  price: number;
  features: string[];
}
