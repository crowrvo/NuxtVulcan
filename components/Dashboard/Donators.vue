<script lang="ts" setup>
import type { donatorsLastContribuition } from '~/types/DTOs/donators';

const props = withDefaults(defineProps<{
    donators: Array<donatorsLastContribuition>,
    donationsGoal: number,
    split?: boolean
}>(), {
    split: false
});

const communityDonators: Array<donatorsLastContribuition> = props.donators.filter(donator => donator.contribuition.type.toLowerCase() === 'comunitário'||donator.contribuition.type.toLowerCase() === 'comunitario');
const communityFilterActive = ref(false);
</script>
<template>
    <div :class="card.donators" v-if="!split">
        <h2 :class="card.donatorsTitle">Combos pagos</h2>
        <div :class="card.donatorsFilter">
            <div @click="communityFilterActive = false" :class="{ active: !communityFilterActive }">Diretos</div>
            <div @click="communityFilterActive = true" :class="{ active: communityFilterActive }">Comunitários</div>
        </div>
        <ul :class="card.donatorsList">
            <li v-if="communityFilterActive">
                <div :class="card.donatorsContribuitionGoal">
                    Meta definida - <span>R${{ donationsGoal.toFixed(2) }}</span>
                </div>
            </li>
            <li>
                <DonatorCard v-for="donator in donators" :donator="donator" v-if="!communityFilterActive" />
                <DonatorCard v-for="donator in communityDonators" :donator="donator"
                    v-else-if="communityFilterActive && communityDonators.length > 0" />
                <template v-else>
                    <p>Sem doações no momento</p>
                </template>
            </li>
        </ul>
        <ButtonLink :class="card.seeMore" to="#">Ver mais</ButtonLink>
    </div>
    <div :class="card.donators" v-else>
        <h2 :class="card.donatorsTitle">Combos pagos</h2>
        <ul :class="[card.donatorsList, card.split]">
            <li :class="card.donatorsDirect">
                <h3 :class="card.donatorsTitle">Diretos</h3>
                <div>
                    <DonatorCard v-for="donator in donators" :donator="donator" v-if="donators.length > 0" />
                    <template v-else>
                        <p>Sem doações no momento</p>
                    </template>
                </div>
                <ButtonLink :class="card.seeMore" to="#">Ver mais</ButtonLink>
            </li>
            <li :class="card.donatorsCommunity">
                <h3 :class="card.donatorsTitle">Comunitários</h3>
                <div :class="card.donatorsContribuitionGoal">
                    Meta definida - <span>R$ {{ donationsGoal.toFixed(2).replace(".", ",") }}</span>
                </div>
                <div>
                    <DonatorCard v-for="donators in communityDonators" :donator="donators"
                        v-if="communityDonators.length > 0" />
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
.donators {
    grid-area: donators;
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

            & .donators-direct,
            & .donators-community {
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: map-get($spacing, 'common-1');
                width: 100%;
                min-height: 100px;

                & .donators__title {
                    font-size: x-large;
                }

                & div>p {
                    color: $c-primary-darken;
                    text-align: center;
                }
            }

            & .donators-direct .see-more {
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
    & .donators {
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

                & .donators-direct,
                & .donators-community {
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