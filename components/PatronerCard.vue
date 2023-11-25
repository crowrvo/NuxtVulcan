<script lang="ts" setup>
export type PatronerProps = {
    name: string;
    contribuitionValue: number;
    contribuitionDate: Date;
    contribuitionTo: string;
    contribuiteType: string;
    contribuitionUrl: string;
    url: string;
}

defineProps<{
    patroner: PatronerProps
}>()

const formateDate = (date: Date) => {
    return date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()
};
</script>
<template>
    <div :class="$style.patroner">
        <span :class="$style.patronerContribuitionBadge">
            R$ {{ patroner.contribuitionValue.toFixed(2).replace(".", ",") }}
        </span>
        <div :class="$style.patronerInfo">
            <h4 :class="$style.patronerName">{{ patroner.name }}</h4>
            <p :class="$style.patronerContribuitionData">
                {{ formateDate(patroner.contribuitionDate) }} - <ButtonLink :to="patroner.contribuitionUrl">{{
                    patroner.contribuitionTo }}</ButtonLink>
            </p>
        </div>
        <ButtonLink :class="$style.seeDetails" :to="patroner.url">Ver detalhes</ButtonLink>
    </div>
</template>
<style lang="scss" module>
.patroner {
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
        border-radius: 4px;
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: 4px;
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
        border-radius: 4px;
        text-decoration: none;
        text-align: center;
        color: $c-primary-darken;
        background: $c-primary;

        &:hover,
        &:active {
            background: $c-primary-darken;
            color: $c-primary-lighten;
        }
    }
}

html[theme*='dark'] {
    & .patroner {
        &__contribuition-badge {
            background: $c-primary-lighten;
            color: $c-primary-darken;
        }

        &__info {
            border-left: 1px solid $c-primary-lighten;
            color: $c-white;
        }

        &__contribuition-data {
            color: $c-primary;

            & a {
                color: $c-primary-lighten;
            }
        }

        & .see-details {
            background: $c-primary;

            &:hover,
            &:active {
                background: $c-primary-lighten;
                color: $c-primary-darken;
            }
        }
    }
}
</style>