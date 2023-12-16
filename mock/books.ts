import type { bookPresentationDetailedInfo, bookProps } from "~/types/DTOs/books";

const book: bookProps = {
  name: "Legado de sangue",
  url: "#",
  backgroundUrl: "/images/placeholder.jpg",
  data: {
    views: 21020921,
    chapters: 332,
    comments: 123231
  },
  volumes: [
    {
      name: "A queda",
      number: 1,
      chapters: [
        {
          name: "O começo de tudo",
          number: 1,
        },
        {
          name: "Conspiração",
          number: 2,
        },
      ],
    },
    {
      name: "Suspiro",
      number: 2,
      chapters: [
        {
          name: "John e Michael",
          number: 1,
        },
      ],
    },
    {
      name: "A notícia",
      number: 3,
      chapters: [
        {
          name: "Conto de fadas não são realmente reais, independente de qualquer coisa",
          number: 1,
        },
      ],
    },
    {
      name: "Contando Mentiras",
      number: 4,
      chapters: [
        {
          name: "Quem fez o que?!",
          number: 1,
        },
        {
          name: "Viagem à Londres",
          number: 2,
        },
      ],
    },
  ],
};

const novels: Array<bookPresentationDetailedInfo> = [
  {
    name: "One Punch Man",
    author: "",
    worker: {
      name: "",
      workAs: "tradutor",
    },
    data: { views: 2301313132, chapters: 300, comments: 12311132 },
    url: "#opm",
    backgroundUrl: "/images/placeholder.jpg",
  },
  {
    name: "Jujutsu Kaisen",
    author: "",
    worker: {
      name: "",
      workAs: "editor",
    },
    data: { views: 12312323, chapters: 312, comments: 201132 },
    url: "#jujutsu",
    backgroundUrl: "/images/placeholder2.jpg",
  },
];

export { book as mockBook };
export { novels as mockNovels };