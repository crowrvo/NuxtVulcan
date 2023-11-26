<script lang="ts" setup>
import { useMediaQuery } from "@vueuse/core";
import icon from "~/utils/icon.vue";

export type navigationElement = {
    name: string;
    url: string;
    icon?: string;
    hasTitle: boolean
}

defineProps<{
    navigations: navigationElement[],
    orientation?: "vertical" | "horizontal",
}>()
</script>
<template>
    <!-- Horizontal -->
    <ul :class="navigation.navigationList" v-if="orientation === 'horizontal'">
        <li v-for="navigationLink in navigations">
            <template v-if="useMediaQuery('(min-width: 1080px)')">
                <ButtonLink v-if="!navigationLink.hasTitle" :to="navigationLink.url">
                    <icon v-if="navigationLink.icon" :icon="navigationLink.icon" />
                </ButtonLink>
                <ButtonLink v-else :to="navigationLink.url" :title="navigationLink.name">
                    <icon v-if="navigationLink.icon" :icon="navigationLink.icon" />
                </ButtonLink>
            </template>
            <template v-else>
                <ButtonLink v-if="!navigationLink.hasTitle" :to="navigationLink.url">
                    <icon v-if="navigationLink.icon" :icon="navigationLink.icon" />
                </ButtonLink>
                <ButtonLink v-else :to="navigationLink.url" :title="navigationLink.name">
                    <icon v-if="navigationLink.icon" :icon="navigationLink.icon" />
                </ButtonLink>
            </template>
        </li>
    </ul>

    <!-- Vertical -->
    <ul :class="navigation.navigationListVertical" v-else>
        <li v-for="navigationLink in navigations">
            <template v-if="useMediaQuery('(min-width: 1080px)')">
                <ButtonLink v-if="!navigationLink.hasTitle" :to="navigationLink.url">
                    <icon v-if="navigationLink.icon" :icon="navigationLink.icon" />
                </ButtonLink>
                <ButtonLink v-else :to="navigationLink.url" :title="navigationLink.name">
                    <icon v-if="navigationLink.icon" :icon="navigationLink.icon" />
                </ButtonLink>
            </template>
            <template v-else>
                <ButtonLink v-if="!navigationLink.hasTitle" :to="navigationLink.url">
                    <icon v-if="navigationLink.icon" :icon="navigationLink.icon" />
                </ButtonLink>
                <ButtonLink v-else :to="navigationLink.url" :title="navigationLink.name">
                    <icon v-if="navigationLink.icon" :icon="navigationLink.icon" />
                </ButtonLink>
            </template>
        </li>
    </ul>
</template>
<style lang="scss" module="navigation">
.navigation {
    &__list {
        &_vertical {
            flex-direction: column;
            place-items: center;
        }

        &,
        &_vertical {
            display: flex;
            align-content: center;
            width: 100%;
            gap: 4px;
            list-style: none;
            margin: 0;
            padding: 0;

            & li {
                display: contents;
            }

            & a {
                display: block;
                width: 100%;
                font-size: 24px;
                text-align: center;
                text-transform: uppercase;
                padding: 4px 8px;
                color: $c-primary-darken;
            }
        }
    }
}
</style>