<template>
  <div
    id="app"
    class="bg-primary_black min-h-screen relative overflow-x-hidden"
  >
    <MainCover @change-status="status = $event" :status="status" />
    <StageMenu @change-status="status = $event" :status="status" />
    <router-view class="relative z-10" />
    <div class="absolute top-0 left-0 right-0 bottom-0 z-[1] bg-dot"></div>
    <div
      class="absolute top-0 left-0 right-0 bottom-0 z-0 bg-noise mix-blend-overlay"
    ></div>
  </div>
</template>

<style src="@/assets/css/output.css"></style>

<script>
// import MainCover from '@/components/MainCover.vue';
import MainCover from '@/components/MainCover.vue';
import StageMenu from '@/components/StageMenu.vue';
export default {
  name: 'App',
  components: {
    StageMenu,
    MainCover,
  },
  data() {
    return {
      status: 'stage',
    };
  },
};
</script>
