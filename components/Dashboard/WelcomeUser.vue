<script lang="ts" setup>
import { mockNotifications } from '~/mock/notifications';

defineProps<{
    name: string;
    imageSrc: string;
}>();

</script>
<template>
    <div :class="card.welcomeUser">
        <div :class="card.welcomeUserHead">
            <div :class="card.welcomeUserContainImage">
                <NuxtImg :src="imageSrc" alt="Sua foto de perfil" :class="card.welcomeUserImage" format="avif"/>
            </div>
            <p>Olá,<br /> <strong>{{ name }}</strong></p>
        </div>
        <div :class="card.welcomeUserNotificationList">
            <span :class="card.welcomeUserTitle">Notificações</span>
            <span :class="card.welcomeUserNotification" v-for="notification in mockNotifications">
                {{ notification.message }}
                <time>{{ notification.date }}</time>
                <!-- icone para deletar a notificação -->
            </span>
            <div :class="card.welcomeUserNotificationManage">
                <Button>Marcar todas como lidas</Button>
                <Button>Ver todas</Button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" module="card">
.welcome-user {
    grid-area: welcome-user;
    display: flex;
    flex-direction: column;
    place-content: flex-start;
    background: $c-background;
    height: max-content;
    box-shadow: 0 0px 12px -5px $c-dark-mode;
    padding: 8px;
    gap: 1rem;
    border-radius: map-get($border-radius, 'common');;

    &__head {
        display: flex;
        gap: map-get($spacing, 'common-1');

        & p {
            margin: 4px 0 0;
            color: $c-grayscale-1;
            font-size: medium;

            & strong {
                font-size: x-large;
                text-transform: uppercase;
                color: $c-primary-darken;
                font-weight: bold;
            }
        }
    }

    &__title {
        display: flex;
        align-items: center;
        gap: map-get($spacing, 'min');
        color: $c-primary-darken;
        font-size: medium;
        font-weight: 600;
        margin: 0 0 4px;
        width: 100%;

        &::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: $c-primary-darken;
            border-radius: map-get($border-radius, 'common');;
        }
    }

    &__image {
        height: 80px;
        display: block;
        width: 100%;
        aspect-ratio: 4/4;
        object-fit: cover;
        border-radius: map-get($border-radius, 'common');;
    }

    &__notification {
        display: flex;
        justify-content: space-between;
        gap: map-get($spacing, 'min');
        padding: 4px;
        color: $c-primary-darken;

        &-list {
            font-size: small;
            display: flex;
            flex-direction: column;
            padding: 0 0 4px;
            gap: map-get($spacing, 'min');
        }
    }

    &__notification-manage {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-top: 8px;

        button {
            font-size: medium;
            background: none;
            font-weight: 500;
            color: $c-primary-darken;
        }
    }
}

html[theme*='dark'] {
    & .welcome-user {
        background: $c-dark-mode;

        &__head {
            p {
                color: adjust-color($c-grayscale-2, $lightness: -10%, $alpha: .7);
            }

            & strong {
                color: $c-primary;
            }
        }

        &__title {
            color: $c-grayscale-2;

            &::after {
                background: $c-grayscale-2;
            }
        }

        &__notification {
            color: $c-grayscale-2;
        }

        &__notification-manage button {
            color: $c-primary;
        }
    }
}
</style>