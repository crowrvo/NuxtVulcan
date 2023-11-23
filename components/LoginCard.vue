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
    gap: 20px;
    max-width: 400px;
    border-radius: 8px;
    background-color: adjust-color($c-dark, $alpha: .85);
    backdrop-filter: blur(4px);
    box-shadow: 0 2px 8px adjust-color($c-dark, $alpha: .70);

    &__title {
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        color: $c-grayscale-2;
        text-shadow: 0 0 2px adjust-color($c-dark, $alpha: .5);

        & span {
            color: $c-primary;
        }
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: 12px;

        & label {
            display: flex;
            flex-direction: column;
            gap: 4px;
            font-size: medium;
            font-weight: 600;
            color: $c-grayscale-2;

            & input {
                appearance: none;
                display: block;
                width: 100%;
                min-height: 1.5rem;
                padding: 8px;
                box-shadow: inset 0 2px 4px adjust-color($c-background, $alpha: .7);
                background-color: adjust-color($c-grayscale-2, $alpha: .8);
                border-radius: 8px;
                border: none;
                color: $c-primary-lighten;
            }
        }

        & fieldset {
            border: none;
            margin: 8px 0;
            border-top: .5px solid $c-primary-darken;
        }
    }

    & p {
        font-size: large;
        color: $c-grayscale-2;
        margin: 8px 0;
        font-weight: bold;
        text-align: center;
        text-shadow: 0 0 2px adjust-color($c-dark, $alpha: .5);
    }

    @media (prefers-color-scheme: dark) {
        & {
            background-color: $c-dark-mode;
        }
    }
}
</style>