<script setup lang="ts">
</script>
<template>
    <div :class="card.loginCard">
        <h2 :class="card.loginCardTitle"><span>Faça login</span> na sua conta e tenha <span>vários benefícios</span></h2>
        <form :class="card.loginCardForm">
            <label for="email">Email
                <input id="email" type="text">
            </label>
            <label for="password">Senha
                <input id="password" type="password">
            </label>
            <fieldset>
                <p>Ou faça login com</p>
                <!-- Google icon -->
            </fieldset>
        </form>
    </div>
</template>
<style lang="scss" module="card">
.login-card {
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    gap: map-get($spacing, 'common-3');
    max-width: 400px;
    border-radius: map-get($border-radius, 'common');;
    background-color: adjust-color($c-dark, $alpha: -.3);
    backdrop-filter: blur(4px);
    box-shadow: 0 2px 8px adjust-color($c-dark, $alpha: -.3);
    transition: background-color 500ms ease-in;

    &__title {
        font-size: map-get($font-size, 'text-large');
        font-weight: bold;
        text-align: center;
        line-height: map-get($typography, 'title','line-height');
        color: $c-grayscale-2;
        text-shadow: 0 0 2px adjust-color($c-dark, $alpha: .5);

        & span {
            color: $c-primary;
        }
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: map-get($spacing, 'common-2');

        & label {
            display: flex;
            flex-direction: column;
            gap: map-get($spacing, 'min');
            font-size: map-get($font-size, 'text-normal');
            font-weight: 600;
            color: $c-grayscale-2;
            text-transform: capitalize;

            & input {
                appearance: none;
                display: block;
                width: 100%;
                min-height: 1.5rem;
                padding: 8px;
                box-shadow: inset 0 2px 4px adjust-color($c-background, $alpha: -.3);
                background-color: adjust-color($c-grayscale-2, $alpha: -.2);
                border-radius: map-get($border-radius, 'common');;
                border: none;
                color: $c-secundary;
            }
        }

        & fieldset {
            border: none;
            margin: 8px 0;
            border-top: 1px solid $c-primary-darken;
        }
    }

    & p {
        font-size: map-get($font-size, 'text-medium');
        color: $c-grayscale-2;
        margin: 8px 0;
        font-weight: bold;
        text-align: center;
        text-shadow: 0 0 2px adjust-color($c-dark, $alpha: .5);
    }
}

html[theme*='dark'] {
    & .login-card {
        background-color: $c-dark;

        & input {
            color: $c-dark;
        }
    }
}
</style>