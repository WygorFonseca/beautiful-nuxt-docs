<template>
  <BeautifulNavbar></BeautifulNavbar>
  <section>
    <div class="py-12 sm:py-32 md:py-40 relative">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div class="text-center">
          <h1 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
            API com dados de ações da B3
          </h1>
          <p class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">
            Desenvolvido de desenvolvedor para desenvolvedores, dados atualizados e consistentes
          </p>
          <div class="my-10 flex gap-2 items-center justify-center flex-wrap">
            <BeautifulBadge>Ações</BeautifulBadge>
            <BeautifulBadge>FIIs</BeautifulBadge>
            <BeautifulBadge>ETFs</BeautifulBadge>
            <BeautifulBadge>BDRs</BeautifulBadge>
            <BeautifulBadge>Dividendos históricos</BeautifulBadge>
            <BeautifulBadge>Eventos corporativos</BeautifulBadge>
            <BeautifulBadge>Proventos atualizados em até 30 minutos</BeautifulBadge>
            <BeautifulBadge>Cotações</BeautifulBadge>
          </div>
          <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
            <a
              class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
              href="/signup"
            >
              <span class="">Entre em contato</span>
              <ChatBubbleOvalLeftIcon class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div
          class="absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        ></div>
      </div>
    </div>
  </section>

  <section class="px-4 sm:px-0">
    <div class="text-center flex flex-col items-center">
      <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
        Por que escolher a gente?
      </h1>
      <p class="mt-4 text-md sm:text-lg text-gray-500 dark:text-gray-400">
        Desenvolvemos as APIs com o que há de mais recente em termos de tecnologia e busca de dados no mercado.
      </p>
      <p class="mt-4 text-md sm:text-lg text-gray-500 dark:text-gray-400">
        Além disso, estamos trabalhando para aprimorar nossos serviços com o uso de Integência Artificial e você poderá
        ter acesso a recursos exclusivos em breve!
      </p>
    </div>

    <div class="grid sm:grid-cols-2 mt-10 md:mt-16 gap-10 md:gap-16 max-w-screen-lg mx-auto">
      <!--[-->
      <div class="flex gap-4 items-start">
        <div class="mt-1 bg-cyan-300 rounded-full p-2 w-8 h-8 shrink-0">
          <ArchiveBoxIcon class="w-4 h-4 text-black" />
        </div>
        <div>
          <h3 class="font-semibold text-lg">SDK para JavaScript</h3>
          <p class="text-slate-500 mt-2 leading-relaxed">
            Construa sua aplicação instalando nossa SDK via npm com os tipos já definidos e ganhe tempo.
          </p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="mt-1 bg-cyan-300 rounded-full p-2 w-8 h-8 shrink-0">
          <RocketLaunchIcon class="w-4 h-4 text-black" />
        </div>
        <div>
          <h3 class="font-semibold text-lg">Eventos corporativos em primeira mão</h3>
          <p class="text-slate-500 mt-2 leading-relaxed">
            Atualizamos as informações de proventos em menos de 15 minutos após a divulgação. Concorrentes levam dias
            para atualizar.
          </p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="mt-1 bg-cyan-300 rounded-full p-2 w-8 h-8 shrink-0">
          <ClockIcon class="w-4 h-4 text-black" />
        </div>
        <div>
          <h3 class="font-semibold text-lg">Histórico completo de proventos</h3>
          <p class="text-slate-500 mt-2 leading-relaxed">
            Tenha acesso aos proventos divulgados pelas empresas desde a abertura de capital.
          </p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="mt-1 bg-cyan-300 rounded-full p-2 w-8 h-8 shrink-0">
          <CalendarDaysIcon class="w-4 h-4 text-black" />
        </div>
        <div>
          <h3 class="font-semibold text-lg">Teste grátis</h3>
          <p class="text-slate-500 mt-2 leading-relaxed">
            Você pode fazer um teste limitado sem precisar de um cartão de crédito, ou pedir reembolso em até 7 dias
            após a primeira compra.
          </p>
        </div>
      </div>
    </div>
  </section>

  <header class="mt-8 sm:mt-0 px-4 sm:px-0 py-8 sm:py-16 lg:py-24">
    <div class="gap-8 sm:gap-y-16 flex flex-col">
      <div class="text-center flex flex-col items-center">
        <!---->
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          Um plano para tudo que precisar
        </h1>
        <p class="mt-4 text-md sm:text-lg text-gray-500 dark:text-gray-400">
          Nossos planos são projetados para atender às necessidades de desenvolvedores individuais, pequenas e grandes
          empresas. <strong>Obtenha o plano certo que combina com você.</strong>
        </p>
      </div>
      <!---->
    </div>
  </header>

  <section class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-24">
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
            <p class="text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold">R$ 14, 90</p>
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
            <p class="text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold">R$ 39, 90</p>
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
            <p class="text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold">R$ 29, 90</p>
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
import {
  ClockIcon,
  RocketLaunchIcon,
  ArchiveBoxIcon,
  CheckCircleIcon,
  ChatBubbleOvalLeftIcon,
  CalendarDaysIcon,
} from "@heroicons/vue/20/solid";

// definePageMeta({
//   layout: "landing",
// });
</script>
