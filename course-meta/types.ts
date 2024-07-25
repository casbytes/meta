type GM = "AUTO" | "MANUAL";

export interface Course {
  title: string;
  id: string;
  published: boolean;
  modules: Module[];
}
export interface Module {
  title: string;
  id: string;
  gradingMethod?: GM;
  subModules: SubModule[];
}

export interface SubModule {
  title: string;
  id: string;
  gradingMethod?: GM;
  lessons: Lesson[];
}
export interface Lesson {
  title: string;
  id: string;
}
