<template>
  <div
    class="relative select-none cursor-pointer"
    @click="$emit('click')"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <IconLock
      data-lock
      :class="stage >= 4 ? 'opacity-0' : 'opacity-100'"
      class="w-9 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
    />
    <div
      :class="stage >= 4 ? 'opacity-100' : 'opacity-20'"
      class="transition-quick"
    >
      <div
        :class="hover ? 'border-primary' : 'border-primary_white'"
        class="w-[126px] h-[126px] border-b border-x transition-quick relative z-0 flex items-center justify-start px-3"
      >
        <div class="absolute top-0 left-0 right-0 flex items-start">
          <span
            :class="hover ? 'bg-primary' : 'bg-primary_white'"
            class="block flex-1 h-[1px] transition-quick"
          ></span>
          <h3
            :class="hover ? 'text-primary' : 'text-primary_white'"
            class="font-panchang px-2 transition-quick leading-none transform -translate-y-1/2 text-2xl font-bold flex-shrink-0"
          >
            Lv.4
          </h3>
          <span
            :class="hover ? 'bg-primary' : 'bg-primary_white'"
            class="block w-10 h-[1px] transition-quick"
          ></span>
        </div>
        <div>
          <h4
            :class="hover ? 'text-primary' : 'text-primary_white'"
            class="text-xl font-bold font-panchang transition-quick mb-5"
          >
            Sprint<br />流程
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconLock from '@/components/svg/icon_lock.vue';
export default {
  name: 'CardTwo',
  components: {
    IconLock,
  },
  props: {
    stage: {
      type: Number,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>
