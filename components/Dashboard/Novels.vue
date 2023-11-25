<script lang="ts" setup>
export type novelInfo = {
    name: string;
    workAs: string;
    views: number;
    chapters: number;
    comments: number;
    url: string;
    backgroundUrl: string;
}

defineProps<{
    novels: novelInfo[];
}>()
</script>
<template>
    <div :class="novelsModule.userNovels">
        <h2 :class="novelsModule.userNovelsTitle">
            <slot>Suas Novels</slot> <small>(Tradução e Autoral)</small>
        </h2>
        <div :class="novelsModule.userNovelsContainer">
            <div :class="novelsModule.userNovelsList">
                <DashboardNovelCard v-for="novel in novels" :novel="novel" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" module="novelsModule">
.user-novels {
    grid-area: novels;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    &__title {
        font-size: x-large;
        text-transform: capitalize;
        margin: 0;
        color: $c-primary-darken;

        & small {
            color: adjust-color($c-primary-darken, $alpha: .2);
            font-size: medium;
        }
    }

    &__container {
        padding: 8px 0;
        width: 100%;
    }

    &__list {
        overflow: scroll hidden;
        display: flex;
        align-items: center;
        padding: 10px;
        margin: 0;
        list-style: none;
        gap: 8px;
        width: max-content;
        max-width: 100%;

        &::before {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 1.06%, rgba(255, 255, 255, 0.50) 95.26%, #FFF 99.8%, #FFF 99.8%);
        }
    }
}

html[theme*='dark'] {
    & .user-novels {
        &__title {
            color: $c-white;

            & small {
                color: $c-grayscale-2;
            }
        }
    }
}
</style>