<template>
  <div
    :class="
      page_status == 'info'
        ? 'z-[12] -translate-x-full'
        : 'z-[12] -translate-x-0'
    "
    class="fixed top-0 left-full w-full transition-quick transform right-0 bottom-0 bg-primary_black bg-opacity-90 flex items-center justify-center"
  >
    <div class="w-full max-w-screen-md mx-auto relative">
      <img src="/2022_f2e_week3/img/stage_one_info.png" class="w-full mb-10" />
      <div class="flex items-center justify-end">
        <button
          @click="$emit('change-status', 'stage')"
          class="relative py-2 px-5 transition-quick bg-trasnparent text-white hover:bg-white hover:text-primary"
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
          <p class="font-bold relative z-10 block trasnition-quick">
            我知道了!
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCover',
  props: {
    page_status: {
      require: true,
      type: String,
    },
  },
};
</script>
