export type Class = {
  _id: string;
  name: string;
  year: number;
  mainTeacher: string;
  teachers: string[];
  students: string[];
};
export type Manager = {
  _id: string;
  name: string;
  username: string;
  password: string;
};
export type Teacher = {
  _id: string;
  name: string;
  username: string;
  password: string;
  age: number;
  salary: number;
  classes: string[];
  mainClass: string;
  lessons: string;
};
export type Student = {
  _id: string;
  name: string;
  username: string;
  password: string;
  age: number;
  class: string;
  mainTeacher: string;
};
export type DailySchedule = {
  _id: string;
  date: string;
  class: string;
  lessons: string[];
  teacher: string[];
};
export type WeeklySchedule = {
  _id: string;
  date: string;
  class: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
};
export type Grade = {
  _id: string;
  lesson: string;
  exam: string;
  teacher: string;
  class: string;
  student: string;
  grade: number;
};
export type Grades = {
  _id: string;
  grades: Grade[];
};
