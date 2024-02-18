// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@nuxtjs/eslint-module',
    'nuxa-studio-package',
    'nuxt-module-eslint-config',
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
