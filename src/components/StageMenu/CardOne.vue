<template>
  <div
    class="relative select-none cursor-pointer"
    @click="$emit('click')"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <IconLock
      data-lock
      :class="stage >= 1 ? 'opacity-0' : ''"
      class="w-24 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
    />
    <img
      v-if="stage > 1"
      src="/2022_f2e_week3/img/done_tag/done_tag-3.svg"
      class="w-11/12 absolute z-10 transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1 rotate-[-20deg] origin-center"
    />
    <div
      :class="stage == 1 ? 'opacity-100' : 'opacity-20'"
      class="transition-quick"
    >
      <div
        :class="hover ? 'border-primary' : 'border-primary_white'"
        class="w-[534px] h-[534px] border-b border-x transition-quick relative z-0 flex items-center justify-start px-14"
      >
        <div class="absolute top-0 left-0 right-0 flex items-start">
          <span
            :class="hover ? 'bg-primary' : 'bg-primary_white'"
            class="block flex-1 h-[1px] transition-quick"
          ></span>
          <h3
            :class="hover ? 'text-primary' : 'text-primary_white'"
            class="font-panchang px-4 leading-none transform -translate-y-1/2 text-[80px] font-bold flex-shrink-0 transition-quick"
          >
            Lv.1
          </h3>
          <span
            :class="hover ? 'bg-primary' : 'bg-primary_white'"
            class="block w-10 h-[1px] transition-quick"
          ></span>
        </div>
        <div>
          <h4
            :class="hover ? 'text-primary' : 'text-primary_white'"
            class="text-[40px] font-bold font-panchang mb-5 transition-quick"
          >
            Product<br />Owner
          </h4>
          <p
            :class="hover ? 'text-primary' : 'text-primary_white'"
            class="text-[40px] font-panchang mb-5 transition-quick"
          >
            and
          </p>
          <h4
            :class="hover ? 'text-primary' : 'text-primary_white'"
            class="text-[40px] font-bold font-panchang transition-quick"
          >
            Product<br />Backlog
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconLock from '@/components/svg/icon_lock.vue';
export default {
  name: 'CardOne',
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
