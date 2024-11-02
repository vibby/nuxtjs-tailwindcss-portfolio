<script>
import { mapState } from "pinia";
import { useMainStore } from "~/store/index";

export default {
  data: () => {
    return {
      projectName: "Nuxt.js & Tailwind CSS Portfolio",
      author: "Stoman",
    };
  },
  computed: {
    ...mapState(useMainStore, ['copyrightDate']),
  },
};
</script>

<template>
  <div class="flex items-center justify-center text-center">
    <div
      class="text-lg font-general-regular text-ternary-dark dark:text-ternary-light"
    >
      &copy; {{ copyrightDate }}.
      <a
        href="https://github.com/realstoman/nuxtjs-tailwindcss-portfolio"
        target="__blank"
        class="duration-500 font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300"
        >{{ projectName }}</a
      >
      . Developed by
      <a
        href="https://stoman.me"
        target="__blank"
        class="uppercase duration-500 font-general-medium text-secondary-dark dark:text-secondary-light hover:underline hover:text-indigo-600 dark:hover:text-indigo-300"
        >{{ author }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
