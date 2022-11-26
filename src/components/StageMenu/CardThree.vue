<template>
  <div
    class="relative cursor-pointer select-none"
    @click="$emit('click')"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <IconLock
      data-lock
      :class="stage >= 3 ? 'opacity-0' : ''"
      class="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 w-9 text-primary top-1/2 left-1/2"
    />
    <img
      v-if="stage > 3"
      src="/2022_f2e_week3/img/done_tag/done_tag-1.svg"
      class="w-11/12 absolute z-10 transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1 rotate-[-20deg] origin-center"
    />
    <div
      :class="stage == 3 ? 'opacity-100' : 'opacity-20'"
      class="transition-quick"
    >
      <CardStar
        :class="hover ? 'scale-110' : 'scale-100'"
        class="absolute text-white transform -translate-y-1/2 transition-quick top-1/2 right-5"
      />
      <div
        :class="hover ? 'border-primary' : 'border-primary_white'"
        class="w-[204px] h-[204px] border-b border-x transition-quick relative z-0 flex items-center justify-start px-6 transition-quick"
      >
        <div class="absolute top-0 left-0 right-0 flex items-start">
          <span
            :class="hover ? 'bg-primary' : 'bg-primary_white'"
            class="block flex-1 h-[1px] transition-quick"
          ></span>
          <h3
            :class="hover ? 'text-primary' : 'text-primary_white'"
            class="flex-shrink-0 px-4 text-2xl font-bold leading-none transform -translate-y-1/2 font-panchang transition-quick"
          >
            Lv.3
          </h3>
          <span
            :class="hover ? 'bg-primary' : 'bg-primary_white'"
            class="block w-10 h-[1px] transition-quick"
          ></span>
        </div>
        <div>
          <h4
            :class="hover ? 'text-primary' : 'text-primary_white'"
            class="mb-5 text-2xl font-bold font-panchang transition-quick"
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
import CardStar from '@/components/svg/star/card_star_3.vue';
export default {
  name: 'CardThree',
  components: {
    IconLock,
    CardStar,
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
