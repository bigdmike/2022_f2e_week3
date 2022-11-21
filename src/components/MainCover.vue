<template>
  <div
    ref="MainContent"
    id="MainCover"
    class="w-full h-screen fixed top-0 left-0 right-0 bottom-0 z-30 bg-primary_black flex items-center justify-center"
  >
    <div class="relative z-10 w-full max-w-screen-xl xl:px-0 px-10 mx-auto">
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
          <p class="text-primary_white font-bold">
            <b class="font-gambetta font-medium italic text-5xl mr-5">Hi,</b>
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
        <MainButton />
      </div>
    </div>
    <div class="absolute top-0 left-0 right-0 bottom-0 z-[1] bg-dot"></div>
    <div
      class="absolute top-0 left-0 right-0 bottom-0 z-0 bg-noise mix-blend-overlay"
    ></div>
  </div>
</template>

<script>
import MainButton from '@/components/ui/MainButton.vue';
import TitleStar1 from '@/components/svg/star/title_star_1.vue';
import TitleStar2 from '@/components/svg/star/title_star_2.vue';
import { mouse_parallax } from '@/gsap/mouse_parallax';
export default {
  name: 'HelloWorld',
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
  mounted() {
    this.star_mouse_parallax = new mouse_parallax(
      this.$refs.MainContent.querySelectorAll('[data-star]'),
      30
    );
    this.title_mouse_parallax = new mouse_parallax(
      this.$refs.MainContent.querySelectorAll('[data-main-title]'),
      -100
    );
    window.addEventListener('mousemove', (event) => {
      this.title_mouse_parallax.move(event.pageX, event.pageY);
      this.star_mouse_parallax.move(event.pageX, event.pageY);
    });
  },
};
</script>
