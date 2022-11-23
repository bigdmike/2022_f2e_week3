<template>
  <div
    :class="error ? '-translate-x-full' : ''"
    class="w-full h-full fixed top-0 left-full transform right-0 bottom-0 z-30 flex items-center justify-center"
  >
    <div
      :class="error ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
      class="relative z-10 text-center transition-quick"
    >
      <p class="font-panchang text-primary_white font-bold mb-3">Oops!</p>
      <p class="font-bold text-primary_white mb-12">
        請將所有代辦事項排入優先順序列表
      </p>
      <button
        @click="$emit('set-error')"
        class="relative py-2 px-5 transition-quick bg-trasnparent text-white hover:bg-white hover:text-primary_black"
      >
        <i
          class="absolute z-0 top-0 left-0 w-2 h-2 border-l border-t border-primary_white"
        ></i>
        <i
          class="absolute z-0 bottom-0 left-0 w-2 h-2 border-l border-b border-primary_white"
        ></i>
        <i
          class="absolute z-0 bottom-0 right-0 w-2 h-2 border-r border-b border-primary_white"
        ></i>
        <i
          class="absolute z-0 top-0 right-0 w-2 h-2 border-r border-t border-primary_white"
        ></i>
        <p class="font-bold relative z-10 block trasnition-quick">再次挑戰</p>
      </button>
    </div>
    <div
      :class="error ? 'opacity-100' : 'opacity-0'"
      class="absolute top-0 left-0 right-0 transition-quick bottom-0 z-0 bg-primary_black bg-opacity-90"
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
