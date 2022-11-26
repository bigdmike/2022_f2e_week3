<template>
  <header class="fixed top-0 left-0 right-0 z-30">
    <div
      class="flex items-center justify-between w-full max-w-screen-xl mx-auto py-7"
    >
      <router-link to="/">
        <img src="/2022_f2e_week3/img/header_text.svg" class="w-64" />
      </router-link>

      <div
        class="flex items-center"
        v-if="
          $route.name != null &&
          $route.name.split('_')[1] != 0 &&
          $route.name.split('_')[1] != 'finish'
        "
      >
        <div :class="`text-${header_color}`" class="flex items-center mr-5">
          <h4 class="mr-4 font-bold font-panchang">
            Lv.{{ $route.name.split('_')[1] }}
          </h4>
          <h4 class="font-bold font-panchang">
            {{ title_list[$route.name.split('_')[1]] }}
          </h4>
        </div>
        <button
          @click="OpenMenu"
          @mouseenter="btn_hover = true"
          @mouseleave="btn_hover = false"
        >
          <IconMenuBtn :color="header_color" :hover="btn_hover" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import IconMenuBtn from '@/components/svg/icon_menu_btn.vue';
export default {
  name: 'MainHeader',
  components: {
    IconMenuBtn,
  },
  data() {
    return {
      btn_hover: false,
      title_list: {
        1: 'Product Owner and Product Backlog',
        2: 'Sprint Backlog',
        3: 'Sprint 流程',
        4: 'Retro 問與答',
      },
    };
  },
  methods: {
    OpenMenu() {
      this.$store.commit('SetMainMenu', !this.$store.state.main_menu);
    },
  },
  computed: {
    header_color() {
      return this.$store.state.header_color;
    },
  },
};
</script>
