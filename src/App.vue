<template>
  <div
    id="app"
    class="bg-primary_black min-h-screen relative overflow-x-hidden"
  >
    <HelloWorld />
    <router-view />
  </div>
</template>

<style src="@/assets/css/output.css"></style>

<script>
// import MainCover from '@/components/MainCover.vue';
import HelloWorld from '@/components/MainCover.vue';
export default {
  name: 'MainCover',
  components: {
    // MainCover,
    HelloWorld,
  },
};
</script>
