export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
    head: {
      title: "Stoman Portfolio",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },

  css: ["~/assets/app.css"],

  // Nuxt 3 automatically handles auto-import of components
  components: {
    dirs: [
      "~/components/content"
    ]
  },

  // Modules
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@pinia/nuxt", "@nuxt/content"],

  colorMode: {
    classSuffix: "",
  },

  // Build Configuration
  build: {
    // Add any specific configurations for build, if necessary
  },

  // Static generation configuration for Nuxt 3
  nitro: {
    preset: "static", // Set this if you want a static site build
  },

  content: {
    highlight: {
      theme: "material-theme-palenight",
      langs: ["c", "cpp", "java", "js", "css", "html", "json", "vue", "ts"],
    },
  },

  compatibilityDate: "2024-11-02",
});
