<template>
  <BeautifulNavbar />
  <main class="min-h-[calc(100vh-var(4rem))]">
    <main class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
        <div class="lg:col-span-2">
          <aside
            class="hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4"
          >
            <nav clas="space-y-3">
              <ContentNavigation v-slot="{ navigation }">
                <div class="w-full flex flex-col space-y-3">
                  <div v-for="link of navigation" :key="link._path" class="w-full flex flex-col space-y-3">
                    <Disclosure default-open v-slot="{ open }">
                      <DisclosureButton
                        class="flex items-center gap-1.5 group w-full focus-visible:outline-primary border-transparent"
                      >
                        <span class="text-sm/6 font-semibold truncate"> {{ link.title }}</span>
                        <ChevronRightIcon
                          :class="open ? 'rotate-90 transform' : ''"
                          class="w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5 text-gray-700 dark:text-gray-200"
                        />
                      </DisclosureButton>

                      <DisclosurePanel class="text-sm text-inherit dark:text-inherit">
                        <nav class="space-y-3 border-l border-gray-200 dark:border-gray-800 ml-2.5">
                          <div class="space-y-1.5">
                            <ContentList :path="link._path" v-slot="{ list }">
                              <NuxtLink
                                v-for="article in list"
                                :key="article._path"
                                :to="article._path"
                                class="flex items-center gap-1.5 group border-l -ml-px pl-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-500 dark:hover:border-gray-400"
                              >
                                <span class="text-sm/6 truncate">{{ article.title }}</span>
                              </NuxtLink>
                            </ContentList>
                          </div>
                        </nav>
                      </DisclosurePanel>
                    </Disclosure>
                  </div>
                </div>
              </ContentNavigation>
            </nav>
          </aside>
        </div>
        <div class="lg:col-span-8">
          <header class="relative border-b border-gray-200 dark:border-gray-800 py-8">
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              {{ page.title }}
            </h1>
            <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
              {{ page.description }}
            </p>
          </header>
          <div
            class="prose prose-primary dark:prose-invert max-w-none prose-headings:scroll-mt-[calc(48px+48px+var(--header-height))]"
          >
            <ContentRenderer v-if="page.body" :value="page" />

            <!-- <hr v-if="surround?.length" /> -->

            <!-- <UContentSurround :surround="surround" /> -->
          </div>
          <!-- <ContentDoc class="lg:col-span-8" /> -->
        </div>
      </div>
    </main>
  </main>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";

// definePageMeta({
//   layout: 'docs'
// })

const route = useRoute();
const { data: page } = await useAsyncData(`docs-${route.path}`, () => queryContent(route.path).findOne());

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}

// const { data: surround } = await useAsyncData(`docs-${route.path}-surround`, () => {
//   return queryContent()
//     .where({ _extension: 'md', navigation: { $ne: false } })
//     .findSurround(route.path.endsWith('/') ? route.path.slice(0, -1) : route.path)
// }, {
//   transform (surround) {
//     return surround.map(doc => doc.navigation === false ? null : doc)
//   }
// })

// const titleSuffix = `Nuxt Content${route.path.includes('/v1/') ? ' V1' : ''}`

// useSeoMeta({
//   title: `${page.value.title} - ${titleSuffix}`,
//   ogTitle: `${page.value.title} - ${titleSuffix}`,
//   description: page.value.description,
//   ogDescription: page.value.description
// })

// defineOgImage({
//   component: 'Docs',
//   title: page.value.title,
//   description: page.value.description
// })

// const headline = computed(() => findPageHeadline(page.value));

// const communityLinks = computed(() => [
//   {
//     icon: 'i-ph-pen-duotone',
//     label: 'Edit this page',
//     to: `https://github.com/nuxt/content/edit/main/docs/content/${page?.value?._file}`,
//     target: '_blank'
//   },
//   {
//     icon: 'i-ph-shooting-star-duotone',
//     label: 'Star on GitHub',
//     to: 'https://github.com/nuxt/content',
//     target: '_blank'
//   },
//   {
//     icon: 'i-ph-chat-centered-text-duotone',
//     label: 'Chat on Discord',
//     to: 'https://chat.nuxt.dev',
//     target: '_blank'
//   },
//   {
//     icon: 'i-ph-hand-heart-duotone',
//     label: 'Become a Sponsor',
//     to: 'https://github.com/sponsors/nuxt',
//     target: '_blank'
//   },
//   {
//     icon: 'i-simple-icons-nuxtdotjs',
//     label: 'Nuxt docs',
//     to: 'https://nuxt.com',
//     target: '_blank'
//   }
// ])
// const ecosystemLinks = [
//   {
//     icon: 'i-simple-icons-nuxtdotjs',
//     label: 'Nuxt Studio',
//     to: 'https://nuxt.studio/?utm_source=content-site&utm_medium=aside&utm_campaign=docs',
//     target: '_blank'
//   }
// ]
</script>
