<template>
  <div
    ref="MainContent"
    id="MainCover"
    class="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center w-full h-screen transform transition-quick"
  >
    <div class="relative z-10 w-full max-w-screen-xl px-10 mx-auto xl:px-0">
      <div class="absolute top-0 right-96 transform -translate-y-[80%]">
        <TitleStar1 data-star class="text-primary_white" />
      </div>
      <div class="absolute top-28 left-[40%]">
        <TitleStar2 data-star class="text-primary_white" />
      </div>

      <div class="flex items-end mb-10">
        <h2
          data-main-title
          class="text-[160px] font-bold font-panchang text-primary leading-none mr-10"
        >
          Scrum
        </h2>
        <p
          class="text-[80px] font-medium italic font-gambetta text-primary_white"
        >
          Welcome,
        </p>
      </div>
      <div class="flex items-center justify-between mb-20">
        <div class="mr-24">
          <p class="font-bold text-primary_white">
            <b class="mr-5 text-5xl italic font-medium font-gambetta">Hi,</b>
            歡迎加入 Pacman 資訊，在正式加入專案開發之前，需要請你先了解 Scrum
            的流程與精神！ 請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧！
          </p>
        </div>
        <img
          data-main-title
          src="/2022_f2e_week3/img/cover_title.svg"
          class="w-[636px] block"
        />
      </div>
      <div class="flex justify-end">
        <MainButton @click="NextStage" />
      </div>
    </div>
    <!-- <div class="absolute top-0 left-0 right-0 bottom-0 z-[1] bg-dot"></div>
    <div
      class="absolute top-0 bottom-0 left-0 right-0 z-0 bg-noise mix-blend-overlay"
    ></div> -->
  </div>
</template>

<script>
import MainButton from '@/components/ui/MainButton.vue';
import TitleStar1 from '@/components/svg/star/title_star_1.vue';
import TitleStar2 from '@/components/svg/star/title_star_2.vue';
import { mouse_parallax } from '@/gsap/mouse_parallax';
export default {
  name: 'StageZero',
  components: {
    MainButton,
    TitleStar1,
    TitleStar2,
  },
  data() {
    return {
      title_mouse_parallax: null,
      star_mouse_parallax: null,
    };
  },
  methods: {
    MouseMove(event) {
      this.title_mouse_parallax.move(event.pageX, event.pageY);
      this.star_mouse_parallax.move(event.pageX, event.pageY);
    },
    NextStage() {
      this.$store.commit('SetMainMenu', true);
      if (this.stage == 0) {
        setTimeout(() => {
          this.$store.commit('SetStage', 1);
        }, 2500);
      }
    },
  },
  watch: {
    status(new_val, old_val) {
      if (old_val == 0 && new_val != 0) {
        window.addEventListener('mousemove', this.MouseMove);
      }
    },
  },
  computed: {
    stage() {
      return this.$store.state.stage;
    },
  },
  mounted() {
    this.star_mouse_parallax = new mouse_parallax(
      this.$refs.MainContent.querySelectorAll('[data-star]'),
      30
    );
    this.title_mouse_parallax = new mouse_parallax(
      this.$refs.MainContent.querySelectorAll('[data-main-title]'),
      -100
    );
    this.$store.commit('SetHeaderColor', 'white');
    window.addEventListener('mousemove', this.MouseMove);
  },
};
</script>
