<template>
  <div class="relative">
    <svg
      :class="hover ? 'opacity-100' : 'opacity-0'"
      class="relative transition-all duration-300"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 1H1V9" :stroke="color" stroke-width="0.5" />
      <path d="M9 47H1V39" :stroke="color" stroke-width="0.5" />
      <path d="M47 9L47 1L39 1" :stroke="color" stroke-width="0.5" />
      <path d="M47 39L47 47L39 47" :stroke="color" stroke-width="0.5" />
      <rect x="4" y="4" width="40" height="40" :fill="color" />
      <rect
        x="9"
        y="9"
        width="11.8421"
        height="11.8421"
        :fill="color == 'white' ? '#181818' : '#ffffff'"
      />
      <rect
        x="27.1582"
        y="9"
        width="11.8421"
        height="11.8421"
        :fill="color == 'white' ? '#181818' : '#ffffff'"
      />
      <rect
        x="9"
        y="27.158"
        width="11.8421"
        height="11.8421"
        :fill="color == 'white' ? '#181818' : '#ffffff'"
      />
      <rect
        x="27.1582"
        y="27.158"
        width="11.8421"
        height="11.8421"
        :fill="color == 'white' ? '#181818' : '#ffffff'"
      />
    </svg>
    <svg
      :class="hover ? 'opacity-0' : 'opacity-100'"
      class="absolute top-0 left-0 transition-all duration-300"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 1H1V9" :stroke="color" stroke-width="0.5" />
      <path d="M9 47H1V39" :stroke="color" stroke-width="0.5" />
      <path d="M47 9L47 1L39 1" :stroke="color" stroke-width="0.5" />
      <path d="M47 39L47 47L39 47" :stroke="color" stroke-width="0.5" />
      <rect x="9" y="9" width="11.8421" height="11.8421" :fill="color" />
      <rect x="27.1582" y="9" width="11.8421" height="11.8421" :fill="color" />
      <rect x="9" y="27.158" width="11.8421" height="11.8421" :fill="color" />
      <rect
        x="27.1582"
        y="27.158"
        width="11.8421"
        height="11.8421"
        :fill="color"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'IconMenuBtn',
  props: {
    hover: {
      type: Boolean,
    },
    color: {
      type: String,
    },
  },
};
</script>
