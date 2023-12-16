import type { dbBookImagesDto } from "./books";

const DBImages: Array<dbBookImagesDto> = [{
    collection: [{
        type: 'banner',
        collection: [{
            name: 'placeholder',
            url: '/images/placeholder.jpg',
            id: 1
        }]
    }]
}];

export { DBImages }