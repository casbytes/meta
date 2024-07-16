export interface Course {
  title: string;
  id: string;
  published: boolean;
  modules?: Module[];
}
export interface Module {
  title: string;
  id: string;
  lessons?: Lesson[];
}
export interface Lesson {
  title: string;
  id: string;
}
