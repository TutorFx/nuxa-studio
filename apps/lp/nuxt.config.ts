// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    'nuxa-studio-package',
    '@nuxtjs/eslint-module',
    'nuxt-module-eslint-config'
  ],
  devtools: { enabled: true },
  nitro: {
    preset: 'vercel',
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
})
