<script lang="ts" setup>
type navigationElement = {
    name: string;
    url: string;
    icon?: string;
}

defineProps<{
    navigations: navigationElement[],
    orientation?: "vertical" | "horizontal",
    hasTitle: boolean
}>()
</script>
<template>
    <!-- Horizontal -->
    <ul :class="navigation.navigationList" v-if="orientation === 'horizontal'">
        <li v-for="navigationLink in navigations">
            <template v-if="!hasTitle">
                <ButtonLink :to="navigationLink.url">{{ navigationLink.name }}</ButtonLink>
            </template>
            <template v-else>
                <ButtonLink :to="navigationLink.url" :title="navigationLink.name">{{ navigationLink.name }}</ButtonLink>
            </template>
        </li>
    </ul>

    <!-- Vertical -->
    <ul :class="navigation.navigationListVertical" v-else>
        <li v-for="navigationLink in navigations">
            <template v-if="!hasTitle">
                <ButtonLink :to="navigationLink.url">{{ navigationLink.name }}</ButtonLink>
            </template>
            <template v-else>
                <ButtonLink :to="navigationLink.url" :title="navigationLink.name">{{ navigationLink.name }}</ButtonLink>
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
        
        &, &_vertical {
            display: flex;
            align-content: center;
            gap: 4px;
            list-style: none;
            margin: 0;
            padding: 0;

            & li {
                display: contents;
            }

            a,
            & NuxtLink {
                display: block;
                width: 100%;
                font-weight: 500;
                text-transform: uppercase;
                text-align: center;
                padding: .75rem 1rem;
                border-radius: 4px;
            }
        }
    }
}
</style>