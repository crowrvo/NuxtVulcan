/*=== Image typing === */
type dbBookImages = {
  name: string;
  url: string;
  id: number;
};

type dbBookImagesDto = {
  collection: Array<{
    type: string;
    collection: Array<dbBookImages>;
  }>;
};

const bookImages: dbBookImagesDto = {
  collection: [
    {
      type: "banner",
      collection: [
        {
          name: "placeholder",
          url: "/images/placeholder.jpg",
          id: 1,
        },
      ],
    },
  ],
};

export { bookImages as mockBookImages };
export type { dbBookImages, dbBookImagesDto };
