type TestEnv = "node" | "browser";

export interface Course {
  title: string;
  id: string;
  published: boolean;
  testEnvironment: TestEnv;
  modules: Module[];
}
export interface Module {
  title: string;
  id: string;
  checkpoint?: boolean;
  testEnvironment?: TestEnv;
  subModules: SubModule[];
}

export interface SubModule {
  title: string;
  id: string;
  checkpoint?: boolean;
  testEnvironment?: TestEnv;
  lessons: Lesson[];
}
export interface Lesson {
  title: string;
  id: string;
}
