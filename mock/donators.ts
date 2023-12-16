import type { donatorsLastContribuition } from "~/types/DTOs/donators";

export const mockDonators: Array<donatorsLastContribuition> = [
  {
    name: "John Smith",
    contribuition: {
      type: "diretos",
      value: 23.4,
      date: new Date(),
      to: "Legado de Sangue",
      bookUrl: "#",
    },
    profileUrl: "#",
    id: 1,
  },
  {
    name: "WilliamMayck23",
    contribuition: {
      type: "diretos",
      value: 42.0,
      date: new Date(),
      to: "Legado de Sangue",
      bookUrl: "#",
    },
    profileUrl: "#",
    id: 2,
  },
  {
    name: "O Imponente",
    contribuition: {
      type: "comunitarios",
      value: 12.5,
      date: new Date(),
      to: "Legado de Sangue",
      bookUrl: "#",
    },
    profileUrl: "#",
    id: 3,
  },
];