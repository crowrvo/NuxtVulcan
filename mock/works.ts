type workProps = {
    name: string,
    url: string,
    imageUrl: string,
    data: {
        views: number,
        chapters: number
    },
    volumes: {
        name: string;
        number: number;
        chapters: {
            name: string;
            number: number;
        }[];
    }[]
}

const work:workProps = {
    name: "Legado de sangue",
    url: '#',
    imageUrl: "/images/placeholder.jpg",
    data: {
        views: 21020921,
        chapters: 332
    },
    volumes: [{
        name: "A queda",
        number: 1,
        chapters: [{
            name: "O começo de tudo",
            number: 1
        }, {
            name: "Conspiração",
            number: 2
        }]
    }, {
        name: "Suspiro",
        number: 2,
        chapters: [{
            name: "John e Michael",
            number: 1
        }]
    }, {
        name: "A notícia",
        number: 3,
        chapters: [{
            name: "Conto de fadas não são realmente reais, independente de qualquer coisa",
            number: 1
        }]
    }, {
        name: "Contando Mentiras",
        number: 4,
        chapters: [{
            name: "Quem fez o que?!",
            number: 1
        }, {
            name: "Viagem à Londres",
            number: 2
        }]
    }]
}

type dbWorkImages = {
    name: string;
    url: string;
    id: number
}

type dbWorkImagesDto = {
    collection: {
        type: string,
        collection: dbWorkImages[]
    }[]
}

const workImages:dbWorkImagesDto = {
    collection: [{
        type: 'banner',
        collection: [{
            name: 'placeholder',
            url: '/images/placeholder.jpg',
            id: 1
        }]
    }]
}

export { work as mockWork, workImages as mockWorkImages };
export type { workProps, dbWorkImages, dbWorkImagesDto };