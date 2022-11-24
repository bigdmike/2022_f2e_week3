<template>
  <div
    id="app"
    class="bg-primary_black min-h-screen relative overflow-x-hidden"
  >
    <StageMenu />
    <div ref="RouterView" class="fixed top-0 left-0 w-full h-full z-10">
      <router-view />
    </div>
    <div class="absolute top-0 left-0 right-0 bottom-0 z-[1] bg-dot"></div>
    <div
      class="absolute top-0 left-0 right-0 bottom-0 z-0 bg-noise mix-blend-overlay"
    ></div>
  </div>
</template>

<style src="@/assets/css/output.css"></style>

<script>
import StageMenu from '@/components/StageMenu.vue';
import { stage_animation } from '@/gsap/stage';
export default {
  name: 'App',
  components: {
    StageMenu,
  },
  data() {
    return {
      status: 'stage',
      stage_animation: null,
    };
  },
  computed: {
    menu_status() {
      return this.$store.state.main_menu;
    },
  },
  watch: {
    menu_status() {
      if (this.menu_status) {
        this.stage_animation.leave();
      } else {
        this.stage_animation.enter();
      }
    },
  },
  mounted() {
    console.log(this.$refs.RouterView);
    this.stage_animation = new stage_animation(this.$refs.RouterView);
  },
};
</script>
