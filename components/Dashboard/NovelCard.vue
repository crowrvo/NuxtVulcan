<script lang="ts" setup>
type novelInfo = {
    name: string;
    workAs: string;
    views: number;
    chapters: number;
    comments: number;
    url: string;
    backgroundUrl: string;
}

defineProps<{
    novel: novelInfo;
}>();
</script>
<template>
    <div :class="card.cardNovel">
        <ButtonLink :to="novel.url" :class="card.cardNovelContainImage">
            <NuxtImg :src="novel.backgroundUrl" :alt="novel.name" :class="card.cardNovelImage" format="avif"/>
        </ButtonLink>
        <div :class="card.cardNovelInfo">
            <h3 :class="card.cardNovelName">{{ novel.name }}</h3>
            <span :class="card.cardNovelWork">{{ novel.workAs }}</span>
            <div :class="card.cardNovelData">
                <span><strong>Views</strong>: {{ novel.views }}</span>
                <span><strong>Capítulos</strong>: {{ novel.chapters }}</span>
                <span><strong>Comentários</strong>: {{ novel.comments }}</span>
            </div>
            <div :class="card.cardNovelActions">
                <Button :class="card.add">Adicionar capítulos</Button>
                <Button>Ver capítulos</Button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" module="card">
.card-novel {
    display: flex;
    gap: 8px;
    width: 100%;
    max-width: max-content;
    min-height: 90px;
    height: 100%;
    padding: 5px 20px 5px 5px;
    background: $c-background;
    box-shadow: 0 2px 4px adjust-color($c-grayscale-1, $alpha: -.35);
    border-radius: 8px;

    &__contain-image {
        display: block;
        min-height: 100%;
        max-height: 100%;
        min-width: 100px;
    }

    &__image {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: .5rem 0;
    }

    &__name {
        text-transform: capitalize;
        word-break: keep-all;
        font-size: medium;
        color: $c-primary-darken;
        margin: 0;
    }

    &__work {
        font-size: small;
        color: $c-grayscale-1;
    }

    &__data {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 4px 0;

        & span {
            display: block;
            font-size: small;
            color: $c-primary-darken;
        }

        & strong {
            color: $c-grayscale-1;
            font-weight: normal;
        }
    }

    &__actions {
        display: flex;
        align-items: center;
        padding: 8px 0;
        gap: 4px;
        width: max-content;

        & button {
            padding: 2px 8px;
            background-color: $c-background;
            color: $c-primary-darken;
            border-radius: 20px;
            width: 100%;
            font-size: small;
            outline: .5px solid $c-primary-darken;
            height: 100%;
            transition: all 200ms ease-out;

            &:hover,
            &:active {
                background: $c-primary-darken;
                color: $c-white;
                outline: none;
            }

            &.add {
                background-color: $c-primary-darken;
                color: $c-white;

                &:hover,
                &:active {
                    background: $c-white;
                    color: $c-primary-darken;
                    outline: .5px solid $c-primary-darken;
                }
            }
        }
    }
}

html[theme*='dark'] {
    & .card-novel {
        background-color: $c-dark-mode;

        &__name {
            color: $c-white;
        }

        &__work {
            color: $c-grayscale-2;
        }

        &__data {
            & span {
                color: $c-primary;
            }
            & strong {
                color: $c-grayscale-2;
            }
        }

        &__actions button {
            background-color: $c-dark-mode;
            outline: .5px solid $c-primary-lighten;
            color: $c-primary-lighten;

            &:hover,
            &:active {
                background: $c-primary-lighten;
                color: $c-primary-darken;
                outline: none;
            }

            &.add {
                background-color: $c-primary;
                color: $c-primary-darken;
                outline: none;

                &:hover,
                &:active {
                    background: $c-primary-lighten;
                    color: $c-primary-darken;
                    outline: none;
                }
            }
        }
    }
}
</style>