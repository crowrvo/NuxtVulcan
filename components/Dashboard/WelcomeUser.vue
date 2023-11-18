<script lang="ts" setup>
defineProps<{
    name: string;
    imageSrc: string;
}>();

type notificationProps = {
    message: string;
    date: string
}

const notifications: notificationProps[] = [{
    message: "Mensagem de teste",
    date: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`
}]
</script>
<template>
    <div :class="card.welcomeUser">
        <div :class="card.welcomeUserHead">
            <div :class="card.welcomeUserContainImage">
                <img :src="imageSrc" :class="card.welcomeUserImage">
            </div>
            <p>Olá,<br /> <strong>{{ name }}</strong></p>
        </div>
        <div :class="card.welcomeUserNotificationList">
            <span :class="card.welcomeUserTitle">Notificações</span>
            <span :class="card.welcomeUserNotification" v-for="notification in notifications">
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
@use "@/assets/scss/settings/colors.scss";

.welcome-user {
    grid-area: welcome-user;
    display: flex;
    flex-direction: column;
    place-content: flex-start;
    background: $c-background;
    height: max-content;
    box-shadow: 0 0px 12px -5px $c-dark;
    padding: 8px;
    gap: 1rem;
    border-radius: 8px;

    &__head {
        display: flex;
        gap: 8px;

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

            @media (prefers-color-scheme: dark){
                & {
                    color: $c-grayscale-2;

                    & strong {
                        color: $c-primary;
                    }
                }
            }
        }
    }

    &__title {
        display: flex;
        align-items: center;
        gap: 4px;
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
            border-radius: 8px;
        }

        @media (prefers-color-scheme: dark){
            & {
                color: $c-grayscale-2;

                &::before {
                    background: $c-grayscale-2;
                }
            }
        }
    }

    &__image {
        height: 80px;
        display: block;
        width: 100%;
        aspect-ratio: 4/4;
        object-fit: cover;
        border-radius: 8px;
    }

    &__notification {
        display: flex;
        justify-content: space-between;
        gap: 4px;
        padding: 4px;
        color: $c-primary-darken;

        &-list {
            font-size: small;
            display: flex;
            flex-direction: column;
            padding: 0 0 4px;
            gap: 4px;
        }
        
        @media (prefers-color-scheme: dark){
            & {
                color: $c-grayscale-2;
            }
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
            
            @media (prefers-color-scheme: dark){
                & {
                    color: $c-primary;
                }
            }
        }
    }

    @media (prefers-color-scheme: dark){
        & {
            background: $c-dark-mode;
        }
    }
}
</style>