import sassGlobImports from 'vite-plugin-sass-glob-import';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  vite: {
    plugins: [
      sassGlobImports()
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/settings/colors" as *;',
        },
      },
      modules: {
        generateScopedName: "[sha256:hash:base64:16]",
      },
    }
  },
  css: ["~/assets/scss/main.scss"],
})
