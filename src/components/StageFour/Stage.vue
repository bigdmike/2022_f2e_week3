<template>
  <div
    :class="
      page_status == 'stage'
        ? '-translate-x-full opacity-100 z-[12]'
        : page_status == 'info'
        ? '-translate-x-full opacity-100 z-[10]'
        : '-translate-x-0 opacity-0 z-[0]'
    "
    class="absolute top-0 bottom-0 flex items-center justify-center w-full h-screen left-full transition-quick bg-primary_white"
  >
    <div
      class="relative z-10 flex flex-wrap items-stretch justify-center w-full max-w-screen-xl mx-auto"
    >
      <div class="flex flex-col w-full">
        <div class="relative w-full p-10 mb-20 border-b border-x">
          <div class="absolute top-0 left-0 right-0 flex items-start">
            <span
              class="block w-10 h-[1px] bg-primary_white transition-quick"
            ></span>
            <div
              class="flex bg-[#AEAEAE] text-primary_black py-2 items-end px-4 transform -translate-y-1/2"
            >
              <h3 class="text-2xl font-black leading-none">做得好的地方</h3>
            </div>
            <span
              class="block flex-1 h-[1px] bg-primary_white transition-quick"
            ></span>
          </div>
          <div class="flex flex-col items-start">
            <label
              :class="question_1 == 1 ? 'bg-white' : 'bg-transparent'"
              class="inline-flex items-center px-5 py-2 mb-5"
            >
              <input
                type="radio"
                value="1"
                name="question_1"
                v-model="question_1"
                class="hidden"
              />
              <span
                :class="
                  question_1 == 1 ? 'border-primary' : 'border-primary_black'
                "
                class="flex items-center justify-center w-6 h-6 mr-3 border rounded-full"
              >
                <i
                  :class="question_1 == 1 ? 'bg-primary' : 'bg-transparent'"
                  class="block w-3 h-3 rounded-full"
                ></i>
              </span>
              <p class="font-bold">這次我幫了很多人救火耶!</p>
            </label>
            <label
              :class="question_1 == 2 ? 'bg-white' : 'bg-transparent'"
              class="inline-flex items-center px-5 py-2 mb-5"
            >
              <input
                type="radio"
                value="2"
                name="question_1"
                v-model="question_1"
                class="hidden"
              />
              <span
                :class="
                  question_1 == 2 ? 'border-primary' : 'border-primary_black'
                "
                class="flex items-center justify-center w-6 h-6 mr-3 border rounded-full"
              >
                <i
                  :class="question_1 == 2 ? 'bg-primary' : 'bg-transparent'"
                  class="block w-3 h-3 rounded-full"
                ></i>
              </span>
              <p class="font-bold">
                大家在開發會上互相 Cover，讓任務都有準時在時間內完成。
              </p>
            </label>
          </div>
        </div>
        <div class="relative w-full p-10 mb-20 border-b border-x">
          <div class="absolute top-0 left-0 right-0 flex items-start">
            <span
              class="block w-10 h-[1px] bg-primary_white transition-quick"
            ></span>
            <div
              class="flex bg-[#AEAEAE] text-primary_black py-2 items-end px-4 transform -translate-y-1/2"
            >
              <h3 class="text-2xl font-black leading-none">
                有哪些可以做得更好
              </h3>
            </div>
            <span
              class="block flex-1 h-[1px] bg-primary_white transition-quick"
            ></span>
          </div>
          <div class="flex flex-col items-start">
            <label
              :class="question_2 == 1 ? 'bg-white' : 'bg-transparent'"
              class="inline-flex items-center px-5 py-2 mb-5"
            >
              <input
                type="radio"
                value="1"
                name="question_2"
                v-model="question_2"
                class="hidden"
              />
              <span
                :class="
                  question_2 == 1 ? 'border-primary' : 'border-primary_black'
                "
                class="flex items-center justify-center w-6 h-6 mr-3 border rounded-full"
              >
                <i
                  :class="question_2 == 1 ? 'bg-primary' : 'bg-transparent'"
                  class="block w-3 h-3 rounded-full"
                ></i>
              </span>
              <p class="font-bold">
                可以紀錄這次的開發時間，讓預估團隊點數可以更精準。
              </p>
            </label>
            <label
              :class="question_2 == 2 ? 'bg-white' : 'bg-transparent'"
              class="inline-flex items-center px-5 py-2 mb-5"
            >
              <input
                type="radio"
                value="2"
                name="question_2"
                v-model="question_2"
                class="hidden"
              />
              <span
                :class="
                  question_2 == 2 ? 'border-primary' : 'border-primary_black'
                "
                class="flex items-center justify-center w-6 h-6 mr-3 border rounded-full"
              >
                <i
                  :class="question_2 == 2 ? 'bg-primary' : 'bg-transparent'"
                  class="block w-3 h-3 rounded-full"
                ></i>
              </span>
              <p class="font-bold">
                大家在開發會上互相 開發時間預估不準確，請後端下次改進，以免
                Delay 到我的時間。
              </p>
            </label>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between w-full mt-10">
        <div class="flex items-center">
          <p class="mr-4 font-bold">使用工具</p>
          <img src="/2022_f2e_week3/img/logo_confluence.jpg" />
        </div>

        <button
          @click="Validate"
          @mouseenter="done_btn_hover = true"
          @mouseleave="done_btn_hover = false"
          class="relative px-4 py-2 transition-quick bg-trasnparent text-primary_black hover:text-primary_black"
        >
          <i
            :class="
              done_btn_hover ? 'border-secondary_green' : 'border-primary_black'
            "
            class="absolute top-0 left-0 z-0 w-2 h-2 border-t border-l transition-quick"
          ></i>
          <i
            :class="
              done_btn_hover ? 'border-secondary_green' : 'border-primary_black'
            "
            class="absolute bottom-0 left-0 z-0 w-2 h-2 border-b border-l transition-quick"
          ></i>
          <i
            :class="
              done_btn_hover ? 'border-secondary_green' : 'border-primary_black'
            "
            class="absolute bottom-0 right-0 z-0 w-2 h-2 border-b border-r transition-quick"
          ></i>
          <i
            :class="
              done_btn_hover ? 'border-secondary_green' : 'border-primary_black'
            "
            class="absolute top-0 right-0 z-0 w-2 h-2 border-t border-r transition-quick"
          ></i>
          <p
            :class="done_btn_hover ? 'bg-secondary_green' : ''"
            class="relative z-10 block px-16 py-2 text-2xl font-bold font-panchang transition-quick"
          >
            Done
          </p>
        </button>
      </div>
    </div>

    <div
      class="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-dot grayscale"
    ></div>
    <div
      class="absolute top-0 left-0 right-0 bottom-0 z-[1] bg-noise mix-blend-overlay opacity-40"
    ></div>
    <div
      class="absolute top-0 left-0 right-0 bottom-0 z-0 bg-primary_black opacity-[.25]"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'StageOne',
  props: {
    page_status: {
      require: true,
      type: String,
    },
  },
  data() {
    return {
      done_btn_hover: false,
      question_1: '',
      question_2: '',
    };
  },
  methods: {
    Validate() {
      if (this.question_1 != 2 || this.question_2 != 1) {
        this.$emit('set-error');
      } else {
        this.$store.commit('SetMainMenu', true);
        setTimeout(() => {
          this.$store.commit('SetStage', 5);
        }, 2500);
      }
    },
  },
};
</script>

<style>
.card-ghost {
  transition: transform 0.18s ease;
  transform: rotate(5deg);
}
.card-ghost-drop {
  transition: transform 0.18s ease-in-out;
  transform: rotate(0deg);
}
.groups {
  display: flex;
  justify-content: stretch;
  margin-top: 50px;
  margin-right: 50px;
}
.group {
  margin-left: 50px;
  flex: 1;
}
</style>
