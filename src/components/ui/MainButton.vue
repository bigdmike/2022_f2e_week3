<template>
  <button
    @click="$emit('click')"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    class="relative py-4 px-5"
  >
    <i
      class="absolute top-0 left-0 w-5 h-5 border-l border-t border-primary_white"
    ></i>
    <i
      class="absolute bottom-0 left-0 w-5 h-5 border-l border-b border-primary_white"
    ></i>
    <i
      class="absolute bottom-0 right-0 w-5 h-5 border-r border-b border-primary_white"
    ></i>
    <i
      class="absolute top-0 right-0 w-5 h-5 border-r border-t border-primary_white"
    ></i>
    <p
      :class="hover ? 'bg-primary text-primary_black' : 'text-primary_white'"
      class="py-4 px-36 font-panchang font-bold text-5xl transition-quick"
    >
      Challenge
    </p>
  </button>
</template>

<script>
export default {
  name: 'MainButton',
  data() {
    return {
      hover: false,
    };
  },
};
</script>
