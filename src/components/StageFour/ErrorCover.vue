<template>
  <div
    :class="error ? '-translate-x-full' : ''"
    class="fixed top-0 bottom-0 right-0 z-30 flex items-center justify-center w-full h-full transform left-full"
  >
    <div
      :class="error ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
      class="relative z-10 text-center transition-quick"
    >
      <p class="mb-3 font-bold font-panchang text-primary_white">Oops!</p>
      <p class="mb-12 font-bold text-primary_white">
        要記得 Retro 重點在於『正面表述』喔！
      </p>
      <button
        @click="$emit('set-error')"
        class="relative px-5 py-2 text-white transition-quick bg-trasnparent hover:bg-white hover:text-primary_black"
      >
        <i
          class="absolute top-0 left-0 z-0 w-2 h-2 border-t border-l border-primary_white"
        ></i>
        <i
          class="absolute bottom-0 left-0 z-0 w-2 h-2 border-b border-l border-primary_white"
        ></i>
        <i
          class="absolute bottom-0 right-0 z-0 w-2 h-2 border-b border-r border-primary_white"
        ></i>
        <i
          class="absolute top-0 right-0 z-0 w-2 h-2 border-t border-r border-primary_white"
        ></i>
        <p class="relative z-10 block font-bold trasnition-quick">再次挑戰</p>
      </button>
    </div>
    <div
      :class="error ? 'opacity-100' : 'opacity-0'"
      class="absolute top-0 bottom-0 left-0 right-0 z-0 transition-quick bg-primary_black bg-opacity-90"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ErrorCover',
  props: {
    error: {
      require: true,
      type: Boolean,
    },
  },
};
</script>
