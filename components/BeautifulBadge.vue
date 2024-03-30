<template>
  <span
    class="inline-flex items-center text-sm px-2.5 py-1.5 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25 relative rounded-full font-semibold"
    ><a
      href="https://ui.nuxt.com/pro"
      rel="noopener noreferrer"
      target="_blank"
      class="focus:outline-none"
      tabindex="-1"
      ><span class="absolute inset-0" aria-hidden="true"></span
    ></a>
    <slot />
    <CheckCircleIcon class="w-5 h-5 ml-1" />
  </span>
</template>

<script lang="ts" setup>
import { CheckCircleIcon } from "@heroicons/vue/20/solid";
</script>
