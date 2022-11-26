<template>
  <main
    :class="
      page_status == 'cover'
        ? 'scale-100 opacity-100 z-[12]'
        : 'scale-[3] opacity-0 z-[0]'
    "
    class="fixed transform transition-quick origin-center top-0 left-0 right-0 bottom-0 z-[11] w-full h-screen flex items-center justify-center"
  >
    <div
      class="relative flex flex-col items-center justify-start w-full h-screen max-w-screen-xl px-10 pb-20 mx-auto xl:px-0"
    >
      <div class="relative flex flex-col justify-center flex-1 w-full">
        <div class="w-[636px] relative z-10 p-10">
          <i
            class="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary_white"
          ></i>
          <i
            class="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-primary_white"
          ></i>
          <i
            class="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary_white"
          ></i>
          <i
            class="absolute top-0 right-0 w-5 h-5 border-t border-r border-primary_white"
          ></i>
          <div
            class="absolute top-0 flex items-center transform -translate-y-1/2 left-14"
          >
            <img
              src="/2022_f2e_week3/img/purple_ghost.svg"
              class="block mr-10 w-11 h-11"
            />
            <h2
              class="text-5xl italic font-medium text-primary_white font-gambetta"
            >
              Development Team
            </h2>
          </div>
          <p class="font-medium text-primary_white">
            哇你很幸運喔，今天剛好是開發 B 組的 Retro，你也來見識一下，看看
            Retro 都該做些什麼吧，
            我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方，並記錄再
            Confluence 中。Retro
            重點在於『正面表述』，你也思考看看，哪一些是適合 Retro 的回饋吧！
          </p>
        </div>
      </div>

      <div class="relative flex items-center justify-between w-full">
        <BackButton @click="$router.push('/')" />
        <MainButton @click="$emit('change-status', 'stage')" />
      </div>
    </div>
  </main>
</template>

<script>
import BackButton from '@/components/ui/BackButton.vue';
import MainButton from '@/components/ui/MainButton.vue';
export default {
  name: 'StageOneCover',
  props: {
    page_status: {
      require: true,
      type: String,
    },
  },
  components: {
    BackButton,
    MainButton,
  },
};
</script>
