<script lang="ts" setup>
import { formatDate } from '@vueuse/core';
import type { donatorsLastContribuition } from '~/types/DTOs/donators';

const props = defineProps<{
    donator: donatorsLastContribuition
}>()

const dateFormated = formatDate(props.donator.contribuition.date, 'DDMMYY');
</script>
<template>
    <div :class="$style.donator">
        <span :class="$style.donatorContribuitionBadge">
            R$ {{ donator.contribuition.value.toFixed(2).replace(".", ",") }}
        </span>
        <div :class="$style.donatorInfo">
            <h4 :class="$style.donatorName">{{ donator.name }}</h4>
            <p :class="$style.donatorContribuitionData">
                {{ dateFormated }} - <ButtonLink :to="donator.contribuition.bookUrl">{{
                    donator.contribuition.to }}</ButtonLink>
            </p>
        </div>
        <ButtonLink v-if="donator.profileUrl" :class="$style.seeDetails" :to="donator.profileUrl">Ver detalhes</ButtonLink>
    </div>
</template>
<style lang="scss" module>
.donator {
    display: flex;
    align-items: center;
    gap: 22px;
    justify-content: space-between;
    padding: 4px;

    &__contribuition-badge {
        display: block;
        padding: 8px;
        background: $c-grayscale-2;
        color: $c-dark-mode;
        font-size: medium;
        border-radius: map-get($border-radius, 'thin');
        ;
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: map-get($spacing, 'min');
        border-left: 1px solid $c-dark-mode;
        color: $c-dark-mode;
        padding: 0 20px;
    }

    &__name {
        margin: 0;
        font-size: medium;
        font-weight: 600;
        text-transform: capitalize;
    }

    &__contribuition-data {
        font-size: small;
        margin: 0;

        & a {
            color: $c-primary-darken;
            text-decoration: none;
            font-weight: 600;
        }
    }

    & .see-details {
        display: block;
        padding: 8px;
        border-radius: map-get($border-radius, 'thin');
        ;
        text-decoration: none;
        text-align: center;
        color: $c-primary-darken;
        background: $c-primary;

        &:hover,
        &:active {
            background: $c-primary-darken;
            color: $c-secundary;
        }
    }
}

html[theme*='dark'] {
    & .donator {
        &__contribuition-badge {
            background: $c-secundary;
            color: $c-primary-darken;
        }

        &__info {
            border-left: 1px solid $c-secundary;
            color: $c-white;
        }

        &__contribuition-data {
            color: $c-primary;

            & a {
                color: $c-secundary;
            }
        }

        & .see-details {
            background: $c-primary;

            &:hover,
            &:active {
                background: $c-secundary;
                color: $c-primary-darken;
            }
        }
    }
}
</style>