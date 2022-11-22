<template>
  <div
    class="relative select-none cursor-pointer"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <IconLock
      :class="status ? 'opacity-0' : 'opacity-100'"
      class="w-16 text-primary absolute top-1/2 transition-quick left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
    />
    <div
      :class="status ? 'opacity-100' : 'opacity-20'"
      class="transition-quick"
    >
      <div
        :class="hover ? 'border-primary' : 'border-primary_white'"
        class="w-[330px] h-[330px] border-b border-x transition-quick relative z-0 flex items-center justify-start px-14 transition-quick"
      >
        <div class="absolute top-0 left-0 right-0 flex items-start">
          <span
            :class="hover ? 'bg-primary' : 'bg-primary_white'"
            class="block flex-1 h-[1px] transition-quick"
          ></span>
          <h3
            :class="hover ? 'text-primary' : 'text-primary_white'"
            class="font-panchang px-4 leading-none transition-quick transform -translate-y-1/2 text-[45px] font-bold flex-shrink-0"
          >
            Lv.2
          </h3>
          <span
            :class="hover ? 'bg-primary' : 'bg-primary_white'"
            class="block w-10 h-[1px] transition-quick bg-primary_white"
          ></span>
        </div>
        <div>
          <h4
            :class="hover ? 'text-primary' : 'text-primary_white'"
            class="text-[40px] font-bold font-panchang transition-quick mb-5"
          >
            Sprint<br />Backlog
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
    status: {
      type: Boolean,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>
