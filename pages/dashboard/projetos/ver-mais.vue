<script lang="ts" setup>
import { useSortable } from '@vueuse/integrations/useSortable';
import icon from '~/utils/icon.vue';

export type workProps = {
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

const work = toRef<workProps>({
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
});

definePageMeta({
    layout: "dashboard",
    name: "Ver mais"
})

const seeMoreList = ref<HTMLElement>();
useSortable(seeMoreList.value, work.value.volumes, {
    animation: 150,
    // handle: '.drag',
    // draggable: '.chapter'
})
</script>
<template>
    <div :class="$style.container">
        <div :class="$style.seeMore">
            <h1 :class="$style.title">{{ work.name }}</h1>
            <div :class="$style.seeMoreSerialization">
                <div :class="$style.seeMoreWorkInfo">
                    <div :class="$style.seeMoreWorkVolume" v-for="volume in work.volumes">
                        <h2 :class="$style.title">Volume {{ volume.number }} - <span>{{ volume.name }}</span></h2>
                        <ul :class="$style.seeMoreList" ref="seeMoreList">
                            <li v-for="chapter in volume.chapters" :key="chapter.number">
                                <div :class="$style.seeMoreContentArea">
                                    <div :class="[$style.dragBars, 'drag']">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <p :class="$style.seeMoreChapterInfo"><strong>Capítulo {{ chapter.number }}</strong>
                                        -
                                        {{ chapter.name }}
                                    </p>
                                </div>
                                <Button>Editar</Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div :class="$style.seeMoreWorkDetails">
                    <div :class="$style.seeMoreContainImage">
                        <ButtonLink :to="work.url">
                            <NuxtImg :src="work.imageUrl" :alt="work.name" />
                        </ButtonLink>
                    </div>
                    <div :class="$style.seeMoreWorkData">
                        <div>
                            <p>Views: <span>{{ work.data.views }}</span></p>
                            <p>Capítulos: <span>{{ work.data.chapters }}</span></p>
                        </div>
                        <ButtonLink :to="work.url"><icon icon="eye" />Página da obra</ButtonLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" module>
.container {
    display: flex;
    justify-content: center;
    margin: 1rem;
    padding: 12px;

    @media screen and (max-width: 1024px) and (orientation: portrait) {
        margin: 8px;
        padding: 4px;
    }
}

.title {
    color: $c-primary-darken;
    font-size: x-large;
    margin: 0;

    & span {
        font-weight: 400;
        color: adjust-color($c-primary-darken, $saturation: 20%, $lightness: 30%)
    }
}

.see-more {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 16px;
    background: $c-white;
    border-radius: map-get($border-radius, 'thin');;
    // box-shadow: 0 2px 4px adjust-color($c-grayscale-3, $alpha: .35);
    box-shadow: 0 2px 4px adjust-color($c-grayscale-3, $alpha: -.75);
    height: 80svh;
    overflow: hidden;

    &>.title {
        font-size: x-large !important;
        text-transform: uppercase;
        text-align: center;
        color: adjust-color($c-primary-darken, $saturation: 20%, $lightness: 18%) !important;
        border-bottom: 2px solid adjust-color($c-primary-darken, $saturation: 20%, $lightness: 18%);
        padding: 0 0px 16px;
        width: 100%;
    }

    &__serialization {
        display: flex;
        gap: 16px;
        width: 100%;
        max-height: 90%;
    }

    &__work-details {
        flex: 1 1 60%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 0 24px;
        height: 100%;
        border-left: 2px solid adjust-color($c-primary-darken, $saturation: 20%, $lightness: 18%);

        @media screen and (max-width: 1024px) and (orientation: portrait) {
            border-left: none !important;
        }

        @media screen and (max-width: 1024px) and (orientation: landscape) {
            padding: 0 24px;
        }
    }

    &__contain-image {
        flex: 1 1 40%;
        max-height: 200px;

        & a {
            display: block;
            height: 100%;
            width: 100%;
        }

        & img {
            display: block;
            width: 100%;
            max-width: 100%;
            height: 100%;
            max-height: 100%;
            object-fit: cover;
            border-radius: map-get($border-radius, 'common');;
        }

        @media screen and (max-width: 1024px) and (orientation: portrait) {
            & {
                flex: 0 1 max-content;
                height: 200px;
            }
        }
    }

    &__work-data {
        flex: 1 fit-content;
        display: flex;
        gap: map-get($spacing, 'common-1');

        & div {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            gap: map-get($spacing, 'min');
        }

        & p {
            font-size: medium;
            font-weight: 600;
            color: adjust-color($c-primary-darken, $saturation: 20%, $lightness: 18%);
            margin: 0;
            text-transform: uppercase;

            & span {
                color: $c-primary-darken;
                font-weight: 400;
                text-transform: capitalize;
            }
        }

        & a {
            flex: 1 auto;
            display: flex;
            justify-content: space-between;
            gap: map-get($spacing, 'min');
            background: $c-primary;
            color: $c-primary-darken;
            border-radius: map-get($border-radius, 'thin');;
            padding: 8px 12px;
            width: max-content;
            height: max-content;
        }
    }

    &__work-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        width: 100%;
        overflow: hidden scroll;
    }

    &__work-volume {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: map-get($spacing, 'common-1');

        & .title {
            color: adjust-color($c-primary-darken, $saturation: 20%, $lightness: 18%);
            font-size: large;
            margin: 0;
        }
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: map-get($spacing, 'common-1');
        margin: 0;
        padding: 4px 8px;
        list-style: none;
        max-height: fit-content;
        overflow: hidden scroll;
        width: 100%;

        & li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            padding: 4px 16px;
            color: $c-primary-darken;
            background-color: transparent;
            width: 100%;
            box-shadow: 0 0 4px adjust-color($c-primary-darken, $alpha: -.60);
            border-radius: map-get($border-radius, 'thin');;
        }
    }

    &__content-area {
        display: flex;
        align-items: center;
        gap: map-get($spacing, 'common-1');

        & p {
            font-weight: 300;
        }
    }

    &__chapter-info {
        color: $c-primary-darken;

        & strong {
            font-weight: bold
        }
    }

    @media screen and (max-width: 1024px) and (orientation: portrait) {
        & {
            max-height: fit-content;
        }
    }
}

.drag-bars {
    display: flex;
    flex-direction: column;
    gap: map-get($spacing, 'min');
    width: max-content;
    cursor: pointer;

    & div {
        width: 28px;
        height: 100%;
        padding: 2px;
        border-radius: map-get($border-radius, 'thin');;
        background-color: adjust-color($c-primary-darken, $lightness: 20%);
    }
}

html[theme*='dark'] {
    $c-secundary: adjust-color($c-secundary, $saturation: 30%, $lightness: -18%);
    & .see-more {
        background: $c-dark-mode;

        &>.title {
            color: $c-secundary !important;
            border-bottom: 2px solid $c-secundary;
        }

        &__serialization {
            flex-direction: column-reverse;

            @media screen and (max-width: 1024px) and (orientation: landscape) {
                flex-direction: row;
            }
        }

        &__work-details {
            border-left: 2px solid $c-secundary;
        }

        &__work-data p {
            color: $c-secundary;

            & span {
                color: $c-primary;
            }
        }

        & .title {
            color: $c-secundary;

            & span {
                color: adjust-color($c-secundary, $saturation: 30%, $lightness: 10%)
            }
        }

        &__list li {
            color: $c-secundary;
            box-shadow: 0 0 4px adjust-color($c-secundary, $alpha: .4);
        }

        &__chapter-info {
            color: $c-secundary;
        }
    }

    & .title {
        color: $c-secundary;
    }

    & .drag-bars div {
        background-color: $c-secundary;
    }
}
</style>