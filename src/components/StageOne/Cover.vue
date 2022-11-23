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
      class="w-full h-screen max-w-screen-xl mx-auto relative xl:px-0 px-10 flex items-center justify-start"
    >
      <div class="w-[636px] relative z-10 p-10">
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
        <div
          class="flex items-center absolute top-0 left-14 transform -translate-y-1/2"
        >
          <img
            src="/2022_f2e_week3/img/green_ghost.svg"
            class="w-11 h-11 block mr-10"
          />
          <h2
            class="text-primary_white font-medium font-gambetta italic text-5xl"
          >
            Hello
          </h2>
        </div>
        <p class="font-medium text-primary_white">
          我是 Pacman 資訊，開發 A 組的 PO。 PO 也就是產品負責人（Product
          Owner），產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單（Product
          Backlog）唷！
          剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。
          既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！
        </p>
      </div>

      <div
        class="absolute bottom-20 left-0 right-0 flex items-center justify-between"
      >
        <BackButton />
        <MainButton @click="$emit('change-status', 'info')" />
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
