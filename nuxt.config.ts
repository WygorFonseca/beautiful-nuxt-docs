// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxtjs/color-mode"],

  content: {
    highlight: {
      // OR
      theme: {
        // Default theme (same as single string)
        default: "tokyo-night",
        // Theme used if `html.dark`
        dark: "tokyo-night",
        // Theme used if `html.sepia`
        sepia: "monokai",
      },
    },
  },

  colorMode: {
    classSuffix: "",
  },

  css: ["~/assets/css/main.css"],

  devServer: {
    host: "0.0.0.0",
  },
});
