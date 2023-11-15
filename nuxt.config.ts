import sassGlobImports from 'vite-plugin-sass-glob-import';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [
      sassGlobImports()
    ],
  },
  css: ["~/assets/scss/main.scss"]
})
