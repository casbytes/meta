import { v4 as uuid } from "uuid";
import { Lesson } from "../../../../../types";
export const lessons: Lesson[] = [
  {
    title: "introduction",
    id: uuid(),
  },
  {
    title: "concepts and terminologies",
    id: uuid(),
  },
  {
    title: "the role of protocols in internet",
    id: uuid(),
  },
  {
    title: "IP addresses and domain names",
    id: uuid(),
  },

  {
    title: "Introduction to HTTP and HTTPS",
    id: uuid(),
  },
  {
    title: "Building applications with TCP/IP",
    id: uuid(),
  },
  {
    title: "Securing internet communication with SSL/TLS",
    id: uuid(),
  },
  {
    title: "Emerging trends and technologies",
    id: uuid(),
  },
];
