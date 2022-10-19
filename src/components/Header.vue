<template>
  <section
    class="relative w-full px-8 text-pWhite bg-pDark body-font"
    data-tails-scripts="//unpkg.com/alpinejs"
  >
    <div
      class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl"
    >
      <a
        href="/"
        class="flex items-start w-auto text-4xl font-extrabold select-none text-pdGreen"
        >DITZ</a
      >

      <nav
        class="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-8 text-base md:-ml-5 md:py-0 md:absolute"
      >
        <a
          href="/"
          class="relative text-pWhite font-medium leading-6 transition duration-150 ease-out hover:text-pBlue"
          x-data="{ hover: false }"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
        >
          <div class="flex items-center space-x-1">
            <img src="public/icons/icons8-home-page-96.png" class="w-9 h-9" />
            <span class="block">Home</span>
          </div>
          <span
            class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"
          >
          </span>
        </a>

        <a
          class="relative text-pWhite font-medium leading-6 transition duration-150 ease-out hover:text-pBlue"
          x-data="{ hover: false }"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
        >
          <div class="flex items-center space-x-1">
            <img src="public/icons/icons8-code-96.png" class="w-9 h-9" />
            <span class="block">Develop</span>
          </div>
          <span
            class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"
          >
          </span>
        </a>

        <a
          href="/audioconverter"
          class="relative text-pWhite font-medium leading-6 transition duration-150 ease-out hover:text-pBlue"
          x-data="{ hover: false }"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
        >
          <div class="flex items-center space-x-1">
            <img
              src="public/icons/icons8-musical-notes-96.png"
              class="w-9 h-9"
            />
            <span class="block">Music</span>
          </div>
          <span
            class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"
          >
          </span>
        </a>

        <a
          href="/youtubedownloader"
          class="relative text-pWhite font-medium leading-6 transition duration-150 ease-out hover:text-pBlue"
          x-data="{ hover: false }"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
        >
          <div class="flex items-center space-x-1">
            <img src="public/icons/icons8-web-design-96.png" class="w-9 h-9" />
            <span class="block">Designs</span>
          </div>
          <span
            class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"
          >
          </span>
        </a>

        <a
          class="relative text-pWhite font-medium leading-6 transition duration-150 ease-out hover:text-pBlue"
          x-data="{ hover: false }"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
        >
          <div class="flex items-center space-x-1">
            <img src="public/icons/icons8-contact-96.png" class="w-9 h-9" />
            <span class="block">Contact</span>
          </div>
          <span
            class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"
          >
          </span>
        </a>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
};
</script>
