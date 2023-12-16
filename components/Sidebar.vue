<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core';
import { routes } from '~/mock/routes';
import type { basicNavigationInfo } from '~/mock/routes';

defineEmits(['toggle-sidebar']);

withDefaults(defineProps<{
    visible: boolean | Ref
}>(), {
    visible: false
})


const basicRoutes: Array<basicNavigationInfo> = [{
    name: 'início',
    url: '/dashboard'
}, {
    name: 'projetos',
    url: '/dashboard/projetos'
}]

const isMobile = useMediaQuery('(max-width: 1080px)');
</script>
<template>
    <aside :class="[sidebar.sidebar, { visible: visible, mobile: isMobile }]">
        <div :class="sidebar.container">
            <NavigationBar :navigations="routes" orientation="vertical" />
            <ButtonLink to="/dashboard/">
                <Icon icon="eye" />
            </ButtonLink>
        </div>
        <div :class="sidebar.mobileNavigation" v-if="isMobile">
            <div :class="sidebar.mobileNavigationHead">
                <div :class="sidebar.mobileNavigationContainImage">
                    <ButtonLink to="/">
                        <NuxtImg src="/images/brand/logo.png" format="avif"
                            alt="Logo marca da Vulcan Scanlator" placeholder />
                    </ButtonLink>
                </div>
                <Button @click="$emit('toggle-sidebar')">
                    <Icon icon="eye" />
                </Button>
            </div>
            <div :class="sidebar.mobileNavigationNavigation">
                <nav>
                    <ul :class="sidebar.mobileNavigationNavigationList">
                        <li v-for="route in basicRoutes">
                            <ButtonLink :to="route.url">{{ route.name }}</ButtonLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </aside>
</template>
<style lang="scss" module="sidebar">
.sidebar {
    position: fixed;
    top: 60px;
    left: -100dvw;
    bottom: 0px;
    min-width: min(12svw, 60px);
    max-width: 15vw;
    height: calc(100% - 60px);
    z-index: 899;
    display: flex;
    flex-direction: column;
    place-content: space-between;
    background: $c-background;
    box-shadow: 0 0px 12px -5px $c-dark;
    transition: left .3s ease-in;

    &>.container {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        place-content: space-between;
        padding: 8px 12px;
    }

    &[class*="visible"] {
        left: 0;
    }

    &[class*='mobile'] {
        flex-direction: row;
        max-width: 34vw;

        &+.container {
            padding: 0;
        }

        & .mobile-navigation {
            display: flex;
            flex-direction: column;
            gap: map-get($spacing, 'common-2');
            border-left: 1px solid $c-primary-darken;
            min-width: 230px;
            background: $c-background;

            &__head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
                background-color: $c-primary-darken;
                padding: 12px 1rem;

                & button {
                    background: transparent;
                    color: $c-white;
                }
            }

            &__contain-image {
                height: 40px;
                width: 40px;

                & a {
                    display: block;
                    height: 100%;
                    width: 100%;

                    & img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        aspect-ratio: 4/4;
                    }
                }
            }

            &__navigation {
                padding: 8px 16px;

                & nav {
                    height: 100%;
                    width: 100%;
                }

                &-list {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    gap: map-get($spacing, 'common-1');
                    @include resetList();

                    & li a {
                        display: block;
                        width: 100%;
                        padding: 8px 16px;
                        background: $c-background;
                        color: $c-primary-darken;
                        outline: 1px solid $c-primary-darken;
                        transition: background-color, color, outline 200ms ease-in;
                        border-radius: 2px;

                        &:hover,
                        &:active {
                            background-color: $c-primary-darken;
                            color: $c-white;
                        }
                    }
                }
            }
        }
    }

    & .container>a {
        display: block;
        padding: 8px 16px;
        text-align: center;
        color: $c-primary-darken;
    }
}

html[theme*='dark'] {
    & .sidebar {
        background: $c-dark-mode;

        & a {
            color: $c-secundary;
        }

        &[class*='mobile'] {

            & .mobile-navigation {
                border-left: 1px solid $c-secundary;
                background: $c-dark-mode;

                &__head {
                    background-color: $c-primary;

                    & img {
                        filter: invert(90%)
                    }

                    & button {
                        color: $c-dark-mode;
                    }
                }

                &__navigation-list a {
                    background-color: transparent;
                    color: $c-secundary;
                    outline: 1px solid $c-secundary;

                    &:hover,
                    &:active {
                        background-color: $c-primary;
                        color: $c-primary-darken;
                        outline: 1px solid $c-primary;
                    }
                }
            }
        }
    }
}
</style>