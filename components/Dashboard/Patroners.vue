<script lang="ts" setup>
import type { PatronerProps } from '../PatronerCard.vue';

const props = withDefaults(defineProps<{
    patroners: PatronerProps[],
    donationsGoal: number,
    split?: boolean
}>(), {
    split: false
});

const communityPatroners: PatronerProps[] = props.patroners.filter(patroner => patroner.contribuiteType.toLowerCase() === 'comunitário');
const communityFilterActive = ref(false);
</script>
<template>
    <div :class="card.patroner" v-if="!split">
        <h2 :class="card.patronerTitle">Combos pagos</h2>
        <div :class="card.patronerFilter">
            <div @click="communityFilterActive = false" :class="{ active: !communityFilterActive }">Diretos</div>
            <div @click="communityFilterActive = true" :class="{ active: communityFilterActive }">Comunitários</div>
        </div>
        <ul :class="card.patronerList">
            <li v-if="communityFilterActive">
                <div :class="card.patronerContribuitionGoal">
                    Meta definida - <span>R${{ donationsGoal.toFixed(2) }}</span>
                </div>
            </li>
            <li>
                <PatronerCard v-for="patroner in patroners" :patroner="patroner" v-if="!communityFilterActive" />
                <PatronerCard v-for="patroner in communityPatroners" :patroner="patroner"
                    v-else-if="communityFilterActive && communityPatroners.length > 0" />
                <template v-else>
                    <p>Sem doações no momento</p>
                </template>
            </li>
        </ul>
        <ButtonLink :class="card.seeMore" to="#">Ver mais</ButtonLink>
    </div>
    <div :class="card.patroner" v-else>
        <h2 :class="card.patronerTitle">Combos pagos</h2>
        <ul :class="[card.patronerList, card.split]">
            <li :class="card.patronerDirect">
                <h3 :class="card.patronerTitle">Diretos</h3>
                <div>
                    <PatronerCard v-for="patroner in patroners" :patroner="patroner" v-if="patroners.length > 0" />
                    <template v-else>
                        <p>Sem doações no momento</p>
                    </template>
                </div>
                <ButtonLink :class="card.seeMore" to="#">Ver mais</ButtonLink>
            </li>
            <li :class="card.patronerCommunity">
                <h3 :class="card.patronerTitle">Comunitários</h3>
                <div :class="card.patronerContribuitionGoal">
                    Meta definida - <span>R$ {{ donationsGoal.toFixed(2).replace(".", ",") }}</span>
                </div>
                <div>
                    <PatronerCard v-for="patroner in communityPatroners" :patroner="patroner"
                        v-if="communityPatroners.length > 0" />
                    <template v-else>
                        <p>Sem doações no momento</p>
                    </template>
                </div>
                <ButtonLink :class="card.seeMore" to="#">Ver mais</ButtonLink>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" module="card">
.patroner {
    grid-area: patroners;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;

    &__title {
        font-size: x-large;
        text-transform: capitalize;
        margin: 0;
        color: $c-primary-darken;
    }

    &__filter {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        max-width: 600px;
        border-bottom: 1px solid $c-primary-darken;

        & div {
            color: $c-primary-darken;
            padding: 8px 16px;
            text-align: center;
            border-radius: 8px 8px 0 0;
            transition: all 200ms ease-in;

            &[class*="active"] {
                background-color: $c-primary-darken;
                color: $c-white;
            }
        }
    }

    &__contribuition-goal {
        text-align: center;
        text-transform: capitalize;
        font-size: large;
        color: $c-secundary;
        background: $c-dark-mode;
        width: 100%;
        max-width: 600px;
        padding: 8px 16px;
        border-radius: map-get($border-radius, 'thin');;

        & span {
            border: 1.5px solid $c-secundary;
            display: inline-block;
            padding: 4px;
            border-radius: 2px;
        }
    }

    &__list {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: map-get($spacing, 'common-1');
        width: 100%;
        min-height: 100px;
        @include resetList();

        & li>p {
            color: $c-primary-darken;
            text-align: center;
        }

        &.split {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: stretch;
            justify-content: space-evenly;
            gap: 2rem;

            & .patroner-direct,
            & .patroner-community {
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: map-get($spacing, 'common-1');
                width: 100%;
                min-height: 100px;

                & .patroner__title {
                    font-size: x-large;
                }

                & div>p {
                    color: $c-primary-darken;
                    text-align: center;
                }
            }

            & .patroner-direct .see-more {
                margin-top: 8px;
            }
        }
    }

    & .see-more {
        display: block;
        border-radius: map-get($border-radius, 'thin');;
        background: $c-primary;
        padding: 8px 20px;
        color: $c-primary-darken;
        text-align: center;
        transition: all 200ms ease-in;

        &:hover,
        &:active {
            background: $c-primary-darken;
            color: $c-secundary;
        }
    }
}

html[theme*='dark'] {
    & .patroner {
        &__title {
            color: $c-grayscale-2;
        }

        &__filter {
            border-bottom: 1px solid $c-secundary;

            div {
                color: $c-secundary;

                &[class*="active"] {
                    background: adjust-color($c-secundary, $lightness: -20%);
                    color: $c-dark-mode;
                }
            }
        }

        &__contribuition-goal {
            background: $c-secundary;
            //color: $c-primary-darken;
            color: $c-dark-mode;

            & span {
                //border: 1px solid $c-primary-darken;
                border: 1px solid $c-dark-mode;
            }
        }

        &__list {
            scrollbar-color: $c-secundary;

            & li>p {
                color: $c-secundary;
            }

            &.split {

                & .patroner-direct,
                & .patroner-community {
                    & div>p {
                        color: $c-secundary;
                    }
                }
            }
        }

        & .see-more {
            color: $c-dark-mode;
            font-weight: 600;
            background: $c-secundary;

            &:hover,
            &:active {
                background: adjust-color($c-secundary, $lightness: -20%);
                //color: $c-primary-darken;
            }
        }
    }
}
</style>