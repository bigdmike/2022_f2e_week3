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
      class="w-full h-screen max-w-screen-xl mx-auto relative xl:px-0 px-10 flex justify-center flex-col"
    >
      <div class="w-full relative z-10 p-10 mb-14">
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
            src="/2022_f2e_week3/img/purple_ghost.svg"
            class="w-11 h-11 block mr-5"
          />
          <img
            src="/2022_f2e_week3/img/purple_ghost.svg"
            class="w-11 h-11 block mr-10"
          />
          <h2
            class="text-primary_white font-medium font-gambetta italic text-5xl"
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
      <div class="-mx-5 relative z-10 flex items-stretch">
        <div class="w-1/3 relative z-0 flex px-5">
          <div class="relative w-full border-b border-x p-10">
            <div class="absolute top-0 left-0 right-0 flex items-start">
              <span
                class="block w-5 h-[1px] bg-primary_white transition-quick"
              ></span>
              <div class="px-4 flex items-end transform -translate-y-1/2">
                <h3
                  class="text-2xl font-bold mr-2 text-primary_white leading-none"
                >
                  每日站立會議
                </h3>
                <p
                  class="font-gambetta font-semibold italic text-primary_white leading-none text-lg"
                >
                  Daily Scrum
                </p>
              </div>
              <span
                class="block flex-1 h-[1px] bg-primary_white transition-quick"
              ></span>
            </div>
            <div class="text-white">
              <p class="mb-8">每天都要進行的會議，以 15 分鐘為限制</p>
              <ol class="mb-8 list-disc pl-5">
                <li>昨天為團隊的短衝目標 ( Sprint Goal ) 做了那些進度</li>
                <li>今天我會如何準備來幫助團隊達到短衝目標</li>
                <li>過程中有遇到什麼問題、難題</li>
              </ol>
              <p>透過團隊分享，追蹤大家的工作狀況。</p>
            </div>
          </div>
        </div>
        <div class="w-1/3 relative z-0 flex px-5">
          <div class="relative w-full border-b border-x p-10">
            <div class="absolute top-0 left-0 right-0 flex items-start">
              <span
                class="block w-5 h-[1px] bg-primary_white transition-quick"
              ></span>
              <div class="px-4 flex items-end transform -translate-y-1/2">
                <h3
                  class="text-2xl font-bold mr-2 text-primary_white leading-none"
                >
                  短衝檢視會議
                </h3>
                <p
                  class="font-gambetta font-semibold italic text-primary_white leading-none text-lg"
                >
                  Sprint Review
                </p>
              </div>
              <span
                class="block flex-1 h-[1px] bg-primary_white transition-quick"
              ></span>
            </div>
            <div class="text-white">
              <p>用來檢視該次短衝增量的成果，以蒐集相關的回饋數據或意見。</p>
            </div>
          </div>
        </div>
        <div class="w-1/3 relative z-0 flex px-5">
          <div class="relative w-full border-b border-x p-10">
            <div class="absolute top-0 left-0 right-0 flex items-start">
              <span
                class="block w-5 h-[1px] bg-primary_white transition-quick"
              ></span>
              <div class="px-4 flex items-end transform -translate-y-1/2">
                <h3
                  class="text-2xl font-bold mr-2 text-primary_white leading-none"
                >
                  短衝自省會議
                </h3>
                <p
                  class="font-gambetta font-semibold italic text-primary_white leading-none text-lg"
                >
                  Sprint Retrospective
                </p>
              </div>
              <span
                class="block flex-1 h-[1px] bg-primary_white transition-quick"
              ></span>
            </div>
            <div class="text-white">
              <p class="mb-8">在自省會議裡，共同回顧短衝歷程發生的事情</p>
              <ol class="mb-8 list-disc pl-5">
                <li>好的地方</li>
                <li>可改進的地方</li>
                <li>如何維持我們已有的成功經驗</li>
              </ol>
              <p class="mb-2">
                優化工作流程、讓團隊有變得更好的機會。<br />推薦工具:
              </p>
              <img src="/2022_f2e_week3/img/logo_confluence.jpg" />
            </div>
          </div>
        </div>
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
