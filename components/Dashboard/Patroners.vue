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
                    Meta definida - <span>R${{ donationsGoal.toFixed(2) }}</span>
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

        @media (prefers-color-scheme: dark) {
            & {
                color: $c-grayscale-2;
            }
        }
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

            @media (prefers-color-scheme: dark) {
                & {
                    color: $c-primary-lighten;

                    &[class*="active"] {
                        background: $c-primary-lighten;
                        color: $c-primary-darken;
                    }
                }
            }
        }

        @media (prefers-color-scheme: dark) {
            & {
                border-bottom: 1px solid $c-primary-lighten;
            }
        }
    }

    &__contribuition-goal {
        text-align: center;
        text-transform: capitalize;
        font-size: large;
        color: $c-primary-lighten;
        background: $c-primary-darken;
        width: 100%;
        max-width: 600px;
        padding: 8px 16px;
        border-radius: 4px;

        & span {
            border: 1.5px solid $c-primary-lighten;
            display: inline-block;
            padding: 4px;
            border-radius: 2px;
        }

        @media (prefers-color-scheme: dark) {
            & {
                background: $c-primary-lighten;
                color: $c-primary-darken;

                & span {
                    border: 1px solid $c-primary-darken;
                }
            }
        }
    }

    &__list {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 8px;
        margin: 0;
        padding: 0;
        list-style: none;
        width: 100%;
        min-height: 100px;

        & li>p {
            color: $c-primary-darken;
            text-align: center;
        }

        @media (prefers-color-scheme: dark) {
            & {
                scrollbar-color: $c-primary-lighten;

                & li>p {
                    color: $c-primary-lighten;
                }
            }
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
                gap: 8px;
                width: 100%;
                min-height: 100px;

                & .patroner__title {
                    font-size: x-large;
                }

                & div>p {
                    color: $c-primary-darken;
                    text-align: center;
                }

                @media (prefers-color-scheme: dark) {
                    & div>p {
                        color: $c-primary-lighten;
                    }
                }
            }

            & .patroner-direct .see-more {
                margin-top: 8px;
            }
        }
    }

    & .see-more {
        display: block;
        border-radius: 4px;
        background: $c-primary;
        padding: 8px 20px;
        color: $c-primary-darken;
        text-align: center;
        transition: all 200ms ease-in;

        &:hover,
        &:active {
            background: $c-primary-darken;
            color: $c-primary-lighten;
        }

        @media (prefers-color-scheme: dark) {
            & {
                color: $c-primary-darken;
                font-weight: 600;
                background: $c-primary;

                &:hover,
                &:active {
                    background: $c-primary-lighten;
                    color: $c-primary-darken;
                }
            }
        }
    }
}
</style>