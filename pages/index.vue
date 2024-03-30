<template>
  <BeautifulNavbar></BeautifulNavbar>
  <header class="px-4 sm:px-0 py-8 sm:py-16 lg:py-24">
    <div class="gap-8 sm:gap-y-16 flex flex-col">
      <div class="text-center flex flex-col items-center">
        <!---->
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          Um plano para tudo que precisar com dados da B3
        </h1>
        <p class="mt-4 text-md sm:text-lg text-gray-500 dark:text-gray-400">
          Nossos planos são projetados para atender às necessidades de desenvolvedores individuais, pequenas e grandes
          empresas. <strong>Obtenha o plano certo que combina com você.</strong>
        </p>
        <div class="mt-8 flex flex-wrap gap-x-3 gap-y-1.5 justify-center">
          <!----><button
            aria-label="pricing toggle"
            class="ring-1 ring-gray-300 dark:ring-gray-700 flex items-center relative h-8 flex-shrink-0 cursor-pointer rounded-full p-1 focus:outline-none w-48"
            id="headlessui-switch-n8XSa7iqml4_0"
            role="switch"
            type="button"
            tabindex="0"
            aria-checked="false"
            data-headlessui-state=""
          >
            <span
              aria-hidden="true"
              class="absolute inset-y-0 w-1/2 flex items-center justify-center pointer-events-none z-[1] transition-colors duration-200 select-none text-xs font-semibold flex-shrink-0 left-0 text-white dark:text-gray-900"
              >Mensal<br /></span
            ><span
              aria-hidden="true"
              class="absolute inset-y-0 w-1/2 flex items-center justify-center pointer-events-none z-[1] transition-colors duration-200 select-none text-xs font-semibold flex-shrink-0 right-0 text-gray-500 dark:text-gray-400"
              >Anual</span
            ><span
              aria-hidden="true"
              class="translate-x-0 w-1/2 text-white dark:text-gray-900 pointer-events-none inline-block h-6 transform rounded-full bg-gray-900 dark:bg-white shadow transition duration-200 ease-in-out z-0 relative"
            ></span>
          </button>
        </div>
      </div>
      <!---->
    </div>
  </header>

  <section class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div class="flex flex-col lg:grid lg:grid-cols-3 w-full justify-center items-center gap-8">
      <div
        class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 relative flex flex-col self-stretch w-full"
      >
        <!---->
        <div class="flex-1 gap-6 lg:gap-x-8 xl:gap-x-10 flex flex-col sm:p-6 p-6 lg:p-8 xl:p-10">
          <div class="">
            <div class="flex items-center gap-3">
              <p class="text-2xl text-gray-900 dark:text-white sm:text-3xl font-semibold truncate">Básico</p>
              <!---->
            </div>
            <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
              Plano para desenvolvedores individuais.
            </p>
            <!---->
          </div>
          <div class="flex flex-row items-baseline gap-x-1">
            <!---->
            <p class="text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold">R$ 14.90</p>
            <p class="text-gray-500 dark:text-gray-400 text-sm/6 font-medium truncate">/mês</p>
          </div>
          <div class="order-last flex-1">
            <ul class="space-y-3 text-sm">
              <li class="flex items-center gap-x-3 min-w-0">
                <CheckCircleIcon class="w-5 h-5 flex-shrink-0 text-primary"></CheckCircleIcon
                ><span class="text-gray-600 dark:text-gray-400 truncate">Até 15.000 requisições por mês</span>
              </li>
              <li class="flex items-center gap-x-3 min-w-0">
                <CheckCircleIcon class="w-5 h-5 flex-shrink-0 text-primary"></CheckCircleIcon
                ><span class="text-gray-600 dark:text-gray-400 truncate">Até 1 ação por requisição</span>
              </li>
              <li class="flex items-center gap-x-3 min-w-0">
                <CheckCircleIcon class="w-5 h-5 flex-shrink-0 text-primary"></CheckCircleIcon
                ><span class="text-gray-600 dark:text-gray-400 truncate"
                  ><span style="background-color: rgb(var(--color-gray-900) / var(--tw-bg-opacity))"
                    >Dados históricos de até 3 meses</span
                  ></span
                >
              </li>
              <li class="flex items-center gap-x-3 min-w-0">
                <CheckCircleIcon class="w-5 h-5 flex-shrink-0 text-primary"></CheckCircleIcon
                ><span class="text-gray-600 dark:text-gray-400 truncate"
                  ><span
                    style="font-size: 0.875rem; background-color: rgb(var(--color-gray-900) / var(--tw-bg-opacity))"
                    >Dividendos atualizados diariamente</span
                  ></span
                >
              </li>
              <li class="flex items-center gap-x-3 min-w-0">
                <CheckCircleIcon class="w-5 h-5 flex-shrink-0 text-primary"></CheckCircleIcon
                ><span class="text-gray-600 dark:text-gray-400 truncate">Suporte via E-mail<br /></span>
              </li>
            </ul>
          </div>
          <button
            type="button"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 w-full flex justify-center items-center"
          >
            <span class="">Escolher</span>
          </button>
        </div>
        <!---->
      </div>
      <div
        class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 shadow bg-white dark:bg-gray-900 relative flex flex-col self-stretch w-full ring-2 ring-primary dark:ring-primary"
      >
        <!---->
        <div class="flex-1 gap-6 lg:gap-x-8 xl:gap-x-10 flex flex-col sm:p-6 p-6 lg:p-8 xl:p-10">
          <div class="">
            <div class="flex items-center gap-3">
              <p class="text-2xl text-gray-900 dark:text-white sm:text-3xl font-semibold truncate">Completo</p>
              <!---->
            </div>
            <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
              Plano completo para suas necessidades.
            </p>
            <!---->
          </div>
          <div class="flex flex-row items-baseline gap-x-1">
            <!---->
            <p class="text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold">R$ 39.90</p>
            <p class="text-gray-500 dark:text-gray-400 text-sm/6 font-medium truncate">/mês</p>
          </div>
          <div class="order-last flex-1">
            <ul class="space-y-3 text-sm">
              <li class="flex items-center gap-x-3 min-w-0">
                <CheckCircleIcon class="w-5 h-5 flex-shrink-0 text-primary"></CheckCircleIcon
                ><span class="text-gray-600 dark:text-gray-400 truncate">Requisições ilimitadas<br /></span>
              </li>
              <li class="flex items-center gap-x-3 min-w-0">
                <CheckCircleIcon class="w-5 h-5 flex-shrink-0 text-primary"></CheckCircleIcon
                ><span class="text-gray-600 dark:text-gray-400 truncate">Até 20 ações por requisição<br /></span>
              </li>
              <li class="flex items-center gap-x-3 min-w-0">
                <CheckCircleIcon class="w-5 h-5 flex-shrink-0 text-primary"></CheckCircleIcon
                ><span class="text-gray-600 dark:text-gray-400 truncate"
                  ><span
                    style="font-size: 0.875rem; background-color: rgb(var(--color-gray-900) / var(--tw-bg-opacity))"
                    >Dados históricos completos</span
                  ></span
                >
              </li>
              <li class="flex items-center gap-x-3 min-w-0">
                <CheckCircleIcon class="w-5 h-5 flex-shrink-0 text-primary"></CheckCircleIcon
                ><span class="text-gray-600 dark:text-gray-400 truncate"
                  ><span
                    style="font-size: 0.875rem; background-color: rgb(var(--color-gray-900) / var(--tw-bg-opacity))"
                    >Dividendos atualizados em até 30min</span
                  ></span
                >
              </li>
              <li class="flex items-center gap-x-3 min-w-0">
                <CheckCircleIcon class="w-5 h-5 flex-shrink-0 text-primary"></CheckCircleIcon
                ><span class="text-gray-600 dark:text-gray-400 truncate"
                  ><span
                    style="font-size: 0.875rem; background-color: rgb(var(--color-gray-900) / var(--tw-bg-opacity))"
                    >Suporte via E-mail e WhatsApp</span
                  ></span
                >
              </li>
              <li class="flex items-center gap-x-3 min-w-0">
                <CheckCircleIcon class="w-5 h-5 flex-shrink-0 text-primary"></CheckCircleIcon
                ><span class="text-gray-600 dark:text-gray-400 truncate">Redundância acordada em SLA</span>
              </li>
            </ul>
          </div>
          <div class="">
            <!----><button
              type="button"
              class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 w-full flex justify-center items-center"
            >
              <!----><span class="">Escolher</span
              ><!----></button
            ><!---->
          </div>
        </div>
        <!---->
      </div>
      <div
        class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 relative flex flex-col self-stretch w-full"
      >
        <!---->
        <div class="flex-1 gap-6 lg:gap-x-8 xl:gap-x-10 flex flex-col sm:p-6 p-6 lg:p-8 xl:p-10">
          <div class="">
            <div class="flex items-center gap-3">
              <p class="text-2xl text-gray-900 dark:text-white sm:text-3xl font-semibold truncate">Padrão</p>
              <!---->
            </div>
            <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">Plano para pequenos times.</p>
            <!---->
          </div>
          <div class="flex flex-row items-baseline gap-x-1">
            <!---->
            <p class="text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold">R$ 29.90</p>
            <p class="text-gray-500 dark:text-gray-400 text-sm/6 font-medium truncate">/mês</p>
          </div>
          <div class="order-last flex-1">
            <ul class="space-y-3 text-sm">
              <li class="flex items-center gap-x-3 min-w-0">
                <CheckCircleIcon class="w-5 h-5 flex-shrink-0 text-primary"></CheckCircleIcon
                ><span class="text-gray-600 dark:text-gray-400 truncate">Até 50.000 requisições por mês<br /></span>
              </li>
              <li class="flex items-center gap-x-3 min-w-0">
                <CheckCircleIcon class="w-5 h-5 flex-shrink-0 text-primary"></CheckCircleIcon
                ><span class="text-gray-600 dark:text-gray-400 truncate">Até 10 ações por requisição</span>
              </li>
              <li class="flex items-center gap-x-3 min-w-0">
                <CheckCircleIcon class="w-5 h-5 flex-shrink-0 text-primary"></CheckCircleIcon
                ><span class="text-gray-600 dark:text-gray-400 truncate"
                  ><span
                    style="font-size: 0.875rem; background-color: rgb(var(--color-gray-900) / var(--tw-bg-opacity))"
                    >Dados históricos de até 1 ano</span
                  ></span
                >
              </li>
              <li class="flex items-center gap-x-3 min-w-0">
                <CheckCircleIcon class="w-5 h-5 flex-shrink-0 text-primary"></CheckCircleIcon
                ><span class="text-gray-600 dark:text-gray-400 truncate"
                  ><span
                    style="font-size: 0.875rem; background-color: rgb(var(--color-gray-900) / var(--tw-bg-opacity))"
                    >Dividendos atualizados diariamente</span
                  ></span
                >
              </li>
              <li class="flex items-center gap-x-3 min-w-0">
                <CheckCircleIcon class="w-5 h-5 flex-shrink-0 text-primary"></CheckCircleIcon>
                <span class="text-gray-600 dark:text-gray-400 truncate">Suporte via E-mail e WhatsApp</span>
              </li>
            </ul>
          </div>
          <button
            type="button"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 w-full flex justify-center items-center"
          >
            <span class="">Escolher</span>
          </button>
        </div>
        <!---->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/20/solid";
</script>
