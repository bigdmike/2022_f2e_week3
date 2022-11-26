<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center"
  >
    <div class="w-[864px] relative z-0 flex">
      <div class="relative w-full px-48 py-32 text-center border-b border-x">
        <div class="absolute top-0 left-0 right-0 flex items-start">
          <span
            class="block w-5 h-[1px] bg-primary_white transition-quick"
          ></span>
          <div class="flex items-end px-4 transform -translate-y-1/2">
            <img src="/2022_f2e_week3/img/green_ghost.svg" class="mr-5 w-11" />
            <img
              src="/2022_f2e_week3/img/blue_ghost.svg"
              class="mr-5 transform -scale-x-100"
            />
            <h3
              class="mr-5 text-5xl font-semibold leading-none font-gambetta text-primary_white"
            >
              Well down!
            </h3>
            <img
              src="/2022_f2e_week3/img/purple_ghost.svg"
              class="transform w-11 -scale-x-100"
            />
          </div>
          <span
            class="block flex-1 h-[1px] bg-primary_white transition-quick"
          ></span>
        </div>
        <div class="text-white">
          <p class="mb-10 text-2xl font-bold text-primary_white">恭喜通過</p>
          <img
            src="/2022_f2e_week3/img/finish_text.svg"
            class="w-[463px] mb-10"
          />
          <p class="mb-10 text-2xl font-bold text-primary_white">
            正式加入資訊開發A組
          </p>
          <button
            @click="Restart"
            class="relative px-5 py-2 text-white transition-quick bg-trasnparent hover:bg-white hover:text-primary"
          >
            <i
              class="absolute top-0 left-0 z-0 w-2 h-2 border-t border-l border-primary_white"
            ></i>
            <i
              class="absolute bottom-0 left-0 z-0 w-2 h-2 border-b border-l border-primary_white"
            ></i>
            <i
              class="absolute bottom-0 right-0 z-0 w-2 h-2 border-b border-r border-primary_white"
            ></i>
            <i
              class="absolute top-0 right-0 z-0 w-2 h-2 border-t border-r border-primary_white"
            ></i>
            <p class="relative z-10 block font-bold trasnition-quick">回首頁</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StageFinish',
  methods: {
    Restart() {
      this.$store.commit('SetStage', 0);
      this.$router.push('/');
    },
  },
  mounted() {
    this.$store.commit('SetHeaderColor', 'white');
  },
};
</script>
