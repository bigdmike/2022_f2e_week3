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
      class="relative flex flex-col justify-center w-full h-screen max-w-screen-xl px-10 pb-20 mx-auto xl:px-0"
    >
      <div class="relative flex flex-col justify-end flex-1 w-full mb-16">
        <div class="relative z-10 w-full p-10 mb-14">
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
              src="/2022_f2e_week3/img/green_ghost.svg"
              class="block mr-10 w-11 h-11"
            />
            <h2
              class="text-5xl italic font-medium text-primary_white font-gambetta"
            >
              Product Owner
            </h2>
          </div>
          <p class="font-medium text-primary_white">
            產品待辦清單好了之後，我們來召集 Scrum Master
            和開發團隊共同召開短衝規劃會議（Sprint
            Planning）。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單（Sprint
            Backlog），並由開發團隊在接下來的產品開發週期裡執行。
          </p>
        </div>
        <div class="relative z-10 w-full p-10 mb-14">
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
            class="absolute top-0 flex items-center transform -translate-y-1/2 right-14"
          >
            <img
              src="/2022_f2e_week3/img/blue_ghost.svg"
              class="block mr-10 w-11 h-11"
            />
            <h2
              class="text-5xl italic font-medium text-primary_white font-gambetta"
            >
              Scrum Master
            </h2>
          </div>
          <p class="font-medium text-primary_white">
            嗨嗨 你是新來的前端吧！我是這次的 Scrum Master
            ，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對
            Scrum 瞭解。這兩位是我們開發團隊的成員唷，目前我們團隊一次 Sprint
            週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數 (Sprint
            Point) 大約是 20 點左右。
          </p>
        </div>
        <div class="relative z-10 w-full p-10">
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
              class="block mr-5 w-11 h-11"
            />
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
            我來跟你介紹一下吧～ Sprint Point
            目的是為了衡量速度，是用大概花費的時間預估出的相對點數。這邊已經把剛剛討論好的點數標上去囉！由你來練習把任務排到短衝待辦清單吧！
            By the way, 我們平常管理任務是使用 Jira
            這套軟體，你有時間記得先去註冊和熟悉唷！
          </p>
        </div>
      </div>

      <div class="relative flex items-center justify-between">
        <BackButton @click="$router.push('/')" />
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
