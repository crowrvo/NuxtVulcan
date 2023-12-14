// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./scss/settings/imports" as *;',
        },
      },
      modules: {
        generateScopedName: "[sha256:hash:base64:16]",
        localsConvention: "camelCase"
      },
    }
  },

  css: ["~/scss/main.scss"],
  modules: ["@nuxt/image"]
})